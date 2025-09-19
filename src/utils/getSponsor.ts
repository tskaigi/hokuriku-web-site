import { sponsorList } from "@/constants/sponsors";
import { notFound } from "next/navigation";

/**
 * IDを元にスポンサー情報を取得する
 * @param sponsorId - スポンサーのID
 * @returns スポンサー情報
 */
export const getSponsor = (sponsorId: string) => {
  const sponsor = Object.values(sponsorList)
    .flat()
    .find((sponsor) => sponsor.sponsorId === sponsorId);

  if (!sponsor) {
    notFound();
  }

  return sponsor;
};
