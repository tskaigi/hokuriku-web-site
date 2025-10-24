import { XIcon } from "./icon/x";

type Props = {
  size?: "sm" | "md";
};

const shareUrl = new URL("https://x.com/intent/post");
shareUrl.searchParams.set("text", "TSKaigi Hokuriku 2025");
shareUrl.searchParams.set("hashtags", "TSKaigiHokuriku,TSKaigi");
shareUrl.searchParams.set("url", "https://hokuriku.tskaigi.org/");

export const ShareButton = ({ size = "md" }: Props) => {
  return (
    <a
      className="flex items-center gap-2 rounded-full bg-black px-5 py-3 text-[white] data-[size=sm]:px-4 data-[size=sm]:py-2"
      target="_blank"
      data-size={size}
      rel="noopener noreferrer"
      href={shareUrl.toString()}
    >
      <XIcon size={size === "md" ? 20 : 14} />
      でシェア
    </a>
  );
};
