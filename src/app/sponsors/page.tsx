import Company from "@/components/sponsors/sponsors-company";
import SponsorHeading from "@/components/sponsors/sponsors-heading";
import { sponsorList } from "@/constants/sponsors";
import type { Metadata } from "next";
import Image from "next/image";

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: "TSKaigi Hokuriku 2025 のスポンサー一覧ページです。",
    openGraph: {
      title: "TSKaigi Hokuriku 2025 スポンサー一覧",
      description: "TSKaigi Hokuriku 2025 のスポンサー一覧ページです。",
      url: "https://hokuriku.tskaigi.org/sponsors",
      siteName: "TSKaigi Hokuriku 2025",
      images: [{ url: "https://hokuriku.tskaigi.org/ogp.png", width: 1200, height: 630 }],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "TSKaigi Hokuriku 2025 スポンサー一覧",
      description: "TSKaigi Hokuriku 2025 のスポンサー一覧ページです。",
      images: ["https://hokuriku.tskaigi.org/ogp.png"],
    },
  };
}

const SponsorsPage = () => {
  return (
    <div className="pt-16 pb-10 md:px-8">
      <h1 className="text-sponsor-title py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>
      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 rounded-none bg-white p-6 md:rounded-xl lg:p-10">
        {Object.entries(sponsorList).map(([key, companies]) => {
          return (
            <div key={key} className="flex flex-col gap-12">
              <SponsorHeading variant={key} />
              {key !== "silver" ? (
                <ul className="divide-sponsor-black-200 flex flex-col divide-y-2">
                  {companies.map((company) => (
                    <li key={company.name} className="flex flex-col gap-6 py-6">
                      <Company {...company} />
                    </li>
                  ))}
                </ul>
              ) : (
                <ul className="grid grid-cols-2 gap-4 md:grid-cols-5">
                  {companies.map((company) => (
                    <li key={company.name}>
                      {company.logoImage && company.logoLink ? (
                        <a
                          href={company.logoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${company.name} のWebサイトへ`}
                        >
                          <Image
                            src={company.logoImage}
                            alt={`${company.name}のロゴ`}
                            width={192}
                            height={96}
                            className="object-contain p-2"
                          />
                        </a>
                      ) : (
                        <Image
                          src={company.logoImage ?? "/images/no-logo.png"}
                          alt={`${company.name}のロゴ`}
                          width={192}
                          height={96}
                          className="object-contain p-2"
                        />
                      )}
                    </li>
                  ))}
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
