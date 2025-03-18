export interface Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
}

export interface ChampionDetail extends Champion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  image: {
    full: string;
    sprite: string;
    group: string;
    x: number;
    y: number;
    w: number;
    h: number;
  };
  blurb: string;
  info: {
    attack: number;
    defense: number;
    magic: number;
    difficulty: number;
  };

  skins: {
    id: string;
    num: number;
    name: string;
    chromas: boolean;
  }[];
  lore: string;
  allytips: string[];
  enemytips: string[];
  spells: {
    id: string;
    name: string;
    description: string;
    tooltip: string;
    leveltip: {
      label: string[];
      effect: string[];
    };

    passive: {
      name: string;
      description: string;
      image: {
        full: string;
        sprite: string;
        group: string;
        x: number;
        y: number;
        w: number;
        h: number;
      };
    };
  };
}
