//SSG

import ItemList from "@/components/item/ItemList";
import { type Item } from "@/types/Item";
import { getItemList } from "@/utils/serverApi";
import React from "react";

const ItemPage = async () => {
  const items: Item[] = await getItemList();
  return (
    <main className="container mt-10 mx-auto">
      <h2 className="text-3xl font-bold mb-4">아이템 목록</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        <ItemList items={items} />
      </div>
    </main>
  );
};
export default ItemPage;
