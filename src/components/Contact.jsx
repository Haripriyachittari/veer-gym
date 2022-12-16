import React, { useEffect } from 'react'
import {AiFillWechat} from 'react-icons/ai'
import Aos from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
     },[])
  return (

    <div name='home' className='w-full h-screen bg-[#19191a] flex items-center justify-center p-4 '>
          <div className='flex flex-col  '>
       <div data-aos="fade-up"  name='contact' className=' text-center p-4'>
                <p className=' text-2xl md:text-3xl font-bold text-gray-300 inline border-b-4 border-orange-600 '>GET IN TOUCH</p>
                <p className='text-gray-300 text-xl md:text-2xl p-4'>Submit the form below or reach me out </p>
            </div>
       <div  className=' flex flex-col md:flex-row  '>
       <div className='  text-gray-300  ' data-aos="zoom-in-right">
        <h1 className=' underline text-orange-600 text-xl md:text-3xl pb-3 '>Reach me Out</h1>
          <p  className='text-xl md:text-2xl'><span className='text-orange-600'>Phone:</span> 8660809299</p>
          <p className=' text-xl md:text-2xl'><span className='text-orange-600'>Email:</span>    <a href='mailto:hpvarma09@gmail.com' target='_blank'  rel='noreferrer' className='text-gray-300 underline'>hpvarma09@gmail.com</a></p>
          <p className=' text-xl md:text-2xl'><span className='text-orange-600'>Address:</span> Beside Ramakrishna theatre, Siruguppa, Bellary Dist</p>
        </div>
        <form  method ='POST' action="https://getform.io/f/33f60396-7e67-44ca-8011-78933ad317a1" className='flex flex-col max-w-[600px] w-full mt-10' data-aos="zoom-in-left">
            
            <div className='flex justify-between'>
            <input type='text' className='rounded-md text-[1rem]  w-[45%]' placeholder='First Name' required/>
            <input type='text' className='rounded-md text-[1rem]  w-[45%]' placeholder='Last name'/>
            </div>
            <input type='number' className='rounded-md text-[1rem]  my-4' placeholder='Phone Number' required/>

            <input type='email' className='rounded-md text-[1rem]  mb-4  ' placeholder='Email'/>
            <textarea rows={3} cols={10} className='rounded-md text-[1rem] p-1 ' placeholder='Type your message here...'></textarea>
            <button className='my-4  px-10 py-1 group mx-auto flex items-center justify-center text-2xl border-2 text-white  bg-orange-600 border-orange-600 rounded-md hover:bg-transparent hover:text-orange-600'>Let's Talk <span className='group-hover:scale-125 duration-300'><AiFillWechat size={35} className=' ml-2'/></span> </button>
        </form>
        
      
    </div>

       </div>
    
    </div>
  )
}

export default Contact



            

        