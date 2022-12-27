import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'
import {BsWhatsapp,BsFacebook,BsFillTelephoneFill} from 'react-icons/bs'



const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
     },[])
  return (

    <div name='home' className='w-full h-screen bg-[#19191a] flex items-center justify-center p-4 '>
          <div className='flex flex-col mx-auto md:w-[50%] '>
       <div data-aos="fade-up"  name='contact' className=' text-center p-4'>
                <p className=' text-2xl md:text-3xl font-bold text-gray-300 inline border-b-4 border-orange-600 '>GET IN TOUCH</p>
            </div>
       <div  className=' flex flex-col '>
       <div className='  text-gray-300  ' data-aos="zoom-in-right">
        <h1 className='  text-orange-600 text-xl md:text-2xl py-6 font-bold '>REACH ME OUT</h1>
          <p  className='text-xl md:text-xl'><span className='text-orange-600'>Phone:</span> 8880999904</p>
          <p className=' text-xl md:text-xl'><span className='text-orange-600'>Email:</span>    <a href='mailto:ghouserabbani1@gmail.com' target='_blank'  rel='noreferrer' className='text-gray-300 underline'>ghouserabbani1@gmail.com</a></p>
          <p className=' text-xl md:text-xl'><span className='text-orange-600'>Address:</span> Beside Ramakrishna theatre, Siruguppa, Bellary Dist - 583121</p>
        </div>
       </div>
    <div className='text-orange-600  flex py-10 justify-around'>
      <a href="tel:8880999904" className='cursor-pointer hover:text-gray-300 hover:scale-110 duration-300' target="_blank" rel="noreferrer"><BsFillTelephoneFill size={42}/></a>
      <a href="https://ka-ge.facebook.com/people/VEER-GYM-Siruguppa/100067856826767/" className='cursor-pointer hover:text-gray-300 hover:scale-110 duration-300' target="_blank" rel="noreferrer"><BsFacebook size={42}/></a>
      <a href="whatsapp://send?text=I want to join gym!&phone=+918880999904" className='cursor-pointer hover:text-gray-300 hover:scale-110 duration-300' target="_blank" rel="noreferrer"><BsWhatsapp size={42}/></a>
    </div>
    <div className='pt-10 text-center'>
      <h1 className='text-orange-600 font-bold italic'>“Push harder than yesterday if you want a different tomorrow.”</h1>
    </div>

       </div>
    
    </div>
  )
}

export default Contact



            

        