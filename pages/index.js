import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeroSection from "@/components/Herosection";
import Logocars from "@/components/Logocars";
import Information from "@/components/Information";
import Lesvoitures from "@/components/Lesvoitures";
import Whyus from "@/components/Whyus";
import ContactUs from "@/components/Contactus";



export default function Home() {
  return (
   <div>
    <HeroSection/>
    <Logocars/>
    <Information/>
    <Lesvoitures/>
    <Whyus/>
    <ContactUs/>
   </div>
  );
}
