import React from "react";
import Link from "next/link";

const Navibar = () => {
  return (
    <header className="w-full py-4 fixed-top bg-slate-200 text-gray-500 font-bold">
      <nav className="container mx-auto flex justify-around ">
        <Link href={"/"}>홈</Link>
        <Link href={"/champions"}>챔피언 목록</Link>
        <Link href={"/items"}>아이템 목록</Link>
        <Link href={"/rotation"}>챔피언 로테이션</Link>
      </nav>
    </header>
  );
};

export default Navibar;
