import React from 'react'
import Image from 'next/image'

const InfoSection2 = () => {
  return (
    <div className="md:container-app flexbox-2  py-16 px-2">
    <div className="left max-w-[550px] order-1">
      <p className="text-gray-800 text-[30px] font-bold uppercase  ">Premium Features of 4KLIVEIPTV      </p>
      <p className="text-[32px] md:text-[40px] font-bold  text-blue-950  ">Get a New Experience With 4KLive IPTV      </p>
      <p className='lead text-gray-600 py-4' >Our 4K Live IPTV service promises a fresh, immersive experience, delivering a seamless blend of quality, variety, and innovation. Explore a new era in streaming.      </p>
      <div className="flex py-6 justify-between flex-col md:flex-row items-start md:items-center">
        <div className="flex flex-col items-start md:items-center">
        <img src="/assets/verified-account.png" alt="" className="w-14" />
        <p className="text-blue-950 font-bold py-3 text-lg" > 51000+ CLIENTS         </p>
        </div>
        <div className="flex flex-col items-start md:items-center">
        <img src="/assets/database-storage.png" alt="" className="w-14" />
        <p className="text-blue-950 font-bold py-3 text-lg" > 100+ Servers         </p>
        </div>
        <div className="flex flex-col items-start md:items-center">
        <img src="/assets/meeting.png" alt="" className="w-14" />
        <p className="text-blue-950 font-bold py-3 text-lg" > 17+ TEAM MEMBERRS        </p>
        </div>
    
      </div>
    </div>
    <div className="right py-8 md:py-0">
      <Image src="/assets/4kliveiptv1.png" className="animate-[bounce_3s_ease-in-out_infinite] duration-1000" width={450} height={500}   style={{
    objectFit: 'cover',
  }} alt="img"  />
    </div>
</div>
  )
}

export default InfoSection2
