import { type SponsorClass } from "@/constants/sponsors";
import { cn } from "@/lib/utils";

const borderColor = {
  platinum: "border-sponsor-platinum",
  gold: "border-sponsor-gold",
  silver: "border-sponsor-silver",
} satisfies { [Key in SponsorClass]: string };

const textColor = {
  platinum: "text-sponsor-platinum",
  gold: "text-sponsor-gold",
  silver: "text-sponsor-silver",
} satisfies { [Key in SponsorClass]: string };

const SponsorHeading = ({ rank }: { rank: SponsorClass }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <hr className={cn("flex-1 border-t", borderColor[rank])} />
      <h2 id={rank} className={cn("text-2xl font-bold md:text-3xl lg:text-3xl", textColor[rank])}>
        {`${rank[0].toUpperCase()}${rank.slice(1)}`} Sponsors
      </h2>
      <hr className={cn(`flex-1 border-t`, borderColor[rank])} />
    </div>
  );
};

export default SponsorHeading;
