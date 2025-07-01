import React from 'react'
import { Roboto_Slab } from 'next/font/google';


const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Footer = () => {
  return (
    <div className='bg-[#f3f4f6] text-gray-700 py-12 flex flex-col justify-center items-center text-center px-4'>
        <h2 className={`${robotoSlab.className} font-semibold text-xl md:text-2xl`}>Dr. Serena Blake, PsyD (Clinical Psychologist)</h2>
      <ul className='text-center text-lg md:text-xl flex flex-col gap-y-2 my-8'>
        <li className='underline'>serena@blakepsychology.com</li>
        <li>Phone: (323) 555-0192</li>
        <li className='underline'>1287 Maplewood Drive, Los Angeles, CA 90026</li>
      </ul>
      <h4>© 2025 Dr. Serena Blake, PsyD. All rights reserved.</h4>
    </div>
  )
}

export default Footer
