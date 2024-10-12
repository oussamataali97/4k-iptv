"use client"
import React from 'react'
import TarifCard from './TarifCard'
import { useState } from 'react'
const Plan = () => {

  const [plan,setPlan]=useState(null)
  
  console.log(plan)

  return (
<section className=" md:py-16  px-4 md:px-6 bg-[url('/assets/pattern-53.png')] bg-center bg-no-repeat      ">
<p className='text-center font-bold text-[30px] md:text-[40px]'>Choose Your Plan</p>

    <div className="flex justify-center items-center text-sm font-normal gap-5 mt-6">
        <button onClick={()=>setPlan("Annual")} className={`${plan === 'Annual' ? 'bg-red-800 text-white text-xl': '' }btn px-6 py-3 uppercase rounded-full border-2 border-white`}>Annual</button>
        <button onClick={()=>setPlan("Monthly")}className={`${plan === 'Monthly' ? 'bg-red-800  text-white text-xl font-lg': '' }btn px-6 py-3 uppercase rounded-full border-2 border-white`}>Montly</button>
    </div>
    <div className="flex flex-col md:flex-row  justify-between gap-6 items-center mt-10 md:max-w-6xl mx-auto ">
        <TarifCard price="11" titre="Unlimited Entertainment: 30 Days of Nonstop IPTV Bliss!" libelle="1 Month" />
        <TarifCard price="30" titre="Stream Smarter: 90 Days of Premium IPTV Entertainment" libelle="3 Months"/>
        <TarifCard price="60" titre="Unlimited Entertainment: 12 Months of Nonstop IPTV Bliss!" libelle="12 Months"/>
    </div>
  
    </section>
  )
}

export default Plan
