import { Champion } from "@/types/Champion";
import React from "react";
import Image from "next/image";

type ChampionCardProps = { champion: Champion };

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <div className="border rounded p-4 hover:shadow-lg">
      <Image
        src={`https://ddragon.leagueoflegends.com/cdn/${champion.version}/img/champion/${champion.image.full}`}
        width={80}
        height={80}
        alt={champion.name}
        className="mx-auto"
      />
      <p className="text-red-600">{champion.name}</p>
      <p className="text-gray-400">{champion.title}</p>
    </div>
  );
};

export default ChampionCard;
