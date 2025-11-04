import { cn } from "@/lib/utils";

const SponsorBoardHeading = ({ variant }: { variant: "Platinum" | "Gold" | "Silver" }) => {
  const color = {
    Platinum: "text-sponsor-platinum before:bg-sponsor-platinum after:bg-sponsor-platinum",
    Gold: "text-sponsor-gold before:bg-sponsor-gold after:bg-sponsor-gold",
    Silver: "text-sponsor-silver before:bg-sponsor-silver after:bg-sponsor-silver",
  };

  return (
    <h3
      className={cn(
        "font-noto flex items-center gap-3 text-2xl font-bold before:h-[1px] before:flex-1 before:bg-amber-400 after:h-[1px] after:flex-1 after:bg-amber-400",
        color[variant],
      )}
    >
      {variant} Sponsors
    </h3>
  );
};

export default SponsorBoardHeading;
