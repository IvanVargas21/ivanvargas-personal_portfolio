import React from "react";
import { Spotlight } from "./ui/Spotlight";

export function HeroSection() {
  return (
    <div>
        {/* Spotlight Component */}
            <Spotlight
                className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen"
                fill="white"
              />
              <Spotlight
                className="top-10 left-full h-[80vh] w-[50vw]"
                fill="purple"
              />
              <Spotlight
                className="top-28 left-80 h-[80vh] w-[50vw]"
                fill="blue"
              />
        {/* Headline */}
        <h1>Hello</h1>
    </div>
  );
}