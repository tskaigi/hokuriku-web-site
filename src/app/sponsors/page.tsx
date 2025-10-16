import Company from "@/components/sponsors/sponsors-company";
import SponsorHeading from "@/components/sponsors/sponsors-heading";
import { sponsorList } from "@/constants/sponsors";
import type { Metadata } from "next";
import Image from "next/image";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hokuriku.tskaigi.org";

export async function generateMetadata(): Promise<Metadata> {
  return {
    description: "TSKaigi Hokuriku 2025 のスポンサー一覧ページです。",
    title: "スポンサー",
    openGraph: {
      title: "TSKaigi Hokuriku 2025 スポンサー",
      description: "TSKaigi Hokuriku 2025 のスポンサーページです。",
      url: "https://hokuriku.tskaigi.org/sponsors",
      siteName: "TSKaigi Hokuriku 2025",
      images: [
        {
          url: `${baseUrl}/ogp.png`,
          width: 1200,
          height: 630,
        },
      ],
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "TSKaigi Hokuriku 2025 スポンサー",
      description: "TSKaigi Hokuriku 2025 のスポンサーページです。",
      images: [`${baseUrl}/ogp.png`],
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
                  {companies.map((company) => {
                    return (
                      <a
                        href={company.logoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={company.id}
                      >
                        <Image
                          src={`/sponsors/${company.id}_${company.sponsorId}.png`}
                          alt={`${company.name}のロゴ`}
                          width={192}
                          height={96}
                          className="object-contain p-2"
                        />
                      </a>
                    );
                  })}
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
