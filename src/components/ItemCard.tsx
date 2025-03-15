import { Item } from "@/types/Item";
import React from "react";
import Image from "next/image";

type ItemCardProps = { item: Item };

const ItemCard = ({ item }: ItemCardProps) => {
  return (
    <li>
      <div>
        <Image
          src={`https://ddragon.leagueoflegends.com/cdn/15.5.1/img/item/${item.image.full}`}
          width={80}
          height={80}
          alt={item.name}
          className="mx-auto"
        />
      </div>
      <h3>{item.name}</h3>
      <p>가격: {item.gold.base}</p>
      <p>팔때: {item.gold.sell}</p>
      <p>{item.plaintext}</p>
    </li>
  );
};

export default ItemCard;
