import ExternalLink from "@/components/sponsors/sponsors-external-link";
import RoleBadge from "@/components/sponsors/sponsors-role-badge";
import { sponsorList } from "@/constants/sponsors";
import { getSponsor } from "@/utils/getSponsor";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const generateStaticParams = () => {
  return Object.values(sponsorList)
    .flat()
    .map((sponsor) => ({
      sponsorId: sponsor.sponsorId,
    }));
};

// OGPメタ情報
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ sponsorId: string }>;
}): Promise<Metadata> => {
  const { sponsorId } = await params;
  const sponsor = getSponsor(sponsorId);

  const sponsorTitle = `${sponsor.name} は TSKaigi Hokuriku 2025 のスポンサーです。`;

  const description = sponsor.detailDescription?.[0]
    ? sponsor.detailDescription[0].slice(0, 100) +
      (sponsor.detailDescription[0].length > 100 ? "…" : "")
    : sponsorTitle;

  return {
    title: sponsorTitle,
    description,
    twitter: {
      card: "summary_large_image",
      title: sponsorTitle,
      description,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.sponsorId}.png`,
        },
      ],
    },
    openGraph: {
      title: sponsorTitle,
      description,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.sponsorId}.png`,
        },
      ],
    },
  };
};

// スポンサー詳細ページ
const SponsorDetailPage = async ({ params }: { params: Promise<{ sponsorId: string }> }) => {
  const { sponsorId } = await params;
  const sponsor = getSponsor(sponsorId);

  return (
    <main>
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 bg-white p-6 md:rounded-xl lg:p-10">
        {/* ロゴ */}
        <div>
          {sponsor.logoLink ? (
            <Link href={sponsor.logoLink} target="_blank" rel="noopener noreferrer">
              <Image
                width={800}
                height={400}
                className="mx-auto h-auto max-h-[400px] w-full max-w-[800px] object-contain"
                src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                alt={`${sponsor.name}のロゴ`}
              />
            </Link>
          ) : (
            <Image
              width={800}
              height={400}
              className="mx-auto h-auto max-h-[400px] w-full max-w-[800px] object-contain"
              src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
              alt={`${sponsor.name}のロゴ`}
            />
          )}
        </div>
        {/* バッチ・名前・詳細 */}
        {sponsor.roles && sponsor.roles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {sponsor.roles.map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div>
        )}

        <p className="text-xl font-bold md:text-2xl lg:text-[28px]">{sponsor.name}</p>

        {sponsor.detailDescription?.map((detail) => (
          <p key={detail} className="whitespace-pre-wrap">
            {detail}
          </p>
        ))}

        <ul className="flex list-inside list-disc flex-col gap-y-2">
          {sponsor.links?.map((link) => (
            <li key={link.title}>
              <ExternalLink href={link.href}>{link.title}</ExternalLink>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default SponsorDetailPage;
