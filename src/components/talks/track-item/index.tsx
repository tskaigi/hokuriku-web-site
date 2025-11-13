import { TimeLabel } from "@/components/talks/time-label";
import { TrackBadge } from "@/components/talks/track-badge";
import { TALK_TYPE, TRACK, TRACKS, type Talk, type Track } from "@/constants/timetableEventData";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type TrackContent =
  | {
      track: Track;
      talk: Talk[];
      eventText?: undefined;
      isBreakTime?: boolean;
    }
  | {
      track: Track;
      talk?: undefined;
      eventText?: string;
      isBreakTime?: boolean;
    };

type Props = {
  startTime: string;
  endTime?: string;
  contents?: TrackContent[];
  isActive?: boolean;
};

export function TrackItem({ startTime, endTime, contents = [], isActive = false }: Props) {
  return (
    <div className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_1fr_1fr] md:items-stretch">
      {/* 左側の時間スロット */}
      <TimeLabel timeText={endTime ? `${startTime}〜${endTime}` : startTime} isActive={isActive} />

      {TRACKS.map((t) => {
        const trackContent = contents.find((c) => c.track === t);
        if (trackContent == null) {
          return null;
        }

        // NOTE: talkが複数指定されている場合でも talkType は全て同じであるため、0番目のtalkTypeを参照する
        const firstTalkType = trackContent?.talk?.[0].talkType;

        return (
          <div
            key={t}
            className={cn(
              "flex flex-col items-start justify-start rounded-sm border p-5 text-black",
              trackContent.isBreakTime ? "border-gray-200 bg-gray-200" : "bg-gray-50",
            )}
          >
            {/* バッジ列 */}
            <div className="flex w-full flex-wrap justify-start gap-1">
              {/* TRACKバッジ（スマホのみ） */}
              {TRACK[t] && (
                <TrackBadge
                  label={TRACK[t].name}
                  bgColor={TRACK[t].bgColor}
                  textColor={TRACK[t].textColor}
                  hiddenOnDesktop
                />
              )}

              {/* TALK_TYPEバッジ */}
              {firstTalkType && (
                <TrackBadge
                  label={TALK_TYPE[firstTalkType]?.name}
                  borderColor={TALK_TYPE[firstTalkType]?.borderColor}
                  textColor={TALK_TYPE[firstTalkType]?.textColor}
                />
              )}
            </div>

            {/* トークタイトル・スピーカー */}
            {trackContent.talk != null && (
              <div className="mt-2 flex w-full flex-col items-start gap-1 text-left">
                {trackContent.talk.map((talk) => (
                  <div key={talk.id} className="mb-2 w-full last:mb-0">
                    <h3>
                      <Link
                        href={`/talks/${talk?.id}`}
                        className="underline underline-offset-2 hover:no-underline"
                      >
                        {talk?.title}
                      </Link>
                    </h3>

                    <ul className="mt-1 flex flex-wrap gap-4 text-sm">
                      {talk.speakers.map((speaker) => (
                        <li key={speaker.name}>
                          {speaker.profileImagePath && (
                            <Image
                              src={`/timetable/speaker/${speaker.profileImagePath}`}
                              alt={speaker.name}
                              className="mr-2 inline rounded-full"
                              width={32}
                              height={32}
                            />
                          )}
                          {speaker.name}
                          {speaker.affiliation ? ` / ${speaker.affiliation}` : ""}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {trackContent.eventText != null && <h3 className="m-auto">{trackContent.eventText}</h3>}
          </div>
        );
      })}
    </div>
  );
}
