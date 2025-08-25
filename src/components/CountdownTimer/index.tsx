"use client";

import { useCountdown } from "@/hooks/useCountdownTimer";

const TimeLeft = ({ value, unit }: { value: number; unit: string }) => {
  return (
    <div className="text-center">
      <span className="block text-4xl font-bold">{value}</span>
      <span className="text-xs">{unit}</span>
    </div>
  );
};

const Divider = () => {
  return <span className="-mt-4 h-6 w-[1px] rotate-[15deg] bg-current" aria-hidden="true" />;
};

export const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="rounded-xl bg-blue-600 shadow-lg backdrop-blur-sm">
      <div className="m-10 flex items-center justify-center gap-3 space-x-4 text-white">
        <TimeLeft value={days} unit="Days" />
        <Divider />
        <TimeLeft value={hours} unit="Hours" />
        <Divider />
        <TimeLeft value={minutes} unit="Minutes" />
        <Divider />
        <TimeLeft value={seconds} unit="Seconds" />
      </div>
    </div>
  );
};
