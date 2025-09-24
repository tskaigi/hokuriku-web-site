import { SponsorClass } from "@/constants/sponsors";
import { convertToUpperCamelCase } from "./utils";

const bgColor: { [key in SponsorClass]: string } = {
  platinum: "bg-sponsor-platinum",
  gold: "bg-sponsor-gold",
  silver: "bg-sponsor-silver",
};

const RoleBadge = ({ role }: { role: SponsorClass }) => {
  return (
    <span className={`rounded-s rounded-e px-3 py-1 text-sm font-bold text-white ${bgColor[role]}`}>
      {convertToUpperCamelCase(role)}
    </span>
  );
};

export default RoleBadge;
