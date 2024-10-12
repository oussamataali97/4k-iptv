"use client"
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {IoIosMenu} from 'react-icons/io'
import Image from 'next/image';
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navMenu =["Pricing","Contact Us","Shop","Account","Login"];
  const [toogle,setToggle]=useState(false)
  return (
    <nav className={`fixed px-4 md:px-10 py-0 lg:py-3  flex justify-between items-center w-full z-10 top-0 left-0 ${isScrolled ? 'bg-white text-black shadow-md' : 'bg-transparent text-black'} transition-all duration-300  `}>
      <Link href='/'>
        <Image
        src="/assets/logo-9.png"
        width={130}
        height={130}
        unoptimized
        alt='logo'
        className="w-[50px] md:w-[70px] lg:w-[80px]"
        />
        </Link>

        <div className='md:flex  font-bold hidden '>
           {navMenu.map((menu,index)=>(
           <Link href={`/${menu.toLowerCase()}`} className='text-gray-700 [&:not(:last-child)]:mr-10' key={index}>{menu}</Link>
           ))}
        </div>
          <div className="flex md:hidden">
          <IoIosMenu size={30}/>

          </div>


    </nav>
  )
}

export default Navbar
