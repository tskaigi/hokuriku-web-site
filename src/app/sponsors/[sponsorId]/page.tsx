import ExternalLink from "@/components/sponsors/sponsors-external-link";
import RoleBadge from "@/components/sponsors/sponsors-role-badge";
import { sponsorList } from "@/constants/sponsors";
import { getSponsor } from "@/utils/getSponsor";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return Object.values(sponsorList)
    .flat()
    .map((sponsor) => ({
      sponsorId: sponsor.sponsorId,
    }));
};

// スポンサー詳細ごとのOGPメタ情報生成
export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ sponsorId: string }>;
}): Promise<Metadata> => {
  const { sponsorId } = await params;
  const sponsor = getSponsor(sponsorId);

  const sponsorRank = sponsor.id.startsWith("P")
    ? "プラチナ"
    : sponsor.id.startsWith("G")
      ? "ゴールド"
      : sponsor.id.startsWith("S")
        ? "シルバー"
        : "";

  // OGP descriptionを作成
  const description =
    `${sponsor.name}は TSKaigi Hokuriku 2025 の${sponsorRank}スポンサーです。` +
    (sponsor.overview?.[0] ? sponsor.overview[0].replace(/\s+/g, "").slice(0, 60) + "…" : "");

  return {
    title: `${sponsor.name}`,
    description,
    openGraph: {
      title: `${sponsor.name} `,
      description,
      images: [
        {
          url: `https://hokuriku.tskaigi.org/sponsors/ogp/${sponsor.id}_${sponsor.sponsorId}_ogp.png`,
          width: 1200,
          height: 630,
        },
      ],
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${sponsor.name}`,
      description,
      images: [
        `https://hokuriku.tskaigi.org/sponsors/ogp/${sponsor.id}_${sponsor.sponsorId}_ogp.png`,
      ],
    },
  };
};

// スポンサー詳細ページ
const SponsorDetailPage = async ({ params }: { params: Promise<{ sponsorId: string }> }) => {
  const { sponsorId } = await params;

  const sponsor = getSponsor(sponsorId);

  if (sponsor.isHiddenSponsorPage) {
    notFound();
  }

  return (
    <main className="py-10 pt-16 md:px-8">
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-10 bg-white p-6 md:rounded-xl lg:p-10">
        {/* ロゴ */}
        <div>
          <Link href={sponsor.logoLink} target="_blank" rel="noopener noreferrer">
            <Image
              width={800}
              height={400}
              className="mx-auto h-auto max-h-[400px] w-full max-w-[800px] object-contain"
              src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
              alt={`${sponsor.name}のロゴ`}
            />
          </Link>
        </div>

        {/* バッチ・名前・詳細 */}
        {sponsor.roles && sponsor.roles.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {sponsor.roles.map((role) => (
              <RoleBadge key={role} role={role} />
            ))}
          </div>
        )}

        <h2 className="text-xl font-bold md:text-2xl lg:text-[28px]">{sponsor.name}</h2>

        <div className="flex flex-col gap-6">
          {sponsor.detailDescription?.map((detail) => {
            return (
              <p key={detail} className="whitespace-pre-wrap">
                {detail.trim()}
              </p>
            );
          })}
        </div>

        {sponsor.links && sponsor.links.length > 0 && (
          <ul className="flex list-inside list-disc flex-col gap-y-2">
            {sponsor.links.map((link) => {
              return (
                <li key={link.title}>
                  <ExternalLink href={link.href}>{link.title}</ExternalLink>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
};

export default SponsorDetailPage;
