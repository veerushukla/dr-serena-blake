"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import About from "@/components/About";
import Hero from "@/components/Hero";
import { Roboto_Slab } from 'next/font/google';
import Footer from "@/components/Footer";
import useScrollFadeIn from "@/components/ScrollFadeIn";
import Image from "next/image";

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  useScrollFadeIn();

  return (
    <main className="bg-gray-100">
      <Navbar />
      <div className="heading flex items-center gap-4 pt-4 sm:pt-8 px-4 sm:px-8 fade-in max-w-screen-xl mx-auto">
        <Image width={40} height={40}
          src="/logo.png"
          alt="logo"
          className="w-10 h-10 sm:w-16 sm:h-16 object-contain"
        />
        <h1 className={`${robotoSlab.className} text-base sm:text-lg md:text-2xl font-medium leading-tight text-gray-600`}>
          Dr. Serena Blake,<br className="hidden sm:block" /> PsyD (Clinical Psychologist)
        </h1>
      </div>

      <div className="pt-6 sm:pt-12">
        <div className="fade-in max-w-screen-xl mx-auto px-4 sm:px-8"><Hero /></div>
        <div className="fade-in max-w-screen-xl mx-auto px-4 sm:px-8"><About /></div>

        <div className="w-2 h-2 bg-black rounded-full mx-auto"></div>

        <div className="thaughts flex flex-col justify-center items-center py-16 sm:py-20 fade-in px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl drop-shadow-md text-center max-w-5xl">
            “Sometimes the most powerful journey is the one back to yourself — therapy helps guide the way.”
          </h1>
          <h3 className="text-center text-lg sm:text-xl md:text-2xl pt-5 max-w-4xl">
            Life&apos;s challenges—whether they show up as anxiety, unresolved trauma, relationship conflict, or loss—can feel heavy to hold on your own...
          </h3>
        </div>

        <div className="line bg-black h-0.5 w-4/5 md:w-3/4 mx-auto fade-in mb-10"></div>

        <div className="fade-in max-w-screen-xl mx-auto px-4 sm:px-8"><Services /></div>

        <div className={`${robotoSlab.className} rate flex flex-col justify-center items-center py-16 sm:py-20 fade-in px-4`}>
          <h1 className="text-2xl sm:text-3xl md:text-4xl drop-shadow-md text-center">Rates and Insurance</h1>
          <ul className="text-base sm:text-lg md:text-xl text-center text-gray-700 gap-y-4 my-6 px-4 sm:px-8">
            <li>Individual session - $200</li>
            <li>Couples session - $240</li>
            <li>Superbills available for insurance reimbursement</li>
          </ul>
        </div>

        <div className="h-0.5 w-3/4 md:w-1/2 bg-black mx-auto fade-in mb-10"></div>

        <div className="fade-in max-w-screen-xl mx-auto px-4 sm:px-8"><FAQ /></div>

        <div className="thaughts flex flex-col justify-center items-center py-16 sm:py-20 fade-in px-4">
          <Image width={700} height={700} src="/hero1.jpg" alt="hero" className="relative object-cover opacity-50"/>
          <h1 className="text-2xl absolute sm:text-4xl px-10 md:px-0 brightness-50 md:text-5xl lg:text-6xl drop-shadow-md text-center max-w-5xl">
            “Our sessions aren&apos;t about fixing you — they&apos;re about helping you reconnect with parts of yourself that may have been silenced or hidden.”
          </h1>
        </div>

        <div className="line bg-black h-0.5 w-4/5 md:w-3/4 mx-auto fade-in mb-10"></div>

        <div className="fade-in max-w-screen-xl mx-auto px-4 sm:px-8"><Contact /></div>
        <div className="fade-in"><Footer /></div>
      </div>
    </main>
  );
}
