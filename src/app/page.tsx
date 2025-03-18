import React from "react";
import Link from "next/link";
import Image from "next/image";

const HomePage = () => {
  return (
    <main>
      <h2
        className="text-center text-purple-700  font-bold text-4xl
      "
      >
        리그 오브 레전드 정보 앱
      </h2>
      <p className="text-center">
        Riot Games API를 활용하여 챔피언과 아이템 정보를 제공합니다
      </p>
      <div className="flex flex-row gap-4 p-2">
        <div className="flex flex-col space-y-3 justify-center items-center">
          <Image
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
            }
            width={400}
            height={300}
            alt="챔피언 목록 보기"
          />
          <p>챔피언 목록 보기</p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center">
          <Image
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
            }
            width={400}
            height={300}
            alt="금주 로테이션 확인"
          />
          <p>금주 로테이션 확인</p>
        </div>
        <div className="flex flex-col space-y-3 justify-center items-center">
          <Image
            src={
              "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fiddlesticks_8.jpg"
            }
            width={400}
            height={300}
            alt="아이템 목록 보기"
          />
          <p>아이템 목록 보기</p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
