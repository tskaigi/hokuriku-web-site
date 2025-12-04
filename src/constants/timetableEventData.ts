// トラック設定
export const TRACK = {
  TRACK1: {
    name: "toggleルーム",
    tag: "#tskaigi_toggle",
    textColor: "text-white",
    bgColor: "bg-track1-indigo",
  },
  TRACK2: {
    name: "カミナシ堂",
    tag: "#tskaigi_kaminashi",
    textColor: "text-white",
    bgColor: "bg-track2-crimson",
  },
} as const;
export type Track = keyof typeof TRACK;
export const TRACKS = Object.keys(TRACK) as Track[];

// トークタイプ
export const TALK_TYPE = {
  KEYNOTE: {
    name: "基調講演",
    borderColor: "border-talktype-blue",
    textColor: "text-black",
  },
  SESSION: {
    name: "セッション",
    borderColor: "border-talktype-green",
    textColor: "text-black",
  },
  LIGHTNINGTALKS: {
    name: "LT",
    borderColor: "border-talktype-cyan",
    textColor: "text-black",
  },
  SPONSOR_LIGHTNINGTALKS: {
    name: "スポンサーLT",
    borderColor: "border-talktype-cyan",
    textColor: "text-black",
  },
  TEAM_PRESENTATION: {
    name: "チーム発表",
    borderColor: "border-talktype-green",
    textColor: "text-black",
  },
  EVENT: {
    name: "初級者~上級者まで　チームで協力！クイズ大会",
    borderColor: "border-purple-600",
    textColor: "text-black",
  },
} as const;

export type TalkType = keyof typeof TALK_TYPE;

// スピーカー型
export type Speaker = {
  name: string;
  profileImagePath: string;
  biography: string;
  xId?: string;
  githubId?: string;
  additionalLink?: string;
  affiliation?: string;
  position?: string;
};

// トーク型
export type Talk = {
  id: string;
  title: string;
  speakers: Speaker[];
  track: Track;
  talkType: TalkType;
  overview: string[];
  time: string;
};

// トーク一覧
export const talkList: Talk[] = [
  {
    id: "1",
    track: "TRACK1",
    talkType: "KEYNOTE",
    title: "TypeScript 6.0で非推奨化されるオプションたち",
    overview: [``],
    time: "10:40 〜 11:10",
    speakers: [
      {
        name: "うひょ",
        profileImagePath: "1_uhyo.jpg",
        biography: "",
        xId: "uhyo_",
        githubId: "uhyo",
        position: "株式会社カオナビ フロントエンドエキスパート",
      },
    ],
  },
  {
    id: "2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Fullstack TSでマルチプロダクトの基盤開発",
    overview: [
      `MOSHではマルチプロダクト型の開発を行うにあたりFullstack TSへのリアーキテクチャを行っています。このセッションでは、TypeScriptで基盤開発を行う中での技術選定や向き合っている困難について紹介します。`,
    ],
    time: "11:15 〜 11:45",
    speakers: [
      {
        name: "鈴木翔大",
        profileImagePath: "2_shodaisuzuki.jpeg",
        biography:
          "IdaaSプラットフォーム、IoT農園サービスなど様々な組織で技術マネジメントを経験してきました。MOSHではVPoTとして主に技術基盤の改善や開発チームへのイネーブリングを行っています。個人ではorvalのmaintainerとしての開発やrailsなど複数のOSSへのコントリビュート活動を行なっています。",
        xId: "SoartecL",
        githubId: "soartec-lab",
        additionalLink: "https://my.prairie.cards/u/shodai.suzuki",
      },
    ],
  },
  {
    id: "3",
    track: "TRACK2",
    talkType: "SESSION",
    title: "フロントエンドにおける「型」の責務分離に対する1つのアプローチ",
    overview: [` `],
    time: "11:15 〜 11:45",
    speakers: [
      {
        name: "kinocoboy",
        profileImagePath: "3_kinocoboy.jpg",
        biography: "",
        xId: "kinocoboy2",
      },
    ],
  },
  {
    id: "4",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "Perl歴約10年のエンジニアがTypeScriptと出会ってみた",
    overview: [
      `私は約10年、PerlでWebサービスの開発に従事していましたが、現職に転職して初めて「フルスタックTypeScript」で開発するWebサービスに出会い、開発に従事することになりました。
このスポンサーLTでは、そのような環境で自分がどのようにTypeScriptを学んだかをご紹介することで、他のプログラミング言語からTypeScriptの世界へ足を踏み入れるときの（あるいは、踏み入れる人をサポートするときの）一助になればと思っています。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "papix",
        profileImagePath: "4_papix.jpg",
        biography: "",
        xId: "__papix__",
        githubId: "papix",
        affiliation: "トグルホールディングス株式会社",
        position: "エンジニア",
      },
    ],
  },
  {
    id: "5",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "通るURLだけ通す — Monorepoで実現する型安全なリンク設計",
    overview: [
      `Next.jsの新しい機能として公開されたtyped routesが内部リンクのタイポ検出には効く一方、①アプリ内限定のためMicro-Frontend（monorepo）横断では価値が薄い、②dynamic linkに弱い、③pathに限定されており、queryの型付けがない──という課題があります。そこで本LTでは、名前空間付きのURLビルダーを生成することで、Micro-Frontendにおいても型安全なリンクを実現しつつ、queryも踏まえた非リテラルな“生成リンク”でも型の枠内で一貫して扱えるリンク設計を提案します。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "松本泰幸（ya2s）",
        profileImagePath: "5_matsumotoyasuyuki.jpg",
        biography: "",
        xId: "ya2s_x",
        githubId: "ya2s",
        affiliation: "株式会社令和トラベル",
        position: "EM",
      },
    ],
  },
  {
    id: "6",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "フロントエンドアーキテクチャの設計方法論 Feature-Sliced Designの紹介",
    overview: [
      `弊社は運送業向けに設計されたオールインワンSaaS「ロジックス」を提供しています。

ロジックスのフロントエンドは、規模の大きいページのロジックが1箇所にまとまっており実装が肥大化しやすい状況でした。その結果として、「改修時の影響範囲が広い」「コンフリクトが発生しやすい」という課題を抱えていました。

上記の課題を解決するためにFeature-Sliced Designを採用し、コンポーネントを単一の責務ごとに定義することで、各々の機能コンポーネントが低結合,高凝集になるように開発を進めています。

今回のセッションではFeature-Sliced Designの紹介を中心にお話ししたいと思います。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "坂本 圭佑",
        profileImagePath: "6_sakamotokeisuke.jpg",
        biography: "",
        xId: "motikoma",
        affiliation: "アセンド株式会社",
        position: "リードプロダクトエンジニア",
      },
    ],
  },
  {
    id: "7",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "数千〜数万のAgentを司る「Ai Workforce」のウラ側",
    overview: [
      `LLMを活用し汎用的なAgentを作るには単にLLMを使うだけではなく、様々な仕組みが必要となります。Ai Workforceではどのようなアプローチで数千〜数万のAgentを1企業に提供しようとしているかその仕組みを大公開します！`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "小林 篤",
        profileImagePath: "7_kobayashiatsushi.webp",
        biography: "",
        xId: "nekokak",
        githubId: "nekokak",
        additionalLink: "https://note.com/nekokak",
        affiliation: "株式会社LayerX",
        position: "Ai Workforce事業部 CPO 兼 プロダクト部 部長",
      },
    ],
  },
  {
    id: "8",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "カミナシ社初の フルスタックTypeScript 利用の現在",
    overview: [
      `株式会社カミナシでは，バックエンド API の開発には基本的には Go 言語を使っている中，カミナシ教育開発チーム a.k.a Sanma チームではバックエンドも TypeScript を採用．その背景や実際に開発をスタートしてみてどうだったか，現在地から見える良かった点・今後の展望などをお話したいと思います．`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "桑原聖仁",
        profileImagePath: "8_kuwaharakiyohito.jpg",
        biography: "",
        xId: "kuwahara_jsri",
        githubId: "kkeeth",
        additionalLink: "https://keeth.me",
        affiliation:
          "株式会社カミナシ / エンジニアリング本部 Employee Services 部 Negima Engineering ユニット",
        position: "エンジニアリングマネージャー",
      },
    ],
  },
  {
    id: "9",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "挑戦を支えるTypeScript──顧客とエンジニアが共に成長する現場から",
    overview: [
      `ココロザシは、TypeScriptを軸にSES・受託開発事業を展開し、フロントからインフラまでを横断して顧客の課題解決に取り組んでいます。モダナイゼーションと挑戦を後押しする文化のもと、エンジニアとお客様のビジネスが共に成長していく。本セッションでは、そのための私たちの実践をご紹介します。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "坂口真由",
        profileImagePath: "9_wabi.png",
        biography: "",
        xId: "wabi_1318",
        affiliation: "株式会社ココロザシ",
        position: "エンジニア",
      },
    ],
  },
  {
    id: "10",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "Nxはいいぞ！monorepoプロジェクトにおける差分検知を活用した型チェック最適化",
    overview: [
      `CIの実行時間が長すぎて辛いなんて悩みを持ったことはありませんか？生成AI活用によりCIの実行頻度が増加したことにより、今まで以上に開発体験に与える影響は大きくなっています。TypeScriptを使っているプロジェクトであれば、ここにTypeチェックの時間とコンパイルの時間も含まれます。依存ファイルの増加によるCI実行時間の増加の対策として、型チェックの高速化やコンパイラの性能向上、マシンスペックの向上といったスケールアップする方法での解決には限界があります。このトークでは、Nxの差分検知の仕組みとその仕組みを活用したCI高速化の手法について紹介させていただきます。

monorepo構成におけるCI実行時間の効率化に興味がある方、Nxに興味がある方におすすめです。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "甲斐 和基",
        profileImagePath: "10_kaikazuki.jpg",
        biography: "",
        xId: "karukan013L23",
        githubId: "karukan029",
        affiliation: "ファインディ株式会社",
        position: "Team+開発部 フロントエンドエンジニア",
      },
    ],
  },
  {
    id: "11",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "型に救われたアーキテクチャ移行の話",
    overview: [
      `ALGO ARTISでは、社内共通のアプリケーション基盤の上で各ユーザー向けの画面コンポーネントを開発しています。
日頃は基盤があるおかげで高速に開発ができていますが、基盤の更新時には各画面コンポーネントの大規模な修正が必要になりました。

この問題を解決するために開発したのが、基盤の変更を吸収するWrapperです。
このセッションではWrapper開発に寄与した型システムへの感謝を語ります。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "中川 旭",
        profileImagePath: "11_nakagawaakira.jpg",
        biography: "",
        xId: "modo_ckey",
        githubId: "modockey",
        affiliation: "株式会社 ALGO ARTIS",
        position: "ソフトウェアエンジニア",
      },
    ],
  },
  {
    id: "12",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "手書き型をやめてTypeScript×PythonをOpenAPIで繋ぐ",
    overview: [
      `永和システムマネジメントでは受託開発において、さまざまな技術を用いたシステム開発に取り組んでいます。私は約2年前から参画したプロジェクトで、お客様と一緒に、バックエンドはPython、フロントエンドはTypeScriptでWebアプリケーションを開発しています。開発の過程でAPIの変更に気づかず、一部の機能が正常に動作しなくなる事象が発生しました。そこで、実際の業務で起きたAPIの型ズレを題材に、バックエンドから生成したOpenAPIを用いて型エラーを検知する取り組みについてお話しします。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "栗田英治",
        profileImagePath: "12_kuri-eiei.jpg",
        biography: "",
        githubId: "kuri-eiei",
        affiliation: "Agile Studio by 永和システムマネジメント",
        position: "エンジニア",
      },
    ],
  },
  {
    id: "13",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "WebとFlutterの連携をTypeSpecで固めたかった",
    overview: [
      `FlutterのWebView内で表示するウェブアプリからFlutterの機能を呼び出すときのインターフェースをTypeSpecでいい感じにしたかった話をします`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "Ikeno Sosuke",
        profileImagePath: "13_ikenososuke.jpg",
        biography: "",
        xId: "sausukei_",
        githubId: "sausukei",
        additionalLink: "https://www.jig.jp/",
        affiliation: "株式会社jig.jp",
        position: "フロントエンドエンジニア",
      },
    ],
  },
  {
    id: "14",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "型で守る個人情報：TypeScriptによる静的データガバナンス",
    overview: [
      `本セッションでは、TypeScriptを「コード品質」のレイヤーから一歩進め、ビジネスリスク管理をコードレベルで実現する事例を紹介します。

TypeScriptの型システムを「セキュリティガードレール」として活用し、個人情報の意図しない漏洩をレビューや注意力といった属人的なプロセスに頼らず、コンパイル時に防ぐアプローチです。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "高木 克哉",
        profileImagePath: "14.png",
        biography: "",
        xId: "sagasanaidecur",
        affiliation: "チームラボ株式会社",
        position: "フロントエンドスペシャリスト",
      },
    ],
  },
  {
    id: "15",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "社内オペレーション改善のためのTypeScript",
    overview: [
      `利用者数の拡大に伴い、MOSHへのお問い合わせは日々増加しています。技術の活用により対応時間を短縮することは、ユーザーと対応者の双方にとって非常に重要です。
TypeScriptの採用によりSaaS連携を型安全に実装できるようになり、Hono x Cloudflareの採用によって検証・運用のための環境を容易に作成できるようになりました。
本トークでは、TypeScriptを選択して得られた成果と今後の展望についてお話しします。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "Ryo Adachi",
        profileImagePath: "15_adachiryo.jpg",
        biography: "",
        xId: "dachi_023",
        githubId: "dachi023",
        affiliation: "MOSH株式会社",
        position: "ソフトウェアエンジニア",
      },
    ],
  },
  {
    id: "16",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "Effect入門──次の新規開発で役立つ実践指針",
    overview: [
      `「バリデーションは整えたのに内部ロジックの分岐が膨らむ」という課題を起点に、Effectで依存関係ごとの責務分離、失敗チャネルの一元化、テスト容易性の向上をどう実現できるかを紹介します。
Effect.tryで例外を型付きに受け止める方法、Effect.genで段階的なフローを一本化する書き方、そして将来の拡張を見据えた設計の考え方を5分に凝縮。
新しく始めるTypeScriptプロジェクトでEffectを採用するか判断する際のヒントをお届けします。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "ふみや",
        profileImagePath: "16_fumiya.jpg",
        biography: "",
        xId: "fumiyaki_",
        githubId: "fumiyaki",
        affiliation: "株式会社tacoms",
        position: "ソフトウェアエンジニア",
      },
    ],
  },
  {
    id: "17",
    track: "TRACK2",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "4分でわかった気になるRailway Oriented Programming",
    overview: [
      `関数型ドメインモデリングにある、Railway Oriented ProgrammingについてのLTです。
このLTでは、そんな悩みをシンプルに解決する設計思想 Railway Oriented Programming（ROP） を、4分で“わかった気になる”スピード解説で紹介します。

線路（Railway）のように、「成功」と「失敗」の2つのルートを走らせることで、ネストしたtry-catch地獄から抜け出し、データフローを安全かつ美しく表現する方法を学びます。`,
    ],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "シマ",
        profileImagePath: "17_shima.png",
        biography: "",
        affiliation: "Nstock株式会社",
        position: "ソフトウェアエンジニア",
      },
    ],
  },

  {
    id: "18",
    track: "TRACK1",
    talkType: "SESSION",
    title: "denoとtypescriptの関係について改めて考えてみる",
    overview: [
      `TypeScriptが統合されているDenoにどのような可能性があるか、改めて振り返ることを主題とします。ビルドやトランスパイルが他のツールチェーンと比べてどうなっているか、依存関係の管理や内蔵されているテストランナー、リンター、フォーマッターやセキュリティ面などを確認し、Denoを使って何ができるか、それらを踏まえてTypeScriptにどのような可能性があるかなどをみていこうと思います。
後半にはDenoのJupyterカーネルを使ったTypeScriptによるデータ分析なども簡単に見ていきます。`,
    ],
    time: "13:00 〜 13:30",
    speakers: [
      {
        name: "比嘉 一晃",
        profileImagePath: "18_higakazuaki.jpg",
        biography: `沖縄県出身のエンジニア。
これまでWebアプリやChrome拡張機能などのフロントエンド、バックエンド開発に従事。
TypeScriptを用いた開発としてはAngularやReact（TS）、vanilla-ts（Chrome拡張機能）など様々なフレームワークを通して経験を積んできました。
プライベートではDenoなど個人的に気になるOSSに触れて遊んだりしています。`,
        xId: "higakazuaki9",
        githubId: "higak926",
      },
    ],
  },
  {
    id: "19",
    track: "TRACK2",
    talkType: "SESSION",
    title: "type-challenges を全問解いたのでエッセンスと推し問題を紹介してみる",
    overview: [
      `TypeScript の型への理解・型パズル力を高めるために、type-challenges は非常に有用な教材ですが、「問題数が結構多い」「なんだか難しそう」と、食わず嫌いをされがちである印象があります。
そこで本セッションでは、type-challenges の全問題に取り組んだ自分が、解く中で学んだ型パズルのテクニックや、実務に活かせそうな部分などを「エッセンス」として紹介します。`,
    ],
    time: "13:00 〜 13:30",
    speakers: [
      {
        name: "kakekakemiya",
        profileImagePath: "19_kakekakemiya.jpg",
        biography:
          "Front-end Engineer。React と TypeScript が好き。CLI も好き。焼き鳥が大好きな25新卒です。",
        xId: "kakekakemiya",
        githubId: "Kakeru-Miyazaki",
        position: "株式会社ナレッジワーク",
      },
    ],
  },
  {
    id: "20",
    track: "TRACK1",
    talkType: "TEAM_PRESENTATION",
    title: "TypeScript×CASLでつくるSaaSの認可",
    overview: [
      `アプリの認可は、UIでの「見せない」とAPIでの「させない」が分断されがちです。本セッションでは、認可ライブラリCASLを用いて、フロントエンドとバックエンドで同一ポリシーを共有し、RBAC＋ABAC（属性ベース）のハイブリッド設計を型安全に運用する方法を紹介します。`,
    ],
    time: "13:30 〜 14:00",
    speakers: [
      {
        name: "坂津 潤平",
        profileImagePath: "20_sakatsujunpei.jpg",
        biography:
          "AIプロダクトのWebエンジニア。スタートアップ、AbemaTVなどを経て、PeopleXに創業から参画。AI×HR領域の新規サービスを12ヶ月で5本立ち上げ。PeopleX AI面接をTypeScriptのMonorepo構成で開発中。",
        xId: "saka2jp",
        githubId: "saka2jp",
        additionalLink: "https://youtrust.jp/users/saka2jp",
      },
      {
        name: "芹澤 和也",
        profileImagePath: "21_serizawakazuya.jpg",
        biography: `海外大学を卒業後、Goodpatchをはじめ複数のスタートアップ企業でモバイルアプリやSaaSプロダクトの開発に従事。
2024年よりPeopleXでAIプロダクトのフロントエンドリードを務める。`,
        xId: "seriseri_55",
        githubId: "seriseri-123",
      },
    ],
  },
  {
    id: "21",
    track: "TRACK2",
    talkType: "TEAM_PRESENTATION",
    title:
      "アルゴリズムの専門家と挑むフロントエンド実装 − 複雑なロジックを支える設計とパフォーマンス最適化 ",
    overview: [
      ` 株式会社 ALGO ARTIS では、社会基盤の最適化をビジョンとして、計画業務の困難性を解決するソリューションを開発しています。

私たちの製品は、最適化アルゴリズムを専門とするアルゴリズムエンジニアと、UI 開発を専門とするフロントエンドエンジニアがタッグを組み、Web アプリケーションの形で提供を行います。
そのような開発では、しばしば UI 操作に対してリアルタイムに、非常に高度なアルゴリズムを動作させる必要が出てきます。この時、データの規模が大きいこともあり、計算処理そのものが UI パフォーマンスにおけるボトルネックとなってしまいます。

そこで本発表では、大規模かつ高度なアルゴリズムを Web フロントエンド上で高速に動作させるまでの課題と工夫を紹介します。
表出した課題や解決までの試行錯誤を共有するとともに、WebAssemblyを活用し、異なる領域のエンジニア間での開発フローや実装手法について、実践的な知見を説明します。
`,
    ],
    time: "13:30 〜 14:00",
    speakers: [
      {
        name: "澤浦 司",
        profileImagePath: "22_sawauratsukasa.jpeg",
        biography:
          "Web エンジニア。最近はもっぱら React 漬けの生活を送っている。株式会社ALGO ARTIS では、業界特化の計画スケジューラ SaaS『Planium』のフロントエンド開発をリード。",
        xId: "plcherrim",
        githubId: "pulcherriman",
        additionalLink: "https://media.algo-artis.com/posts/6v-Rhf9e",
        position: "株式会社ALGO ARTIS",
      },
      {
        name: "秋吉 圭輔",
        profileImagePath: "23_akiyoshikei.png",
        biography:
          "アルゴリズムエンジニア。最近はもっぱら Rust 漬けの生活を送っている。株式会社ALGO ARTIS では、業界特化の計画スケジューラ SaaS『Planium』のアルゴリズム開発をリード。",
        githubId: "udon1206",
        position: "株式会社ALGO ARTIS",
      },
    ],
  },
  {
    id: "22",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "同期APIの壁を越える：TypeScriptで設計する、堅牢さとUXを両立した非同期ワークフローの実現",
    overview: [
      `複数のドメインコンテキストで構成されるWebシステムは、コンテキストを跨ぐ更新を行う同期APIがパフォーマンスの悪化や障害の連鎖を招き、ユーザー体験を損ねがちです。本セッションでは、非同期で実行されるコンテキスト間データ連携を設計する知識を体系的にまとめつつ、特にTypeScriptの"型＝契約"を核にしたイベント駆動＋Sagaパターンを採用した場合の実戦知を共有します。`,
    ],
    time: "14:10 〜 14:40",
    speakers: [
      {
        name: "moeka",
        profileImagePath: "24_moeka.jpg",
        biography: `SIerでのバックエンドエンジニアを経て、2022年7月に4人目エンジニアとしてアセンドに入社。プロダクトマネジメント、UI/UXデザイン, フロントエンドまで領域を広げ、運送会社向けオールインワン運行管理SaaS「ロジックス」の開発に携わる。現在は10->100より0->1、1->10案件に単身でぶち込まれがちなリードエンジニア。
型パズルとDDDが好き。`,
        xId: "moeka__c",
      },
    ],
  },
  {
    id: "23",
    track: "TRACK2",
    talkType: "SESSION",
    title: "「TSのAPI型安全」の対価は誰が払う？ 不公平なスキーマ駆動に終止符を打つハイブリッド戦略",
    overview: [
      `近年、OpenAPIやgRPCによるスキーマ駆動開発（SDD）が主流となる一方で、その運用が「フロントエンドの型安全性を、バックエンドの高い運用コストと交換している」に過ぎないケースを見かけることが増えました。

あなたのチームのSDDは本当に「全体最適」に機能していますか？
チーム全体の理解、特にバックエンドエンジニアの納得感を十分に得られていますか？

本セッションでは、まずSDDがコストのシフトに終わる構造的な問題（局所最適化、永続的な手動管理コスト）を分析します。
その上で、「SDDにおけるROIの最大化」と「長期的な運用コストの最小化」を両立させるための二軸の戦略を提案します。`,
    ],
    time: "14:10 〜 14:40",
    speakers: [
      {
        name: "Hal",
        profileImagePath: "25_hal.jpg",
        biography: `LIXIL アプリケーションエキスパート
フロントエンドだけでなくバックエンド、インフラを行き来するシャトルランエンジニア🚀
最近はTypiaが気になっています`,
        xId: "hal_spidernight",
        githubId: "Hal-Spidernight",
        position: "株式会社LIXIL",
      },
    ],
  },
  {
    id: "24",
    track: "TRACK1",
    talkType: "SESSION",
    title: "レガシーシステム刷新におけるTypeSpecスキーマ駆動開発のすゝめ",
    overview: [` `],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "karacoro / からころ",
        profileImagePath: "26_karacoro.jpg",
        biography: "",
        xId: "karan_corons",
        githubId: "tsukuha",
      },
    ],
  },
  {
    id: "25",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "リスクゼロでデリバリーする ― Open Feature × DevCycleの機能解放戦略",
    overview: [
      `本LTでは、マッチングアプリ「tapple」の大規模なマイクロサービス移行において採用した、DevCycleの強力なリリース制御と、CNCF準拠のOpen FeatureによるTypeScript SDKを用いたコードの抽象化を組み合わせた機能解放戦略、そしてそれによって享受できた巨大なメリットの事例を紹介します。`,
    ],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "Issa",
        profileImagePath: "27_Issa.jpeg",
        biography:
          "タップルのバックエンドエンジニア。DDD・クリーンアーキテクチャへのリアーキ・マイクロサービス移行のリードを務める。TypeScriptだけでなく関西語を話すのが持ち味、社内ではDDDヤクザと呼ばれる。",
        xId: "DadaAux",
        githubId: "aux-Issa",
        additionalLink: "https://www.linkedin.com/in/issa-itoi-815187225/",
        position: "株式会社サイバーエージェント",
      },
    ],
  },
  {
    id: "26",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "アプリケーションの拡大に伴う開発者体験の悪化をなんとかする",
    overview: [` `],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "福田哲也",
        profileImagePath: "28_fukudatetsuya.png",
        biography: "",
        xId: "gendaihyousyou",
        githubId: "ghken",
      },
    ],
  },
  {
    id: "27",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "Zod × Web Workerを用いた型安全かつUIファーストなIPアドレスCSV一括登録",
    overview: [
      `本セッションでは、Zod v4 で新たに追加されたIPv4,v6,CIDRv4,v6スキーマを用いてバリデーションを行いつつ、重複・包含判定処理をWeb Worker で並列的に処理を行うことで効率的に判定処理を行い、UIファーストな実装を目指した取り組みから得た知見を共有します。`,
    ],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "かっつー",
        profileImagePath: "29_kattsu.jpg",
        biography: `東京大学大学院
フロントエンドに興味があります。`,
        xId: "astrotyotogood",
        githubId: "fkatsuhiro",
      },
    ],
  },
  {
    id: "28",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "AIエージェントのプロンプトを自然言語ではなくTypeScriptで書いてみる試み",
    overview: [
      ` 「頭が赤い魚を食べる猫」という言葉をご存知でしょうか？簡単に言えば「どこに句読点を置くかで意味が異なる言葉」です。句読点の位置によっては「魚の頭が赤い」と読むことも、「猫の頭が赤い」と読むこともできます。これはLLMにおいても当てはまります。ユーザはAの解釈でプロンプトを書いたとしても、LLMはBの解釈として捉える可能性があるということです。
そこで私はTypeScriptを用いた構造的なプロンプトを考えました。TypeScript含め一般的なプログラミング言語は自然言語と比べ、より厳格な木構造の形になっているので解釈の問題は起こりにくい、と考えたためです。
ここでは実際に、AIエージェントに開発の流れを伝えるプロンプトを自然言語ではなくTypeScriptで指示したことにより一定の効果を感じたので、そのやり方と結果を発表していきたいと思います。`,
    ],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "あかほし",
        profileImagePath: "30_akahoshi.jpg",
        biography:
          "新卒2年目のフロントエンドエンジニアです。会社でも副業でも趣味でもずっとTypeScript書いています。最近はSpec Workflow MCPが気になっています👀(まだ触れてないけど)",
        xId: "akahoshi_1421",
        githubId: "akahoshi1421",
        position: "株式会社i-plug",
      },
    ],
  },
  {
    id: "29",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "パイプ演算子をTypeScriptに勝手に実装して遊ぶ話",
    overview: [` `],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "中村 崇人",
        profileImagePath: "31_nakamuratakahito.jpg",
        biography: "",
        xId: "aTakatoNakamura",
      },
    ],
  },
  {
    id: "30",
    track: "TRACK1",
    talkType: "SESSION",
    title: "型情報を手繰り寄せる技術〜TypeScript Compiler APIによる型解析実践〜",
    overview: [
      `TypeScriptの型情報から他言語のクラス定義や、データベーススキーマ、API仕様書を自動生成できたら便利だと思いませんか？

TypeScript Compiler APIを使えば、型情報を解析して様々な形式に変換することが可能です。しかし、実際に型情報の解析を行おうとしても、丁寧なドキュメントが用意されているわけでもないため、挫折してしまいがちです。

本セッションでは、型定義からHTMLを生成できるhtml-typeを題材に、実際にTypeScript Compiler APIを使って解析していく過程をステップバイステップで解説していきます。`,
    ],
    time: "15:30 〜 16:00",
    speakers: [
      {
        name: "jiko21",
        profileImagePath: "32_jiko21.jpg",
        biography: `新卒時よりフロントエンドエンジニアとしてキャリアをスタートし、メガベンチャーやスタートアップを経て、現在はエムスリー株式会社に所属。フロントエンドだけではなくバックエンドやアプリ開発も担当。
TC39のProposalを追うのも好きで、最近はproposal compositesが気になるところ。`,
        xId: "jiko_21",
        githubId: "jiko21",
        position: "エムスリー株式会社",
      },
    ],
  },
  {
    id: "31",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Welcome to the “Fantasy Land” 🧚 − 代数的構造をめぐる冒険 −",
    overview: [
      `プログラムの抽象化にはさまざまな考え方がありますが、TypeScript プログラマーにとって Promise は、最も恩恵を受けている抽象化の 1 つでしょう。また近年では neverthrow などにおける Result も、活用が広がっているように思います。

さて、Promise と Result という一見異なるように思える抽象化にも、実は共通の構造が潜んでいます。それを紐解くキーワードが「Algebraic Structure / 代数的構造」です。

本セッションでは：

- そもそも代数的構造とは何か？
- プログラムの抽象化に役立つ代表的な代数的構造
- ライブラリ実装における標準化仕様 − "Fantasy Land"
- TC39 Proposals による未来の姿

... といった流れで、TypeScript プログラミングにおける新たな知見を提供できればと思います。`,
    ],
    time: "15:30 〜 16:00",
    speakers: [
      {
        name: "TAKASE Kazuyuki (@Guvalif)",
        profileImagePath: "33_guvalif.png",
        biography:
          '普段は EdTech × ML 系プロダクトのプロトタイピングに従事しています。クライアントサイドに適した軽量かつ疎結合なアーキテクチャに関心があり、"関数型プログラミング" を軸にいろいろとアイデアを発表しています ⚡️',
        xId: "guvalif",
        githubId: "Guvalif",
        additionalLink: "https://www.wantedly.com/id/guvalif",
        position: "株式会社ドワンゴ / 教育事業本部 / TechPM",
      },
    ],
  },
  {
    id: "32",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Building AI Agents with TypeScript",
    overview: [
      `AI・機械学習の開発エコシステムは Python を中心とした状況から、TypeScript をはじめとする他言語へと広がっています。LLM は汎用性を獲得すると同時に巨大化し、その利用は API 経由が必然となりました。この流れの中で Web 技術との親和性やライブラリ整備が進み、フルスタック TypeScript 開発の延長で AI 機能を実装できる環境が整いつつあります。

 本セッションでは、その具体的な例としてシンプルな AI Agent を実装しつつ段階的に機能を拡張していくサンプルを用いて、TypeScript で AI Agent を実装する考え方やプロセスを解説します。また、従来の Web アプリケーション開発と比較して、開発者は何を考えて設計・実装をするのかがあるのかを、具体的なコード例を通して紹介します。`,
    ],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "izumin5210",
        profileImagePath: "34_izumin5210.jpeg",
        biography: `バクラク事業部 PlatformEngineering部 Enablingチーム。 プロダクト開発やバックエンド・Webフロントエンドの設計・基盤開発などをしています。 最近はAI何もわからん状態ながらAI Agent開発に加わり、AI Agentを作るためのPlatformを作っている。

AI何もわからん。`,
        xId: "izumin5210",
        githubId: "izumin5210",
        additionalLink: "https://www.wantedly.com/id/izumin",
        position: "株式会社LayerX / Staff Software Engineer",
      },
    ],
  },
  {
    id: "33",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "TDMaCのススメ - cittyを使ってテストデータ作成を効率化する",
    overview: [` `],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "Kanon",
        profileImagePath: "35_kanon.jpg",
        biography: "",
        xId: "ysknsid25",
        githubId: "ysknsid25",
      },
    ],
  },
  {
    id: "34",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "TypeScriptの型システムを活用した複合認証システムの設計パターン",
    overview: [`認証システムの開発で、複雑化したコードを何とかリファクタリングした話 `],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "高橋哉人",
        profileImagePath: "36_takahashi.jpg",
        biography: "25卒のエンジニア。TypeScriptでフルスタックに開発しています。",
        xId: "kanayan_toggle",
        githubId: "ml-Takahashi",
        position: "株式会社トグルホールディングス",
      },
    ],
  },
  {
    id: "35",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "TC39 Signals で描くJS/TS/フレームワークの未来の姿",
    overview: [
      `TC39の新しい提案「Signals」によって、フロントエンドやそれ以外のJS/TSを使う開発に様々な変化があると予想されています。
このLTでは、Signals が導入された未来のJS/TS開発の姿をサクッとお話します！`,
    ],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "takuma-ru",
        profileImagePath: "37_takuma-ru.jpg",
        biography: "♥️ 🐈️ ♥️ Vue.js",
        xId: "takumaru_2222",
        githubId: "takuma-ru",
        additionalLink: "https://takumaru.dev/",
        position: "チームラボ / パッケージチーム フロントエンド班",
      },
    ],
  },
  {
    id: "36",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "oxc-transformとisolatedDeclarationsで手に入れるtscなし型定義ファイル生成",
    overview: [
      `最近登場したライブラリ向けバンドラであるtsdownには、tscを使わずに型定義ファイルを生成する機能が実装されています。内部で使用されているoxc-transformは、TypeScriptのisolatedDeclarationsオプションによる制約のもと、型推論を回避することで高速に型定義を生成しています。
本LTでは、isolatedDeclarationsによって得られる利点と課せられる制約、そしてその厳しさについて紹介します。`,
    ],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "elecdeer",
        profileImagePath: "38_elecdeer.png",
        biography:
          "TypeScriptとReactのファン。手触りの良いアプリや便利なツールを作ることに関心があります。",
        xId: "elecdeerdev",
        githubId: "elecdeer",
      },
    ],
  },
  {
    id: "37",
    track: "TRACK1",
    talkType: "LIGHTNINGTALKS",
    title:
      "`tsc --init` の設計思想の変化とその背景を追う - “教育的”アプローチから実用性重視への転換",
    overview: [
      `TypeScript 5.9からtsc --initの出力内容が大きく変更されました。本セッションでは、この変更に至った経緯とTypeScriptチームの意図を深掘りします。モダンなTypeScript環境でのtsconfigを見直すきっかけになればと思います。`,
    ],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "大塚竜太郎",
        profileImagePath: "39_otsukaryutaro.jpg",
        biography:
          "フロントエンドエンジニア。最新のエコシステム動向からマネージメントも含めた広義のエンジニアリングまで幅広く興味関心。チームラボではフロントエンドスペシャリストとして横断的な課題解決に従事。寿司と能登牛と蟹を食べにきました。",
        xId: "tsuka_ryu",
        position: "チームラボ",
      },
    ],
  },
  {
    id: "38",
    track: "TRACK1",
    talkType: "LIGHTNINGTALKS",
    title: "TypeScript ASTを活用した意味差分抽出の紹介",
    overview: [` `],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "武井勇也",
        profileImagePath: "40_takewell.jpeg",
        biography: "",
        xId: "takewell_",
        githubId: "takewell",
      },
    ],
  },
  {
    id: "39",
    track: "TRACK1",
    talkType: "LIGHTNINGTALKS",
    title: "TS 5.9で使えるようになった import defer でパフォーマンス最適化を実現する",
    overview: [
      `TypeScript 5.9 で新たに利用可能になった import defer について、その機能と実践的な活用法を解説します。
import defer は、モジュールの「読み込み」と「実行（評価）」を分離し、アクセスされるまで実行を遅延させることができます。
本発表では、まず従来の import との挙動の違いをシンプルなコードで比較し、 import defer の基本的な仕組みを解説します。そして、具体的なシナリオから、 import defer を用いてパフォーマンスを向上させられるのか紹介します。制約などの注意点にも触れ、明日から import defer を活用するための知識を提供します。
import defer のメリットと使い方を理解し、自身のプロジェクトでの活用を具体的にイメージできるようになることを目指します。`,
    ],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "おおいし (bicstone)",
        profileImagePath: "41_bicstone.jpg",
        biography:
          "建設業界で機械設計に従事していたが、テクノロジーの力で世の中の摩擦を解決したいと考えるようになり2019年にWebエンジニアに転向。5年以上Vertical SaaSの開発に携わる。多角的なアプローチで迅速かつ効果的にプロダクトの価値を最大化し、社会やステークホルダーの課題解決に貢献。",
        xId: "bicstone_me",
        githubId: "bicstone",
        additionalLink: "https://bicstone.me/",
      },
    ],
  },
  {
    id: "40",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "React / TypeScriptでのカラーピッカーの実装戦略",
    overview: [
      `皆さんはカラーピッカーを実装したことがありますか？
一見すると単純そうな機能ですが、HTML標準の <input type="color"> や多数のnpmライブラリが存在しながらも、2025年現在「これが最適」と言える実装方法はまだ定まっていないように思えます。
本LTでは、React / TypeScriptを用いて、多様なカラーコード形式や、グラデーションを含む型設計といった課題にどのように向き合い、型安全かつ効率的に実装していけるかを議論します。`,
    ],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "t-jimbo",
        profileImagePath: "42_t-jimbo.jpg",
        biography: "フロントエンド寄りのソフトウェアエンジニア 石川県金沢市出身です。",
        xId: "ce_mm",
        githubId: "t-jimbo",
        position: "株式会社プレイド",
      },
    ],
  },
  {
    id: "41",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "Branded Typesで日時の複雑さと戦う",
    overview: [` `],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "Saji",
        profileImagePath: "43_saji.jpeg",
        biography: "",
        xId: "sajikix",
        githubId: "sajikix",
        additionalLink: "https://sajikix.dev/",
      },
    ],
  },
];
