//ISR

import React from "react";
import { type Champion } from "../../types/Champion";
import { getChampionList } from "@/utils/serverApi";
import ChampionList from "@/components/champion/ChampionList";

const ChampionPage = async () => {
  const champions: Champion[] = await getChampionList();
  return (
    <main className="container mt-10 mx-auto">
      <h2 className="text-2xl font-bold mb-4">챔피언 목록</h2>
      <div>
        <ChampionList champions={champions} />
      </div>
    </main>
  );
};
export default ChampionPage;
