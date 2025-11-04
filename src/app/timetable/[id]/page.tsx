// src/app/timetable/[id]/page.tsx
import { TALK_TYPE, TRACK, talkList } from "@/constants/timetableEventData";
import { getTalk } from "@/utils/getTalk";
import { isSpeakerVisible } from "@/utils/isSpeakerVisible";
import fs from "fs";
import type { Metadata } from "next";
import Link from "next/link";
import path from "path";
import type { ComponentProps } from "react";

import { CircleUserRound } from "lucide-react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export async function generateStaticParams() {
  return talkList.map((talk) => ({ id: talk.id }));
}

const description = "TSKaigi Hokuriku 2025 のスピーカー、トーク情報です。";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const talk = getTalk(id);

  return {
    title: talk.title,
    description,
    twitter: {
      title: talk.title,
      description,
      images: [{ url: `/ogp/speaker-ogp/${talk.id}.png` }],
    },
    openGraph: {
      title: talk.title,
      description,
      images: [{ url: `/ogp/speaker-ogp/${talk.id}.png` }],
    },
  };
}

const components: ComponentProps<typeof Markdown>["components"] = {
  h1: ({ node, ...props }) => <h1 className="text-blue-light-500 text-2xl font-bold" {...props} />,
  h2: ({ node, ...props }) => <h2 className="text-blue-light-500 text-xl font-bold" {...props} />,
  h3: ({ node, ...props }) => <h3 className="text-blue-light-500 text-lg font-bold" {...props} />,
  a: ({ node, href, ...props }) => {
    if (!href) return null;
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-link-light inline-flex items-center hover:underline"
        {...props}
      />
    );
  },
  ul: ({ node, ...props }) => (
    <ul className="list-inside list-disc pl-6 text-gray-700" {...props} />
  ),
  ol: ({ node, ...props }) => (
    <ol className="list-inside list-decimal pl-6 text-gray-700" {...props} />
  ),
  pre: ({ node, ...props }) => <pre className="rounded-lg bg-gray-100 p-4" {...props} />,
};

export default async function TalkDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const id = resolvedParams.id;
  const talk = getTalk(id);
  const talkType = TALK_TYPE[talk.talkType] || TALK_TYPE.DEFAULT;

  const thumbnailPath = path.join("public", "ogp", "speaker-ogp", `${talk.id}.png`);
  const thumbnailExists = fs.existsSync(thumbnailPath);

  return (
    <main className="bg-blue-light-100 pt-16 pb-10 md:px-8 md:py-16 lg:px-10">
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        トーク
      </h1>

      <div className="mx-auto flex max-w-screen-xl flex-col gap-6 bg-white pb-6 md:rounded-xl md:pb-8 lg:pb-10">
        {thumbnailExists && (
          <div className="bg-black-100 flex justify-center md:mx-8 md:mt-8 lg:mx-10 lg:mt-10">
            <img
              src={`/ogp/speaker-ogp/${talk.id}.png`}
              alt={talk.title}
              className="mx-auto h-auto max-h-[383px] w-full max-w-[730px] object-contain"
              width={730}
              height={383}
            />
          </div>
        )}

        <div className="flex flex-col gap-1 px-6 md:px-8 lg:px-10">
          <div
            className={`mt-8 inline-block w-max rounded-full border px-3 py-1 text-xs font-bold ${talkType.borderColor} ${talkType.textColor}`}
          >
            {talkType.name}
          </div>
          <h2 className="mt-2 text-2xl font-bold">{talk.title.trim()}</h2>
          <div className="text-lg font-bold">
            {talk.time} （{TRACK[talk.track].name}）
          </div>
        </div>

        <div className="flex flex-col gap-6 px-6 md:px-8 md:text-lg lg:px-10">
          <Markdown components={components} remarkPlugins={[remarkBreaks]}>
            {talk.overview.join("\n\n").trim()}
          </Markdown>
        </div>

        {isSpeakerVisible(talk.talkType) &&
          talk.speakers.map((speaker, index) => (
            <div key={`${speaker.name}-${index}`} className="mt-4 px-6 md:px-8 lg:px-10">
              <div className="bg-blue-light-200 rounded-xl p-6">
                <div className="flex flex-col items-center gap-6 sm:flex-row">
                  <div className="flex aspect-square w-[180px] shrink-0 items-center justify-center overflow-hidden rounded-full bg-gray-100 md:w-[220px]">
                    {speaker.profileImagePath ? (
                      <img
                        src={`/timetable/speaker/${speaker.profileImagePath}`}
                        alt={speaker.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <CircleUserRound className="h-full w-full text-gray-400" />
                    )}
                  </div>

                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{speaker.name}</h2>
                    <div className="flex flex-col gap-2">
                      <p className="text-16 md:text-18 text-gray-700">
                        {speaker.affiliation}
                        {speaker.affiliation && speaker.position && " / "}
                        {speaker.position}
                      </p>
                      <p className="text-16 md:text-18 text-gray-700">{speaker.biography}</p>
                      {speaker.additionalLink && (
                        <a
                          href={speaker.additionalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-16 md:text-18 break-all text-gray-700 underline"
                        >
                          {speaker.additionalLink}
                        </a>
                      )}
                    </div>

                    <div className="mt-2 flex gap-5">
                      {speaker.xUrl && (
                        <a
                          href={speaker.xUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-lg text-gray-700 transition-colors hover:text-gray-900"
                        >
                          X
                        </a>
                      )}
                      {speaker.githubUrl && (
                        <a
                          href={speaker.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-lg text-gray-700 transition-colors hover:text-gray-900"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
