'use client'
import Image from 'next/image'
import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { PlaceholdersAndVanishInput } from './ui/placeholders-and-vanish-input';

function Information() {
  const placeholders = [
    "Rechercher Votre Voiture",
    "BMW / MRC / Audi...",
    " Rechercher Votre Voiture luxeise",
    "SUV / Sidan / Cabriolet  ",
    ,
  ];

const handleChange = (e) => {
  console.log(e.target.value);
};

const onSubmit = (e) => {
  e.preventDefault();
  console.log("submitted");
};
 
  return (
    <div className='flex flex-col gap-8 mt-12 items-center justify-center  ' >

      <div className=' justify-between flex  items-center  shadow-2xl shadow-black gap-6'>
        <div className=' inline-flex items-center gap-2 justify-between' >
<MdEmail />
          <p>exampledegui@gmail.com</p>
        </div>
        <div className='inline-flex items-center gap-2 justify-between' >
<FaPhoneAlt />
          <p>0559595906</p>
        </div>

      </div>

      <div>
<PlaceholdersAndVanishInput
        placeholders={placeholders}
        onChange={handleChange}
        onSubmit={onSubmit}
      />

      </div>

    </div>
  )
}

export default Information
