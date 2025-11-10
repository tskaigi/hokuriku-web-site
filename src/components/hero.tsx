"use client";

import { ScrollIndicator } from "@/components/scroll-indicator";
import sketch from "@/lib/sketch";
import p5 from "p5";
import { useEffect, useRef } from "react";

const Hero = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5>(null);

  useEffect(() => {
    console.log(window);
    import("p5").then(({ default: p5 }) => {
      if (!p5Instance.current) {
        p5Instance.current = new p5(sketch, canvasRef.current!);
      }
    });
  }, []);

  return (
    <section id="hero" className="bg-primary relative w-full min-w-84">
      <div id="canvas" className="w-full" ref={canvasRef} />

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
