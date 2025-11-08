// src/components/talks/track-badge/index.tsx
import { TALK_TYPE } from "@/constants/timetableEventData";

export type TrackBadgeProps = {
  label?: string;
  bgColor?: string;
  textColor?: string;
  borderColor?: string;
  className?: string;
  hiddenOnDesktop?: boolean;
  hiddenOnMobile?: boolean;
  talkType?: keyof typeof TALK_TYPE;
};

/* 共通バッジコンポーネント */
export function TrackBadge({
  label,
  bgColor = "",
  textColor = "",
  borderColor = "",
  className = "",
  hiddenOnDesktop = false,
  hiddenOnMobile = false,
  talkType,
}: TrackBadgeProps) {
  const visibilityClass = hiddenOnDesktop
    ? "md:hidden"
    : hiddenOnMobile
      ? "hidden md:inline-flex"
      : "";

  // TALK_TYPE指定がある場合は自動で色と名前を取得
  const type = talkType ? (TALK_TYPE[talkType] ?? TALK_TYPE.DEFAULT) : null;
  const finalLabel = talkType ? type?.name : label;
  const finalBgColor = talkType ? "" : bgColor;
  const finalTextColor = talkType ? (type?.textColor ?? "") : textColor;
  const finalBorderColor = talkType ? (type?.borderColor ?? "") : borderColor;

  return (
    <span
      className={`inline-flex w-max items-center justify-center rounded-full border-2 px-3 py-1 text-xs font-semibold ${finalBgColor} ${finalTextColor} ${finalBorderColor} ${visibilityClass} ${className}`}
    >
      {label}
    </span>
  );
}
