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
        "bg-timelabel-ochre sticky top-[60px] flex w-full flex-col items-center justify-center gap-2 p-2 text-center md:relative md:top-0 md:w-[99px] lg:w-[125px]",
        isActive &&
          "after:absolute after:top-0 after:right-0 after:h-full after:w-[5px] after:bg-orange-500 after:opacity-50 after:content-['']",
      )}
    >
      <p className={`text-sm font-bold text-white lg:text-base`}>{timeText}</p>
      {isActive && <p className="text-xs font-bold text-orange-500">{timeText}</p>}
    </div>
  );
}
