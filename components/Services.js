'use client';
import React from 'react';
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
      'Anxiety and stress can impact every part of your life, from relationships to daily routines. Therapy provides you with tools like mindfulness, grounding techniques, and cognitive strategies to manage overwhelming emotions and restore calm.',
  },
  {
    title: 'Relationship Counseling',
    image: '/relation.jpg',
    description:
      'Whether navigating conflict or emotional distance, therapy helps you rebuild trust, strengthen communication, and deepen your connection—romantic or otherwise.',
  },
  {
    title: 'Trauma Recovery',
    image: '/trauma.jpg',
    description:
      'Healing from trauma takes time, courage, and safety. In therapy, we create space to process your story, reduce triggers, and restore strength and emotional clarity.',
  },
];

const Services = () => {
  return (
    <section
      id="Services"
      className="min-h-screen bg-white py-12 shadow-lg px-4 flex flex-col items-center justify-center"
    >
      <h2
        className={`${robotoSlab.className} font-bold text-3xl md:text-4xl text-gray-800 mb-12 text-center`}
      >
        Core Expertise
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full max-w-4xl"
      >
        {expertiseData.map((item, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="flex flex-col items-center text-center gap-y-6 px-4">
              <div className="w-56 h-56 md:w-64 md:h-64 relative rounded-full overflow-hidden shadow-md border-4 border-white">
                <Image
                  fill
                  src={item.image}
                  alt={item.title}
                  className="object-cover object-center transition-transform duration-300 hover:scale-105"
                />
              </div>

              <h3
                className={`${robotoSlab.className} text-xl md:text-2xl text-gray-800 font-semibold`}
              >
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-lg">
                {item.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Services;
