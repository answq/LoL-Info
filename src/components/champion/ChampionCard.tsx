import { Champion } from "@/types/Champion";
import React from "react";
import Image from "next/image";
import Link from "next/link";

type ChampionCardProps = { champion: Champion };

const ChampionCard = ({ champion }: ChampionCardProps) => {
  return (
    <li className="container">
      <Link href={`/champions/${champion.id}`}>
        <div className="flex flex-col border rounded p-4 hover:shadow-lg">
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
      </Link>
    </li>
  );
};

export default ChampionCard;
