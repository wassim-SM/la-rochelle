"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import Reactlogo from "../public/imgs/React-icon.svg.png" 
import Mercides from "../public/imgs/merceds.png"
import Bmw from "../public/imgs/bmw.png"
import Range from "../public/imgs/land-rover-logo-png_seeklogo-201638.png"
import Audi from "../public/imgs/audi-14-logo-black-and-white.png"
import Porche from "../public/imgs/porche.png"
import Maserati from "../public/imgs/;qsirqti.png"
import Volsvagen from "../public/imgs/volvsvqgen,png.jpg" 











export default function Logocars() {
  return (
    <div className=" rounded-md flex shadow-2xl  flex-col shad antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      
       <InfiniteMovingCards
        items={[...logos, ...logos]} // repeat for loop effect
        direction="left"
        speed="fast"
      />
    </div>
  );
}
const logos = [
  { name: "Mercedes", logo: Mercides },
  { name: "BMW", logo: Bmw },
  { name: "Range Rover", logo: Range },
  { name: "Maserati", logo: Maserati },
  { name: "Audi", logo: Audi },
  { name: "Porsche", logo: Porche },
  { name: "Volkswagen", logo: Volsvagen },
    { name: "Volkswagen", logo: Volsvagen },

];

