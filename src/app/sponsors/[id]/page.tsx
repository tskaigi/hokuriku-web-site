import ExternalLink from "@/components/sponsors/sponsors-external-link";
import RoleBadge from "@/components/sponsors/sponsors-role-badge";
import { sponsorIds } from "@/constants/sponsor-list";
import { getWipSponsor } from "@/utils/getSponsor";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return sponsorIds;
}

const description = "TSKaigi Hokuriku 2025 のスポンサー情報です。";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sponsor = getWipSponsor(id);

  return {
    title: sponsor.name,
    description,
    twitter: {
      title: sponsor.name,
      description,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.detailPageId}.png`,
        },
      ],
    },
    openGraph: {
      title: sponsor.name,
      description,
      images: [
        {
          url: `/ogp/sponsors/${sponsor.detailPageId}.png`,
        },
      ],
    },
  };
}

export default async function SponsorDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sponsor = getWipSponsor(id);

  return (
    <main>
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        スポンサー
      </h1>

      {sponsor && (
        <div className="mx-auto flex max-w-screen-xl flex-col gap-10 bg-white p-6 md:rounded-xl lg:p-10">
          {/* ロゴ */}
          <div>
            <img
              width="800"
              height="400"
              className="mx-auto h-auto max-h-[400px] w-full max-w-[800px] object-contain"
              src={sponsor.logoImage}
              alt="logo"
            />
          </div>

          {/* 企業情報 */}
          <div className="flex flex-col gap-6">
            <div className="flex gap-2">
              {sponsor.roles.map((role) => (
                <RoleBadge key={role} role={role} />
              ))}
            </div>

            <p className="text-xl font-bold md:text-2xl lg:text-[28px]">{sponsor.name}</p>

            {/* detailedDescription があれば優先、なければ overview */}
            {(sponsor.detailedDescription || sponsor.overview)?.map((text) => (
              <p key={text} className="whitespace-pre-wrap">
                {text}
              </p>
            ))}
          </div>

          {/* 外部リンク */}
          <ul className="flex list-inside list-disc flex-col gap-y-2">
            {sponsor.links?.map((link) => (
              <li key={link.title}>
                <ExternalLink title={link.title} href={link.href} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
}
