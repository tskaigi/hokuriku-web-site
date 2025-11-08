// src/components/talks/track-item/index.tsx
import { TimeLabel } from "@/components/talks/time-label";
import { TrackBadge } from "@/components/talks/track-badge";
import { TALK_TYPE, TRACK, type Talk } from "@/constants/timetableEventData";
import Link from "next/link";

type TrackContent = {
  track: keyof typeof TRACK;
  talk?: Talk | Talk[];
  eventText?: string;
};

type Props = {
  startTime: string;
  endTime?: string;
  contents?: TrackContent[];
  isActive?: boolean;
  refHandler?: (ref: HTMLDivElement) => void;
};

export function TrackItem({
  startTime,
  endTime,
  contents = [],
  isActive = false,
  refHandler,
}: Props) {
  const orderedTracks: (keyof typeof TRACK)[] = ["TRACK1", "TRACK2"];

  return (
    <div
      ref={refHandler}
      className="mt-4 grid grid-cols-[1fr] gap-1 md:mt-2 md:grid-cols-[auto_1fr_1fr] md:items-stretch"
    >
      {/* 左側の時間スロット */}
      <TimeLabel timeText={endTime ? `${startTime}〜${endTime}` : startTime} isActive={isActive} />

      {orderedTracks.map((t) => {
        const trackContents = contents.filter((c) => c.track === t);
        const firstTalk = Array.isArray(trackContents[0]?.talk)
          ? trackContents[0]?.talk[0]
          : trackContents[0]?.talk;

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
                {firstTalk?.talkType && (
                  <TrackBadge
                    label={TALK_TYPE[firstTalk.talkType]?.name}
                    borderColor={TALK_TYPE[firstTalk.talkType]?.borderColor}
                    textColor={TALK_TYPE[firstTalk.talkType]?.textColor}
                  />
                )}
              </div>
            )}

            {/* トークタイトル・スピーカー */}
            {trackContents.length > 0 ? (
              trackContents.map((c, i) => {
                const talksArray = Array.isArray(c.talk) ? c.talk : c.talk ? [c.talk] : [];

                return (
                  <div key={i} className="flex w-full flex-col items-start gap-1 text-left">
                    {talksArray.map((talk, j) => (
                      <div key={`${i}-${j}`} className="mb-2 w-full last:mb-0">
                        <h3 className="font-semibold">
                          <Link href={`/talks/${talk?.id}`} className="hover:underline">
                            {talk?.title}
                          </Link>
                        </h3>

                        {talk?.speakers && talk.speakers.length > 0 && (
                          <ul className="mt-1 ml-2 space-y-0.5 text-sm">
                            {talk.speakers.map((speaker) => (
                              <li key={speaker.name}>
                                Speaker:{" "}
                                {speaker.affiliation ? (
                                  speaker.additionalLink ? (
                                    <a
                                      href={speaker.additionalLink}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="text-black"
                                    >
                                      {speaker.affiliation}
                                    </a>
                                  ) : (
                                    speaker.affiliation
                                  )
                                ) : (
                                  ""
                                )}
                                {speaker.affiliation ? " " : ""}
                                {speaker.name}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {c.eventText && <h3 className="mt-2 font-semibold">{c.eventText}</h3>}
                  </div>
                );
              })
            ) : (
              <p className="w-full text-left">&nbsp;</p>
            )}
          </div>
        );
      })}
    </div>
  );
}
