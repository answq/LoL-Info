import { Champion } from "@/types/Champion";
import React from "react";
import ChampionCard from "./ChampionCard";

type ChampionListProps = { champions: Champion[] };

const ChampionList = ({ champions }: ChampionListProps) => {
  return (
    <ul className="grid grid-cols-1 p-10 gap-4 md:grid-cols-4 lg:grid-cols-6">
      {champions?.map((champion) => (
        <ChampionCard key={champion.key} champion={champion} />
      ))}
    </ul>
  );
};

export default ChampionList;
