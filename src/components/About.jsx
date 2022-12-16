import React, { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

const About = () => {
    useEffect(()=>{
        Aos.init({duration:2000})
         },[])
  return (
<div name='home' className='w-full h-screen bg-[#171818] flex items-center justify-center p-4  text-gray-300'>
<div className='flex flex-col items-center justify-center h-full w-full'>
          <div className='max-w-[1000px] w-full flex flex-col gap-8'>
            <div className=' pb-8 pl-4 text-center '  data-aos="fade-left">
             <p className='text-4xl font-bold  inline border-b-4 border-orange-600'>About Trainer</p>
            </div>
            
          </div>
        <div  className='w-full flex flex-col md:flex-row items-center gap-8 justify-center px-4' data-aos="fade-right">
            
               <img src='https://images.unsplash.com/photo-1671034129957-9f60a2df822b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80' alt='/' className='w-[250px] md:w-[400px] rounded-lg'/>
            
            <div>
                <p className='md:w-[400px] text-xl md:text-2xl'>I'm passionate about building excellent software that improves the lives around me. I build web applications using the best & latest front end frameworks which gives user dynamic web experience. I am always open to new oppurtunities that challenge me in every step of the way.</p>
            </div>

        </div>

        </div>
    </div>
  )
}

export default About