"use client";
import React, { useState } from "react";
import { Roboto_Slab } from "next/font/google";
import { ChevronDown } from "lucide-react"; // Optional icon package

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const FAQ = () => {
  const data = [
    {
      question: "What are your fees?",
      answer: "My fees are $200 for individual, $240 for couple.",
    },
    {
      question: "Do you take insurance?",
      answer: "No, but a superbill is provided for self-submission.",
    },
    {
      question: "What services do you offer?",
      answer:
        "I offer clinical psychology services, specifically: Anxiety treatment, Relationship counseling and Trauma recovery.",
    },
    {
      question: "Are online sessions available?",
      answer: "Yes—all virtual sessions via Zoom.",
    },
    {
      question: "What is your cancellation policy?",
      answer: "24-hour notice required.",
    },
    {
      question: "What are your office hours?",
      answer:
        "In-person: Tue & Thu, 10 AM-6 PM. Virtual via Zoom: Mon, Wed & Fri, 1 PM-5 PM.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section
      id="FAQ"
      className="bg-violet-300 py-16 px-4 sm:px-6 lg:px-8 text-gray-800"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className={`${robotoSlab.className} text-3xl sm:text-4xl font-bold text-center mb-10`}
        >
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {data.map((item, index) => (
            <Question
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => toggleIndex(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

function Question({ question, answer, isOpen, onClick }) {
  return (
    <div className="border-b pb-4">
      <button
        onClick={onClick}
        role="button"
        aria-expanded={isOpen}
        className="w-full text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown
          className={`h-6 w-6 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-700 text-base">{answer}</p>
      </div>
    </div>
  );
}

export default FAQ;
