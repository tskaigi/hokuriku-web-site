import { sponsorList } from "@/constants/sponsors";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const SponsorsBoardTitle = ({
  children,
  titleClassName,
}: {
  children: React.ReactNode;
  titleClassName: string;
}) => {
  return (
    <div
      className={`flex items-center py-2.5 before:mr-[12px] before:h-[1px] before:grow before:content-[''] after:ml-[12px] after:h-[1px] after:grow after:content-[''] md:before:mr-[24px] md:after:ml-[24px] ${titleClassName} `}
    >
      {children}
    </div>
  );
};

const SponsorsBoardItem = ({
  href,
  src,
  alt,
  width,
  height,
  className,
  wrapperClassName,
}: {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  className: string;
  wrapperClassName?: string;
}) => {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn("aspect-video w-full", wrapperClassName)}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        unoptimized
        className={cn("bg-white object-contain", className)}
      />
    </Link>
  );
};

export const SponsorBoardSection = () => {
  return (
    <section className="bg-blue-light-100 md:px-10">
      <h2 className="text-24 font-noto flex flex-col pt-10 pb-8 text-center leading-normal font-bold md:flex-row md:justify-center md:gap-2 md:text-[32px] md:leading-[42px] lg:pt-16 lg:pb-10">
        <span>TSKaigi Hokuriku</span>
        <span>スポンサー各社</span>
      </h2>

      {/* プラチナスポンサー */}
      <div className="flex flex-col pb-8">
        <SponsorsBoardTitle titleClassName="before:bg-blue-purple-600 after:bg-blue-purple-600">
          <h3 className="text-blue-purple-600 text-22 md:text-28 font-noto leading-normal font-bold md:leading-[42px]">
            Platinum Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-6 pt-6 md:grid-cols-[0.5fr_1fr_0.5fr] md:px-0 lg:grid-cols-3">
          {sponsorList.platinum.map((sponsor) => {
            return (
              <SponsorsBoardItem
                key={sponsor.id}
                className="h-full w-full rounded-xl md:col-start-2 lg:col-start-2"
                src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                alt={sponsor.name}
                href={sponsor.logoLink}
                width={389}
                height={192}
              />
            );
          })}
        </div>
      </div>

      {/* ゴールドスポンサー */}
      <div className="flex flex-col pb-8">
        <SponsorsBoardTitle titleClassName="before:bg-yellow-600 after:bg-yellow-600">
          <h3 className="text-22 md:text-28 font-noto leading-normal font-bold text-yellow-600 md:leading-[42px]">
            Gold Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-2 gap-2 px-6 pt-6 md:grid-cols-3 md:gap-3 md:px-0 lg:grid-cols-4 lg:gap-4">
          {sponsorList.gold.map((sponsor) => {
            return (
              <SponsorsBoardItem
                key={sponsor.id}
                className="h-full w-full rounded-lg"
                src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                alt={sponsor.name}
                href={sponsor.logoLink}
                width={288}
                height={144}
              />
            );
          })}
        </div>
      </div>

      {/* シルバースポンサー */}
      <div className="flex flex-col pb-8">
        <SponsorsBoardTitle titleClassName="before:bg-blue-light-500 after:bg-blue-light-500">
          <h3 className="text-blue-light-500 text-22 md:text-28 font-noto leading-normal font-bold md:leading-[42px]">
            Silver Sponsors
          </h3>
        </SponsorsBoardTitle>
        <div className="mx-auto grid w-full max-w-7xl grid-cols-3 gap-2 px-6 pt-6 md:grid-cols-4 md:gap-3 md:px-0 lg:grid-cols-5 lg:gap-4">
          {sponsorList.silver.map((sponsor) => {
            return (
              <SponsorsBoardItem
                key={sponsor.id}
                className="h-full w-full rounded"
                src={`/sponsors/${sponsor.id}_${sponsor.sponsorId}.png`}
                alt={sponsor.name}
                href={sponsor.logoLink}
                width={227}
                height={112}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
