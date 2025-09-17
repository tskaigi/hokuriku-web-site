export type ExternalLinkProps = { title: string; href: string };
export type SponsorClass = "platinum" | "gold" | "silver";

export type Sponsor = {
  id: string;
  name: string;
  logoImage: string;
  logoLink: string;
};

type SponsorList = {
  [key in SponsorClass]: Sponsor[];
};

const LOGO_IMAGE_DIR = "/sponsors";

export const sponsorList: SponsorList = {
  platinum: [
    {
      id: "p01",
      name: "トグルホールディングス株式会社",
      logoImage: `${LOGO_IMAGE_DIR}/p01_toggle.png`,
      logoLink: "https://toggle.co.jp",
    },
  ],
  gold: [
    {
      id: "g01",
      name: "株式会社ココロザシ",
      logoImage: `${LOGO_IMAGE_DIR}/g01_kokorozashi.png`,
      logoLink: "https://www.wantedly.com/companies/company_299137",
    },
    {
      id: "g02",
      name: "株式会社LayerX",
      logoImage: `${LOGO_IMAGE_DIR}/g02_layerx.png`,
      logoLink: "https://layerx.co.jp",
    },
    {
      id: "g03",
      name: "Agile Studio by 永和システムマネジメント",
      logoImage: `${LOGO_IMAGE_DIR}/g03_agile-studio.png`,
      logoLink: "https://www.agile-studio.jp",
    },
    {
      id: "g04",
      name: "株式会社カミナシ",
      logoImage: `${LOGO_IMAGE_DIR}/g04_kaminashi.png`,
      logoLink: "https://corp.kaminashi.jp",
    },
    {
      id: "g05",
      name: "チームラボ",
      logoImage: `${LOGO_IMAGE_DIR}/g05_team-lab.png`,
      logoLink:
        "https://www.team-lab.com/engineering/?utm_source=TSKaigi&utm_medium=web&utm_campaign=hokuriku",
    },
    {
      id: "g06",
      name: "MOSH株式会社",
      logoImage: `${LOGO_IMAGE_DIR}/g06_mosh.png`,
      logoLink: "https://mosh.jp",
    },
    {
      id: "g07",
      name: "株式会社tacoms",
      logoImage: `${LOGO_IMAGE_DIR}/g07_tacoms.png`,
      logoLink: "https://www.tacoms-inc.com",
    },
    {
      id: "g08",
      name: "Nstock株式会社",
      logoImage: `${LOGO_IMAGE_DIR}/g08_nstock.png`,
      logoLink: "https://nstock.co.jp",
    },
    {
      id: "g09",
      name: "株式会社jig.jp",
      logoImage: `${LOGO_IMAGE_DIR}/g09_jig.png`,
      logoLink: "https://jig.jp",
    },
    {
      id: "g10",
      name: "アセンド株式会社",
      logoImage: `${LOGO_IMAGE_DIR}/g10_ascend.png`,
      logoLink: "https://www.ascendlogi.co.jp",
    },
    {
      id: "g11",
      name: "株式会社ALGO ARTIS",
      logoImage: `${LOGO_IMAGE_DIR}/g11_algo-artis.png`,
      logoLink: "https://www.algo-artis.com",
    },
    {
      id: "g12",
      name: "ファインディ株式会社",
      logoImage: `${LOGO_IMAGE_DIR}/g12_findy.png`,
      logoLink: "https://conference.findy-code.io",
    },
    {
      id: "g13",
      name: "株式会社令和トラベル",
      logoImage: `${LOGO_IMAGE_DIR}/g13_reiwatravel.png`,
      logoLink: "https://www.reiwatravel.co.jp",
    },
  ],
  silver: [
    {
      id: "s01",
      name: "株式会社Luup",
      logoImage: `${LOGO_IMAGE_DIR}/s01_luup.png`,
      logoLink: "https://luup.sc",
    },
    {
      id: "s02",
      name: "株式会社kickflow",
      logoImage: `${LOGO_IMAGE_DIR}/s02_kickflow.png`,
      logoLink: "https://kickflow.com",
    },
    {
      id: "s03",
      name: "株式会社HERP",
      logoImage: `${LOGO_IMAGE_DIR}/s03_herp.png`,
      logoLink: "https://herp.co.jp",
    },
    {
      id: "s04",
      name: "フリー株式会社",
      logoImage: `${LOGO_IMAGE_DIR}/s04_freee.png`,
      logoLink: "https://corp.freee.co.jp",
    },
    {
      id: "s05",
      name: "株式会社SeeD",
      logoImage: `${LOGO_IMAGE_DIR}/s05_seed.png`,
      logoLink: "https://seed-it.jp",
    },
    // {
    //   id: "s06",
    //   name: "フォルシア株式会社",
    //   logoImage: `${LOGO_IMAGE_DIR}/.png`,
    //   logoLink: "",
    // },
  ],
};
