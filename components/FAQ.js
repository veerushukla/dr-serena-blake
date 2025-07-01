"use client"
import React from 'react'
import { Roboto_Slab } from 'next/font/google';
import { useState } from 'react';


const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const FAQ = () => {
  const data = [
  {
    question: 'What are your fees?',
    answer: 'My fees are $200 for individual, $240 for couple'
  },
  {
    question: 'Do you take insurance?',
    answer: 'No, but a superbill is provided for self-submission.'
  },
  {
    question: 'What services do you offer?',
    answer: 'I offer clinical psychology services, specifically: Anxiety treatment, Relationship counseling and Trauma recovery.'
  },
  {
    question: 'Are online sessions available?',
    answer: 'Yes—all virtual sessions via Zoom.'
  },
  {
    question: 'What is your cancellation policy?',
    answer: '24-hour notice required.'
  },
]
  return (
    <div id='FAQ' className='min-h-screen bg-violet-300 flex flex-col justify-center'>
      <h1 className={`${robotoSlab.className} text-3xl text-center md:text-4xl`}>Frequently Asked Questions</h1>
      {data.map((item, index)=> (
        <Question key={index} question={item.question} answer={item.answer}/>
      ))}
    </div>
  )
}

function Question({ question, answer }) {
  const [isopen, setisopen] = useState(false)

  return(
    <div className="border-b md:w-1/2 w-3/4 mt-5 py-4 mx-auto">
      <button
        className="w-full text-left flex justify-between items-center"
        onClick={() => setisopen(!isopen)}
      >
        <span className="font-semibold">{question}</span>
        <span className='text-2xl font-bold'>{isopen ? "-" : "+"}</span>
      </button>
      {isopen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  )
}
export default FAQ
