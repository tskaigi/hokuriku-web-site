import "@/app/globals.css";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Noto_Sans_JP, Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | TSKaigi Hokuriku 2025",
    default: "TSKaigi Hokuriku 2025",
  },
  metadataBase: new URL("https://hokuriku.tskaigi.org/"),
  description:
    "日本最大級のTypeScriptをテーマとした技術カンファレンスであるTSKaigiが金沢でも開催されます。",
  authors: [
    {
      name: "一般社団法人 TSKaigi Association",
      url: "https://association.tskaigi.org/",
    },
  ],
  keywords: [
    "TypeScript",
    "TSKaigi",
    "TS会議",
    "TSKaigi Hokuriku",
    "TSKaigi Hokuriku 2025",
    "Hokuriku",
    "北陸",
    "Kanazawa",
    "金沢",
    "カンファレンス",
    "イベント",
    "オンライン",
  ],
  publisher: "一般社団法人TSKaigi Association",
  robots: "index, follow",
  twitter: {
    title: {
      template: "%s | TSKaigi Hokuriku 2025",
      default: "TSKaigi Hokuriku 2025",
    },
    description:
      "日本最大級のTypeScriptをテーマとした技術カンファレンスであるTSKaigiが金沢でも開催されます。",
    site: "@tskaigi",
    creator: "@tskaigi",
    card: "summary_large_image",
    images: ["https://hokuriku.tskaigi.org/twitter-card.png"],
  },
  openGraph: {
    title: {
      template: "%s | TSKaigi Hokuriku 2025",
      default: "TSKaigi Hokuriku 2025",
    },
    url: "https://hokuriku.tskaigi.org",
    description:
      "日本最大級のTypeScriptをテーマとした技術カンファレンスである TSKaigi が金沢でも開催されます。",
    type: "website",
    images: ["https://hokuriku.tskaigi.org/ogp.png"],
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="ja">
      <body className={cn(outfit.variable, notoSansJP.variable, "antialiased")}>
        <div className="flex min-h-screen flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
