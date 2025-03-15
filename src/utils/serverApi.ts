import { type Item } from "@/types/Item";

export async function getItemList(): Promise<Item[]> {
  const res = await fetch(
    "https://ddragon.leagueoflegends.com/cdn/15.5.1/data/en_US/item.json",
    {
      cache: "force-cache",
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch items");
  }

  const data = await res.json();
  console.log("Fetched data:", data);

  const items = data.data;

  return items;
}
