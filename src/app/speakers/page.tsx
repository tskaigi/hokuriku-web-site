"use client";

import ExternalLink from "@/components/sponsors/sponsors-external-link";
import { LT, SESSION, TEAM_SESSION } from "@/constants/talks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Fragment } from "react";

const TABS = ["ALL" as const, "Session" as const, "LT" as const, "チーム発表" as const];
type Tab = (typeof TABS)[number];

const parseTab = (tab: string | null): Tab => {
  if (!tab || !(TABS as string[]).includes(tab as Tab)) {
    return "ALL";
  }
  return tab as Tab;
};

const Page = () => {
  const searchParams = useSearchParams();
  const selected = parseTab(searchParams.get("tab"));

  const showSession = selected === "ALL" || selected === "Session";
  const showLT = selected === "ALL" || selected === "LT";
  const showTeamSession = selected === "ALL" || selected === "チーム発表";

  return (
    <div className="mx-auto max-w-[1000px] px-4 pt-16 pb-10 md:px-8">
      <h1 className="text-sponsor-title py-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        採択トーク
      </h1>
      <main>
        <nav className="fixed right-4 bottom-[calc(env(safe-area-inset-bottom)+16px)] flex items-center gap-1 rounded-lg bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md md:sticky md:top-[72px]">
          {TABS.map((tab) => (
            <Fragment key={tab}>
              <Link
                data-selected={selected === tab}
                href={"/speakers?tab=" + tab}
                className="min-w-[54px] cursor-pointer border-b-2 border-b-transparent px-2 py-1 text-center transition-transform hover:bg-slate-100 active:translate-y-px data-[selected=true]:border-b-slate-800 data-[selected=true]:font-bold"
              >
                {tab}
              </Link>
              {tab === "ALL" && (
                <hr className="mx-3 my-2 h-auto self-stretch border-r border-transparent border-r-slate-800" />
              )}
            </Fragment>
          ))}
          <div className="ml-auto hidden md:block">
            <ExternalLink href="https://tskaigi.hatenablog.com/entry/2025/10/14/140147" size="sm">
              採択結果をブログで確認する
            </ExternalLink>
          </div>
        </nav>
        {selected === "チーム発表" && (
          <div className="mt-4 px-4 py-2">
            TSKaigi Hokurikuでは今回の開催にあたり、「チーム発表」枠を新たに設けました。
            同じプロジェクト・チームでの取り組みを、異なる立場・役割の2名がそれぞれの視点から語る形式です。
          </div>
        )}
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {showSession &&
            SESSION.map((talk) => (
              <div
                key={talk.name}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
              >
                <div className="px-4 text-lg font-bold">{talk.title}</div>
                <div className="mt-auto px-4">Speaker: {talk.name}</div>
                <div className="bg-primary px-4 py-1 text-center font-bold text-[white]">
                  Session
                </div>
              </div>
            ))}
          {showLT &&
            LT.map((talk) => (
              <div
                key={talk.name}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
              >
                <div className="px-4 text-lg font-bold">{talk.title}</div>
                <div className="mt-auto px-4">Speaker: {talk.name}</div>
                <div className="bg-[#F64D93] px-4 py-1 text-center font-bold text-[white]">LT</div>
              </div>
            ))}
          {showTeamSession &&
            TEAM_SESSION.map((talk) => (
              <div
                key={talk.name}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
              >
                <div className="px-4 text-lg font-bold">{talk.title}</div>
                <div className="mt-auto px-4">Speaker: {talk.name}</div>
                <div className="bg-[#00b969] px-4 py-1 text-center font-bold text-[white]">
                  チーム発表
                </div>
              </div>
            ))}
        </div>
        <div className="mt-4">
          タイムテーブルについては、決まり次第こちらの公式サイトで発表いたします。
        </div>
        <div className="mt-4">
          <ExternalLink href="https://tskaigi.hatenablog.com/entry/2025/10/14/140147">
            採択結果をブログで確認する
          </ExternalLink>
        </div>
      </main>
    </div>
  );
};

export default Page;
