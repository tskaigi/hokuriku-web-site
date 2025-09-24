import { CfpRecruitment } from "@/components/cfp-recruitment";
import { CountdownTimer } from "@/components/countdown-timer";
import { SponsorBoardSection } from "@/components/spondor-board";
import TicketPurchaseSection from "@/components/ticket-purchase";
import { ChevronDown } from "lucide-react";

const Home = () => {
  return (
    <main className="overflow-x-hidden pt-8">
      <div className="relative flex h-[674px] w-full flex-col items-center text-center lg:h-[790px]">
        {/* grid overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[length:42px_42px] opacity-15 lg:bg-[length:55px_55px]"
          style={{
            backgroundImage: `
            linear-gradient(var(--primary) 2px, transparent 2px),
            linear-gradient(90deg, var(--primary) 2px, transparent 2px)
          `,
            mask: `radial-gradient(
            ellipse 70% 60% at center,
            black 20%,
            black 20%,
            transparent 60%
          )`,
            WebkitMask: `radial-gradient(
            ellipse 70% 60% at center,
            black 20%,
            black 20%,
            transparent 60%
          )`,
          }}
        />
        <div className="mt-[178px] lg:mt-[248px]">
          <CountdownTimer />
        </div>
        <div className="mt-[52px] space-y-1 text-2xl font-semibold">
          <time
            dateTime="2025-11-23"
            className="text-[28px] leading-[36px] font-semibold tracking-[-.75%] tabular-nums"
          >
            11/23
          </time>
          <p className="font-noto text-[23px] leading-[36px] font-bold tracking-[-.75%]">
            ホテル金沢
          </p>
        </div>
        <h1 className="text-primary mt-[30px] w-96 text-[48px] leading-[50px] font-bold tracking-[0.2%] lg:mt-[40px] lg:w-full lg:text-[59px]">
          <span className="whitespace-nowrap">TSKaigi Hokuriku</span>
          <wbr /> Coming Soon
        </h1>
        <div className="mt-11 flex flex-col items-center lg:mt-16">
          <div className="text-primary text-xl leading-[25px] font-semibold tracking-[-1.2%] lg:font-bold">
            Scroll
          </div>
          <ChevronDown className="text-primary h-4 w-4" />
        </div>
      </div>

      <TicketPurchaseSection />
      <CfpRecruitment />
      <SponsorBoardSection />
    </main>
  );
};

export default Home;
