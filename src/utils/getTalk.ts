import { type Talk, talkList } from "@/constants/timetableEventData";

/**
 * IDを元にトーク情報を取得する
 * @param id - トークのID
 * @returns トーク情報
 */
export function getTalk(id: string | number): Talk {
  const talk = talkList.find((talk) => String(talk.id) === String(id));

  if (!talk) {
    throw new Error(`talk "${id}" が見つかりませんでした`);
  }

  return talk;
}
