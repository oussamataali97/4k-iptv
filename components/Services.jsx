import React from 'react'
import ServiceCard from './ServiceCard'
import { MdVerifiedUser } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { MdCastConnected } from "react-icons/md";



const Services = () => {
  return (
    <div className='flex flex-col md:flex-row  justify-between gap-6 items-center mt-10 max-w-6xl mx-auto'>
       <ServiceCard icon={<MdVerifiedUser/>} titre="Secured" descr="Our team assured your streaming is always safe and secure" />
       <ServiceCard icon={<MdOutlineSupportAgent/>} titre="Support" descr="We are 24/7 available on Live Chat for our customer's help to resolve their issues." />
       <ServiceCard icon={<GrChannel/>} titre="Channel" descr="We Provide Premium Channels From the UK, USA, Canada, & Other Countries." />
       <ServiceCard icon={<MdCastConnected/>} titre="100% Uptime" descr="You do not need to worry, we have more than 100 best stable servers." />

    </div>
  )
}

export default Services
