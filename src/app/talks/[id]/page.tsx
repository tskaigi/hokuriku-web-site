import { GithubIcon } from "@/components/icon/github";
import { XIcon } from "@/components/icon/x";
import { TrackBadge } from "@/components/talks/track-badge";
import { TALK_TYPE, TRACK, talkList } from "@/constants/timetableEventData";
import { cn } from "@/lib/utils";
import { getTalk } from "@/utils/getTalk";
import { isSpeakerVisible } from "@/utils/isSpeakerVisible";
import { CircleUserRound, LinkIcon } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ComponentProps } from "react";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";

export const dynamicParams = false;

export async function generateStaticParams() {
  return talkList.map((talk) => ({
    id: String(talk.id),
  }));
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
  if (!talk) {
    notFound();
  }

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
  if (!talk) {
    notFound();
  }
  const talkType = TALK_TYPE[talk.talkType];

  // NOTE: スポンサーLTはサムネイルがまだ準備できていないので非表示にする
  const showThumbnail = talk.talkType !== "SPONSOR_LIGHTNINGTALKS";

  return (
    <main className="bg-blue-light-100 pt-16 pb-10 md:px-8 md:py-16 lg:px-10">
      <h1 className="text-blue-light-500 py-10 text-center text-2xl font-bold md:py-16 md:text-3xl lg:text-4xl">
        トーク
      </h1>

      <div
        className={cn(
          "mx-auto flex max-w-screen-xl flex-col gap-6 bg-white pb-6 md:rounded-xl md:py-8 lg:py-10",
          !showThumbnail && "pt-8",
        )}
      >
        {showThumbnail && (
          <div className="bg-black-100 flex justify-center md:mx-8 lg:mx-10">
            <Image
              src={`/ogp/speaker-ogp/${talk.id}.png`}
              alt={talk.title}
              className="mx-auto h-auto max-h-[383px] w-full max-w-[730px] object-contain"
              width={730}
              height={383}
            />
          </div>
        )}

        <div className="flex flex-col gap-1 px-6 md:px-8 lg:px-10">
          <TrackBadge
            label={talkType.name}
            borderColor={talkType.borderColor}
            textColor={talkType.textColor}
          />

          <h2 className="mt-2 text-2xl font-bold">{talk.title}</h2>
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
                  <div className="aspect-square shrink-0">
                    {speaker.profileImagePath ? (
                      <Image
                        src={`/timetable/speaker/${speaker.profileImagePath}`}
                        alt={speaker.name}
                        className="h-[120px] w-[120px] rounded-full object-cover"
                        width={160}
                        height={160}
                      />
                    ) : (
                      <CircleUserRound size={120} className="h-full w-full text-gray-400" />
                    )}
                  </div>

                  <div className="flex w-full flex-col gap-4">
                    {/* 登壇者名 */}
                    <h2 className="text-2xl font-bold">{speaker.name}</h2>

                    {/* 所属・自己紹介 */}
                    <div className="flex flex-col gap-2">
                      <p className="text-16 md:text-18 text-gray-700">
                        {speaker.affiliation}
                        {speaker.affiliation && speaker.position && " / "}
                        {speaker.position}
                      </p>
                      <p className="text-16 md:text-18 text-gray-700">{speaker.biography}</p>
                    </div>

                    {/* SNSリンク */}
                    <div className="mt-2 flex flex-wrap gap-4">
                      {speaker.xId && (
                        <a
                          href={`https://x.com/${speaker.xId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 rounded-full text-lg text-gray-700 underline-offset-2 hover:underline"
                        >
                          <div className="shrink-0">
                            <XIcon size={18} />
                          </div>
                          <div>{speaker.xId}</div>
                        </a>
                      )}
                      {speaker.githubId && (
                        <a
                          href={`https://github.com/${speaker.githubId}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 rounded-full text-lg text-gray-700 underline-offset-2 hover:underline"
                        >
                          <div className="shrink-0">
                            <GithubIcon size={22} />
                          </div>
                          {speaker.githubId}
                        </a>
                      )}
                      {speaker.additionalLink && (
                        <a
                          href={speaker.additionalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex max-w-full items-center gap-3 truncate rounded-full text-lg text-gray-700 underline-offset-2 hover:underline"
                        >
                          <div className="shrink-0">
                            <LinkIcon size={18} />
                          </div>
                          <div className="grow truncate">{speaker.additionalLink}</div>
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
