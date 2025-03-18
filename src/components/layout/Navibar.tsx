import React from "react";
import Link from "next/link";

const Navibar = () => {
  return (
    <div className="flex justify-between bg-slate-200 p-3 ">
      <Link href={"/"}>홈</Link>
      <Link href={"/champions"}>챔피언 목록</Link>
      <Link href={"/items"}>아이템 목록</Link>
      <Link href={"/rotation"}>챔피언 로테이션</Link>
    </div>
  );
};

export default Navibar;
