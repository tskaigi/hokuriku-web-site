export type ExternalLinkProps = {
  title: string;
  href: string;
};

export type SponsorClass = "platinum" | "gold" | "silver";

export type Sponsor = {
  id: `${"P" | "G" | "S"}${number}`;
  sponsorId: string;
  name: string;
  logoLink: string;
  logoImage?: string;
  overview?: string[];
  links?: ExternalLinkProps[];
};

type SponsorList = {
  [key in SponsorClass]: Sponsor[];
};

export const sponsorList: SponsorList = {
  platinum: [
    {
      id: "P01",
      sponsorId: "toggle",
      name: "トグルホールディングス株式会社",
      logoLink: "https://toggle.co.jp",
      logoImage: "/sponsors/P01_toggle.png",
    },
  ],
  gold: [
    {
      id: "G01",
      sponsorId: "kokorozashi",
      name: "株式会社ココロザシ",
      logoLink: "https://www.wantedly.com/companies/company_299137",
      logoImage: "/sponsors/G01_kokorozashi.png",
    },
    {
      id: "G02",
      sponsorId: "layerx",
      name: "株式会社LayerX",
      logoLink: "https://layerx.co.jp",
      logoImage: "/sponsors/G02_layerx.png",
    },
    {
      id: "G03",
      sponsorId: "agile-studio",
      name: "Agile Studio by 永和システムマネジメント",
      logoLink: "https://www.agile-studio.jp",
      logoImage: "/sponsors/G03_agile_studio.png",
    },
    {
      id: "G04",
      sponsorId: "kaminashi",
      name: "株式会社カミナシ",
      logoLink: "https://corp.kaminashi.jp",
      logoImage: "/sponsors/G04_kaminashi.png",
    },
    {
      id: "G05",
      sponsorId: "team-lab",
      name: "チームラボ",
      logoLink:
        "https://www.team-lab.com/engineering/?utm_source=TSKaigi&utm_medium=web&utm_campaign=hokuriku",
      logoImage: "/sponsors/G05_teamlab.png",
    },
    {
      id: "G06",
      sponsorId: "mosh",
      name: "MOSH株式会社",
      logoLink: "https://mosh.jp",
      logoImage: "/sponsors/G06_mosh.png",
    },
    {
      id: "G07",
      sponsorId: "tacoms",
      name: "株式会社tacoms",
      logoLink: "https://www.tacoms-inc.com",
      logoImage: "/sponsors/G07_tacoms.png",
    },
    {
      id: "G08",
      sponsorId: "nstock",
      name: "Nstock株式会社",
      logoLink: "https://nstock.co.jp",
      logoImage: "/sponsors/G08_nstock.png",
    },
    {
      id: "G09",
      sponsorId: "jig",
      name: "株式会社jig.jp",
      logoLink: "https://jig.jp",
      logoImage: "/sponsors/G09_jig.png",
    },
    {
      id: "G10",
      sponsorId: "ascend",
      name: "アセンド株式会社",
      logoLink: "https://www.ascendlogi.co.jp",
      logoImage: "/sponsors/G10_ascend.png",
    },
    {
      id: "G11",
      sponsorId: "algo-artis",
      name: "株式会社ALGO ARTIS",
      logoLink: "https://www.algo-artis.com",
      logoImage: "/sponsors/G11_algoartis.png",
    },
    {
      id: "G12",
      sponsorId: "findy",
      name: "ファインディ株式会社",
      logoLink: "https://conference.findy-code.io",
      logoImage: "/sponsors/G12_findy.png",
    },
    {
      id: "G13",
      sponsorId: "reiwatravel",
      name: "株式会社令和トラベル",
      logoLink: "https://www.reiwatravel.co.jp",
      logoImage: "/sponsors/G13_reiwatravel.png",
    },
  ],
  silver: [
    {
      id: "S01",
      sponsorId: "luup",
      name: "株式会社Luup",
      logoLink: "https://luup.sc",
      logoImage: "/sponsors/S01_luup.png",
    },
    {
      id: "S02",
      sponsorId: "kickflow",
      name: "株式会社kickflow",
      logoLink: "https://kickflow.com",
      logoImage: "/sponsors/S02_kickflow.png",
    },
    {
      id: "S03",
      sponsorId: "herp",
      name: "株式会社HERP",
      logoLink: "https://herp.co.jp",
      logoImage: "/sponsors/S03_herp.png",
    },
    {
      id: "S04",
      sponsorId: "freee",
      name: "フリー株式会社",
      logoLink: "https://corp.freee.co.jp",
      logoImage: "/sponsors/S04_freee.png",
    },
    {
      id: "S05",
      sponsorId: "seed",
      name: "株式会社SeeD",
      logoLink: "https://seed-it.jp",
      logoImage: "/sponsors/S05_seed.png",
    },
    {
      id: "S06",
      sponsorId: "forcia",
      name: "フォルシア株式会社",
      logoLink: "https://www.forcia.com/",
      logoImage: "/sponsors/S06_forcia.png",
    },
  ],
};
