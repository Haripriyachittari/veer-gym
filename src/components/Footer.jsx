import React from 'react'
import { BsFillArrowUpCircleFill} from 'react-icons/bs'
import { Link } from 'react-scroll'

const Footer = () => {
  return (
    <div  name='home' className='w-full bg-[#6d6d6d] flex items-center justify-center gap-6 px-2' >
             
       <p className='text-base py-2' >@2022 Haripriya chittari. All Rights Reserved.</p>
       <p><Link to='home'  smooth={true}><BsFillArrowUpCircleFill className='mr-3 cursor-pointer' /></Link></p> 
           
             

    </div>
  )
}

export default Footer
