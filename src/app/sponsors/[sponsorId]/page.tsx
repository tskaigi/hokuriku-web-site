import ExternalLink from "@/components/sponsors/sponsors-external-link";
import { sponsorList } from "@/constants/sponsors";
import { getSponsor } from "@/utils/getSponsor";
import type { Metadata } from "next";
import Image from "next/image";

// sponsorIdの一覧を元に静的にページをビルド
export const generateStaticParams = () => {
  return Object.values(sponsorList)
    .flat()
    .map((sponsor) => {
      return sponsor.sponsorId;
    });
};

const description = "TSKaigi 2025 のスポンサー情報です。";

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ sponsorId: string }>;
}): Promise<Metadata> => {
  const { sponsorId } = await params;
  const sponsor = getSponsor(sponsorId);

  return {
    title: sponsor.name,
    description,
    twitter: {
      title: sponsor.name,
      description,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.sponsorId}.png`,
        },
      ],
    },
    openGraph: {
      title: sponsor.name,
      description,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.sponsorId}.png`,
        },
      ],
    },
  };
};

const SponsorDetailPage = async ({ params }: { params: Promise<{ sponsorId: string }> }) => {
  const { sponsorId } = await params;
  const sponsor = getSponsor(sponsorId);

  return (
    <main>
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 bg-white p-6 md:rounded-xl lg:p-10">
        <div>
          <Image
            width="800"
            height="400"
            className="mx-auto h-auto max-h-[400px] w-full max-w-[800px] object-contain"
            src={`/sponsors/${sponsor.sponsorId}.png`}
            alt="logo"
          />
        </div>

        <div className="flex flex-col gap-6">
          {/* ロールタグ */}
          {/* <div className="flex gap-2">
            {sponsor.roles.map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div> */}

          <p className="text-xl font-bold md:text-2xl lg:text-[28px]">{sponsor.name}</p>

          {sponsor.overview?.map((overview) => (
            <p key={overview} className="whitespace-pre-wrap">
              {overview}
            </p>
          ))}
        </div>

        <ul className="flex list-inside list-disc flex-col gap-y-2">
          {sponsor.links?.map((link) => (
            <li key={link.title}>
              <ExternalLink title={link.title} href={link.href} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default SponsorDetailPage;
