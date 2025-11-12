import { TimeLabel } from "@/components/talks/time-label";
import { TrackBadge } from "@/components/talks/track-badge";
import { TALK_TYPE, TRACK, TRACKS, type Talk, type Track } from "@/constants/timetableEventData";
import Image from "next/image";
import Link from "next/link";

type TrackContent =
  | {
      track: Track;
      talk: Talk[];
      eventText?: undefined;
    }
  | {
      track: Track;
      talk?: undefined;
      eventText?: string;
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
        const trackContents = contents.filter((c) => c.track === t);

        // NOTE: talkが複数指定されている場合でも、talkTypeは全て同じであるため、0番目のtalkTypeを参照する
        const firstTalkType = trackContents[0]?.talk?.[0].talkType;

        return (
          <div
            key={t}
            className="flex flex-col items-start justify-start rounded-sm border bg-gray-50 p-5 text-black"
          >
            {/* バッジ列 */}
            {trackContents.length > 0 && (
              <div className="mb-2 flex w-full flex-wrap justify-start gap-1">
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
            )}

            {/* トークタイトル・スピーカー */}
            {trackContents.map((c) => {
              return (
                <div key={c.track} className="flex w-full flex-col items-start gap-1 text-left">
                  {c.talk?.map((talk) => (
                    <div key={talk.id} className="mb-2 w-full last:mb-0">
                      <h3 className="font-semibold">
                        <Link href={`/talks/${talk?.id}`} className="hover:underline">
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

                  {c.eventText && <h3 className="font-semibold">{c.eventText}</h3>}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
