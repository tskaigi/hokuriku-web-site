import type { Sponsor } from "@/constants/sponsor-list";
import Link from "next/link";
import ExternalLink from "../sponsors-external-link";
import RoleBadge from "../sponsors-role-badge";

type Props = Sponsor & {
  isWip: boolean;
};

const Company = ({
  name,
  logoImage,
  logoImageForSponsorsPage,
  overview,
  roles,
  links,
  detailPageId,
  isTenantChecked,
  isWip,
}: Props) => {
  return (
    <div className="flex flex-col gap-y-3 md:flex-row md:items-start md:gap-x-8 lg:gap-x-10">
      {isTenantChecked || isWip ? (
        <Link
          href={isWip ? `/wip/sponsors/${detailPageId}` : `/sponsors/${detailPageId}`}
          className="flex-shrink-0 md:w-1/3 lg:w-1/4"
        >
          <img
            src={logoImageForSponsorsPage || logoImage}
            alt={name}
            width={1280}
            height={640}
            className="aspect-video w-full object-contain lg:aspect-video"
            loading="lazy"
          />
        </Link>
      ) : (
        <img
          src={logoImageForSponsorsPage || logoImage}
          alt={name}
          width={1280}
          height={640}
          className="aspect-video flex-shrink-0 object-contain md:w-1/3 lg:aspect-video lg:w-1/4"
          loading="lazy"
        />
      )}

      <div className="flex flex-col gap-y-3">
        <div className="flex gap-2">
          {roles?.map((role) => {
            return <RoleBadge key={role} role={role} />;
          })}
        </div>

        <div className="flex flex-col gap-y-6 text-base md:text-lg">
          <p className="text-xl font-bold md:text-2xl lg:text-[28px]">{name}</p>

          {overview?.map((text) => (
            <p key={text} className="leading-8 whitespace-pre-wrap">
              {text}
            </p>
          ))}

          {links && (
            <ul className="flex list-inside list-disc flex-col gap-y-2">
              {links.map((link) => (
                <li key={link.title} className="marker:text-xs">
                  <ExternalLink {...link} />
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
