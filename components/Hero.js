"use client"
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Image from 'next/image'

const Hero = () => {
  const [count, setCount] = useState(1);
  const [count2, setcount2] = useState(1)

  useEffect(() => {
    if (count >= 8) return;

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    if (count2 >= 500) return;

    const interval = setInterval(() => {
      setcount2((prev) => prev + 1);
    },1)

    return () => clearInterval(interval)
  }, [count2])
  

  return (
    <div id="Hero" className="min-h-screen  bg-blue-300 relative py-12">
      <div className="flex justify-center items-center h-full mx-auto">
        <Image width={1000} height={1000} src='/hero2.jpg' alt="background" className="absolute inset-0 w-full h-full brightness-70 object-cover min-h-[calc(100vh-7rem)]" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full flex flex-col text-center justify-center items-center">
        <h1 className="text-white text-2xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
          Your Story Matters. Your Healing Begins Here.
        </h1>
        <h2 className="mt-4 text-white text-xl sm:text-2xl font-light max-w-2xl drop-shadow-md brightness-95">
          Dr. Serena Blake, PsyD — Licensed Clinical Psychologist in Los Angeles, CA
        </h2>
        <button className="mt-8 px-6 py-3 text-lg bg-white text-blue-700 font-semibold rounded-full shadow-md hover:bg-blue-100 transition">
          Schedule Your Consultation
        </button>
        <div className="count text-white mt-8 px-4 text-2xl sm:text-4xl font-bold max-w-2xl drop-shadow-md flex flex-row justify-between gap-8">
          <ul className='flex flex-col items-start'>
            <li>{count}+</li>
            <li>Years of practice</li>
          </ul>
          <ul className='flex flex-col items-end'>
            <li>{count2}+</li>
            <li>Client Sessions</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-row justify-center items-center'>

      </div>
    </div>
  )
}

export default Hero
