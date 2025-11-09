"use client";

import { ScrollIndicator } from "@/components/scroll-indicator";

const Hero = () => {
  return (
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
  );
};

export default Hero;
