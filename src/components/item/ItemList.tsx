import React from "react";
import { type Item } from "@/types/Item";
import ItemCard from "../ItemCard";

type ItemListProps = { items: Item[] };

const ItemList = ({ items = [] }: ItemListProps) => {
  return (
    <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {items.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
