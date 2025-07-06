"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const BackToTopButton: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <button
      aria-label="Back to Home"
      onClick={handleClick}
      className={`fixed z-50 bottom-8 right-6 sm:bottom-10 sm:right-10 p-3 rounded-full shadow-lg border-2 border-rose-400 bg-gradient-to-br from-rose-500/90 to-rose-400/90 text-white hover:from-rose-400 hover:to-rose-500 hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-rose-400 ${
        visible ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={{ boxShadow: "0 4px 24px 0 rgba(236, 72, 153, 0.15)" }}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
};

export default BackToTopButton; 