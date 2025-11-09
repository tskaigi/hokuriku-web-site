"use client";

import { ScrollIndicator } from "@/components/scroll-indicator";
import Script from "next/script";

const Hero = () => {
  return (
    <>
      <section id="hero" className="bg-primary relative w-full min-w-84">
        <div id="canvas" />

        {/* Scroll Indicator */}
        <div
          className="pointer-events-none absolute right-0 bottom-0 flex w-full flex-col items-end p-6"
          aria-hidden="true"
        >
          <ScrollIndicator />
        </div>
      </section>

      <Script
        src="https://cdn.jsdelivr.net/npm/p5/lib/p5.min.js"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("p5.js loaded");
        }}
      />
      <Script
        src="/hero/sketch.js"
        type="text/javascript"
        strategy="afterInteractive"
        onLoad={() => {
          console.log("sketch.js loaded");
        }}
      />
    </>
  );
};

export default Hero;
