import { TimeLabel } from "@/components/talks/time-label";
import { cn } from "@/lib/utils";

type Props = {
  startTime: string;
  endTime?: string;
  eventText: string;
  isActive?: boolean;
  isBreakTime?: boolean;
};

export const TrackGroup = ({
  startTime,
  endTime,
  eventText,
  isActive = false,
  isBreakTime = false,
}: Props) => {
  return (
    <div className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_1fr] md:items-stretch">
      {/* 左側の時間スロット */}
      <TimeLabel timeText={endTime ? `${startTime}〜${endTime}` : startTime} isActive={isActive} />

      {/* 右側のイベントエリア */}
      <div
        className={cn(
          "flex w-full flex-col items-center justify-center rounded-sm border p-5 text-center text-black",
          isBreakTime ? "border-gray-200 bg-gray-200" : "bg-gray-50",
        )}
      >
        <h3 className="w-full text-center">{eventText}</h3>
      </div>
    </div>
  );
};
