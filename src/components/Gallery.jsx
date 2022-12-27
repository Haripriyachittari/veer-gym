import React, { useEffect } from 'react'
import {BsArrowRightSquareFill,BsArrowLeftSquareFill} from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css'
import picture1 from '../assets/veergym-1.jpg';
import picture2 from '../assets/veergym-3.jpg';
import picture3 from '../assets/veergym-10.jpg'
import picture4 from '../assets/veergym-5.jpg';
import picture5 from '../assets/veergym-6.jpg';

import picture7 from '../assets/veergym-11.jpg';



const Gallery = () => {
    const slideLeft=()=>{
        var slider=document.getElementById('slider');
       slider.scrollLeft =slider.scrollLeft- 500
    }
    const slideRight=()=>{
        var slider=document.getElementById('slider');
        slider.scrollLeft =slider.scrollLeft+ 500
    }
    useEffect(()=>{
        Aos.init({duration:2000})
         },[])
  return (

    <div name='photos' className='w-full h-screen bg-[#19191a]  flex justify-center items-center p- relative'>
        <div className='flex flex-col gap-8 justify-center items-center' data-aos='zoom-in-right'>
        <h1 className='text-gray-300 font-bold  inline border-b-4 border-orange-600'>Gallery</h1>
        <div className='flex items-center justify-center text-gray-300 p-4 '>
            
        <BsArrowLeftSquareFill className='absolute left-2 cursor-pointer  text-orange-600 ' onClick={slideLeft}/>
           <div id='slider' className='flex overflow-x-scroll scroll whitespace-nowrap gap-4 scrollbar-hide'>
           <img src={picture5} className='w-[300px] h-[300px] rounded-xl hover:border  duration-300 ease-in object-cover ' alt='/'/>
                       <img src={picture2} className='w-[300px] h-[300px] rounded-xl hover:border  duration-300 ease-in object-cover ' alt='/'/>

           <img src={picture3} className='w-[300px] h-[300px] rounded-xl hover:border  sc duration-300 ease-in object-cover ' alt='/'/>

           <img src={picture7} className='w-[300px] h-[300px] rounded-xl hover:border  sc duration-300 ease-in object-cover ' alt='/'/>

            <img src={picture4} className='w-[300px] rounded-xl hover:border  duration-300 ease-in object-cover ' alt='/'/>
                        <img src={picture1} className='w-[300px] h-[300px] rounded-xl hover:border  sc duration-300 ease-in object-cover ' alt='/'/>

           </div>
        </div>
        
            <BsArrowRightSquareFill className='absolute bottom-[55%] right-2 text-orange-600 cursor-pointer ' onClick={slideRight}/>

            <div className='text-gray-300 p-4'>
                <h1 className='my-4 text-xl text-orange-600 font-bold'>Personal Trainings will be provided to both men and women by trainer.</h1>

            </div>
        </div>
        
      
    </div>
  )
}

export default Gallery;
