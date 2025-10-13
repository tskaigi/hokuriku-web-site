"use client";

import { ScrollIndicator } from "@/components/scroll-indicator";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-primary relative h-screen max-h-[calc(1600vw/9)] min-h-[calc(400vw/3)] w-screen min-w-84 sm:max-h-[calc(300vw/4)] sm:min-h-[calc(900vw/16)]"
    >
      <Image
        src="/kasumi-right.png"
        alt=""
        width={875}
        height={657}
        className="absolute top-[9vw] right-0 w-[48vw] sm:top-[6vw]"
      />
      <Image
        src="/kasumi-left.png"
        alt=""
        width={584}
        height={374}
        className="absolute top-[48vw] left-0 w-[30vw] sm:top-[min(48vw,60vh)]"
      />
      <Image
        src="/logo-white.svg"
        alt="TSKaigi Hokuriku"
        width={126}
        height={41}
        className="absolute top-[6vw] left-[50vw] w-[30vw] -translate-x-1/2 sm:top-[3vw] sm:w-[21vw]"
      />
      <div className="absolute top-[max(15vh,18vw)] left-0 h-[67vw] w-full bg-[url('/HOKURIKU-v.png')] bg-contain bg-no-repeat sm:top-[18vw] sm:h-[18vw] sm:bg-[url('/HOKURIKU-h.png')] md:top-[15vw]">
        <Image
          src="/daruma-left.png"
          alt=""
          width={408}
          height={492}
          className="absolute top-[51vw] -left-[6vw] h-[40vw] w-auto sm:top-[9vw] sm:left-[6vw] sm:h-[30vw]"
        />
        <Image
          src="/daruma-center.png"
          alt=""
          width={388}
          height={492}
          className="absolute top-[51vw] left-1/2 h-[40vw] w-auto -translate-x-1/2 sm:top-[9vw] sm:h-[30vw]"
        />
        <Image
          src="/daruma-right.png"
          alt=""
          width={424}
          height={524}
          className="absolute top-[51vw] -right-[6vw] h-[40vw] w-auto sm:top-[9vw] sm:right-[6vw] sm:h-[30vw]"
        />
      </div>
      <Image
        src="/20251123.png"
        alt="2025/11/23"
        width={610}
        height={181}
        className="absolute bottom-[18vw] left-1/2 h-[27vw] max-h-42 w-auto -translate-x-1/2 sm:bottom-[9vw] sm:h-[12vw] sm:max-h-36"
      />
      <Image
        src="/Kanazawa.png"
        alt="Kanazawa"
        width={407}
        height={100}
        className="absolute bottom-[6vw] left-1/2 h-[12vw] max-h-18 w-auto -translate-x-1/2 sm:bottom-[3vw] sm:h-[6vw]"
      />
      <Image
        src="/cover.png"
        alt=""
        width={1920}
        height={1080}
        className="absolute top-0 left-0 min-h-full min-w-full object-cover object-center mix-blend-color-burn"
      />

      {/* Scroll Indicator */}
      <div
        className="pointer-events-none absolute right-0 bottom-0 flex w-full flex-col items-end p-6"
        aria-hidden="true"
      >
        <ScrollIndicator />
      </div>
    </section>
  );
};

export default Hero;
