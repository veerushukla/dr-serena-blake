"use client";
import React, { useState, useRef } from "react";
import { Roboto_Slab } from "next/font/google";
import Head from "next/head";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

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

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return value.trim() ? "" : "Name is required.";
      case "phone":
        return value.trim() ? "" : "Phone is required.";
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
          ? ""
          : "Please enter a valid email address.";
      case "preferredDate":
        return value ? "" : "Preferred date is required.";
      case "preferredTime":
        return value ? "" : "Preferred time is required.";
      case "message":
        return value.trim() ? "" : "Please enter your message.";
      case "referral":
        return value.trim() ? "" : "Let us know how you found us.";
      case "agreement":
        return value ? "" : "You must accept the terms.";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({ ...prev, [name]: fieldValue }));

    // Validate as user types (optional for some fields)
    if (name === "email") {
      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, fieldValue),
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setErrors((prev) => ({
      ...prev,
      [name]: validateField(name, fieldValue),
    }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateAll();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setSubmitted(true);
      setFormData(initialForm);
      formRef.current?.reset();
      toast.success("✅ Your message has been sent!", { icon: "📬" });
    } else {
      setSubmitted(false);
      toast.error("❌ Please fix the errors in the form.", { icon: "⚠️" });

      const firstErrorKey = Object.keys(newErrors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      if (errorElement) {
        errorElement.scrollIntoView({ behavior: "smooth", block: "center" });
        errorElement.focus();
      }
    }
  };

  return (
    <>
      <Head>
        <title>Contact Dr. Serena Blake | Los Angeles Therapist</title>
        <meta
          name="description"
          content="Contact Dr. Serena Blake for professional, compassionate therapy sessions in Los Angeles or virtually. Safe, private, and free initial consultation."
        />
      </Head>

      <div id="Contact" className="min-h-screen flex flex-col items-center bg-emerald-100 py-12">
        <h2 className={`${robotoSlab.className} font-bold text-3xl md:text-4xl text-gray-800 mb-10 text-center px-4`}>
          Contact Dr. Serena Blake
        </h2>

        <div className="cards flex lg:flex-row flex-col justify-center items-center gap-8 px-4">
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
              {[["Name", "name"], ["Phone", "phone"], ["Email", "email"]].map(([label, name]) => (
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
                    onBlur={handleBlur}
                    aria-invalid={!!errors[name]}
                    className={`p-3 border ${errors[name] ? "border-red-500" : "border-gray-300"} rounded-md`}
                    required
                  />
                  {errors[name] && <span className="text-red-500 text-sm">{errors[name]}</span>}
                </div>
              ))}

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="preferredDate">Preferred Date and Time</label>
                <div className="flex flex-col md:flex-row gap-2">
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 border ${errors.preferredDate ? "border-red-500" : "border-gray-300"} rounded-md`}
                    required
                  />
                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`w-full p-3 border ${errors.preferredTime ? "border-red-500" : "border-gray-300"} rounded-md`}
                    required
                  />
                </div>
                {errors.preferredDate && <span className="text-red-500 text-sm">{errors.preferredDate}</span>}
                {errors.preferredTime && <span className="text-red-500 text-sm">{errors.preferredTime}</span>}
              </div>

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`p-3 border ${errors.message ? "border-red-500" : "border-gray-300"} rounded-md h-20`}
                  required
                />
                {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
              </div>

              <div className="w-full flex flex-col gap-1">
                <label htmlFor="referral">Where did you find us?</label>
                <textarea
                  id="referral"
                  name="referral"
                  placeholder="What brings you here?"
                  value={formData.referral}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`p-3 border ${errors.referral ? "border-red-500" : "border-gray-300"} rounded-md h-20`}
                  required
                />
                {errors.referral && <span className="text-red-500 text-sm">{errors.referral}</span>}
              </div>

              <label htmlFor="agreement" className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agreement"
                  name="agreement"
                  checked={formData.agreement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="h-5 w-5 text-blue-600 rounded mt-1"
                  required
                />
                <span className={`${errors.agreement ? "text-red-500" : "text-gray-700"}`}>
                  I agree to the terms and conditions
                </span>
              </label>
              {errors.agreement && <span className="text-red-500 text-sm">{errors.agreement}</span>}

              <button
                type="submit"
                className="bg-green-400 text-white p-3 rounded-md hover:bg-green-600 transition"
                aria-label="Send message to Dr. Serena Blake"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <ToastContainer
          position="top-right"
          autoClose={3000}
          theme="light"
          toastClassName="!rounded-xl !shadow-lg !text-sm !text-gray-700 !bg-white border border-emerald-200"
          bodyClassName="!p-4"
          closeButton={false}
        />
      </div>
    </>
  );
};

export default Contact;
