import { sponsorList } from "@/constants/sponsors";

const borderColor: { [key: string]: string } = {
  platinum: "border-sponsor-platinum",
  gold: "border-sponsor-gold",
  silver: "border-sponsor-silver",
} satisfies { [key in keyof typeof sponsorList]: string };

const textColor: { [key: string]: string } = {
  platinum: "text-sponsor-platinum",
  gold: "text-sponsor-gold",
  silver: "text-sponsor-silver",
} satisfies { [key in keyof typeof sponsorList]: string };

const SponsorHeading = ({ variant }: { variant: string }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <hr className={`flex-1 border-t ${borderColor[variant]}`} />
      <h2 className={`text-2xl font-bold ${textColor[variant]} md:text-3xl lg:text-3xl`}>
        {`${variant[0].toUpperCase()}${variant.slice(1)}`} Sponsors
      </h2>
      <hr className={`flex-1 border-t ${borderColor[variant]}`} />
    </div>
  );
};

export default SponsorHeading;
