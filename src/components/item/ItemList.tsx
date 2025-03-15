import React from "react";
import { type Item } from "@/types/Item";
import ItemCard from "../ItemCard";

type ItemListProps = { items: Item[] };

const ItemList = ({ items = [] }: ItemListProps) => {
    console.log("items", items)
  return (
    <ul>
      {items.map((item) => (
        <ItemCard key={item.name} item={item} />
      ))}
    </ul>
  );
};

export default ItemList;
