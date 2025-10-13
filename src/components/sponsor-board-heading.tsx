import { cn } from "@/lib/utils";

const SponsorBoardHeading = ({ variant }: { variant: "Platinum" | "Gold" | "Silver" }) => {
  const color = {
    Platinum: "text-blue-purple-600 before:bg-blue-purple-600 after:bg-blue-purple-600",
    Gold: "text-yellow-600 before:bg-yellow-600 after:bg-yellow-600",
    Silver: "text-blue-light-500 before:bg-blue-light-500 after:bg-blue-light-500",
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
