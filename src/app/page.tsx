import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h2
        className="text-center text-orange-500 font-bold text-4xl p-5
      "
      >
        리그 오브 레전드 정보 앱
      </h2>
      <p className="text-center mt-4 p-5">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다
      </p>
      <div className="mt-[40px] flex flex-col gap-4 p-2 justify-center items-center md:flex-row">
        <Link
          href={"/champions"}
          className="flex flex-col space-y-3 justify-center items-center text-orange-400 font-bold"
        >
          <Image
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
            }
            width={400}
            height={300}
            alt="챔피언 목록 보기"
          />
          <p>챔피언 목록 보기</p>
        </Link>
        <Link
          href={"/rotation"}
          className="flex flex-col space-y-3 justify-center items-center text-orange-400 font-bold"
        >
          <Image
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
            }
            width={400}
            height={300}
            alt="금주 로테이션 확인"
          />
          <p>금주 로테이션 확인</p>
        </Link>
        <Link
          href={"/items"}
          className="flex flex-col space-y-3 justify-center items-center text-orange-400 font-bold"
        >
          <Image
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
            }
            width={400}
            height={300}
            alt="아이템 목록 보기"
          />
          <p>아이템 목록 보기</p>
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
