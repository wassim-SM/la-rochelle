import React from 'react'
import { PointerHighlight } from './ui/pointer-highlight'
import Classc from "../public/imgs/classc-removebg-preview.png"
import SUV from "../public/imgs/suv_png-removebg-preview.png"
import { Card, Carousel } from './ui/apple-cards-carousel';
import Golf8 from "../public/imgs/golf8-removebg-preview.png"

const cardItemsMercides = [
  {
    title: "Discover the Desert",
    category: "Travel",
    src: Classc,
    content: <p>Explore vast dunes and beautiful landscapes.</p>,
  },
  {
    title: "Mountain Escape",
    category: "Adventure",
    src: Classc,
    content: <p>Climb to new heights and breathe fresh air.</p>,
  },
  {
    title: "City Lights",
    category: "Lifestyle",
    src: Classc,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Classc,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Classc,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Classc,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Classc,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
];


const CardItemsSuv = [
  {
    title: "Discover the Desert",
    category: "Travel",
    src: SUV,
    content: <p>Explore vast dunes and beautiful landscapes.</p>,
  },
  {
    title: "Mountain Escape",
    category: "Adventure",
    src: SUV,
    content: <p>Climb to new heights and breathe fresh air.</p>,
  },
  {
    title: "City Lights",
    category: "Lifestyle",
    src: SUV,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: SUV,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: SUV,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: SUV,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: SUV,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
];

const CardItemsGolf = [
  {
    title: "Discover the Desert",
    category: "Travel",
    src: Golf8,
    content: <p>Explore vast dunes and beautiful landscapes.</p>,
  },
  {
    title: "Mountain Escape",
    category: "Adventure",
    src: Golf8,
    content: <p>Climb to new heights and breathe fresh air.</p>,
  },
  {
    title: "City Lights",
    category: "Lifestyle",
    src: Golf8,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Golf8,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Golf8,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Golf8,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
    {
    title: "City Lights",
    category: "Lifestyle",
    src: Golf8,
    content: <p>Experience the vibrant energy of urban life.</p>,
  },
];

function Lesvoitures() {
  return (
    <div className='flex flex-col p-4  ' >
      <div className='flex justify-between text-left' >
<PointerHighlight rectangleClassName="bg-orange-300 rounded-2xl  dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-yellow-500 " >
    <span className="relative z-10  font-bold text-center  p-4 ">Voitures SUV</span>
</PointerHighlight>
<button className='p-4 bg-orange-500 text-white font-bold rounded-2xl  ' >Voir Plus</button>
      </div>

<div>
     <Carousel
        items={cardItemsMercides.map((card, index) => (
          <Card key={index} card={card} index={index} layout />
        ))}
      />
</div>



 <div className='flex justify-between text-left pt-8' >
<PointerHighlight rectangleClassName="bg-orange-300 rounded-2xl  dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-yellow-500 " >
    <span className="relative z-10  font-bold text-center  p-4 ">Voitures SUV</span>
</PointerHighlight>
<button className='p-4 bg-orange-500 text-white font-bold rounded-2xl  ' >Voir Plus</button>
      </div>

<div>
     <Carousel
        items={CardItemsSuv.map((card, index) => (
          <Card key={index} card={card} index={index} layout />
        ))}
      />
</div>

   <div className='flex justify-between text-left pt-8' >
<PointerHighlight rectangleClassName="bg-orange-300 rounded-2xl  dark:bg-neutral-700 border-neutral-300 dark:border-neutral-600"
        pointerClassName="text-yellow-500 " >
    <span className="relative z-10  font-bold text-center  p-4 ">Voitures Berlin</span>
</PointerHighlight>
<button className='p-4 bg-orange-500 text-white font-bold rounded-2xl  ' >Voir Plus</button>
      </div>

<div>
     <Carousel
        items={CardItemsGolf.map((card, index) => (
          <Card key={index} card={card} index={index} layout />
        ))}
      />
</div>


    </div>
  )
}

export default Lesvoitures
