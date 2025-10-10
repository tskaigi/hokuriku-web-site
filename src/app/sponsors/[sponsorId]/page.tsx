import ExternalLink from "@/components/sponsors/sponsors-external-link";
import RoleBadge from "@/components/sponsors/sponsors-role-badge";
import { sponsorList } from "@/constants/sponsors";
import { getSponsor } from "@/utils/getSponsor";
import fs from "fs";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import path from "path";

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

  if (!sponsor) return { title: "スポンサー", description: "" };

  const sponsorTitle = sponsor.name;

  // スポンサーランクを取得
  const rankMap: Record<string, string> = {
    P: "プラチナ",
    G: "ゴールド",
    S: "シルバー",
  };
  const sponsorRank = rankMap[sponsor.id.charAt(0)] || "";

  // OGP descriptionを作成
  const description =
    `${sponsorTitle}は、TSKaigi Hokuriku 2025 の${sponsorRank}スポンサーです。` +
    (sponsor.overview?.[0] ? sponsor.overview[0].replace(/\s+/g, "").slice(0, 60) + "…" : "");

  // OGP画像の絶対URL
  const ogpFileName = `${sponsor.id}_${sponsor.sponsorId}_ogp.png`;
  const ogpUrl = `https://hokuriku.tskaigi.org/sponsors/ogp/${ogpFileName}`;

  return {
    title: `${sponsorTitle}`,
    description,
    openGraph: {
      title: `${sponsorTitle} `,
      description,
      images: [{ url: ogpUrl, width: 1200, height: 630 }],
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title: `${sponsorTitle}`,
      description,
      images: [ogpUrl],
    },
  };
};

// スポンサー詳細ページ
const SponsorDetailPage = async ({ params }: { params: Promise<{ sponsorId: string }> }) => {
  const { sponsorId } = await params;
  const sponsor = getSponsor(sponsorId);

  const logoPath = path.join(
    process.cwd(),
    "public",
    "sponsors",
    `${sponsor.id}_${sponsor.sponsorId}.png`,
  );
  const logoExists = fs.existsSync(logoPath);
  const displaySrc = logoExists
    ? `/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`
    : `/sponsors/no-image.png`;

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
                src={displaySrc}
                alt={`${sponsor.name}のロゴ`}
              />
            </Link>
          ) : (
            <Image
              width={800}
              height={400}
              className="mx-auto h-auto max-h-[400px] w-full max-w-[800px] object-contain"
              src={displaySrc}
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

        <h2 className="text-xl font-bold md:text-2xl lg:text-[28px]">{sponsor.name}</h2>

        {sponsor.detailDescription?.map((detail) => (
          <p key={detail} className="whitespace-pre-wrap">
            {detail.trim()}
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
