import { SponsorsBoardItem } from "@/components/sponsors/sponsors-board/sponsors-board-item";
import Company from "@/components/sponsors/sponsors-company";
import SponsorHeading from "@/components/sponsors/sponsors-heading";
import { type SponsorRole, sponsorList } from "@/constants/sponsor-list";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = "スポンサー";
  return {
    title: `${pageTitle} | TSKaigi Hokuriku 2025`,
    openGraph: {
      title: `${pageTitle} | TSKaigi Hokuriku 2025`,
    },
    twitter: {
      title: `${pageTitle} | TSKaigi Hokuriku 2025`,
    },
  };
}

const SponsorsPage = () => {
  return (
    <div className="py-10 pt-16 md:px-8">
      <h1 className="text-sponsor-title py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 bg-white p-6 md:rounded-xl lg:p-10">
        {Object.entries(sponsorList).map(([key, value]) => {
          return (
            <div key={key} className="flex flex-col gap-12">
              <SponsorHeading variant={key as SponsorRole} />

              {key !== "silver" ? (
                <ul className="flex flex-col gap-6">
                  {value.map(
                    (company, idx, value) =>
                      // 企業確認済みかつロゴ画像がある場合のみアイテムを表示
                      company.isTenantChecked &&
                      company.logoImage && (
                        <li key={company.name} className="flex flex-col gap-6">
                          <Company isWip={false} {...company} />
                          {idx !== value.length - 1 && (
                            <hr className="border-sponsor-gray border-t-2" />
                          )}
                        </li>
                      ),
                  )}
                </ul>
              ) : (
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {value.map(
                    (company, idx, value) =>
                      // 企業確認済みかつロゴ画像がある場合のみアイテムを表示
                      company.isTenantChecked &&
                      company.logoImage && (
                        <li key={company.name}>
                          <SponsorsBoardItem
                            key={company.id}
                            className={cn("h-[96px] w-full", company.addPadding ? "p-4" : "p-2")}
                            src={company.logoImage}
                            alt={company.name}
                            href={company.logoLink}
                            width={211}
                            height={96}
                          />
                        </li>
                      ),
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorsPage;
