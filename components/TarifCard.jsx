import Image from 'next/image'
import React from 'react'
import { FaBeer, FaCheck } from "react-icons/fa";


const TarifCard = ({libelle,price,titre}) => {
  return (
    <div className='bg-white lg:w-full shadow-lg p-5 flex  flex-col justify-center items-center cards '>
        <Image src="/assets/price.png" 
        width={70}
        height={70}
        alt='price'
        />
      <p className=' font-bold text-2xl py-4 text-red-400'>  {libelle}</p>
      <p> <span className=' text-5xl font-bold text-gray-700  '>{price}</span>$ / Month </p>
      <p className='text-center text-gray-600 py-3'> {titre} </p>

      <hr className='border-[1px] border-gray-100 w-full my-5'/>

      <ul className='place-self-start pl-2 space-y-3 justify-self-start'>
        <li className='flex items-center gap-3'> <FaCheck size={15} className='text-red-400'/> 1 Device Connection        </li>
         <li className='flex items-center gap-3'> <FaCheck size={15} className='text-red-400'/> 18000+ TV Channels </li>
         <li className='flex items-center gap-3'> <FaCheck size={15} className='text-red-400'/> Supports All Devices</li>
         <li className='flex items-center gap-3'> <FaCheck size={15} className='text-red-400'/> 24/7 Instant Support</li>

    
      </ul>
  <div className="buttos ease-linear .3s h-[60px] mt-8 w-[190px]  bg-gradient-to-r from-blue-900  to-red-500 p-[1px]   ">
    <div className="flex buttos h-full w-full items-center justify-center bg-white back">
     <button className='text-black ' >Order Now</button>
    </div>
  </div>
</div>
  )
}

export default TarifCard
