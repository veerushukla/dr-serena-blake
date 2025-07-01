import React from 'react';
import { Roboto_Slab } from 'next/font/google';

const robotoSlab = Roboto_Slab({
  subsets: ['latin'],
  weight: ['400', '700'],
});

const Contact = () => {
  return (
    <div id="Contact" className="min-h-screen flex flex-col items-center bg-emerald-200 py-12">
      <h2 className={`${robotoSlab.className} font-bold text-3xl md:text-4xl text-gray-800 mb-10 text-center px-4`}>
        Contact Dr. Serena Blake
      </h2>

      <div className="cards flex lg:flex-row flex-col justify-center items-center gap-8 px-4">
        {/* Info Cards */}
        <div className="info-cards order-2 lg:order-1">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 underline">Our Office</h3>
                  <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 underline">Hours</h3>
                  <p>In-person: Tue & Thu, 10 AM—6 PM</p>
                  <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM—5 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white shadow-md rounded-lg p-4 w-full max-w-md order-1 lg:order-2">
          <p className="text-sm md:text-lg text-gray-700 mb-6 text-center px-8">
            Simply fill the brief fields below and Dr. Serena Blake will be in touch with you soon. This form is safe, private, and completely free.
          </p>

          <form className="max-w-md mx-auto flex flex-col gap-y-4 md:px-8 px-2">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="tel"
                placeholder="Your Phone"
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="preferredDate">Preferred Date and Time</label>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  id="preferredDate"
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
                <input
                  id="preferredTime"
                  type="time"
                  className="w-full p-3 border border-gray-300 rounded-md"
                  required
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-md h-20"
                required
              ></textarea>
            </div>

            <div className="w-full flex flex-col gap-1">
              <label htmlFor="referral">How did you find us?</label>
              <textarea
                id="referral"
                placeholder="What brings you here?"
                className="p-3 border border-gray-300 rounded-md h-20"
                required
              ></textarea>
            </div>

            <label className="inline-flex items-center space-x-2">
              <input
                type="checkbox"
                name="agreement"
                required
                className="form-checkbox h-5 w-5 text-blue-600 rounded"
              />
              <span className="text-gray-700">I agree to the terms and conditions</span>
            </label>

            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
              aria-label="Send message to Dr. Serena Blake"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
