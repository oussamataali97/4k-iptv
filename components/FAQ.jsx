"use client"
import React,{useState} from 'react'
import Image from 'next/image'
import { FaMinus, FaPlus } from 'react-icons/fa'
const FAQ = () => {

    const [ques,setQues]=useState(false)
    const [toggle,setToggle]=useState(false)
    console.log(ques,'Hh')
const questions=[{id:0,q :"Can I use my subscription on multiple devices?" ,r:"Please note that one subscription can be used on multiple devices, but simultaneous streaming is limited to one device at a time." },
    {id:1,q:"How soon can I start using the service?",r:"We typically activate all new accounts within 30 minutes to 12 hours after the invoice has been paid."},
       { id:2,q:"What Internet Quality Is Required?",r:"A minimum of 16 Mbps is required for your internet connection. A stable and high-quality internet connection ensures clear image quality and eliminates buffering during matches, movies, or series playback."},
    {id:3,q:"Can I cancel my Subscription?",r:"No contracts, complete freedom to cancel anytime. Once cancelled, no additional charges apply and service ends automatically on next due date."}
    
]

  return (
    <div className="  bg-[url('/assets/4.jpg')] h-auto w-full bg-cover bg-fixed">
      <div className="container-app flexbox-2">
        <div className="w-full ">
            {questions.map((question,index)=>(
                <div className="sec">

                <p className={`${toggle== true ?'imp' : 'imp'}w-full text-xl font-bold  bg-white mt-2 py-3 px-2 flex justify-between items-center`} onClick={(index)=>{setQues(question) ;setToggle(true)}  }> {question?.q } <span> { question.id ===index ?  <FaPlus/> :<FaPlus/> }</span>  </p>
                {ques.id ===index && <p className="w-full  bg-gray-50 p-3 text-gray-800 font-light"> {ques?.r} </p> }
               
                </div>
            ))}

        
        </div>
        <div className="bg-[url('/assets/faq-pattern.png')] bg-contain bg-no-repeat bg-center  min-w-[500px]  ">
            <Image src="/assets/faq.png" width={800} height={800} alt="pic" className="" unoptimized />
        </div>
      </div>
    </div>
  )
}

export default FAQ
