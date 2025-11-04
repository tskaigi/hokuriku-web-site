import { TrackGroup } from "@/components/timetable/track-group";
import { TrackItem } from "@/components/timetable/track-item";
import { useTimetable } from "@/hooks/useTimetable";
import { getTalk } from "@/utils/getTalk";

const date = "2025-11-23";

// セッションの時間帯設定
const sessionTimeTable = [
  { id: "10:00", startTime: new Date(`${date}T10:00:00`), endTime: new Date(`${date}T10:01:00`) },
  { id: "10:30", startTime: new Date(`${date}T10:30:00`), endTime: new Date(`${date}T10:40:00`) },
  { id: "10:40", startTime: new Date(`${date}T10:40:00`), endTime: new Date(`${date}T11:10:00`) },
  { id: "11:15", startTime: new Date(`${date}T11:15:00`), endTime: new Date(`${date}T11:45:00`) },
  { id: "11:45", startTime: new Date(`${date}T11:45:00`), endTime: new Date(`${date}T12:00:00`) },
  { id: "12:00", startTime: new Date(`${date}T12:00:00`), endTime: new Date(`${date}T12:35:00`) },
  { id: "12:35", startTime: new Date(`${date}T12:35:00`), endTime: new Date(`${date}T13:00:00`) },
  { id: "13:00", startTime: new Date(`${date}T13:00:00`), endTime: new Date(`${date}T13:30:00`) },
  { id: "13:30", startTime: new Date(`${date}T13:30:00`), endTime: new Date(`${date}T14:00:00`) },
  { id: "14:00", startTime: new Date(`${date}T14:00:00`), endTime: new Date(`${date}T14:10:00`) },
  { id: "14:10", startTime: new Date(`${date}T14:10:00`), endTime: new Date(`${date}T14:40:00`) },
  { id: "14:40", startTime: new Date(`${date}T14:40:00`), endTime: new Date(`${date}T15:10:00`) },
  { id: "15:10", startTime: new Date(`${date}T15:10:00`), endTime: new Date(`${date}T15:30:00`) },
  { id: "15:30", startTime: new Date(`${date}T15:30:00`), endTime: new Date(`${date}T16:00:00`) },
  { id: "16:00", startTime: new Date(`${date}T16:00:00`), endTime: new Date(`${date}T16:30:00`) },
  { id: "16:30", startTime: new Date(`${date}T16:30:00`), endTime: new Date(`${date}T16:40:00`) },
  { id: "16:40", startTime: new Date(`${date}T16:40:00`), endTime: new Date(`${date}T17:00:00`) },
  { id: "17:00", startTime: new Date(`${date}T17:00:00`), endTime: new Date(`${date}T17:55:00`) },
  { id: "17:55", startTime: new Date(`${date}T17:55:00`), endTime: new Date(`${date}T17:56:00`) }, // 終了を少しずらす
  { id: "18:00", startTime: new Date(`${date}T18:00:00`), endTime: new Date(`${date}T20:00:00`) },
];

export const TimeTable = () => {
  const { isSessionActive } = useTimetable({ sessionTimeTable });

  return (
    <>
      {/* 開場: 10:00（両トラック共通） */}
      <TrackGroup
        startTime="10:00"
        tracks={["TRACK1", "TRACK2"]}
        eventText="開場"
        isActive={false}
      />

      {/* オープニング: 10:30 ~ 10:40 */}
      <TrackGroup
        startTime="10:30"
        endTime="10:40"
        tracks={["TRACK1", "TRACK2"]}
        eventText="オープニング"
        isActive={isSessionActive("10:30")}
      />

      {/* Keynote: 10:40 ~ 11:10 */}
      <TrackItem
        startTime="10:40"
        endTime="11:10"
        contents={[
          { track: "TRACK1", talk: getTalk("1") },
          { track: "TRACK2", eventText: "サテライト" },
        ]}
        isActive={isSessionActive("10:40")}
      />

      {/* 午前セッション: 11:15 ~ 11:45 */}
      <TrackItem
        startTime="11:15"
        endTime="11:45"
        contents={[
          { track: "TRACK1", talk: getTalk("2") },
          { track: "TRACK2", talk: getTalk("3") },
        ]}
        isActive={isSessionActive("11:15")}
      />

      {/* 昼食: 11:45 ~ 12:00 */}
      <TrackGroup
        startTime="11:45"
        endTime="12:00"
        tracks={["TRACK1", "TRACK2"]}
        eventText="昼食：ランチ配布"
        isActive={isSessionActive("11:45")}
      />

      {/* スポンサーLT: 12:00 ~ 12:35 */}
      <TrackItem
        startTime="12:00"
        endTime="12:35"
        contents={[
          {
            track: "TRACK1",
            talk: [
              getTalk("4"),
              getTalk("5"),
              getTalk("6"),
              getTalk("7"),
              getTalk("8"),
              getTalk("9"),
            ],
          },
          {
            track: "TRACK2",
            talk: [
              getTalk("10"),
              getTalk("11"),
              getTalk("12"),
              getTalk("13"),
              getTalk("14"),
              getTalk("15"),
              getTalk("16"),
              getTalk("17"),
            ],
          },
        ]}
        isActive={isSessionActive("12:00")}
      />

      {/* <TrackGroup
        startTime="12:00"
        endTime="12:35"
        tracks={["TRACK1", "TRACK2"]}
        eventText="スポンサーLT"
        isActive={isSessionActive("12:00")}
      /> */}

      {/* 昼食: 12:35 ~ 13:00 */}
      <TrackGroup
        startTime="12:35"
        endTime="13:00"
        tracks={["TRACK1", "TRACK2"]}
        eventText="昼食"
        isActive={isSessionActive("12:35")}
      />

      {/* 午後セッション: 13:00 ~ 13:30 */}
      <TrackItem
        startTime="13:00"
        endTime="13:30"
        contents={[
          { track: "TRACK1", talk: getTalk("18") },
          { track: "TRACK2", talk: getTalk("19") },
        ]}
        isActive={isSessionActive("13:00")}
      />
      {/* チーム発表: 13:30 ~ 14:00 */}
      <TrackItem
        startTime="13:30"
        endTime="14:00"
        contents={[
          { track: "TRACK1", talk: getTalk("20") },
          { track: "TRACK2", talk: getTalk("21") },
        ]}
        isActive={isSessionActive("13:30")}
      />
      {/* 休憩: 14:00 ~ 14:10 */}
      <TrackGroup
        startTime="14:00"
        endTime="14:10"
        tracks={["TRACK1", "TRACK2"]}
        eventText="休憩"
        isActive={isSessionActive("14:00")}
      />
      {/* 午後セッション: 14:10 ~ 14:40 */}
      <TrackItem
        startTime="14:10"
        endTime="14:40"
        contents={[
          { track: "TRACK1", talk: getTalk("22") },
          { track: "TRACK2", talk: getTalk("23") },
        ]}
        isActive={isSessionActive("14:10")}
      />

      {/* 午後セッション: 14:40 ~ 15:10 */}
      <TrackItem
        startTime="14:40"
        endTime="15:10"
        contents={[
          {
            track: "TRACK1",
            talk: [getTalk("24")],
          },
          {
            track: "TRACK2",
            talk: [getTalk("25"), getTalk("26"), getTalk("27"), getTalk("28"), getTalk("29")],
          },
        ]}
        isActive={isSessionActive("14:40")}
      />

      {/* 休憩: 15:10 ~ 15:30 */}
      <TrackGroup
        startTime="15:10"
        endTime="15:30"
        tracks={["TRACK1", "TRACK2"]}
        eventText="休憩"
        isActive={isSessionActive("15:10")}
      />

      {/* 午後セッション: 15:30 ~ 16:00 */}
      <TrackItem
        startTime="15:30"
        endTime="16:00"
        contents={[
          { track: "TRACK1", talk: getTalk("30") },
          { track: "TRACK2", talk: getTalk("31") },
        ]}
        isActive={isSessionActive("15:30")}
      />

      {/* 午後セッション: 16:00 ~ 16:30 */}
      <TrackItem
        startTime="16:00"
        endTime="16:30"
        contents={[
          {
            track: "TRACK1",
            talk: [getTalk("32")],
          },
          {
            track: "TRACK2",
            talk: [getTalk("33"), getTalk("34"), getTalk("35"), getTalk("36")],
          },
        ]}
        isActive={isSessionActive("16:00")}
      />

      {/* 休憩: 16:30 ~ 16:40 */}
      <TrackGroup
        startTime="16:30"
        endTime="16:40"
        tracks={["TRACK1", "TRACK2"]}
        eventText="休憩"
        isActive={isSessionActive("16:30")}
      />

      {/* 午後セッション: 16:40 ~ 17:00 */}
      <TrackItem
        startTime="16:40"
        endTime="17:00"
        contents={[
          {
            track: "TRACK1",
            talk: [getTalk("37"), getTalk("38"), getTalk("39")],
          },
          {
            track: "TRACK2",
            talk: [getTalk("40"), getTalk("41")],
            eventText: "参加者体験企画の切り替え作業",
          },
        ]}
        isActive={isSessionActive("16:40")}
      />

      {/* クロージング　企画: 17:00 ~ 17:55 */}
      <TrackItem
        startTime="17:00"
        endTime="17:55"
        contents={[
          { track: "TRACK1", eventText: "トグルホールクロージング" },
          { track: "TRACK2", eventText: "参加者体験企画" },
        ]}
        isActive={isSessionActive("17:00")}
      />

      {/* クロージング: 17:55（両トラック共通） */}
      <TrackGroup
        startTime="17:55"
        tracks={["TRACK1", "TRACK2"]}
        eventText="クロージング"
        isActive={isSessionActive("17:55")}
      />

      {/* 懇親会: 18:00（両トラック共通） */}

      <TrackGroup
        startTime="18:00"
        endTime="20:00"
        eventText="懇親会"
        venue="懇親会会場（ダイヤモンドA）"
        isActive={isSessionActive("18:00")}
      />
    </>
  );
};
