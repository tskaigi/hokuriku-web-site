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
      overview: [
        `トグルホールディングスは、「すべてのまちと、まちをつくる人たちのために」というミッションを基に、「不動産」「建築」「金融」の3つの業界をひとつの産業インフラへと統合することを目指しています。日本の不動産業界はIT資本投資で米国の1/10に留まり、テクノロジーの活用が遅れています。 このギャップは「新しい仕組みで業界変革できる余地が多い」ということでもあり、エンジニアにとって大きなチャンスがあります。弊社ではプロダクトのコア技術の実装にはフロントエンドからバックエンド、さらにはインフラストラクチャの定義までTypeScriptを用いています。 TypeScriptの厳密な型チェック機能をフル活用することで複雑なドメインの実装を柔軟、かつ安全に行うことを実現しています。`,
      ],
      links: [
        {
          title: "ホームページ",
          href: "https://toggle.co.jp",
        },
        {
          title: "Engineering Handbook",
          href: "https://engineer.toggle.co.jp",
        },
        {
          title: "note",
          href: "https://note.com/toggle",
        },
      ],
    },
  ],
  gold: [
    {
      id: "G01",
      sponsorId: "kokorozashi",
      name: "株式会社ココロザシ",
      logoLink: "https://www.wantedly.com/companies/company_299137",
      logoImage: "/sponsors/G01_kokorozashi.png",
      links: [
        {
          title: "ホームメージ",
          href: "https://kokorozashi-japan.co.jp/",
        },
        {
          title: "公式採用サイト",
          href: "https://www.wantedly.com/companies/company_299137",
        },
      ],
    },
    {
      id: "G02",
      sponsorId: "layerx",
      name: "株式会社LayerX",
      logoLink: "https://layerx.co.jp",
      logoImage: "/sponsors/G02_layerx.png",
      overview: [
        `LayerXは「すべての経済活動を、デジタル化する。」をミッションに掲げるSaaS+FinTechスタートアップです。 法人支出管理サービス「バクラク」を中心に、デジタルネイティブなアセットマネジメント会社を目指す合弁会社「三井物産デジタル・アセットマネジメント」、大規模言語モデル（LLM）関連技術を活用し企業や行政における業務効率化・データ活用を支援する「AI・LLM事業」などを開発・運営しています。LayerXは、今後のプロダクト戦略で重要なテーマとして「AI-UX（AIを前提とした利用体験）」を掲げています。そして、最高のAI-UXを作り上げるにはAI以外のソフトウェア体験の磨き込み、改善基盤の構築も重要です。昨年策定したバクラクフロントエンドVisionでは「お客様に最高の体験を届けたい」「Webフロントエンドを楽しくしたい」という渾身の想いを込めました。ぜひ一度ご覧ください`,
      ],
      links: [
        {
          title: "LayerX 採用情報",
          href: "https://jobs.layerx.co.jp/",
        },
        {
          title: "LayerX Engineer Blog",
          href: "https://tech.layerx.co.jp/",
        },
        {
          title: "LayerX note",
          href: "https://note.com/fukkyy",
        },
      ],
    },
    {
      id: "G03",
      sponsorId: "agile-studio",
      name: "Agile Studio by 永和システムマネジメント",
      logoLink: "https://www.agile-studio.jp",
      logoImage: "/sponsors/G03_agile_studio.png",
      overview: [
        `「アジャイルで日本の組織を元気にしたい」アジャイルなソフトウェア開発の実践を通じて、組織にいるひとりひとりが主役となって活躍できる舞台をつくり、組織やチームを元気にしていくのが Agile Studio のミッションです。`,
      ],
      links: [
        {
          title: "Agile Studioサイト",
          href: "https://www.agile-studio.jp/",
        },
        {
          title: "採用情報",
          href: "https://agile-studio.d3moc03xuu2zxx.amplifyapp.com/",
        },
      ],
    },
    {
      id: "G04",
      sponsorId: "kaminashi",
      name: "株式会社カミナシ",
      logoLink: "https://corp.kaminashi.jp",
      logoImage: "/sponsors/G04_kaminashi.png",
      overview: [
        `カミナシは「ノンデスクワーカーの才能を解き放つ」をミッションに、PCやデスクのない現場で働くノンデスクワーカー3,900万人の働き方をITの力でスマートにすることを目指しています。`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://corp.kaminashi.jp/",
        },
        {
          title: "エンジニア求人一覧",
          href: "https://kaminashi-developer.hatenablog.jp/",
        },
      ],
    },
    {
      id: "G05",
      sponsorId: "team-lab",
      name: "チームラボ",
      logoLink:
        "https://www.team-lab.com/engineering/?utm_source=TSKaigi&utm_medium=web&utm_campaign=hokuriku",
      logoImage: "/sponsors/G05_teamlab.png",
      overview: [
        `チームラボは日本で随一のデジタルプラットフォーム構築・運用の高いノウハウをもった専門家集団です。
    チームラボが構築運用しているサービスを合わせると、アプリでは累計1億6000万DL以上、アクティブユーザーは合計3000万人以上にのぼり、日本社会の様々な場面で生活者の体験を向上し続けています。`,
      ],
      links: [
        {
          title:
            "チームラボはWebバックエンド/フロントエンドやスマホアプリから、リアルタイムCG、機械学習、ハードウェアまで幅広いエンジニアを採用中です！",
          href: "https://www.team-lab.com/engineering/",
        },
        {
          title: "【公式note】メンバーインタビューやプロジェクトについて紹介中！",
          href: "https://www.team-lab.com/works/?category=all",
        },
      ],
    },
    {
      id: "G06",
      sponsorId: "mosh",
      name: "MOSH株式会社",
      logoLink: "https://mosh.jp",
      logoImage: "/sponsors/G06_mosh.png",
      overview: [
        `MOSH株式会社は「情熱がめぐる経済をつくる」をミッションに、クリエイター向け事業拡大プラットフォーム「MOSH」を開発・運営しています。TypeScriptを軸とした技術基盤で、サイト作成、予約、決済、顧客管理をワンストップ提供し、個人の情熱を事業へと成長させます。`,
      ],
      links: [
        {
          title: "サービスサイト",
          href: "https://mosh.jp/",
        },
        {
          title: "会社説明資料(Company Deck)",
          href: "https://careers.mosh.jp/",
        },
      ],
    },
    {
      id: "G07",
      sponsorId: "tacoms",
      name: "株式会社tacoms",
      logoLink: "https://www.tacoms-inc.com",
      logoImage: "/sponsors/G07_tacoms.png",
      overview: [
        `tacomsは「発明で、半径5mの人を幸せに」をミッションに、飲食店向けSaaSを展開しています。デリバリー一元管理「Camel」を中心に全国47都道府県、約10,000店舗でご利用いただいており、現在は飲食業界向けAll-in-One AI Platformの構築を目指し、AIネイティブな組織化と産業変革に取り組んでいます。`,
      ],
      links: [
        {
          title: "会社HP",
          href: "https://www.tacoms-inc.com/",
        },
        {
          title: "tacoms TeckBlog",
          href: "https://tacoms-inc.hatenablog.com/",
        },
      ],
    },
    {
      id: "G08",
      sponsorId: "nstock",
      name: "Nstock株式会社",
      logoLink: "https://nstock.co.jp",
      logoImage: "/sponsors/G08_nstock.png",
      overview: [
        `Nstockは、「スタートアップエコシステムをブーストし、日本からGoogle級の会社を生み出す」ことをミッションに掲げ、スタートアップが大きく育つための様々なプロダクトを提供しています。`,
      ],
      links: [
        {
          title: "Nstock 採用サイト",
          href: "https://recruit.nstock.co.jp/work/software-engineer",
        },
        {
          title: "Nstock Tech Blog",
          href: "https://open.spotify.com/show/0m4TGTqbD6AuHFOrIbpkxx?si=fcb0d9a1f44049a8&nd=1&dlsi=97fdf39efbbe48a2",
        },
      ],
    },
    {
      id: "G09",
      sponsorId: "jig",
      name: "株式会社jig.jp",
      logoLink: "https://jig.jp",
      logoImage: "/sponsors/G09_jig.png",
      overview: [
        `jig.jpでは、「みんなのライブ配信」ふわっちを中心に、B2C/C2Cのソフトウェア・アプリのサービス開発を行っています。
サービスのフロントエンド、バックエンド、IoT、ちょっとしたツールなど、様々な場所で TypeScript を活用しています。`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://www.jig.jp/",
        },
        {
          title: "jig.jp Engineers' Blog",
          href: "https://www.jig.jp/recruit",
        },
      ],
    },
    {
      id: "G10",
      sponsorId: "ascend",
      name: "アセンド株式会社",
      logoLink: "https://www.ascendlogi.co.jp",
      logoImage: "/sponsors/G10_ascend.png",
      overview: [
        `アセンドは日本で最もデジタル化の遅れた物流産業に対して、SaaSを基軸として
産業変革に挑むスタートアップです。
Full-Stack TypeScriptで、全員がプロダクトエンジニアとして、6deploys/dayと
生産性高くフルスタックに開発を進めています。是非会場でお話しましょう！`,
      ],
      links: [
        {
          title: "アセンド株式会社",
          href: "https://www.ascendlogi.co.jp/",
        },
        {
          title: "プロダクトエンジニアに関して",
          href: "https://product.career.ascendlogi.co.jp/",
        },
      ],
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
      overview: [
        `令和トラベルは、「あたらしい旅行を、デザインする。」 をミッションに、"旅行"におけるあたらしい体験や、あたらしい社会価値の提供を目指すデジタルトラベルエージェンシーです。2022年4月より、旅行アプリ『NEWT（ニュート）』をローンチ。2024年9月にはシリーズAとして約48億円の資金調達を実施。`,
      ],
      links: [
        {
          title: "株式会社令和トラベル",
          href: "https://www.reiwatravel.co.jp/",
        },
        {
          title: "採用情報はこちら",
          href: "https://newt.net/",
        },
      ],
    },
  ],
  silver: [
    {
      id: "S01",
      sponsorId: "luup",
      name: "株式会社Luup",
      logoLink: "https://luup.sc",
      logoImage: "/sponsors/S01_luup.png",
      links: [
        {
          title: "公式サイト",
          href: "https://luup.sc/",
        },
      ],
    },
    {
      id: "S02",
      sponsorId: "kickflow",
      name: "株式会社kickflow",
      logoLink: "https://kickflow.com",
      logoImage: "/sponsors/S02_kickflow.png",
      links: [
        {
          title: "公式サイト",
          href: "https://kickflow.com/",
        },
      ],
    },
    {
      id: "S03",
      sponsorId: "herp",
      name: "株式会社HERP",
      logoLink: "https://herp.co.jp",
      logoImage: "/sponsors/S03_herp.png",
      links: [
        {
          title: "公式サイト",
          href: "https://herp.co.jp/",
        },
      ],
    },
    {
      id: "S04",
      sponsorId: "freee",
      name: "フリー株式会社",
      logoLink: "https://corp.freee.co.jp",
      logoImage: "/sponsors/S04_freee.png",
      overview: [
        `freeeは「スモールビジネスを、世界の主役に。」というミッションのもと、誰もが自由に経営できる統合型経営プラットフォームを実現する企業です。freee会計、freee人事労務、freee販売など、あらゆる業務課題を解決するプロダクトを展開し、個人事業主から上場企業まで幅広く利用されています。freeeではほとんどのプロダクトのフロントエンドでTypeScriptとReactを採用しています。TypeScriptの型の恩恵によって大規模なコードベースでも安心して開発をすることを可能にしています。`,
      ],
      links: [
        {
          title: "フリー株式会社",
          href: "https://corp.freee.co.jp/",
        },
        {
          title: "freee Developers Hub",
          href: "https://developers.freee.co.jp/",
        },
        {
          title: "エンジニア採用ページ",
          href: "https://jobs.freee.co.jp/engineers/",
        },
      ],
    },
    {
      id: "S05",
      sponsorId: "seed",
      name: "株式会社SeeD",
      logoLink: "https://seed-it.jp",
      logoImage: "/sponsors/S05_seed.png",
      links: [
        {
          title: "公式サイト",
          href: "https://seed-it.jp/",
        },
      ],
    },
    {
      id: "S06",
      sponsorId: "forcia",
      name: "フォルシア株式会社",
      logoLink: "https://www.forcia.com/",
      logoImage: "/sponsors/S06_forcia.png",
      overview: [
        `フォルシアは、社員の半数近くをフルスタックエンジニアが占める技術者集団です。
    膨大・複雑なデータを高速かつ正確に処理できる技術を強みとし、独自の技術基盤を用いたプロダクト開発や、旅行・観光業界のオンライン販売を支援するSaaS型サービスの提供などを行っています。
    フロントエンド・バックエンドやインフラ(IaC)などでTypeScriptを使用しており、過去にはTypeScript好きな方々との交流イベントの企画・運営も行ってきました。
    フォルシアの技術や社風についてはぜひ下記リンクもご覧ください！`,
      ],
      links: [
        {
          title: "FORCIA Tech Blog",
          href: "https://zenn.dev/p/forcia_tech",
        },
        {
          title: "採用サイト",
          href: "https://www.forcia.com/jobs/",
        },
        {
          title: "公式 X（旧 Twitter）",
          href: "https://x.com/forcia_pr",
        },
      ],
    },
    {
      id: "S07",
      sponsorId: "ficilcom",
      name: "フィシルコム",
      logoLink: "https://www.ficilcom.jp",
      logoImage: "/sponsors/S07_ficilcom.png",
    },
    // {
    //   id: "S08",
    //   sponsorId: "",
    //   name: "",
    //   logoLink: "",
    //   logoImage: "",
    // },
    {
      id: "S09",
      sponsorId: "miidas",
      name: "ミイダス株式会社",
      logoLink: "https://careers.miidas.co.jp/tech/",
      logoImage: "/sponsors/S09_miidas.png",
    },
  ],
};
