import React from 'react'
import Image from 'next/image'

const InfoSection = () => {
  return (
    <div className="md:container-app flexbox-2  py-16 px-2">
        <div className="left md:max-w-[550px]">
          <p className="text-gray-800 text-[30px] font-bold uppercase  ">World’s # 1          </p>
          <p className="text-[32px] md:text-[40px] font-bold  text-blue-950  ">The Best IPTV Subscription Service Provider          </p>
          <p className='lead text-gray-600 py-4' >Revolutionize your TV experience with our 4K Live IPTV site. Explore a vast selection of global channels, including popular shows, live sports, movies, documentaries, and more. Elevate your entertainment with us.  </p>
          <div className="flex py-6 justify-between flex-col md:flex-row items-start md:items-center">
            <div className="flex flex-col items-start md:items-center">
            <img src="/assets/global-network.png" alt="" className="w-14" />
            <p className="text-blue-950 font-bold py-3 text-lg" > 18000+ Channel  </p>
            </div>
            <div className="flex flex-col items-start md:items-center">
            <img src="/assets/tv-show.png" alt="" className="w-14" />
            <p className="text-blue-950 font-bold py-3 text-lg" > 17200+ TV shows             </p>
            </div>
            <div className="flex flex-col items-start md:items-center">
            <img src="/assets/watching-a-movie.png" alt="" className="w-14" />
            <p className="text-blue-950 font-bold py-3 text-lg" > 68400+ Movies            </p>
            </div>
        
          </div>
        </div>
        <div className="right py-8 md:py-0">
          <Image src="/assets/subscribe_img02.png" className="animate-[bounce_3s_ease-in-out_infinite] duration-1000" width={450} height={500}   style={{
        objectFit: 'cover',
      }} alt="img"  />
        </div>
    </div>
  )
}

export default InfoSection
