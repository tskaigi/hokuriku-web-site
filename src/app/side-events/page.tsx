import ButtonLink from "@/components/button-link";
import { ArrowUpRightFromSquare } from "lucide-react";
import Image from "next/image";

const Page = () => {
  return (
    <main className="bg-blue-light-100 font-noto py-10 pt-16 md:px-8">
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        サイドイベント
      </h1>
      <section className="mx-auto max-w-4xl px-4">
        <p>
          TSKaigiのスポンサー企業によって実施される、TSKaigiのサイドイベントをご紹介します！正確な情報は各イベントページをご確認ください！
        </p>
      </section>
      <div className="mx-auto mt-4 flex max-w-4xl flex-col gap-8 bg-white p-6 md:rounded-xl lg:p-10">
        <section className="flex flex-col gap-4">
          {/* 見出し */}
          <div className="flex flex-col text-xl leading-relaxed md:flex-row">
            <div className="font-normal">11/21開催</div>
            <hr className="mx-4 my-1 hidden h-auto border-r border-t-transparent border-r-black/50 md:block" />
            <h2 className="font-bold">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:no-underline"
                href="https://findy.connpass.com/event/374040/"
              >
                Findy Drinkup at TSKaigi Hokuriku 2025
                <ArrowUpRightFromSquare size={18} className="ml-1 inline" />
              </a>
            </h2>
          </div>

          {/* サムネイル */}
          <div className="md:px-4">
            <Image
              src="/sideEvents/findy-drinkup.png"
              alt="Findy Drinkup at TSKaigi Hokuriku 2025 at 金沢 11/2 (Sat) 18:30 - 20:30 開催場所 さぶろうべい尾山町店"
              width={800}
              height={600}
            />
          </div>

          {/* イベント紹介 */}
          <p>
            ファインディはTSKaigi Hokuriku 2025 のスポンサーです。
            <br />
            このたび、カンファレンス前日夜に Drinkupイベント を開催します！
            <br />
            料理とドリンクをご用意していますので、カンファレンスの参加者同士でゆったり交流しましょう。
            <br />
            会場は さぶろうべい尾山町店 です！
            <br />
            TypeScript談義に花を咲かせるのもよし、カジュアルに語り合うのもよし。
            <br />
            初めての方も大歓迎です。 金沢で過ごす夜、仲間と一緒に楽しみましょう！
          </p>

          {/* ボタン */}
          <div className="mx-auto w-max py-4">
            <ButtonLink href="https://findy.connpass.com/event/374040/">
              イベント詳細はこちら
            </ButtonLink>
          </div>
        </section>
        <hr />
        <p className="text-sm">※ 掲載を希望されるスポンサー様はスタッフまでご連絡ください</p>
      </div>
    </main>
  );
};

export default Page;
