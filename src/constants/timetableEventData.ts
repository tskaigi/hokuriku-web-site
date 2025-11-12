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
    name: "現地参加者向け企画",
    borderColor: "border-purple-600",
    textColor: "text-black",
  },
} as const;

export type TalkType = keyof typeof TALK_TYPE;

// スピーカー型
export type Speaker = {
  name: string;
  username: string;
  profileImagePath?: string;
  biography?: string;
  xUrl?: string;
  githubUrl?: string;
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
        username: "",
        profileImagePath: "1_uhyo.jpg",
        biography: "",
        xUrl: "https://x.com/uhyo_",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "フロントエンドエキスパート",
      },
    ],
  },
  {
    id: "2",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Fullstack TSでマルチプロダクトの基盤開発",
    overview: [``],
    time: "11:15 〜 11:45",
    speakers: [
      {
        name: "鈴木翔大",
        username: "Shodai Suzuki",
        profileImagePath: "2_shodaisuzuki.jpeg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
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
        username: "",
        profileImagePath: "",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "4",
    track: "TRACK1",
    talkType: "SPONSOR_LIGHTNINGTALKS",
    title: "掲載準備中",
    overview: [``],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "",
        username: "",
        profileImagePath: "",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "トグルホールディングス株式会社",
        position: "",
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
        username: "マツモトヤスユキ",
        profileImagePath: "5_matsumotoyasuyuki.jpg",
        biography: "",
        xUrl: "https://x.com/ya2s_x",
        githubUrl: "https://github.com/ya2s",
        additionalLink: "",
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
        username: "さかもと けいすけ",
        profileImagePath: "6_sakamotokeisuke.jpg",
        biography: "",
        xUrl: "https://x.com/motikoma",
        githubUrl: "",
        additionalLink: "",
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
        username: "こばやし あつし",
        profileImagePath: "7_kobayashiatsushi.webp",
        biography: "",
        xUrl: "https://x.com/nekokak",
        githubUrl: "https://github.com/nekokak",
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
        username: "くわはらきよひと",
        profileImagePath: "8_kuwaharakiyohito.jpg",
        biography: "",
        xUrl: "https://x.com/kuwahara_jsri",
        githubUrl: "https://github.com/kkeeth",
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
        username: "さかぐちまゆ",
        profileImagePath: "9_wabi.png",
        biography: "",
        xUrl: "https://x.com/wabi_1318",
        githubUrl: "",
        additionalLink: "",
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
        username: "かい かずき",
        profileImagePath: "10_kaikazuki.jpg",
        biography: "",
        xUrl: "https://x.com/karukan013L23",
        githubUrl: "https://github.com/karukan029",
        additionalLink: "",
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
    overview: [`ALGO ARTISでは、社内共通のアプリケーション基盤の上で各ユーザー向けの画面コンポーネントを開発しています。
日頃は基盤があるおかげで高速に開発ができていますが、基盤の更新時には各画面コンポーネントの大規模な修正が必要になりました。

この問題を解決するために開発したのが、基盤の変更を吸収するWrapperです。
このセッションではWrapper開発に寄与した型システムへの感謝を語ります。`],
    time: "12:00 〜 12:35",
    speakers: [
      {
        name: "中川 旭",
        username: "なかがわ あきら",
        profileImagePath: "11_nakagawaakira.jpg",
        biography: "",
        xUrl: "https://x.com/modo_ckey",
        githubUrl: "https://github.com/modockey",
        additionalLink: "",
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
        username: "くりたえいじ",
        profileImagePath: "12_kuri-eiei.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "https://github.com/kuri-eiei",
        additionalLink: "",
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
        username: "いけのそうすけ",
        profileImagePath: "13_ikenososuke.jpg",
        biography: "",
        xUrl: "https://x.com/sausukei_",
        githubUrl: "https://github.com/sausukei",
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
        username: "たかぎ かつや",
        profileImagePath: "",
        biography: "",
        xUrl: "https://x.com/sagasanaidecur",
        githubUrl: "",
        additionalLink: "",
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
        username: "アダチ リョウ",
        profileImagePath: "15_adachiryo.jpg",
        biography: "",
        xUrl: "https://x.com/dachi_023",
        githubUrl: "https://github.com/dachi023",
        additionalLink: "",
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
        username: "ふみや",
        profileImagePath: "16_fumiya.jpg",
        biography: "",
        xUrl: "https://x.com/fumiyaki_",
        githubUrl: "https://github.com/fumiyaki",
        additionalLink: "",
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
        username: "シマ",
        profileImagePath: "",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
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
    overview: [``],
    time: "13:00 〜 13:30",
    speakers: [
      {
        name: "比嘉 一晃",
        username: "HigaKazuaki",
        profileImagePath: "18_higakazuaki.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "19",
    track: "TRACK1",
    talkType: "SESSION",
    title: "type-challenges を全問解いたのでエッセンスと推し問題を紹介してみる",
    overview: [``],
    time: "13:00 〜 13:30",
    speakers: [
      {
        name: "kakekakemiya",
        username: "",
        profileImagePath: "19_kakekakemiya.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "20",
    track: "TRACK1",
    talkType: "TEAM_PRESENTATION",
    title: "TypeScript×CASLでつくるSaaSの認可",
    overview: [``],
    time: "13:30 〜 14:00",
    speakers: [
      {
        name: "坂津 潤平",
        username: "さかつ じゅんぺい",
        profileImagePath: "20_sakatsujunpei.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
      {
        name: "芹澤 和也",
        username: "せりざわ かずや",
        profileImagePath: "21_serizawakazuya.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "21",
    track: "TRACK2",
    talkType: "TEAM_PRESENTATION",
    title:
      "アルゴリズムの専門家と挑むフロントエンド実装 − 複雑なロジックを支える設計とパフォーマンス最適化 ",
    overview: [` `],
    time: "13:30 〜 14:00",
    speakers: [
      {
        name: "澤浦 司",
        username: "sawauratsukasa",
        profileImagePath: "22_sawauratsukasa.jpeg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
      {
        name: "秋吉 圭輔",
        username: "akiyoshikei",
        profileImagePath: "23_akiyoshikei.png",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "22",
    track: "TRACK1",
    talkType: "SESSION",
    title:
      "同期APIの壁を越える：TypeScriptで設計する、堅牢さとUXを両立した非同期ワークフローの実現",
    overview: [``],
    time: "14:10 〜 14:40",
    speakers: [
      {
        name: "moeka",
        username: "moeka",
        profileImagePath: "24_moeka.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "23",
    track: "TRACK2",
    talkType: "SESSION",
    title: "「TSのAPI型安全」の対価は誰が払う？ 不公平なスキーマ駆動に終止符を打つハイブリッド戦略",
    overview: [` `],
    time: "14:10 〜 14:40",
    speakers: [
      {
        name: "Hal",
        username: "hal",
        profileImagePath: "25_hal.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
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
        username: "karacoro",
        profileImagePath: "26_karacoro.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "25",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "リスクゼロでデリバリーする ― Open Feature × DevCycleの機能解放戦略",
    overview: [` `],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "Issa",
        username: "issa",
        profileImagePath: "27_Issa.jpeg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
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
        username: "fukudatetsuya",
        profileImagePath: "28_fukudatetsuya.png",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "27",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "Zod × Web Workerを用いた型安全かつUIファーストなIPアドレスCSV一括登録",
    overview: [` `],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "かっつー",
        username: "",
        profileImagePath: "29_kattsu.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "28",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "AIエージェントのプロンプトを自然言語ではなくTypeScriptで書いてみる試み",
    overview: [` `],
    time: "14:40 〜 15:10",
    speakers: [
      {
        name: "あかほし",
        username: "Akahoshi",
        profileImagePath: "30_akahoshi.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
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
        username: "nakamuratakahito",
        profileImagePath: "31_nakamuratakahito.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "30",
    track: "TRACK1",
    talkType: "SESSION",
    title: "型情報を手繰り寄せる技術〜TypeScript Compiler APIによる型解析実践〜",
    overview: [` `],
    time: "15:30 〜 16:00",
    speakers: [
      {
        name: "jiko21",
        username: "",
        profileImagePath: "32_jiko21.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "31",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Welcome to the “Fantasy Land” 🧚 − 代数的構造をめぐる冒険 −",
    overview: [` `],
    time: "15:30 〜 16:00",
    speakers: [
      {
        name: "TAKASE Kazuyuki (@Guvalif)",
        username: "",
        profileImagePath: "33_guvalif.png",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "32",
    track: "TRACK1",
    talkType: "SESSION",
    title: "Building AI Agents with TypeScript",
    overview: [` `],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "izumin5210",
        username: "",
        profileImagePath: "34_izumin5210.jpeg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
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
        username: "",
        profileImagePath: "35_kanon.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "34",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "TypeScriptの型システムを活用した複合認証システムの設計パターン",
    overview: [` `],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "高橋哉人",
        username: "",
        profileImagePath: "36_takahashi.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "35",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "TC39 Signals で描くJS/TS/フレームワークの未来の姿",
    overview: [` `],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "takuma-ru",
        username: "",
        profileImagePath: "37_takuma-ru.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "36",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "oxc-transformとisolatedDeclarationsで手に入れるtscなし型定義ファイル生成",
    overview: [` `],
    time: "16:00 〜 16:30",
    speakers: [
      {
        name: "elecdeer",
        username: "",
        profileImagePath: "38_elecdeer.png",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "37",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title:
      "`tsc --init` の設計思想の変化とその背景を追う - “教育的”アプローチから実用性重視への転換",
    overview: [` `],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "大塚竜太郎",
        username: "otsukaryutaro",
        profileImagePath: "39_otsukaryutaro.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
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
        username: "",
        profileImagePath: "40_takewell.jpeg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "39",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "TS 5.9で使えるようになった import defer でパフォーマンス最適化を実現する",
    overview: [` `],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "おおいし (bicstone)",
        username: "",
        profileImagePath: "41_bicstone.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "40",
    track: "TRACK2",
    talkType: "LIGHTNINGTALKS",
    title: "React / TypeScriptでのカラーピッカーの実装戦略",
    overview: [` `],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "t-jimbo",
        username: "",
        profileImagePath: "42_t-jimbo.jpg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
  {
    id: "41",
    track: "TRACK2",
    talkType: "SESSION",
    title: "Branded Typesで日時の複雑さと戦う",
    overview: [` `],
    time: "16:40 〜 17:00",
    speakers: [
      {
        name: "Saji",
        username: "",
        profileImagePath: "43_saji.jpeg",
        biography: "",
        xUrl: "",
        githubUrl: "",
        additionalLink: "",
        affiliation: "",
        position: "",
      },
    ],
  },
];
