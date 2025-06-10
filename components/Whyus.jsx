import React from 'react'
import { ContainerScroll } from './ui/container-scroll-animation'
import { BackgroundGradient } from './ui/background-gradient'
import Image from 'next/image'
import Pic from "../public/imgs/livraison-voiture.jpg"
import { WorldMap } from './ui/world-map'
import Manucars from "../public/imgs/casqnycwqr.png" 
function Whyus() {
  return (
    <div className='flex flex-col -mt-10 gap-4 p-4 ' >
        <h1 className='text-center text-3xl font-extrabold mt-10  ' >Pourqoui Nous ?</h1>
      <div className='flex justify-between items-center  gap-4'>
<div className='flex flex-col gap-2 ' >
    <h1 className='text-2xl font-bold text-left' >Large choix de véhicules récents</h1>
    <p>Nous proposons une flotte variée citadines économiques, berlines confortables, SUV robustes ou voitures de luxe. Tous nos véhicules sont récents, bien entretenus et climatisés.</p>
</div>

<div className='flex flex-col overflow-hidden' >
     <ContainerScroll
        // titleComponent={
        //   <>
        //     <h1 className="text-4xl font-semibold text-black dark:text-white">
        //       Unleash the power of <br />
        //       <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
        //         Scroll Animations
        //       </span>
        //     </h1>
        //   </>
        // }
      >
        <Image
          src={Manucars}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
</div>

      </div>
<div className='flex justify-between gap-8 ' >


      <div className='flex justify-baseline w-96 ' >
<div className='flex flex-col gap-2 ' >
    <h1 className='text-2xl font-bold text-left' >Livraison à domicile ou à l’aéroport</h1>
<p>
Nous livrons et récupérons le véhicule partout à Alger, que ce soit à l’aéroport, à votre hôtel ou à votre domicile, sans frais supplémentaires dans plusieurs zones.    </p>
</div>

<div>

</div>
      </div>

      <div>
       <BackgroundGradient className="rounded-[22px] max-w-sm   bg-white dark:bg-zinc-900">
  <Image 
    src={Pic} 
    alt="Livraison de voiture" 
    width={1000} 
    height={1000}  
    className="w-full h-full object-cover rounded-[16px]" 
  />
</BackgroundGradient>
      </div>
      </div>

<div className='flex justify-between gap-8 mt-10 ' >
<div className='flex flex-col gap-2 w-96 ' >
    <h1 className='text-2xl font-bold text-left' >Livraison à domicile ou à l’aéroport</h1>
<p>
Nous livrons et récupérons le véhicule partout à Alger, que ce soit à l’aéroport, à votre hôtel ou à votre domicile, sans frais supplémentaires dans plusieurs zones.    </p>
</div>

<div className='' >
<WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
          {
            start: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
            end: { lat: 38.7223, lng: -9.1393 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
        ]}
      />
</div>

</div>

    </div>
  )
}

export default Whyus
