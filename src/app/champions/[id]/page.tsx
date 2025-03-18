//SSR

import ChampionDetail from "@/components/champion/ChampionDetail";
import { getChampionDetail } from "@/utils/serverApi";

import { Metadata } from "next";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = params.id;
  const { data: championDetail } = await getChampionDetail(id);
  return {
    title: `${championDetail.name} - My Riot App`,
  };
};

const ChampionDetailpage = async ({ params }: Props) => {
  const id = params.id;
  const { version, data: championDetail } = await getChampionDetail(id);

  return <ChampionDetail version={version} championDetail={championDetail} />;
};

export default ChampionDetailpage;
