import Plan from "@/components/Plan";
import HomeAc from "@/components/HomeAc";
import Tarif from "@/components/Tarif";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Services from "@/components/Services";
import InfoSection from "@/components/InfoSection";
import InfoSection2 from "@/components/InfoSection2";
import FAQ from "@/components/FAQ";


export default function Home() {
  return (
    <>
<section className=" relative md:min-h-[600px] lg:min-h-screen   bg-cover bg-center "
style={{ backgroundImage: `url('/assets/image-5.jpg')`}}
>
    <div className=" flex  mt-[100px] lg:mt-0 md:h-[500px] lg:h-screen md:justify-between items-center flex-col md:flex-row  lg:px-8">
    <div className=" uppercase md:ml-16  ">
       <div className="md:text-[30px] text-[25px] text-[#010c3a] font-bold ">The Best International</div>
       <h1 className="md:text-[100px] lg:text-[250px] text-[70px] font-bold ">IPTV</h1>
       <div className="md:text-[30px] text-[25px] text-[#010c3a] font-bold mt-6">Service Provider</div>
   <div className="flex  mt-2">
     <button className="btn text-white  lg:px-14 px-4  py-2 rounded-sm font-bold mr-5">Free fTrial</button>
     <button className="bg-[#010c3a] text-white  lg:px-14 px-4 py-2 rounded-sm font-bold mr-5">Other Plans</button>

   </div>

     </div>
     <Image 
     src="/assets/image-11.png"
     
     width={580}
     className=" w-[300px]  "
     height={580}
     alt="person"
     />
    </div>



   </section>
      
      <Plan/>
      <Services/>
      <InfoSection/>
      <InfoSection2/>
  

      </>

  );
}
