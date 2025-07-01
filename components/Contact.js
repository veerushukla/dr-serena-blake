"use client";
import React, { useState, useRef } from "react";
import { Roboto_Slab } from "next/font/google";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const Contact = () => {
  const initialForm = {
    name: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
    referral: "",
    agreement: false,
  };

  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone is required.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!formData.preferredDate) newErrors.preferredDate = "Preferred date is required.";
    if (!formData.preferredTime) newErrors.preferredTime = "Preferred time is required.";
    if (!formData.message.trim()) newErrors.message = "Please enter your message.";
    if (!formData.referral.trim()) newErrors.referral = "Let us know how you found us.";
    if (!formData.agreement) newErrors.agreement = "You must accept the terms.";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
      formRef.current?.reset();
    } else {
      setSubmitted(false);
      const firstErrorKey = Object.keys(newErrors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        errorElement.focus();
      }
    }
  };

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
              <h3 className="font-semibold text-gray-800 underline">Our Office</h3>
              <p>1287 Maplewood Drive, Los Angeles, CA 90026</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
              <h3 className="font-semibold text-gray-800 underline">Hours</h3>
              <p>In-person: Tue & Thu, 10 AM—6 PM</p>
              <p>Virtual via Zoom: Mon, Wed & Fri, 1 PM—5 PM</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form bg-white shadow-md rounded-lg p-4 w-full max-w-md order-1 lg:order-2">
          <p className="text-sm md:text-lg text-gray-700 mb-6 text-center px-8">
            Simply fill the brief fields below and Dr. Serena Blake will be in touch with you soon.
            This form is safe, private, and completely free.
          </p>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-md mx-auto flex flex-col gap-y-4 md:px-8 px-2"
            noValidate
          >
            {/* Name, Phone, Email */}
            {[
              ["Name", "name"],
              ["Phone", "phone"],
              ["Email", "email"],
            ].map(([label, name]) => (
              <div key={name} className="w-full flex flex-col gap-1">
                <label htmlFor={name}>{label}</label>
                <input
                  id={name}
                  name={name}
                  type={name === "email" ? "email" : name === "phone" ? "tel" : "text"}
                  autoComplete={name}
                  placeholder={`Your ${label}`}
                  value={formData[name]}
                  onChange={handleChange}
                  aria-invalid={!!errors[name]}
                  className={`p-3 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-md`}
                  required
                />
                {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
              </div>
            ))}

            {/* Date and Time */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="preferredDate">Preferred Date and Time</label>
              <div className="flex flex-col md:flex-row gap-2">
                <input
                  id="preferredDate"
                  name="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  aria-invalid={!!errors.preferredDate}
                  className={`w-full p-3 border ${errors.preferredDate ? "border-red-500" : "border-gray-300"} rounded-md`}
                  required
                />
                <input
                  id="preferredTime"
                  name="preferredTime"
                  type="time"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  aria-invalid={!!errors.preferredTime}
                  className={`w-full p-3 border ${errors.preferredTime ? "border-red-500" : "border-gray-300"} rounded-md`}
                  required
                />
              </div>
              {errors.preferredDate && <span className="text-red-500 text-sm">{errors.preferredDate}</span>}
              {errors.preferredTime && <span className="text-red-500 text-sm">{errors.preferredTime}</span>}
            </div>

            {/* Message */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                aria-invalid={!!errors.message}
                className={`p-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md h-20`}
                required
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>

            {/* Referral */}
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="referral">Where did you find us?</label>
              <textarea
                id="referral"
                name="referral"
                placeholder="What brings you here?"
                value={formData.referral}
                onChange={handleChange}
                aria-invalid={!!errors.referral}
                className={`p-3 border ${errors.referral ? "border-red-500" : "border-gray-300"} rounded-md h-20`}
                required
              />
              {errors.referral && <span className="text-red-500 text-sm">{errors.referral}</span>}
            </div>

            {/* Agreement */}
            <label htmlFor="agreement" className="flex items-start gap-2">
              <input
                type="checkbox"
                id="agreement"
                name="agreement"
                checked={formData.agreement}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 rounded mt-1"
                required
              />
              <span className={`${errors.agreement ? "text-red-500" : "text-gray-700"}`}>
                I agree to the terms and conditions
              </span>
            </label>
            {errors.agreement && <span className="text-red-500 text-sm">{errors.agreement}</span>}

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
              aria-label="Send message to Dr. Serena Blake"
            >
              Send Message
            </button>

            {/* Success Message */}
            {submitted && (
              <p className="text-green-600 text-center mt-4">
                ✅ Thank you! Dr. Serena Blake will contact you shortly.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
