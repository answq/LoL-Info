import { type ChampionDetail } from "@/types/Champion";
import React from "react";
import Image from "next/image";

type ChampionDetailProps = { version: string; championDetail: ChampionDetail };

const ChampionDetail = ({ version, championDetail }: ChampionDetailProps) => {
  return (
    <main className="container mx-auto mt-10">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="text-4xl font-bold text-red-500 mb-4">
            {championDetail.name}
          </span>
          <span className="text-2xl text-gray-600 mb-4">
            {championDetail.title}
          </span>
          <Image
            src={`https://ddragon.leagueoflegends.com/cdn/${version}/img/champion/${championDetail.image.full}`}
            width={200}
            height={200}
            alt={championDetail.name}
            className="rounded-sm border border-gray-700 "
          />
          <span className="text-red-400 mt-4">{championDetail.lore}</span>

          <li className="mt-6">
            <h3 className=" text-red-500  text-xl font-semibold mt-4">스탯</h3>
            <ul className="list-disc list-inside">
              <span className="font-semibold">공격력</span>
              <span>{championDetail.info.attack}</span>
              <span className="font-semibold">방어력</span>
              <span>{championDetail.info.defense}</span>
              <span className="font-semibold">마법력</span>
              <span>{championDetail.info.magic}</span>
              <span className="font-semibold">난이도</span>
              <span>{championDetail.info.difficulty}</span>
            </ul>
          </li>
        </div>
      </div>
    </main>
  );
};

export default ChampionDetail;
