export type ExternalLinkProps = {
  title: string;
  href: string;
};

export type SponsorClass = "platinum" | "gold" | "silver";

export type Sponsor = {
  id: `${"P" | "G" | "S"}${number}`;
  sponsorId: string;
  sponsorLtId?: number;
  name: string;
  logoLink: string;
  overview?: string;
  detailDescription?: string[];
  roles?: string[];
  links?: ExternalLinkProps[];
  // FIXME: 一時的に非表示にするためのフラグ。スポンサーチェック後に削除
  isHiddenSponsorPage?: boolean;
} & (
  | {
      id: `${"P" | "G"}${number}`;
      sponsorId: string;
      name: string;
      logoLink: string;
      overview: string;
      detailDescription: string[];
      roles?: string[];
      links?: ExternalLinkProps[];
    }
  | {
      id: `S${number}`;
      sponsorId: string;
      name: string;
      logoLink: string;
      overview?: never;
      detailDescription?: never;
      roles?: never;
      links?: never;
    }
);

type SponsorList = {
  [key in SponsorClass]: Sponsor[];
};

export const sponsorList: SponsorList = {
  platinum: [
    {
      id: "P01",
      sponsorId: "toggle",
      sponsorLtId: 4,
      name: "トグルホールディングス株式会社",
      logoLink: "https://toggle.co.jp",
      overview: `トグルホールディングスは、不動産・建築・金融の3業界を統合したデジタル産業インフラの社会実装を目指す企業です。IT投資が遅れる日本の不動産業界において、TypeScriptをフル活用し、複雑なドメインを安全・柔軟に実装し、業界変革に挑んでいます。`,
      detailDescription: [
        `私たちは、「すべてのまちと、まちをつくる人たちのために」をミッションに掲げ、古くからの慣習や非効率が残る「不動産」「建築」「金融」の３領域を、データとテクノロジーを核としてひとつの産業インフラへと統合することを目指しています。
プロダクトのコア技術の実装にはフロントエンドからバックエンド、さらにはインフラストラクチャの定義までTypeScriptを用いており、もし、TypeScriptやAI・LLM・GISなどの技術を用いて“まちづくり”という大きな課題に取り組みたい、新しい事業や構造を自分たちの手で創っていきたい――そう感じているなら、トグルホールディングスはあなたの挑戦を待っています！`,
        `◼︎技術・プロダクトでの“実践者”としての存在
私たちは、ただテクノロジーを使うだけではなく、技術で産業構造を変えることを掲げています。
まちづくりに必要な土地解析技術のサービスでは、複数のGISデータを統合し、形状や立地を数値化。
建築分野では、これまで数週間を要していた設計のたたき台作成を数十秒へと圧縮。
従来のプロセスを革新するプロダクト／サービス群づくりに狼煙を上げています。
最近では 全エンジニアにAIスーパーコンピューター「DGX Spark」 を配備し、AI推論・実験の自由度・スピードを飛躍的に高める体制を整えました。`,
        `◼︎︎エンジニア組織・カルチャー：裁量とスピード、越境する学び
①組織規模の急成長
採用開始から2年弱で数名から30名を超えるエンジニア組織へと移行し、より一人一人の裁量を大きく、ダイナミックに挑戦できる環境になりつつあります。
②新卒・中途を問わず、早い段階から“意義ある仕事”を任せる文化
エンジニア職としてプロダクトをつくることに留まらず、CTO直下で経営活動の効率化に向けた仕組み構築など、経営とプロダクト両面の戦略に参画できる機会があります。
③多領域との知の融合
「ルールをつくる」「産業のOSを書き換える」という意識で、自分のコード・発想が社会やまちの在り方に直結する面白さがあります。
④開発環境の最先端性
TypeScriptはもちろん、インフラ・AI・LLM・GIS等の先端技術を実用フェーズで扱っており、「技術的チャレンジをしたい」「モダンなスタックで実装力を磨きたい」エンジニアにとって理想的な環境です。`,
      ],
      links: [
        {
          title: "公式ホームページ",
          href: "https://toggle.co.jp",
        },
        {
          title: "Engineering Handbook",
          href: "https://engineer.toggle.co.jp",
        },
        {
          title: "公式note",
          href: "https://note.com/toggle",
        },
      ],
      roles: ["Naming Rights"],
    },
  ],
  gold: [
    {
      id: "G01",
      sponsorId: "kokorozashi",
      sponsorLtId: 9,
      name: "株式会社ココロザシ",
      logoLink: "https://www.wantedly.com/companies/company_299137",
      overview: `AIやクラウド領域を中心としたシステム開発、AWS事業を展開しています。
モダンな技術を用い常に高い品質を保つことで、多種多様な産業・業界のお客様のシステムにおける課題を解決に導く事を強みとしており、その特徴として開発技術にTypeScriptを採用しているのが当社の特徴です。`,
      detailDescription: [
        `「誰もがココロザシを持てる社会へ」という理念を掲げ、
エンジニアの成長を最大化するプラットフォームカンパニーとして、
一人ひとりのスキル・キャリアップに全振りしている会社です。
AWS使い放題などの独自福利厚生やPJT選択制度、社内プロダクトなど、
働きがいのある環境整備に注力しています。`,
        `事業としてはAIやAWS領域を中心としたシステム開発事業を展開しており、
FE、BE、IaCまで一貫してTypeScriptを利用し、
エンジニア全員が高品質でフルスタックに対応出来る点が強みです。`,
        `≪主な技術領域≫
FE：Typescript,Next.js,React,Nuxt.js,Vue.js
BE：Node.js(Nest.JS),Python,GraphQL,Fastify
クラウド：AWS,Vercel
AI：Gemini、Copilot、Claude、Cursor、Devin`,
        `ご興味持っていただいた方は、下記HPや採用情報、Wantedlyにてぜひ当社の様子をご覧ください。
それではTSKaigi北陸でお会いできます事、楽しみにしております！`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://www.kokorozashi-japan.co.jp/",
        },
        {
          title: "採用情報",
          href: "https://recruit.kokorozashi-japan.co.jp/",
        },
        {
          title: "Wantedly",
          href: "https://www.wantedly.com/companies/company_299137",
        },
      ],
    },
    {
      id: "G02",
      sponsorId: "layerx",
      sponsorLtId: 7,
      name: "株式会社LayerX",
      logoLink: "https://layerx.co.jp",
      overview:
        "LayerXは「すべての経済活動を、デジタル化する。」をミッションに掲げ、SaaS+Fintechを軸に、AIを中心としたソフトウェア体験を社会実装するスタートアップです。",
      detailDescription: [
        `LayerXは「すべての経済活動を、デジタル化する。」をミッションに掲げ、SaaS+Fintechを軸に、AIを中心としたソフトウェア体験を社会実装するスタートアップです。`,
        `法人支出管理や人的資源管理などの業務効率化AIクラウドサービス「バクラク」を中心に、デジタルネイティブなアセットマネジメント会社を目指す合弁会社「三井物産デジタル・アセットマネジメント」、大規模言語モデル（LLM）関連技術を活用し企業や行政における業務効率化・データ活用を支援する「AI・LLM事業」などを開発・運営しています。`,
        `近年の生成AIの進化、特に自律的に動作するAIエージェントの登場は、ソフトウェアのあり方を根本から変える可能性を秘めています。LayerXは、この変化をリードすべくAIエージェントへの投資を加速させています。AIが自律的に業務を進める未来において、その能力を最大限に引き出すための新しいユーザー体験の構築は不可欠です。`,
        `これまで培ってきたウェブフロントエンド技術を駆使し、人とAIが自然に協働できるような、次世代のインターフェース開発に挑戦していきたい方、ぜひお声がけください！`,
      ],
      links: [
        {
          title: "LayerX 採用情報",
          href: "https://jobs.layerx.co.jp/",
        },
        {
          title: "LayerX エンジニアブログ",
          href: "https://tech.layerx.co.jp/",
        },
        {
          title: "LayerX Tech 公式 X アカウント",
          href: "https://x.com/layerx_tech",
        },
      ],
    },
    {
      id: "G03",
      sponsorId: "agile-studio",
      sponsorLtId: 12,
      name: "Agile Studio by 永和システムマネジメント",
      logoLink: "https://www.agile-studio.jp",
      overview: `「アジャイルで日本の組織を元気にしたい」
アジャイルなソフトウェア開発の実践を通じて、組織にいるひとりひとりが主役となって活躍できる舞台をつくり、組織やチームを元気にしていくのが Agile Studio のミッションです。`,
      detailDescription: [
        `「共に育ち、共に創る」
Agile Studio では、従来の受託開発の型にはまらない共創型の開発支援サービスや、長年のアジャイル開発の経験を活かした現場に寄り添ったコンサルティングサービスを提供しています。
１．アジャイル研修・ワークショップ
アジャイルに関する知識や、困りごとを解決するスキルを習得します。
２．アジャイルコーチング
組織をアジャイルにするために、人やチームを育てます。
３．アジャイル開発
アジャイル・クラウド技術に精通したエンジニアチームが開発を支援します。`,
        `私たちはTypeScriptを始め、開発チームの土台となる技術力を研鑽し続けることで、お客様やコミュニティへ価値を提供していきます。
私たちと一緒に、一歩先のアジャイル開発を実現していきましょう！`,
      ],
      links: [
        {
          title: "Agile Studioサイト",
          href: "https://www.agile-studio.jp/",
        },
        {
          title: "Agile Studio のプロジェクトで利用されている技術",
          href: "https://agile-studio.d3moc03xuu2zxx.amplifyapp.com/",
        },
        {
          title: "採用情報",
          href: "https://recruit.esm.co.jp/",
        },
      ],
    },
    {
      id: "G04",
      sponsorId: "kaminashi",
      sponsorLtId: 8,
      name: "株式会社カミナシ",
      logoLink: "https://corp.kaminashi.jp/",
      overview:
        "カミナシは「ノンデスクワーカーの才能を解き放つ」をミッションに、PCやデスクのない現場で働くノンデスクワーカー3,900万人の働き方をITの力でスマートにすることを目指しています。",
      detailDescription: [
        `カミナシは「ノンデスクワーカーの才能を解き放つ」をミッションに、PCやデスクのない現場で働くノンデスクワーカー3,900万人の働き方をITの力でスマートにすることを目指しています。
提供中の現場DXプラットフォーム『カミナシ』には、シリーズ製品に現場帳票をデジタル化する『カミナシ レポート』や現場従業員管理システム『カミナシ 従業員』など、現場の基盤である「作業方法」「人」「設備」を軸にした製品を展開しています。カミナシは、これらのクラウドサービスを通じて現場DXを推進しています。`,
        `カミナシではPCの管理画面やモバイルアプリのフロントエンド開発を主として、全てのプロダクトでTypeScriptを採用しており、コードの拡張性・堅牢性を高めることに大きく寄与しています。
カミナシのプロダクトを一緒に作る仲間を絶賛採用中ですので、ぜひお話しさせてください！`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://corp.kaminashi.jp/",
        },
        {
          title: "カミナシ エンジニアブログ",
          href: "https://kaminashi-developer.hatenablog.jp/",
        },
        {
          title: "エンジニア求人一覧",
          href: "https://herp.careers/v1/kaminashi/requisition-groups/ae8150ab-e044-41d8-b034-ac2987cc29db",
        },
      ],
      roles: ["Naming Rights"],
    },
    {
      id: "G05",
      sponsorId: "team-lab",
      sponsorLtId: 14,
      name: "チームラボ",
      logoLink:
        "https://www.team-lab.com/engineering/?utm_source=TSKaigi&utm_medium=web&utm_campaign=hokuriku",
      overview: `チームラボは日本で随一のデジタルプラットフォーム構築・運用の高いノウハウをもった専門家集団です。
チームラボが構築運用しているサービスを合わせると、アプリでは累計1億6000万DL以上、アクティブユーザーは合計3000万人以上にのぼり、日本社会の様々な場面で生活者の体験を向上し続けています。`,
      detailDescription: [
        `チームラボのソリューションチームは、サービス戦略からUI/UX設計、実装、そして改善まで、様々なデジタルサービスをクライアントと共に産み出し、育ててきました。`,
        `「最高に気持ちよいサービス」を目指し、顧客体験・UI・システム・業務・ビジネス、を偏る事なく総合的に捉え、クリエイティブ、テクノロジー、カタリストという専門性の高いチームが、三位一体となりサービスを実現しています。`,
        `TSKaigi Hokurikuの会場には、フロントエンドチームより様々なバックグラウンドを持ったエンジニアが参加し、チームラボのプロジェクトや自身の開発経験についてご紹介しています。`,
        `ぜひ一度、チームラボのブースにお立ち寄りください！`,
      ],
      links: [
        {
          title: "幅広くエンジニア採用中！",
          href: "https://www.team-lab.com/engineering/",
        },
        {
          title: "開発事例一覧",
          href: "https://www.team-lab.com/works/?category=all",
        },
        {
          title: "【公式note】メンバーインタビューやプロジェクトについて紹介中！",
          href: "https://note.team-lab.com/",
        },
      ],
    },
    {
      id: "G06",
      sponsorId: "mosh",
      sponsorLtId: 15,
      name: "MOSH株式会社",
      logoLink: "https://mosh.jp",
      overview:
        "MOSH株式会社は「情熱がめぐる経済をつくる」をミッションに、クリエイター向け事業拡大プラットフォーム「MOSH」を開発・運営しています。TypeScriptを軸とした技術基盤で、サイト作成、予約、決済、顧客管理をワンストップ提供し、個人の情熱を事業へと成長させます。",
      detailDescription: [
        `MOSH株式会社は「情熱がめぐる経済をつくる」というミッションのもと、クリエイター向け事業拡大プラットフォーム「MOSH」を開発・運営しています。`,
        `私たちのプラットフォームは、サイト作成、予約管理、決済処理、顧客管理といった事業運営に必要な機能をワンストップで提供しています。200以上の職種で活動するクリエイターが、月数千万円から数億円規模の事業を展開する基盤となっています。年間GMVは2年連続で前年比300%成長を達成し、指名経済の実現に向けて着実に前進しています。`,
        `技術面では、リアーキテクチャを行い、TypeScriptを中心とした型安全な開発体制を構築を進めています。モダンな技術スタックとOpenAPIベースのスキーマ駆動開発により、信頼性と保守性の高いシステムを実現しています。`,
        `また、AIを活用した開発生産性向上など、急成長する事業要求に迅速に対応できる体制を整えています。3〜5人の小規模チームによるフルサイクル開発を実践。クリエイターの声に直接耳を傾け、継続的な改善を重ねています。今後もグローバルで利用されるプラットフォームを目指し、技術革新とともに進化を続けます。`,
      ],
      links: [
        {
          title: "サービスサイト",
          href: "https://mosh.jp/",
        },
        {
          title: "採用情報サイト",
          href: "https://careers.mosh.jp/",
        },
        {
          title: "会社説明資料(Company Deck)",
          href: "https://www.canva.com/design/DAGZtAM5mBU/vlYfAoRZ3ksWjxKm7MTLLA/view",
        },
      ],
    },
    {
      id: "G07",
      sponsorId: "tacoms",
      sponsorLtId: 16,
      name: "株式会社tacoms",
      logoLink: "https://www.tacoms-inc.com",
      overview:
        "tacomsは「発明で、半径5mの人を幸せに」をミッションに、飲食店向けSaaSを展開しています。デリバリー一元管理「Camel」を中心に全国約10,000店舗でご利用いただいており、現在はAll-in-One AI Platformの構築を目指し、AIネイティブな組織化と産業変革を目指しています。",
      detailDescription: [
        `tacomsは「発明で、半径5mの人を幸せに」をミッションに、飲食店向けVertical SaaSを展開するスタートアップです。`,
        `2021年にローンチしたデリバリー一元管理サービス「Camel」は、現在全国47都道府県、約10,000店舗でご利用いただく規模まで成長しました。React・TypeScriptを活用したフロントエンドとGoによるバックエンドの構成を基本として、マルチプロダクト戦略のもと「CamelOrder」を含めプロダクトを順次リリースしています。`,
        `直近ではtacoms AI Labを立ち上げ、AIを前提とした会社への移行を進めており、飲食業界向けAll-in-One AI Platformの実現を目指しています。各プロダクトチームが自律的に動く小規模チーム体制で、プロダクトディスカバリーから運用まで一貫して責任を持ち、組織もプロダクトもLLMを取り込みながら発明を生み出し、それを社会実装できるよう取り組んでいます。`,
      ],
      links: [
        {
          title: "会社HP",
          href: "https://www.tacoms-inc.com/",
        },
        {
          title: "テックブログ",
          href: "https://tacoms-inc.hatenablog.com/",
        },
      ],
    },
    {
      id: "G08",
      sponsorId: "nstock",
      sponsorLtId: 17,
      name: "Nstock株式会社",
      logoLink: "https://nstock.co.jp",
      overview:
        "Nstockは、「スタートアップエコシステムをブーストし、日本からGoogle級の会社を生み出す」ことをミッションに掲げ、スタートアップが大きく育つための様々なプロダクトを提供しています。",
      detailDescription: [
        `Nstockは、「スタートアップエコシステムをブーストし、日本からGoogle級の会社を生み出す」ことをミッションに掲げ、スタートアップが大きく育つための様々なプロダクトを提供しています。
現在は下記2つの事業でミッション実現のために一緒に事業をブーストさせるメンバーを募集しています。`,
        `▼株式報酬SaaS事業
株式報酬が持つ本来のポテンシャルを最大限に引き出すSaaSです。株式報酬が持つ運用の課題を解決し、企業が成長する起爆剤になります。`,
        `▼セカンダリー事業
スタートアップのための、非上場株式の取引所を準備中です。非上場時点でストックオプションを行使し換金できることで、役職員の経済的成功を実現し、企業の採用競争力を強化します。`,
        `すべてのプロダクトのフロントエンドでTypeScript & Reactを採用しています。また、CursorやDevinといった生成AI系の開発ツールも積極的に活用しており、事業を支えるエンジニアリングの新しい形を模索しています。`,
        `Nstockのミッションに共感し、共にスタートアップ業界を盛り上げてくれる仲間を募集しています。ぜひ会場でお話ししましょう！`,
      ],
      links: [
        {
          title: "Nstock 採用サイト",
          href: "https://recruit.nstock.co.jp/work/software-engineer",
        },
        {
          title: "NstockのTechラジオ",
          href: "https://open.spotify.com/show/0m4TGTqbD6AuHFOrIbpkxx?si=fcb0d9a1f44049a8&nd=1&dlsi=97fdf39efbbe48a2",
        },
        {
          title: "Nstock Tech Blog",
          href: "https://zenn.dev/p/nstock",
        },
      ],
    },
    {
      id: "G09",
      sponsorId: "jigjp",
      sponsorLtId: 13,
      name: "株式会社jig.jp",
      logoLink: "https://jig.jp",
      overview: `jig.jpでは、「みんなのライブ配信」ふわっちを中心に、B2C/C2Cのソフトウェア・アプリのサービス開発を行っています。
サービスのフロントエンド、バックエンド、IoT、ちょっとしたツールなど、様々な場所で TypeScript を活用しています。`,
      detailDescription: [
        `jig.jpでは、「みんなのライブ配信」ふわっちを中心に、B2C/C2Cのソフトウェア・アプリのサービス開発を行っています。
サービスのフロントエンド（Angular / Next.js / Remix (RRv7) / Astro）、バックエンド（Vendure）、インフラ（AWS CDK）、IoT、ちょっとしたツール（Apps Script, Deno）など、様々な場所で TypeScript を活用しています。
どちらかと言えば静的型付け言語を好むエンジニアが多く、TypeScript はそんな私達にぴったりのプログラミング言語です。`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://www.jig.jp",
        },
        {
          title: "採用情報",
          href: "https://jig.jp/recruit",
        },
        {
          title: "jig.jp Engineers' Blog",
          href: "https://zenn.dev/p/jigjp_engineer",
        },
      ],
    },
    {
      id: "G10",
      sponsorId: "ascend",
      sponsorLtId: 6,
      name: "アセンド株式会社",
      logoLink: "https://www.ascendlogi.co.jp",
      overview: `アセンドは日本で最もデジタル化の遅れた物流産業に対して、SaaSを基軸として産業変革に挑むスタートアップです。
Full-Stack TypeScriptで、全員がプロダクトエンジニアとして、6deploys/dayと生産性高くフルスタックに開発を進めています。是非会場でお話しましょう！`,
      detailDescription: [
        `■「日本で最もデジタル化の遅れた物流産業で、最高の業務体験を創る」
アセンド株式会社は日本の物流DXを目指すスタートアップです。
物流業界は20兆円の巨大市場でありながら、クラウド利用率は全産業で最低でありデジタル化の遅れ故に2024年問題をはじめとして社会課題を抱える業界です。Vertical SaaS「ロジックス」を全国の運送会社へ開発提供し、現場業務のデジタル化と経営の高度化を同時に図り、物流業界の変革を推進しています。`,
        `■ アセンドとTypeScript
社会課題を解決するプロダクトエンジニア組織を目指して、Frontend/Backend/IaC/DataPipelineの全てをTypeScriptで統一。TSでの言語統一により、全エンジニアがフルスタックに開発し、顧客業務やドメインに深く寄り添いプロダクト価値に拘った開発を進めています。開発生産性は6deploys/dayと高い環境であり、少数チームでありながらサービスは労務・車両管理といった多岐にわたる複数プロダクトを展開しています。
TypeScriptを駆使して社会課題解決に挑むプロダクトエンジニアを積極募集中です！`,
      ],
      links: [
        {
          title: "アセンド株式会社",
          href: "https://www.ascendlogi.co.jp/",
        },
        {
          title: "エンジニア採用サイト",
          href: "https://product.career.ascendlogi.co.jp/",
        },
        {
          title: "プロダクトエンジニアに関して",
          href: "https://note.com/niwa_takeru/n/n0ae4acf2964d",
        },
      ],
    },
    {
      id: "G11",
      sponsorId: "algo-artis",
      sponsorLtId: 11,
      name: "株式会社 ALGO ARTIS",
      logoLink: "https://www.algo-artis.com",
      overview:
        "ALGO ARTISは「社会基盤の最適化」をビジョンに掲げ、製造業をはじめ、エネルギー、バス・鉄道といった社会インフラ産業を支える配船計画や生産計画など、複雑な制約を持つ計画業務に特化した最適化ソリューションを提供しており、複雑な画面の開発にTypeScriptを活用しています。",
      detailDescription: [
        `ALGO ARTISは「社会基盤の最適化」をビジョンに掲げ、製造業をはじめ、エネルギー、バス・鉄道といった社会インフラ産業を支える配船計画や生産計画など、複雑な制約を持つ計画業務に特化した最適化ソリューションを提供しています。
「いつ・何を・どれだけ作るか」「どの順序で運ぶか」といった従来人手に頼りがちだった計画業務を、独自のアルゴリズムで効率化・高度化しています。
お客様固有の課題に対応するフルカスタマイズの最適化ソリューションに加え、より幅広い企業が導入しやすいクラウド型生産DXスケジューラも展開。社会の根幹を支える計画業務の革新を通じて、持続可能で強靭な社会基盤の実現を目指しています。
計画業務を支えるソリューションには使いやすい画面が不可欠です。ALGO ARTISはフロントエンドにTypeScriptを利用し、より良いユーザー体験を追求し続けています。
ALGO ARTISでは、TypeScriptを活用して社会にインパクトを与えたいソフトウェアエンジニアを募集中です。お気軽にご連絡ください。また、会場にブースも設置しますので、現地参加の方はぜひお立ち寄りください！`,
      ],
      links: [
        {
          title: "コーポレートサイト",
          href: "https://www.algo-artis.com/",
        },
        {
          title: "採用情報",
          href: "https://www.algo-artis.com/recruit",
        },
        {
          title: "TechBlog",
          href: "https://zenn.dev/p/algoartis",
        },
      ],
    },
    {
      id: "G12",
      sponsorId: "findy",
      sponsorLtId: 10,
      name: "ファインディ株式会社",
      logoLink: "https://conference.findy-code.io",
      overview:
        "ファインディ株式会社は「挑戦するエンジニアのプラットフォームをつくる。」というビジョンを掲げ、テックカンファレンスのプラットフォーム「Findy Conference」、IT/Webエンジニアの転職サービス「Findy」等々、合計の5つのサービスを提供しています。",
      detailDescription: [
        `ファインディ株式会社は「挑戦するエンジニアのプラットフォームをつくる。」というビジョンを掲げ、ITエンジニア領域における個人・組織それぞれの課題解決に取り組んでいます。`,
        `現在は、
・テックカンファレンスのプラットフォーム「Findy Conference」
・開発ツールのレビューサイト「Findy Tools」
・IT/Webエンジニアの転職サービス「Findy」
・ハイスキルなフリーランスエンジニア紹介サービス「Findy Freelance」
・経営と開発現場をつなぐ戦略支援SaaS「Findy Team+（チームプラス）」`,
        `の5つのサービスを提供しています。`,
        `サービスの累計会員登録数は約22万人、国内外のスタートアップ企業から大企業までの3,500社にお使いいただいております。`,
      ],
      links: [
        {
          title: "「日本のテックカンファレンスがここに集約」Findy Conference",
          href: "https://conference.findy-code.io/?utm_source=lp&utm_medium=referral&utm_campaign=tskaigihokuriku",
        },
        {
          title: "「使いたい開発ツールがきっと見つかる」Findy Tools",
          href: "https://findy-tools.io/?utm_source=lp&utm_medium=referral&utm_campaign=tskaigihokuriku",
        },
        {
          title: "IT/Webエンジニアの転職サービス「Findy」",
          href: "https://findy-code.io/?utm_source=lp&utm_medium=referral&utm_campaign=tskaigihokuriku",
        },
      ],
    },
    {
      id: "G13",
      sponsorId: "reiwatravel",
      sponsorLtId: 5,
      name: "株式会社令和トラベル",
      logoLink: "https://www.reiwatravel.co.jp",
      overview: `令和トラベルは、「あたらしい旅行を、デザインする。」 をミッションに、"旅行"におけるあたらしい体験や、あたらしい社会価値の提供を目指すデジタルトラベルエージェンシーです。2022年4月より、旅行アプリ『NEWT（ニュート）』をローンチ。2024年9月にはシリーズAとして約48億円の資金調達を実施。`,
      detailDescription: [
        `令和トラベルは、「あたらしい旅行を、デザインする。」 をミッションに、" 旅行 " におけるあたらしい体験や、あたらしい社会価値の提供を目指すデジタルトラベルエージェンシーです。
2022年4月より、旅行アプリ『NEWT（ニュート）』をローンチし、海外旅行事業をスタート。2024年9月にはシリーズAとして約48億円の資金調達を実施。さらに、2025年1月には「日本国内の宿・ホテルの予約サービス」をスタートし、国内旅行事業、フライト予約機能、グローバル展開と事業ポートフォリオの拡大を予定しています。
生成AIをはじめとしたテクノロジーに大きく投資し、旅行業界における予約や管理業務のDXを最大化、最適なカスタマー体験、これまでになかったパッケージツアー等を提供し、" 旅行 " というエクスペリエンスを通じた社会価値の創造に挑戦します。`,
      ],
      links: [
        {
          title: "株式会社令和トラベル",
          href: "https://www.reiwatravel.co.jp/",
        },
        {
          title: "海外旅行・国内旅行のツアーやホテル予約はNEWT（ニュート）",
          href: "https://newt.net/",
        },
        {
          title: "採用情報はこちら",
          href: "https://www.reiwatravel.co.jp/engineers",
        },
      ],
      roles: ["Travel"],
    },
  ],
  silver: [
    {
      id: "S01",
      sponsorId: "luup",
      name: "株式会社Luup",
      logoLink: "https://luup.sc",
    },
    {
      id: "S02",
      sponsorId: "kickflow",
      name: "株式会社kickflow",
      logoLink: "https://kickflow.com",
    },
    {
      id: "S03",
      sponsorId: "herp",
      name: "株式会社HERP",
      logoLink: "https://herp.co.jp",
    },
    {
      id: "S04",
      sponsorId: "freee",
      name: "フリー株式会社",
      logoLink: "https://corp.freee.co.jp",
    },
    {
      id: "S05",
      sponsorId: "seed",
      name: "株式会社SeeD",
      logoLink: "https://seed-it.jp",
    },
    {
      id: "S06",
      sponsorId: "forcia",
      name: "フォルシア株式会社",
      logoLink: "https://www.forcia.com/",
    },
    {
      id: "S07",
      sponsorId: "ficilcom",
      name: "フィシルコム",
      logoLink: "https://www.ficilcom.jp",
    },
    {
      id: "S08",
      sponsorId: "fp-matsuri",
      name: "関数型まつり",
      logoLink: "https://fp-matsuri.org/",
    },
    {
      id: "S09",
      sponsorId: "miidas",
      name: "ミイダス株式会社",
      logoLink: "https://careers.miidas.co.jp/tech/",
    },
    {
      id: "S10",
      sponsorId: "knowledgework",
      name: "株式会社ナレッジワーク",
      logoLink: "https://knowledgework.com/",
    },
  ],
};
