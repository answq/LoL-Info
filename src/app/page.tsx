import React from "react";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <section className="flex justify-between bg-slate-200 ">
        <Link href={"/"}>홈</Link>
        <Link href={"/ChampionPage"}>챔피언 목록</Link>
        <Link href={"/ItemPage"}>아이템 목록</Link>
        <Link href={"/RotationPage"}>챔피언 로테이션</Link>
      </section>
      <h2
        className="text-center text-purple-700  font-bold text-4xl
      "
      >
        리그 오브 레전드 정보 앱
      </h2>
    </div>
  );
};

export default HomePage;
