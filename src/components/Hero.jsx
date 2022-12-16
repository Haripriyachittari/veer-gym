import React, { useEffect } from 'react'
import hero from '../assets/hero.jpg'
import Typewriter from 'typewriter-effect';
import Aos from 'aos';
import 'aos/dist/aos.css'


const Hero = () => {
    useEffect(()=>{
   Aos.init({duration:2000})
    },[])
  return (
    <div name='home' className='w-full h-screen bg-[#000000] flex items-center justify-center'>
        <div data-aos="fade-up" className=' absolute text-gray-200   bottom-[2%] md:top-[70%]  left-3 md:left-10'>
            <h1 className='tracking-[.5rem] font-bold  my-2 text-orange-600  border-b-2 text-2xl'>TIMINGS</h1>
            <p className=' text-xl md:text-3xl'>Morning: 5 AM to 8.30 AM </p>
            <p className=' text-xl md:text-3xl'>Evening : 5 AM to 8.30 AM </p>
        </div>
      <img src={hero} alt='/' className='w-full h-[600px] md:h-screen object-cover'/>
      <div className=' absolute text-orange-600 font-bold  text-3xl top-[13%] md:text-5xl mx-8 md:top-[68%] right-20  '><Typewriter
                 options={{
                 strings: ["JOIN TODAY"],
                 autoStart: true,
                 delay:180,
                 loop: true,
                  }}
             /></div>
    </div>
  
  )
}

export default Hero
