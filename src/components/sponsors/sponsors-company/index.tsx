import { Sponsor } from "@/constants/sponsors";
import Image from "next/image";
import ExternalLink from "../sponsors-external-link";

const Company = ({ id, sponsorId, name, overview, links }: Sponsor) => {
  return (
    <div className="flex flex-col gap-y-3 md:flex-row md:items-start md:gap-x-8 lg:gap-x-10">
      <Image
        src={`/sponsors/${id}_${sponsorId}.png`}
        alt={name}
        width={1280}
        height={640}
        className="aspect-video flex-shrink-0 object-contain md:w-1/3 lg:aspect-video lg:w-1/4"
        loading="lazy"
      />

      <div className="flex flex-col gap-y-3">
        {/* ロールタグ */}
        {/* <div className="flex gap-2">
          {roles?.map((role) => {
            return <RoleBadge key={role} role={role} />;
          })}
        </div> */}

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
