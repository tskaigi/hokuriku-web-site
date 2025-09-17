export type SponsorRole = "platinum" | "gold" | "silver";
export type ExternalLinkProps = { title: string; href: string };

export type Sponsor = {
  id: string;
  name: string;
  logoImage: string;
  logoImageForSponsorsPage?: string;
  logoLink: string;
  addPadding: boolean; // スポンサー一覧ページでロゴ画像に余白を追加するかどうか
  isTenantChecked: boolean; // 企業による掲載確認済みかどうかのフラグ、falseの場合はwipページのみに表示
  overview?: string[];
  links?: ExternalLinkProps[];
  roles: SponsorRole[];
  detailPageId: string;
};

type SponsorList = {
  [key in SponsorRole]: Sponsor[];
};

export const sponsorList: SponsorList = {
  platinum: [
    {
      id: "P01",
      name: "トグルホールディングス株式会社",
      logoImage: "/sponsors/toggle.png",
      logoLink: "https://toggle.co.jp/",
      addPadding: true,
      isTenantChecked: true,
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
      roles: ["platinum"],
      detailPageId: "toggle",
    },
  ],
  gold: [
    {
      id: "G01",
      name: "株式会社ココロザシ",
      logoImage: "/sponsors/kokorozashi.png",
      logoLink: "https://www.wantedly.com/companies/company_299137",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
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
      roles: ["gold"],
      detailPageId: "kokorozashi",
    },
    {
      id: "G02",
      name: "株式会社LayerX",
      logoImage: "/sponsors/layerx.png",
      logoLink: "https://layerx.co.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "layerx",
    },
    {
      id: "G03",
      name: "Agile Studio by 永和システムマネジメント",
      logoImage: "/sponsors/agilestudio.png",
      logoLink: "https://www.agile-studio.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "agile-studio",
    },
    {
      id: "G04",
      name: "株式会社カミナシ",
      logoImage: "/sponsors/kaminashi.png",
      logoLink: "https://corp.kaminashi.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "kaminashi",
    },
    {
      id: "G05",
      name: "チームラボ",
      logoImage: "/sponsors/teamlab.png",
      logoLink:
        "https://www.team-lab.com/engineering/?utm_source=TSKaigi&utm_medium=web&utm_campaign=hokuriku",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "team-lab",
    },
    {
      id: "G06",
      name: "MOSH株式会社",
      logoImage: "/sponsors/mosh.png",
      logoLink: "https://mosh.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `
        MOSH株式会社は「情熱がめぐる経済をつくる」をミッションに、クリエイター向け事業拡大プラットフォーム「MOSH」を開発・運営しています。TypeScriptを軸とした技術基盤で、サイト作成、予約、決済、顧客管理をワンストップ提供し、個人の情熱を事業へと成長させます。`,
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
      roles: ["gold"],
      detailPageId: "mosh",
    },
    {
      id: "G07",
      name: "株式会社tacoms",
      logoImage: "/sponsors/tacoms.png",
      logoLink: "https://www.tacoms-inc.com/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "tacoms",
    },
    {
      id: "G08",
      name: "Nstock株式会社",
      logoImage: "/sponsors/nstock.png",
      logoLink: "https://www.tacoms-inc.com/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "nstock",
    },
    {
      id: "G09",
      name: "株式会社jig.jp",
      logoImage: "/sponsors/jigjp.png",
      logoLink: "https://www.jig.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "jig-jp",
    },
    {
      id: "G10",
      name: "アセンド株式会社",
      logoImage: "/sponsors/ascend.png",
      logoLink: "https://www.ascendlogi.co.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "ascend",
    },
    {
      id: "G11",
      name: "株式会社ALGO ARTIS",
      logoImage: "/sponsors/algo-artis.png",
      logoLink: "https://www.algo-artis.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [``],
      links: [],
      roles: ["gold"],
      detailPageId: "algo-artis",
    },
    {
      id: "G12",
      name: "ファインディ株式会社",
      logoImage: "/sponsors/findy-conference.png",
      logoLink: "https://conference.findy-code.io/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      links: [],
      roles: ["gold"],
      detailPageId: "findy-code",
    },
    {
      id: "G13",
      name: "株式会社令和トラベル",
      logoImage: "/sponsors/reiwatravel.png",
      logoLink: "https://www.reiwatravel.co.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["gold"],
      detailPageId: "reiwatravel",
    },
  ],
  silver: [
    {
      id: "S01",
      name: "株式会社Luup",
      logoImage: "/sponsors/luup.png",
      logoLink: "https://theoriatec.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      links: [
        {
          title: "公式サイト",
          href: "https://luup.sc/",
        },
      ],
      roles: ["silver"],
      detailPageId: "luup",
    },
    {
      id: "S02",
      name: "株式会社kickflow",
      logoImage: "/sponsors/kickflow.png",
      logoLink: "https://kickflow.com/",
      addPadding: true,
      isTenantChecked: true,
      overview: [`-`],
      links: [
        {
          title: "公式サイト",
          href: "https://kickflow.com/",
        },
      ],
      roles: ["silver"],
      detailPageId: "kickflow",
    },
    {
      id: "S03",
      name: "株式会社HERP",
      logoImage: "/sponsors/herp.png",
      logoLink: "https://herp.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      links: [
        {
          title: "公式サイト",
          href: "https://herp.co.jp/",
        },
      ],
      roles: ["silver"],
      detailPageId: "herp",
    },
    {
      id: "S04",
      name: "フリー株式会社",
      logoImage: "/sponsors/freee.png",
      logoLink: "https://corp.freee.co.jp/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["silver"],
      detailPageId: "freee",
    },
    {
      id: "S05",
      name: "株式会社SeeD",
      logoImage: "/sponsors/seed.svg",
      logoLink: "https://seed-it.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      links: [
        {
          title: "公式サイト",
          href: "https://seed-it.jp/",
        },
      ],
      roles: ["silver"],
      detailPageId: "seed",
    },
    {
      id: "S06",
      name: "フォルシア株式会社",
      logoImage: "/sponsors/forcia.png",
      logoLink: "https://www.forcia.com/",
      addPadding: false,
      isTenantChecked: true,
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
      roles: ["silver"],
      detailPageId: "medley",
    },
  ],
};

// スポンサー詳細ページで使用するスポンサーIDのリスト
export const sponsorIds = Object.values(sponsorList)
  .flat()
  .map((sponsor) => ({ id: sponsor.detailPageId }));
