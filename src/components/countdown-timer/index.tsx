"use client";

import { useCountdown } from "@/hooks/useCountdownTimer";

const TimeLeft = ({ value, unit, duration }: { value: number; unit: string; duration: string }) => {
  return (
    <div className="w-[50px] text-center md:w-[100px]">
      <time
        dateTime={duration}
        className={`block text-3xl font-semibold tracking-[-0.75%] md:text-5xl md:font-normal lg:text-6xl`}
      >
        {value}
      </time>
      <span className="mt-1 text-xs font-light">{unit}</span>
    </div>
  );
};

const Divider = () => {
  return (
    <span
      className="mt-3 h-3.5 w-[1px] rotate-[15deg] bg-current md:h-7 lg:mt-4"
      aria-hidden="true"
    />
  );
};

export const CountdownTimer = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="bg-primary relative flex h-[142px] w-[330px] items-center justify-center overflow-hidden rounded-xl shadow-lg backdrop-blur-sm md:h-[154px] md:w-[600px] lg:h-[182px] lg:w-[630px]">
      <div
        className="absolute -top-[130px] -left-[100px] h-40 w-40 rotate-45 bg-[#ED82B0] lg:-top-[90px] lg:-left-[90px]"
        style={{
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute -right-[110px] -bottom-[110px] h-40 w-40 rounded-full bg-[#68C6F1] lg:-right-[100px] lg:-bottom-[100px]"
        style={{
          filter: "blur(30px)",
        }}
      />

      <div
        className="absolute inset-0 bg-[length:24px_24px] opacity-10 lg:bg-[length:32px_32px]"
        style={{
          backgroundImage: `
            linear-gradient(#fff 1px, transparent 1px),
            linear-gradient(90deg, #fff 1px, transparent 1px)
          `,
          mask: `
            linear-gradient(135deg, black, transparent 30%),
            linear-gradient(315deg, black, transparent 30%)
          `,
          WebkitMask: `
            linear-gradient(135deg, black, transparent 30%),
            linear-gradient(315deg, black, transparent 30%)
          `,
        }}
      />
      <div className="relative flex items-start gap-3 text-white">
        <TimeLeft value={days} unit="Days" duration={`PT${days}D`} />
        <Divider />
        <TimeLeft value={hours} unit="Hours" duration={`PT${hours}H`} />
        <Divider />
        <TimeLeft value={minutes} unit="Minutes" duration={`PT${minutes}M`} />
        <Divider />
        <TimeLeft value={seconds} unit="Seconds" duration={`PT${seconds}S`} />
      </div>
    </div>
  );
};
