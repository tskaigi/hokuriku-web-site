import { cn } from "@/lib/utils";

type Props = {
  timeText: string;
  isActive?: boolean;
};

export function TimeLabel({ timeText, isActive = false }: Props) {
  return (
    <div
      // NOTE: ヘッダー分 60px ずらす
      className={cn(
        "sticky top-[60px] flex w-full flex-col items-center justify-center gap-2 p-2 text-center md:relative md:top-0 md:w-[99px] lg:w-[125px]",
        isActive ? "bg-talktype-blue" : "bg-timelabel-ochre",
      )}
    >
      <p className="text-sm font-bold text-white lg:text-base">{timeText}</p>
    </div>
  );
}
