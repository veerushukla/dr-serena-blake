import React from 'react'
import { Roboto_Slab } from 'next/font/google';
import Image from 'next/image';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});


const About = () => {
  return (
    <div id="About" className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-12">
      <div className="max-w-6xl w-full flex flex-col sm:flex-row items-center gap-8">
        <div className="w-full sm:w-1/2 flex justify-center">
          <Image width={400} height={400} src="/drserena.png" alt="Dr. Serena Blake" className="w-full border-2 border-black max-w-xs sm:max-w-sm h-auto  object-cover rounded-2xl shadow-md"/>
        </div>

        {/* About Text */}
        <div className="w-full sm:w-1/2 text-center sm:text-left">
          <h2 className={`${robotoSlab.className} font-bold text-3xl sm:text-4xl text-gray-800 mb-4`}>About Dr. Serena Blake</h2>
          <p className="text-gray-700 leading-relaxed text-xl md:text-2xl pt-2">
            I am Dr. Serena Blake, a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with over eight years of experience and more than 500 client sessions. I specialize in helping people manage anxiety and stress, strengthen their relationships, and recover from trauma. My approach combines evidence-based methods—like cognitive-behavioral therapy and mindfulness—with a warm, compassionate style tailored to each individual. Whether we meet in my Maplewood Drive office or connect virtually via Zoom, my goal is to create a safe, supportive space where you can feel understood, empowered, and ready to grow.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
