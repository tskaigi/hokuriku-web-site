import { CountdownTimer } from "@/components/CountdownTimer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">TSKaigi Hokuriku</h1>
      <CountdownTimer />
    </div>
  );
}
