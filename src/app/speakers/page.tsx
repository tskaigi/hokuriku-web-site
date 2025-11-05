"use client";

import ExternalLink from "@/components/sponsors/sponsors-external-link";
import { KEYNOTE_SESSION, LT, SESSION, SPONSOR_LT, TEAM_SESSION } from "@/constants/talks";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const TABS = ["ALL" as const, "Session" as const, "LT" as const, "SponsorLT" as const];
type Tab = (typeof TABS)[number];

const TAB_LABELS: Record<Tab, string> = {
  ALL: "ALL",
  Session: "セッション",
  LT: "LT",
  SponsorLT: "スポンサーLT",
};

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
  const showSponsorLT = selected === "ALL" || selected === "SponsorLT";

  return (
    <div className="mx-auto max-w-[1000px] px-4 pt-16 pb-10 md:px-8">
      <h1 className="text-sponsor-title py-10 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        採択トーク
      </h1>
      <main>
        <nav className="sticky top-[72px] flex items-center gap-2 rounded-lg bg-white/80 px-2 py-2 shadow-sm backdrop-blur-md">
          {/* ALL タブ */}
          <Link
            data-selected={selected === "ALL"}
            href="/speakers"
            className="min-w-[54px] cursor-pointer rounded border-b-2 border-b-transparent p-1 text-center transition-transform hover:bg-slate-100 active:translate-y-px data-[selected=true]:rounded-b-none data-[selected=true]:border-b-slate-800 data-[selected=true]:font-bold sm:px-2"
          >
            {TAB_LABELS["ALL"]}
          </Link>
          <hr className="h-auto self-stretch border-r border-transparent border-r-slate-800" />

          {/* セッション種別ごとのタブ */}
          <div className="flex flex-wrap gap-1">
            {TABS.filter((tab) => tab !== "ALL").map((tab) => (
              <Link
                key={tab}
                data-selected={selected === tab}
                href={"/speakers?tab=" + tab}
                className="min-w-[54px] cursor-pointer rounded border-b-2 border-b-transparent p-1 text-center transition-transform hover:bg-slate-100 active:translate-y-px data-[selected=true]:rounded-b-none data-[selected=true]:border-b-slate-800 data-[selected=true]:font-bold sm:px-2"
              >
                {TAB_LABELS[tab]}
              </Link>
            ))}
          </div>

          {/* 外部リンク */}
          <div className="ml-auto hidden md:block">
            <ExternalLink href="https://tskaigi.hatenablog.com/entry/2025/10/14/140147" size="sm">
              採択結果をブログで確認する
            </ExternalLink>
          </div>
        </nav>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {showSession &&
            KEYNOTE_SESSION.map((talk) => (
              <div
                key={talk.name}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
              >
                <div className="px-4 text-sm font-bold text-[#0828a7]">#基調講演</div>
                <div className="px-4 text-lg font-bold">{talk.title}</div>
                <div className="mt-auto px-4">Speaker: {talk.name}</div>
                <div className="h-2 bg-[#4C6EF5]" />
              </div>
            ))}
          {showSession && (
            <>
              {SESSION.map((talk) => (
                <div
                  key={talk.name}
                  className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
                >
                  <div className="text-primary-dark px-4 text-sm font-bold">#セッション</div>
                  <div className="px-4 text-lg font-bold">{talk.title}</div>
                  <div className="mt-auto px-4">Speaker: {talk.name}</div>
                  <div className="bg-primary h-2" />
                </div>
              ))}
              {TEAM_SESSION.map((talk) => (
                <div
                  key={talk.name}
                  className="flex flex-col gap-2 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
                >
                  <div className="px-4 text-sm font-bold text-[#007240]">#チーム発表</div>
                  <div className="px-4 text-lg font-bold">{talk.title}</div>
                  <div className="mt-auto px-4">Speaker: {talk.name}</div>
                  <div className="h-2 bg-[#00b969]" />
                </div>
              ))}
            </>
          )}
          {showLT &&
            LT.map((talk) => (
              <div
                key={talk.id}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
              >
                <div className="px-4 text-sm font-bold text-[#b21355]">#LT</div>
                <div className="px-4 text-lg font-bold">{talk.title}</div>
                <div className="mt-auto px-4">Speaker: {talk.name}</div>
                <div className="h-2 bg-[#F64D93]" />
              </div>
            ))}
          {showSponsorLT &&
            SPONSOR_LT.map((talk) => (
              <div
                key={talk.name}
                className="flex flex-col gap-4 overflow-hidden rounded-lg bg-white pt-4 shadow-xs"
              >
                <div className="px-4 text-sm font-bold text-[#814e00]">#スポンサーLT</div>
                <div className="px-4 text-lg font-bold">{talk.title}</div>
                <div className="mt-auto px-4">
                  Speaker: {talk.name} / {talk.sponsor}
                </div>
                <div className="h-2 bg-[#FF9900]" />
              </div>
            ))}
        </div>
        <div className="mt-8">
          タイムテーブルについては、決まり次第こちらの公式サイトで発表いたします。
        </div>
      </main>
    </div>
  );
};

export default Page;
