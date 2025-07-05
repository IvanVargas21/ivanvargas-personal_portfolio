'use client'

import React from 'react';
import ResumeBtn from '../ui/ResumeBtn';
import TypeWriter from '../ui/TypeWriter';
// import { WavingHand } from 'lucide-react';
import { Spotlight } from '../ui/Spotlight';

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 sm:py-24 lg:py-32 relative overflow-hidden">
      {/* Spotlight Effect */}
      <Spotlight />
      
      {/* Text Section */}
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4 sm:space-y-6">
          {/* Greeting */}
          <div className="flex items-center gap-3">
            <TypeWriter 
              text="Hey there, I'm Ivan!👋" 
              delay={100} 
              className="text-2xl sm:text-3xl md:text-4xl font-bold text-rose-400" 
            />
            {/* <WavingHand className="w-6 h-6 sm:w-8 sm:h-8 text-rose-400 animate-wave" 
            /> */}
          </div>

          {/* Title with Glow Effect */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-400/20 to-rose-400/0 blur-xl"></div>
            <div className="relative">
              <TypeWriter 
                text="FULL STACK DEVELOPER" 
                delay={50} 
              />
            </div>
          </h1>

          {/* Tech Stack with Enhanced Styling */}
          <div className="w-full max-w-2xl">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-400 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative px-4 py-2 bg-black rounded-lg">
                <p className="text-base sm:text-lg md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500 font-semibold">
                  <TypeWriter 
                    text="✦ Next.js | React.js | TypeScript | Express.js Developer ✦" 
                    delay={30} 
                  />
                </p>
              </div>
            </div>
          </div>

          {/* Solutions Section */}
          <div className="w-full max-w-2xl space-y-2">
            <h3 className="text-lg sm:text-xl font-semibold text-rose-400">
              DELIVERING WIN-WIN SOLUTIONS
            </h3>
            <div className="min-h-[3em]">
              <TypeWriter 
                text="Your Investment → My Premium Development → Your Business Growth" 
                delay={30} 
                repeat={true}
                alternateText="Crafting meaningful applications that solve real problems with pixel-perfect precision and structured architecture"
                className="text-base sm:text-lg text-gray-400"
              />
            </div>
          </div>

          {/* Resume Button */}
          <div className="w-full sm:w-auto">
            <ResumeBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;