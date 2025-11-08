import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://hokuriku.tskaigi.org"),
  title: {
    template: "%s",
    default: "タイムテーブル",
  },
  openGraph: {
    title: {
      template: "%s",
      default: "タイムテーブル",
    },
  },
  twitter: {
    title: {
      template: "%s",
      default: "タイムテーブル",
    },
    card: "summary_large_image",
  },
};

export default function TalksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
