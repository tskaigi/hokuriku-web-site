import { writeFileSync } from "fs";
import { join } from "path";
import { talkList } from "../src/constants/timetableEventData";

const publicDir = join(process.cwd(), "public");

// talks.json を生成
writeFileSync(join(publicDir, "talks.json"), JSON.stringify(talkList, null, 2), "utf-8");

console.log("✅ talks.json generated at public/talks.json");
