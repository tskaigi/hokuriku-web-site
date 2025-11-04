// src/components/timetable/track-group/index.tsx
import { TimeLabel } from "@/components/timetable/time-label";
import { TRACK, type Talk } from "@/constants/timetableEventData";
import Link from "next/link";
import { forwardRef } from "react";

type Props = {
  startTime: string;
  endTime?: string;
  eventText?: string;
  tracks?: (keyof typeof TRACK)[];
  talk?: Talk | Talk[];
  venue?: string;
  isActive?: boolean;
};

export const TrackGroup = forwardRef<HTMLDivElement, Props>(
  ({ startTime, endTime, eventText, tracks = [], talk, venue, isActive = false }, ref) => {
    const talksArray: Talk[] = Array.isArray(talk) ? talk : talk ? [talk] : [];

    return (
      <div
        ref={ref}
        className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_1fr] md:items-stretch"
      >
        {/* 左側の時間スロット */}
        <TimeLabel
          timeText={endTime ? `${startTime}〜${endTime}` : startTime}
          isActive={isActive}
        />

        {/* 右側のイベントエリア */}
        <div className="flex w-full flex-col items-center justify-center rounded-sm border bg-gray-50 p-5 text-center text-black">
          {/* スマホ時のみ tracks バッジ */}
          {tracks.length > 0 && (
            <div className="mb-1 flex flex-wrap gap-1 self-start md:hidden">
              {tracks.map((t) => (
                <span
                  key={t}
                  className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${TRACK[t].bgColor} ${TRACK[t].textColor}`}
                >
                  {TRACK[t].name}
                </span>
              ))}
            </div>
          )}

          {/* venue バッジ（スマホ〜PCすべて表示） */}
          {venue && (
            <div className="mb-1 flex flex-wrap gap-1 self-start">
              <span className="inline-block rounded-full bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-800">
                {venue}
              </span>
            </div>
          )}

          {/* 複数トーク対応 */}
          {talksArray.length > 0 ? (
            talksArray.map((t, idx) => (
              <div key={idx} className="mb-2 w-full text-left">
                {/* タイトル */}
                <h3 className="font-semibold">{t.title}</h3>

                {/* スピーカーリスト */}
                {t.speakers && t.speakers.length > 0 && (
                  <ul className="mt-1 ml-2 space-y-0.5 text-sm">
                    {t.speakers.map((speaker) => (
                      <li key={speaker.name}>
                        {speaker.username ? (
                          <Link
                            href={`/timetable/${speaker.username}`}
                            className="text-blue-600 underline"
                          >
                            {speaker.name}
                          </Link>
                        ) : (
                          speaker.name
                        )}
                        {speaker.position ? ` (${speaker.position})` : ""}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))
          ) : (
            <h3 className="w-full text-center font-semibold">{eventText || "タイトル未設定"}</h3>
          )}
        </div>
      </div>
    );
  },
);

TrackGroup.displayName = "TrackGroup";
