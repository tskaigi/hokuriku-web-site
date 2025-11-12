import { TimeTable } from "@/components/talks/time-table";
import { TimetableHeader } from "@/components/talks/timetable-header";
import { TrackHeader } from "@/components/talks/track-header";

export default function TalksPage() {
  return (
    <main className="bg-blue-light-100 mt-16 px-1 py-10 md:px-3 md:py-16 lg:px-10">
      {/* ページタイトル */}
      <h1 className="text-blue-light-500 text-center text-2xl font-bold md:text-3xl lg:text-4xl">
        タイムテーブル
      </h1>

      <div className="mt-10 overflow-x-auto">
        <div className="min-w-full">
          {/* PCレイアウト時のヘッダー */}
          <div className="hidden md:block">
            <TimetableHeader>
              <div className="w-[70px] md:w-[99px] lg:w-[125px]" />
              <TrackHeader track="TRACK1" />
              <TrackHeader track="TRACK2" />
            </TimetableHeader>
          </div>
          <TimeTable />
        </div>
      </div>
    </main>
  );
}
