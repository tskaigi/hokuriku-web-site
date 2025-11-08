// src/hooks/useTimetable.ts
import { useEffect, useState } from "react";

export type Session = {
  id: string;
  startTime: Date;
  endTime: Date;
};

export const useTimetable = ({ sessionTimeTable }: { sessionTimeTable: Session[] }) => {
  const [currentTime, setCurrentTime] = useState<Date>(new Date());

  /** 現在時刻を1分ごとに更新 */
  useEffect(() => {
    setCurrentTime(new Date());
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  /** 現在進行中のセッションを取得 */
  const getCurrentSessionId = (now: Date) => {
    for (const session of sessionTimeTable) {
      if (now >= session.startTime && now < session.endTime) {
        return session.id;
      }
    }
    return null;
  };

  /** 現在のセッションがアクティブかを判定 */
  const isSessionActive = (sessionId: string) => {
    const currentId = getCurrentSessionId(currentTime);
    return currentId === sessionId;
  };

  return {
    currentTime,
    getCurrentSessionId,
    isSessionActive,
  };
};
