import SectionHeading from "@/components/section-heading";
import SponsorBoardHeading from "@/components/sponsor-board-heading";
import { sponsorList } from "@/constants/sponsors";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SponsorsBoardItem = ({
  href,
  src,
  alt,
  variant,
}: {
  href: string;
  src: string;
  alt: string;
  variant: "Plutinum" | "Gold" | "Silver";
}) => {
  const rounded = {
    Plutinum: "rounded-xl",
    Gold: "rounded-lg",
    Silver: "rounded",
  };

  const width = {
    Plutinum: 480,
    Gold: 320,
    Silver: 240,
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image
        src={src}
        alt={alt}
        width={width[variant]}
        height={width[variant] / 2}
        unoptimized
        className={cn("mx-auto w-full max-w-lg", rounded[variant])}
      />
    </Link>
  );
};

const SponsorBoardSection = () => {
  return (
    <section className="bg-blue-light-100 px-6 py-18">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-12 px-6 md:px-12">
        <SectionHeading>
          <span className="inline-block">TSKaigi Hokuriku 2025</span>{" "}
          <span className="inline-block">スポンサー各社</span>
        </SectionHeading>

        {/* プラチナスポンサー */}
        <div className="flex w-full flex-col gap-6">
          <SponsorBoardHeading variant="Platinum" />

          <div className="mx-auto md:w-1/2">
            {sponsorList.platinum.map((sponsor) => {
              return (
                <SponsorsBoardItem
                  key={sponsor.id}
                  src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  variant="Plutinum"
                />
              );
            })}
          </div>
        </div>

        {/* ゴールドスポンサー */}
        <div className="flex w-full flex-col gap-6">
          <SponsorBoardHeading variant="Gold" />

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {sponsorList.gold.map((sponsor) => {
              return (
                <SponsorsBoardItem
                  key={sponsor.id}
                  src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  variant="Gold"
                />
              );
            })}
          </div>
        </div>

        {/* シルバースポンサー */}
        <div className="flex w-full flex-col gap-6">
          <SponsorBoardHeading variant="Silver" />

          <div className="grid grid-cols-3 gap-2 md:grid-cols-4 md:gap-3">
            {sponsorList.silver.map((sponsor) => {
              return (
                <SponsorsBoardItem
                  key={sponsor.id}
                  src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                  alt={sponsor.name}
                  href={sponsor.logoLink}
                  variant="Silver"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorBoardSection;
