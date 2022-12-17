import React, { useEffect } from 'react'
import {BsArrowRightSquareFill,BsArrowLeftSquareFill} from 'react-icons/bs'
import Aos from 'aos';
import 'aos/dist/aos.css'

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
            
        <BsArrowLeftSquareFill className='absolute left-2 text-gray-300 cursor-pointer opacity-50 hover:opacity-100 ' onClick={slideLeft}/>
           <div id='slider' className='flex overflow-x-scroll scroll whitespace-nowrap gap-4 scrollbar-hide'>
            <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='w-[300px] rounded-xl hover:border  sc duration-300 ease-in' alt='/'/>
            <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='w-[300px] rounded-xl hover:border  duration-300 ease-in' alt='/'/>
            <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='w-[300px] rounded-xl hover:border  duration-300 ease-in' alt='/'/>
            <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='w-[300px] rounded-xl hover:border  duration-300 ease-in' alt='/'/>
            <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='w-[300px] rounded-xl hover:border  duration-300 ease-in' alt='/'/>
            <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' className='w-[300px] rounded-xl hover:border  duration-300 ease-in' alt='/'/>
           </div>
        </div>
        
            <BsArrowRightSquareFill className='absolute bottom-[55%] right-2 text-gray-300 cursor-pointer opacity-50 ho' onClick={slideRight}/>

            <div className='text-gray-300'>
                <h1 className='font-bold  inline border-b-4 border-orange-600 text-2xl ' >Training Programs</h1> 
                <p className='my-4 text-xl '>Personal Trainings by trainer</p>
                <p className='my-4 text-xl '>Self Trainings</p>

            </div>
        </div>
        
      
    </div>
  )
}

export default Gallery;
