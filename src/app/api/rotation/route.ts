import { type Champion } from "@/types/Champion";
import { type ChampionRotation } from "@/types/ChampionRotation";
import { getChampionList } from "@/utils/serverApi";

export const apiKey = process.env.RIOT_API_KEY;
export const apiUrl =
  "https://br1.api.riotgames.com/lol/platform/v3/champion-rotations";

//챔피언 로테이션 정보 가져오기
export async function GET() {
  try {
    if (!apiKey) {
      throw new Error("api key undefind");
    }

    const res = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "X-Riot-Token": apiKey,
      },
    });
    if (!res.ok) {
      throw new Error("server error");
    }
    const data: ChampionRotation = await res.json();

    const freeChampionIds = data.freeChampionIds;

    //챔피언 정보 가져오기
    const champions = await getChampionList();

    //무료 챔피언 id와 가져온 챔피언 정보 비교하기
    const freeChampionList = freeChampionIds.map((id) => {
      const champion = Object.values(champions).find(
        (champ: Champion) => champ.key === id.toString()
      );
      if (champion) {
        return champion;
      }
      return null;
    });
    return Response.json(freeChampionList);
  } catch (error) {
    console.log(error);
    return Response.json({ message: error });
  }
}
