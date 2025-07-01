'use client'
import React from 'react'
import { Roboto_Slab } from 'next/font/google';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const expertiseData = [
  {
    title: 'Anxiety & Stress Management',
    image: '/stress.webp',
    description:
      'Anxiety and stress can impact every part of your life, from relationships to daily routines. Through therapy, you’ll gain tools like mindfulness, grounding techniques, and cognitive strategies to manage overwhelming emotions, regulate your nervous system, and restore a sense of calm and control.',
  },
  {
    title: 'Relationship Counseling',
    image: '/relation.jpg',
    description:
      'Whether you\'re navigating conflict, communication struggles, or emotional distance, relationship counseling offers space to rebuild trust and connection. Therapy helps develop healthy patterns, deepen intimacy, and foster more meaningful, satisfying relationships—romantic or otherwise.',
  },
  {
    title: 'Trauma Recovery',
    image: '/trauma.jpg',
    description:
      'Healing from trauma takes courage and support. Whether your trauma is recent or rooted in the past, therapy provides a safe environment to process painful memories, reduce triggers, and regain a sense of safety. Together, we work to rebuild strength, resilience, and emotional clarity.',
  },
];

const Services = () => {
  return (
    <div id="Services" className="min-h-screen bg-orange-300 flex flex-col items-center justify-center px-4 py-12">
      <h2 className={`${robotoSlab.className} font-bold text-3xl md:text-4xl text-gray-800 mb-10`}>Core Expertise</h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false
        }}
        loop= {true}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="max-w-6xl w-full"
      >
        {expertiseData.map((item, index) => (
          <SwiperSlide key={index} className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center mx-auto py-8 gap-y-4 w-72">
              <Image
                width={400}
                height={400}
                src={item.image}
                alt={item.title}
                className="transition-transform duration-300 hover:scale-105 w-60 h-60 object-cover object-center rounded-full border-4 border-white shadow-md"
              />
              <span className={`${robotoSlab.className} text-xl text-center`}>
                {item.title}
              </span>
              <p className="text-center text-sm">{item.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Services;
