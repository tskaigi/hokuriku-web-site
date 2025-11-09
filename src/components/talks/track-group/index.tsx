import { TimeLabel } from "@/components/talks/time-label";

type Props = {
  startTime: string;
  endTime?: string;
  eventText: string;
  isActive?: boolean;
};

export const TrackGroup = ({ startTime, endTime, eventText, isActive = false }: Props) => {
  return (
    <div className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_1fr] md:items-stretch">
      {/* 左側の時間スロット */}
      <TimeLabel timeText={endTime ? `${startTime}〜${endTime}` : startTime} isActive={isActive} />

      {/* 右側のイベントエリア */}
      <div className="flex w-full flex-col items-center justify-center rounded-sm border bg-gray-50 p-5 text-center text-black">
        <h3 className="w-full text-center font-semibold">{eventText}</h3>
      </div>
    </div>
  );
};
