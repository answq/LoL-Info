import { type Item } from "@/types/Item";



//아이템 정보 가져오기
export async function getItemList(): Promise<Item[]> {
  try {
    const res = await fetch(
      "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/item.json",
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
