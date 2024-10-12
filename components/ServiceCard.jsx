import React from 'react'
import { MdVerifiedUser } from "react-icons/md";

const ServiceCard = ({icon,descr,titre}) => {
  return (
    <div className='py-16 bg-white card-onfo p-5 group flex flex-col justify-center icos    items-center w-[400px] cards'>
    <p className=' text-3xl border-2 group-hover:bg-red-500 group-hover:text-white border-red-300 text-red-500 rounded-full p-5'>{icon}</p>
    <p className='font-bold text-xl text-gray-700 pt-3'>{titre}</p>
    <p className='text-center py-4'>{descr}</p>
    </div>
  )
}

export default ServiceCard
