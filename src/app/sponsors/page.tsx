import Company from "@/components/sponsors/sponsors-company";
import SponsorHeading from "@/components/sponsors/sponsors-heading";
import { sponsorList } from "@/constants/sponsors";
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
              <SponsorHeading variant={key} />
              <ul className="flex flex-col gap-6">
                {value.map((company, idx, value) => (
                  <li key={company.name} className="flex flex-col gap-6">
                    <Company {...company} />
                    {idx !== value.length - 1 && <hr className="border-black-200 border-t-2" />}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SponsorsPage;
