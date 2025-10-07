import { Sponsor } from "@/constants/sponsors";
import Image from "next/image";
import Link from "next/link";
import ExternalLink from "../sponsors-external-link";
import RoleBadge from "../sponsors-role-badge";

const Company = ({ id, sponsorId, name, overview, links, roles }: Sponsor) => {
  const detailUrl = `/sponsors/${sponsorId}`;
  return (
    <div className="flex flex-col gap-y-3 md:flex-row md:items-start md:gap-x-8 lg:gap-x-10">
      {/* 画像リンク */}
      <Link href={detailUrl} className="flex-shrink-0 md:w-1/3 lg:w-1/4">
        <Image
          src={`/sponsors/${id}_${sponsorId}.png`}
          alt={`${name}の詳細ページへのリンク`}
          width={1280}
          height={640}
          className="aspect-video h-auto w-full object-contain"
          loading="lazy"
        />
      </Link>
      {/* テキストバッチ */}
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-6 text-base md:text-lg">
          {roles && roles.length > 0 && (
            <div className="flex gap-2">
              {roles.map((role) => (
                <RoleBadge key={role} role={role} />
              ))}
            </div>
          )}
          {/* 社名 */}
          <p className="text-xl font-bold md:text-2xl lg:text-3xl">{name}</p>
          {/* 概要 */}
          {overview?.map((text, index) => (
            <p key={index} className="leading-8 whitespace-pre-wrap">
              {text}
            </p>
          ))}
          {/* リンク一覧 */}
          {links && (
            <ul className="flex flex-col gap-y-2">
              {links.map((link, index) => (
                <li key={index} className="marker:text-xs">
                  <ExternalLink href={link.href}>{link.title}</ExternalLink>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Company;
