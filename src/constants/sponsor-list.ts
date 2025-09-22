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
  overview?: string[]; // スポンサー一覧ページで表示する概要説明文
  detailedDescription?: string[]; // スポンサー詳細ページで表示する詳細説明文
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
      logoImage: "/sponsors/p01_toggle.png",
      logoLink: "https://toggle.co.jp/",
      addPadding: true,
      isTenantChecked: true,
      overview: [`-`],
      roles: ["platinum"],
      detailPageId: "toggle",
    },
  ],
  gold: [
    {
      id: "G01",
      name: "株式会社ココロザシ",
      logoImage: "/sponsors/g01_kokorozashi.png",
      logoLink: "https://www.wantedly.com/companies/company_299137",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      roles: ["gold"],
      detailPageId: "kokorozashi",
    },
    {
      id: "G02",
      name: "株式会社LayerX",
      logoImage: "/sponsors/g02_layerx.png",
      logoLink: "https://layerx.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      roles: ["gold"],
      detailPageId: "layerx",
    },
    {
      id: "G03",
      name: "Agile Studio by 永和システムマネジメント",
      logoImage: "/sponsors/g03_agile-studio.png",
      logoLink: "https://www.agile-studio.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `「アジャイルで日本の組織を元気にしたい」
アジャイルなソフトウェア開発の実践を通じて、組織にいるひとりひとりが主役となって活躍できる舞台をつくり、組織やチームを元気にしていくのが Agile Studio のミッションです。
      `,
      ],
      detailedDescription: [
        `「共に育ち、共に創る」
        Agile Studio では、従来の受託開発の型にはまらない共創型の開発支援サービスや、長年のアジャイル開発の経験を活かした現場に寄り添ったコンサルティングサービスを提供しています。
１．アジャイル研修・ワークショップ
アジャイルに関する知識や、困りごとを解決するスキルを習得します。
２．アジャイルコーチング
組織をアジャイルにするために、人やチームを育てます。
３．アジャイル開発
アジャイル・クラウド技術に精通したエンジニアチームが開発を支援します。
私たちはTypeScriptを始め、開発チームの土台となる技術力を研鑽し続けることで、お客様やコミュニティへ価値を提供していきます。
私たちと一緒に、一歩先のアジャイル開発を実現していきましょう！
      `,
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
      logoImage: "/sponsors/g04_kaminashi.png",
      logoLink: "https://corp.kaminashi.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `カミナシは「ノンデスクワーカーの才能を解き放つ」をミッションに、PCやデスクのない現場で働くノンデスクワーカー3,900万人の働き方をITの力でスマートにすることを目指しています。
      `,
      ],
      detailedDescription: [
        `カミナシは「ノンデスクワーカーの才能を解き放つ」をミッションに、PCやデスクのない現場で働くノンデスクワーカー3,900万人の働き方をITの力でスマートにすることを目指しています。
提供中の現場DXプラットフォーム『カミナシ』には、シリーズ製品に現場帳票をデジタル化する『カミナシ レポート』や現場従業員管理システム『カミナシ 従業員』など、現場の基盤である「作業方法」「人」「設備」を軸にした製品を展開しています。カミナシは、これらのクラウドサービスを通じて現場DXを推進しています。

カミナシではPCの管理画面やモバイルアプリのフロントエンド開発を主として、全てのプロダクトでTypeScriptを採用しており、コードの拡張性・堅牢性を高めることに大きく寄与しています。
カミナシのプロダクトを一緒に作る仲間を絶賛採用中ですので、ぜひお話しさせてください！
      `,
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
      logoImage: "/sponsors/g05_team-lab.png",
      logoLink:
        "https://www.team-lab.com/engineering/?utm_source=TSKaigi&utm_medium=web&utm_campaign=hokuriku",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `チームラボは日本で随一のデジタルプラットフォーム構築・運用の高いノウハウをもった専門家集団です。
チームラボが構築運用しているサービスを合わせると、アプリでは累計1億6000万DL以上、アクティブユーザーは合計3000万人以上にのぼり、日本社会の様々な場面で生活者の体験を向上し続けています。
      `,
      ],
      detailedDescription: [
        `チームラボのソリューションチームは、サービス戦略からUI/UX設計、実装、そして改善まで、様々なデジタルサービスをクライアントと共に産み出し、育ててきました。
        
「最高に気持ちよいサービス」を目指し、顧客体験・UI・システム・業務・ビジネス、を偏る事なく総合的に捉え、クリエイティブ、テクノロジー、カタリストという専門性の高いチームが、三位一体となりサービスを実現しています。
        
TSKaigi Hokurikuの会場には、フロントエンドチームより様々なバックグラウンドを持ったエンジニアが参加し、チームラボのプロジェクトや自身の開発経験についてご紹介しています。
        
ぜひ一度、チームラボのブースにお立ち寄りください！
      `,
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
      logoImage: "/sponsors/g06_mosh.png",
      logoLink: "https://mosh.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `MOSH株式会社は「情熱がめぐる経済をつくる」をミッションに、クリエイター向け事業拡大プラットフォーム「MOSH」を開発・運営しています。TypeScriptを軸とした技術基盤で、サイト作成、予約、決済、顧客管理をワンストップ提供し、個人の情熱を事業へと成長させます。
      `,
      ],
      detailedDescription: [
        `MOSH株式会社は「情熱がめぐる経済をつくる」というミッションのもと、クリエイター向け事業拡大プラットフォーム「MOSH」を開発・運営しています。

私たちのプラットフォームは、サイト作成、予約管理、決済処理、顧客管理といった事業運営に必要な機能をワンストップで提供しています。200以上の職種で活動するクリエイターが、月数千万円から数億円規模の事業を展開する基盤となっています。年間GMVは2年連続で前年比300%成長を達成し、指名経済の実現に向けて着実に前進しています。

技術面では、リアーキテクチャを行い、TypeScriptを中心とした型安全な開発体制を構築を進めています。モダンな技術スタックとOpenAPIベースのスキーマ駆動開発により、信頼性と保守性の高いシステムを実現しています。

また、AIを活用した開発生産性向上など、急成長する事業要求に迅速に対応できる体制を整えています。3〜5人の小規模チームによるフルサイクル開発を実践。クリエイターの声に直接耳を傾け、継続的な改善を重ねています。今後もグローバルで利用されるプラットフォームを目指し、技術革新とともに進化を続けます。
      `,
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
      logoImage: "/sponsors/g07_tacoms.png",
      logoLink: "https://www.tacoms-inc.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `tacomsは「発明で、半径5mの人を幸せに」をミッションに、飲食店向けSaaSを展開しています。デリバリー一元管理「Camel」を中心に全国47都道府県、約10,000店舗でご利用いただいており、現在は飲食業界向けAll-in-One AI Platformの構築を目指し、AIネイティブな組織化と産業変革に取り組んでいます。
      `,
      ],
      detailedDescription: [
        `tacomsは「発明で、半径5mの人を幸せに」をミッションに、飲食店向けVertical SaaSを展開するスタートアップです。

2021年にローンチしたデリバリー一元管理サービス「Camel」は、現在全国47都道府県、約10,000店舗でご利用いただく規模まで成長しました。React・TypeScriptを活用したフロントエンドとGoによるバックエンドの構成を基本として、マルチプロダクト戦略のもと「CamelOrder」を含めプロダクトを順次リリースしています。

直近ではtacoms AI Labを立ち上げ、AIを前提とした会社への移行を進めており、飲食業界向けAll-in-One AI Platformの実現を目指しています。各プロダクトチームが自律的に動く小規模チーム体制で、プロダクトディスカバリーから運用まで一貫して責任を持ち、組織もプロダクトもLLMを取り込みながら発明を生み出し、それを社会実装できるよう取り組んでいます。
      `,
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
      logoImage: "/sponsors/g08_nstock.png",
      logoLink: "https://nstock.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `Nstockは、「スタートアップエコシステムをブーストし、日本からGoogle級の会社を生み出す」ことをミッションに掲げ、スタートアップが大きく育つための様々なプロダクトを提供しています。
      `,
      ],
      detailedDescription: [
        `Nstockは、「スタートアップエコシステムをブーストし、日本からGoogle級の会社を生み出す」ことをミッションに掲げ、スタートアップが大きく育つための様々なプロダクトを提供しています。
現在は下記2つの事業でミッション実現のために一緒に事業をブーストさせるメンバーを募集しています。

▼株式報酬SaaS事業
株式報酬が持つ本来のポテンシャルを最大限に引き出すSaaSです。株式報酬が持つ運用の課題を解決し、企業が成長する起爆剤になります。

▼セカンダリー事業
スタートアップのための、非上場株式の取引所を準備中です。非上場時点でストックオプションを行使し換金できることで、役職員の経済的成功を実現し、企業の採用競争力を強化します。

すべてのプロダクトのフロントエンドでTypeScript & Reactを採用しています。また、CursorやDevinといった生成AI系の開発ツールも積極的に活用しており、事業を支えるエンジニアリングの新しい形を模索しています。

Nstockのミッションに共感し、共にスタートアップ業界を盛り上げてくれる仲間を募集しています。ぜひ会場でお話ししましょう！
      `,
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
      logoImage: "/sponsors/g09_jig.png",
      logoLink: "https://www.jig.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `jig.jpでは、「みんなのライブ配信」ふわっちを中心に、B2C/C2Cのソフトウェア・アプリのサービス開発を行っています。
サービスのフロントエンド、バックエンド、IoT、ちょっとしたツールなど、様々な場所で TypeScript を活用しています。
      `,
      ],
      detailedDescription: [
        `jig.jpでは、「みんなのライブ配信」ふわっちを中心に、B2C/C2Cのソフトウェア・アプリのサービス開発を行っています。
サービスのフロントエンド（Angular / Next.js / Remix (RRv7) / Astro）、バックエンド（Vendure）、インフラ（AWS CDK）、IoT、ちょっとしたツール（Apps Script, Deno）など、様々な場所で TypeScript を活用しています。
どちらかと言えば静的型付け言語を好むエンジニアが多く、TypeScript はそんな私達にぴったりのプログラミング言語です。
      `,
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
      logoImage: "/sponsors/g10_ascend.png",
      logoLink: "https://www.ascendlogi.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `アセンドは日本で最もデジタル化の遅れた物流産業に対して、SaaSを基軸として産業変革に挑むスタートアップです。
Full-Stack TypeScriptで、全員がプロダクトエンジニアとして、6deploys/dayと生産性高くフルスタックに開発を進めています。是非会場でお話しましょう！
      `,
      ],
      detailedDescription: [
        `■「日本で最もデジタル化の遅れた物流産業で、最高の業務体験を創る」
アセンド株式会社は日本の物流DXを目指すスタートアップです。
物流業界は20兆円の巨大市場でありながら、クラウド利用率は全産業で最低でありデジタル化の遅れ故に2024年問題をはじめとして社会課題を抱える業界です。Vertical SaaS「ロジックス」を全国の運送会社へ開発提供し、現場業務のデジタル化と経営の高度化を同時に図り、物流業界の変革を推進しています。

■ アセンドとTypeScript
社会課題を解決するプロダクトエンジニア組織を目指して、Frontend/Backend/IaC/DataPipelineの全てをTypeScriptで統一。TSでの言語統一により、全エンジニアがフルスタックに開発し、顧客業務やドメインに深く寄り添いプロダクト価値に拘った開発を進めています。開発生産性は6deploys/dayと高い環境であり、少数チームでありながらサービスは労務・車両管理といった多岐にわたる複数プロダクトを展開しています。
TypeScriptを駆使して社会課題解決に挑むプロダクトエンジニアを積極募集中です！
      `,
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
      logoImage: "/sponsors/g11_algo-artis.png",
      logoLink: "https://www.algo-artis.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `ALGO ARTISは「社会基盤の最適化」をビジョンに掲げ、製造業をはじめ、エネルギー、バス・鉄道といった社会インフラ産業を支える配船計画や生産計画など、複雑な制約を持つ計画業務に特化した最適化ソリューションを提供しており、複雑な画面の開発にTypeScriptを活用しています。
      `,
      ],
      detailedDescription: [
        `ALGO ARTISは「社会基盤の最適化」をビジョンに掲げ、製造業をはじめ、エネルギー、バス・鉄道といった社会インフラ産業を支える配船計画や生産計画など、複雑な制約を持つ計画業務に特化した最適化ソリューションを提供しています。
「いつ・何を・どれだけ作るか」「どの順序で運ぶか」といった従来人手に頼りがちだった計画業務を、独自のアルゴリズムで効率化・高度化しています。
お客様固有の課題に対応する最適化ソリューション「Optium」に加え、より幅広い企業が導入しやすいSaaS型プロダクト「Planium」も展開。社会の根幹を支える計画業務の革新を通じて、持続可能で強靭な社会基盤の実現を目指しています。
計画業務を支えるソリューションには使いやすい画面が不可欠です。ALGO ARTISはフロントエンドにTypeScriptを利用し、より良いユーザー体験を追求し続けています。
ALGO ARTISでは、TypeScriptを活用して社会にインパクトを与えたいソフトウェアエンジニアを募集中です。お気軽にご連絡ください。また、会場にブースも設置しますので、現地参加の方はぜひお立ち寄りください！
      `,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://www.algo-artis.com/",
        },
        {
          title: "TechBlog",
          href: "https://www.algo-artis.com/recruit",
        },
      ],
      roles: ["gold"],
      detailPageId: "algo-artis",
    },
    {
      id: "G12",
      name: "ファインディ株式会社",
      logoImage: "/sponsors/g12_findy.png",
      logoLink: "https://conference.findy-code.io/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `ファインディ株式会社は「挑戦するエンジニアのプラットフォームをつくる。」というビジョンを掲げ、テックカンファレンスのプラットフォーム「Findy Conference」、IT/Webエンジニアの転職サービス「Findy」等々、合計の5つのサービスを提供しています。
        `,
      ],
      detailedDescription: [
        `ファインディ株式会社は「挑戦するエンジニアのプラットフォームをつくる。」というビジョンを掲げ、ITエンジニア領域における個人・組織それぞれの課題解決に取り組んでいます。
現在は、
・テックカンファレンスのプラットフォーム「Findy Conference」
・開発ツールのレビューサイト「Findy Tools」
・IT/Webエンジニアの転職サービス「Findy」
・ハイスキルなフリーランスエンジニア紹介サービス「Findy Freelance」
・経営と開発現場をつなぐ戦略支援SaaS「Findy Team+（チームプラス）」

の5つのサービスを提供しています。

サービスの累計会員登録数は約22万人、国内外のスタートアップ企業から大企業までの3,500社にお使いいただいております。
      `,
      ],
      links: [
        {
          title: "「日本のテックカンファレンスがここに集約」Findy Conference ",
          href: "https://findy-tools.io/ ?utm_source=lp&utm_medium=referral&utm_campaign=tskaigihokuriku",
        },
        {
          title: "IT/Webエンジニアの転職サービス「Findy」",
          href: "https://findy-tools.io/ ?utm_source=lp&utm_medium=referral&utm_campaign=tskaigihokuriku",
        },
      ],
      roles: ["gold"],
      detailPageId: "findy",
    },
    {
      id: "G13",
      name: "株式会社令和トラベル",
      logoImage: "/sponsors/g13_reiwatravel.png",
      logoLink: "https://www.reiwatravel.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [
        `令和トラベルは、「あたらしい旅行を、デザインする。」 をミッションに、"旅行"におけるあたらしい体験や、あたらしい社会価値の提供を目指すデジタルトラベルエージェンシーです。2022年4月より、旅行アプリ『NEWT（ニュート）』をローンチ。2024年9月にはシリーズAとして約48億円の資金調達を実施。
      `,
      ],
      detailedDescription: [
        `令和トラベルは、「あたらしい旅行を、デザインする。」 をミッションに、" 旅行" におけるあたらしい体験や、あたらしい社会価値の提供を目指すデジタルトラベルエージェンシーです。
2022年4月より、旅行アプリ『NEWT（ニュート）』をローンチし、海外旅行事業をスタート。2024年9月にはシリーズAとして約48億円の資金調達を実施。さらに、2025年1月には「日本国内の宿・ホテルの予約サービス」をスタートし、国内旅行事業、フライト予約機能、グローバル展開と事業ポートフォリオの拡大を予定しています。
生成AIをはじめとしたテクノロジーに大きく投資し、旅行業界における予約や管理業務のDXを最大化、最適なカスタマー体験、これまでになかったパッケージツアー等を提供し、" 旅行 " というエクスペリエンスを通じた社会価値の創造に挑戦します。
      `,
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
      logoImage: "/sponsors/s01_luup.png",
      logoLink: "https://luup.sc/",
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
      logoImage: "/sponsors/s02_kickflow.png",
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
      logoImage: "/sponsors/s03_herp.png",
      logoLink: "https://herp.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      detailedDescription: [`-`],
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
      logoImage: "/sponsors/s04_freee.png",
      logoLink: "https://corp.freee.co.jp/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      links: [
        {
          title: "公式サイト",
          href: "https://corp.freee.co.jp/",
        },
      ],
      roles: ["silver"],
      detailPageId: "freee",
    },
    {
      id: "S05",
      name: "株式会社SeeD",
      logoImage: "/sponsors/s05_seed.png",
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
      logoImage: "/sponsors/s06_forcia.png",
      logoLink: "https://www.forcia.com/",
      addPadding: false,
      isTenantChecked: true,
      overview: [`-`],
      links: [
        {
          title: "公式サイト",
          href: "https://www.forcia.com/",
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
