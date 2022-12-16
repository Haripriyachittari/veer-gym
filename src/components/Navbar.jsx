import React, { useState } from "react";
import { FaBars, FaTimes,} from "react-icons/fa";

import { Link } from "react-scroll";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  return (
    <div className="fixed w-screen h-[80px] flex justify-between items-center  px-4 bg-[#111111] text-orange-500 shadow-xl  z-50">
      <div>
        <a href='/'><h1 className="text-xl sm:text-3xl font-bold text-">VEER GYM</h1></a>
      </div>
      {/* Menu */}

      <ul className=" hidden md:flex font-bold md:text-2xl m-10">
        <li className="m-6" >
        <Link  to="home" smooth={true} duration={500}  className='hover:border-b-[5px] inline py-2 border-orange-500 cursor-pointer'>
          Home
        </Link>
          </li>
          <li className="m-6"> <Link  to="photos" smooth={true} duration={500} className='hover:border-b-[5px] inline py-2 border-orange-500 cursor-pointer'>
          Photos
        </Link></li>
        <li className="m-6"> <Link  to="about" smooth={true} duration={500} className='hover:border-b-[5px] inline py-2 border-orange-500 cursor-pointer'>
          About
        </Link></li>
        
        
        
        <li className="m-6"> <Link  to="contact" smooth={true} duration={500} className='hover:border-b-[5px] inline py-2 border-orange-500 cursor-pointer'>
          Contact
        </Link></li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        { !nav ? <FaBars  size={25}/> : <FaTimes size={25}/>}
      </div>
      {/* mobile menu */}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute  top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#000000]"
        }
      >
        <li className="py-6 text-3xl text-orange-500"><Link onClick={handleClick} to="home" smooth={true} duration={600}>
          Home
        </Link></li>
        <li className="py-6 text-3xl text-orange-500"><Link onClick={handleClick} to="about" smooth={true} duration={600}>
          About
        </Link></li>
        <li className="py-6 text-3xl text-orange-500"><Link  onClick={handleClick} to ="photos" smooth={true} duration={600}>
         Photos
        </Link></li>
        
        <li className="py-6 text-3xl text-orange-500"><Link  onClick={handleClick} to ="contact" smooth={true} duration={600}>
          Contact
        </Link></li>

      </ul>
    
      
    </div>
  );
};

export default Navbar;