import { Champion } from "@/types/Champion";
import React from "react";
import ChampionCard from "./ChampionCard";

type ChampionListProps = { champions: Champion[] };

const ChampionList = ({ champions }: ChampionListProps) => {
  console.log("here####", champions);
  return (
    <ul className="grid grid-cols-4 p-10 gap-4">
      {champions?.map((champion) => (
        <ChampionCard key={champion.key} champion={champion} />
      ))}
    </ul>
  );
};

export default ChampionList;
