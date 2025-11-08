// src/utils/isSpeakerVisible.ts
import type { TalkType } from "@/constants/timetableEventData";

export const isSpeakerVisible = (talkType: TalkType): boolean => {
  return talkType !== "EVENT";
};
