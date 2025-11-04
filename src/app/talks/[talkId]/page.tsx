import { Redirect } from "@/components/redirect";
import { ALL_TALKS } from "@/constants/talks";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateStaticParams = () => {
  return ALL_TALKS.map((talk) => ({ talkId: `${talk.id}` }));
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ talkId: string }>;
}): Promise<Metadata> => {
  const { talkId } = await params;

  const talk = ALL_TALKS.find((talk) => `${talk.id}` === talkId);

  if (talk == null) {
    notFound();
  }

  const title = talk.title;
  const description = `${talk.title} by ${talk.name}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [`https://hokuriku.tskaigi.org/talks/ogp/${talk.id}.png`],
      type: "website",
      locale: "ja_JP",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`https://hokuriku.tskaigi.org/talks/ogp/${talk.id}.png`],
    },
  };
};

const Page = async ({ params }: { params: Promise<{ talkId: string }> }) => {
  const { talkId } = await params;
  const talk = ALL_TALKS.find((talk) => `${talk.id}` === talkId);

  if (talk == null) {
    notFound();
  }

  // NOTE: 実装が終わるまで一時的にリダイレクト。OGPを見せるためクライアント側でリダイレクトする。
  return <Redirect path="/speakers" />;
};

export default Page;
