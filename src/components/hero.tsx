"use client";

import { ScrollIndicator } from "@/components/scroll-indicator";
import sketch from "@/lib/sketch";
import p5 from "p5";
import { useEffect, useRef } from "react";
import "./hero.css";

const Hero = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5>(null);

  useEffect(() => {
    import("p5").then(({ default: p5 }) => {
      if (!p5Instance.current) {
        p5Instance.current = new p5(sketch, canvasRef.current!);
      }
    });
  }, []);

  return (
    <section id="hero" className="bg-primary relative w-full min-w-84">
      <div id="canvas" className="canvas-container w-full [&>canvas]:!touch-auto" ref={canvasRef} />
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
