// app/components/HeroSection.tsx or wherever you define your hero section
"use client";

import React from "react";
import { BackgroundLines } from "./ui/background-lines";
import { FlipWords } from "./ui/flip-words";

const HeroSection = () => {
  return (
    <BackgroundLines
      className="relative overflow-hidden"
      svgOptions={{}} // pass any options here if needed
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
          Bien Venu Chez Degui Location 
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          Service de location de voiture pour<FlipWords words={["marriage","evenement","seminaire"]} />

        </p>
      </div>
    </BackgroundLines>
  );
};

export default HeroSection;
