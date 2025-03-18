import { Champion, ChampionDetail } from "@/types/Champion";
import { type Item } from "@/types/Item";

//버전 정보 가져오기
export const getLatestVersion = async () => {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/api/versions.json"
  );
  const data: string = await res.json();
  return data[0];
};

//챔피언 정보 가져오기
export async function getChampionList(): Promise<Champion[]> {
  try {
    const version = await getLatestVersion();
    const res = await fetch(
      `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion.json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    const champions: Champion[] = Object.values(data.data);

    return champions;
  } catch (error) {
    console.error("fetching champion error:", error);

    return [];
  }
}

//챔피언 상세 정보 가져오기
export async function getChampionDetail(
  id: string
): Promise<{ version: string; data: ChampionDetail }> {
  const version = await getLatestVersion();
  const res = await fetch(
    `https://ddragon.leagueoflegends.com/cdn/${version}/data/ko_KR/champion/${id}.json`,
    {
      cache: "no-store",
    }
  );

  const { data } = await res.json();

  const championDetail: ChampionDetail = data[id];

  return { version, data: championDetail };
}

//아이템 정보 가져오기
export async function getItemList(): Promise<Item[]> {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/ko_KR/item.json",
      {
        cache: "force-cache",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch");
    }

    const data = await res.json();
    const items: Item[] = Object.values(data.data);

    if (!Array.isArray(items)) {
      throw new Error("여기서 에러발생");
    }

    return items;
  } catch (error) {
    console.error("fetching error:", error);

    return [];
  }
}
