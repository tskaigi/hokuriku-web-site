// import type { SponsorRole } from "@/constants/sponsor-list";
import type { SponsorRole } from "@/constants/sponsor-list";

import { convertToUpperCamelCase } from "./utils";

const bgColor: { [key in SponsorRole]: string } = {
  platinum: "bg-sponsor-platinum",
  gold: "bg-sponsor-gold",
  silver: "bg-sponsor-silver",
};

const RoleBadge = ({ role }: { role: SponsorRole }) => {
  return (
    <span className={`rounded-s rounded-e px-3 py-1 text-sm font-bold text-white ${bgColor[role]}`}>
      {convertToUpperCamelCase(role)}
    </span>
  );
};

export default RoleBadge;
