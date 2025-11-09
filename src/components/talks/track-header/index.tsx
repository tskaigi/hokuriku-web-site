import { Button } from "@/components/ui/button";
import { TRACK, type Track } from "@/constants/timetableEventData";
import { cn } from "@/lib/utils";
import { Copy } from "lucide-react";
import { useState } from "react";

type Props = {
  track: Track;
};

export function TrackHeader({ track }: Props) {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("クリップボードへのコピーに失敗しました", err);
    }
  };

  return (
    <div className={cn(TRACK[track].bgColor, "p-2 text-center")}>
      <h2 className={cn(TRACK[track].textColor, "font-bold")}>{TRACK[track].name}</h2>
      <div className="mt-2 flex justify-center">
        <Button
          onClick={() => copyToClipboard(TRACK[track].tag)}
          className="flex h-auto cursor-pointer items-center gap-2 rounded-full bg-white px-4 py-1 text-sm font-medium text-black hover:bg-gray-100"
        >
          {copySuccess ? (
            <span>コピーしました！</span>
          ) : (
            <>
              <span>{TRACK[track].tag}</span>
              <Copy className="h-4 w-4" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
