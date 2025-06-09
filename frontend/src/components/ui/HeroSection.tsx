import React from 'react';
import ResumeBtn from './ResumeBtn';

const HeroSection: React.FC = () => {
  return (
    <div id="hero" className="flex flex-col lg:flex-row items-center justify-between h-screen lg:h-[calc(100vh-100px)] sm:h-screen lg:gap-x-14 overflow-hidden mb-20 sm:mb-16 sm:mt-32 md:my-20 lg:my-0 lg:px-10 xl:m-0 2xl:mx-20 xs:h-screen xs:items-center xs:justify-center">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-start max-w-xl lg:max-w-3xl text-center lg:text-left sm:mt-8 md:mt-0 lg:mt-0 flex-1 z-20 xs:h-auto xs:flex xs:items-center xs:justify-center">
        <h2 className="mb-1 text-3xl font-extrabold text-gray-400 sm:text-lg md:text-xl lg:text-3xl xl:text-4xl dark:text-gray-400 md:w-full sm:w-full sm:mx-auto font-['Space_Grotesk']">
          Hello, I am <span className="text-rose-400">Ivan</span>
        </h2>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl sm:w-full md:w-full dark:text-white font-['Clash_Display']" style={{ textShadow: "-4px 4px 5px rgba(0, 0, 0, 1)" }}>
          Full Stack <br />
          Web Developer
        </h1>
        <p className="mb-2 text-lg font-light text-gray-400 sm:text-base md:text-lg lg:text-xl xl:text-xl dark:text-gray-400 sm:px-12 lg:px-0 xl:text-left xl:w-full font-['Inter']">
          I am a Curious Developer with a passion for anything related to Software Development
        </p>
        <div className="mb-72 sm:mb-2 md:mb-4 lg:mb-0 md:w-full sm:w-full">
          <ResumeBtn />
        </div>
      </div>
    </div>
  );
};

export default HeroSection; 