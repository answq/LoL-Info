"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import ChampionList from "@/components/champion/ChampionList";

const Rotationpage = () => {
  const {
    data: freeChampionList,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["ChampionRotation"],
    queryFn: async () => {
      const res = await fetch("/api/rotation");
      if (!res.ok) {
        throw new Error("로테이션 정보를 불러오지 못했습니다.");
      }
      const data = await res.json();
      return data || [];
    },
  });
  if (isPending) return <div>로딩 중...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  console.log(freeChampionList);
  return (
    <div className="container mt-10 mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-red-500">
        챔피언 로테이션(이번 주 무료로 플레이 할 수 있어요!)
      </h2>
      <ChampionList champions={freeChampionList} />
    </div>
  );
};

export default Rotationpage;
