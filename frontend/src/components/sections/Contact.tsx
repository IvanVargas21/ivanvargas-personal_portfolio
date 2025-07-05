'use client'

import React, { useState } from 'react';
import { z } from 'zod';
import SubmitButton from '../ui/SubmitButton';

// Zod schema
const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(1, 'Subject is required'),
  message: z.string().min(1, 'Message is required'),
});

const ContactSection = () => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData) as Record<string, string>;

    // Validate with Zod
    const result = contactSchema.safeParse(data);
    if (!result.success) {
      const fieldErrors: { [key: string]: string } = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0]] = err.message;
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({}); // Clear errors if valid

    try {
      // Web3Forms submission
      formData.append("access_key", "9f0712e0-8be1-49d4-bc68-60ff0987891e");
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());

      if (res.success) {
        setIsModalOpen(true);
        (event.target as HTMLFormElement).reset(); // Reset form
      } else {
        setSubmitError("There was an error sending your message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      setSubmitError("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="text-rose-400 font-bebas mr-2">04.</span>
            Contacts
          </h2>
          <div className="w-24 h-1 bg-rose-500 mx-auto"></div>
        </header>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-black/60 rounded-2xl shadow-2xl p-8 backdrop-blur-lg border border-rose-400/10">
          {/* Left side: Intro message */}
          <div className="flex flex-col justify-center items-start">
            <h2 className="text-3xl font-extrabold text-white mb-4">Let&apos;s Get in Touch</h2>
            <p className="text-lg text-gray-400 mb-6">
              I&apos;m available to connect by <span className="text-rose-400 font-semibold">email</span> or through <span className="text-rose-400 font-semibold">social media</span>. Feel free to reach out, and let&apos;s chat!
            </p>
            <div className="flex gap-6 mt-2">
              <a href="https://www.facebook.com/profile.php?id=100014115240375" className="group" target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-800 rounded-full p-3 shadow-lg hover:bg-rose-400 transition-colors">
                  <img src="/assets/vectors/facebook.svg" alt="Facebook" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="mailto:icvargasx21@gmail.com" className="group" target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-800 rounded-full p-3 shadow-lg hover:bg-rose-400 transition-colors">
                  <img src="/assets/vectors/gmail.svg" alt="Gmail" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://github.com/IvanVargas21" className="group" target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-800 rounded-full p-3 shadow-lg hover:bg-rose-400 transition-colors">
                  <img src="/assets/vectors/github.svg" alt="GitHub" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/ivan-christopher-vargas-0a6999325/" className="group" target="_blank" rel="noopener noreferrer">
                <div className="bg-gray-800 rounded-full p-3 shadow-lg hover:bg-rose-400 transition-colors">
                  <img src="/assets/vectors/linkedin.svg" alt="LinkedIn" className="w-6 h-6 group-hover:scale-110 transition-transform" />
                </div>
              </a>
            </div>
          </div>

          {/* Right side: Contact Form */}
          <form onSubmit={onSubmit} className="bg-gradient-to-br from-gray-900/80 to-black/80 rounded-2xl shadow-xl p-8 border border-rose-400/10">
            <h2 className="mb-6 text-2xl font-bold text-white text-center">Contact Me</h2>
            
            {submitError && (
              <div className="mb-4 p-3 bg-rose-900/50 text-rose-300 rounded-lg text-sm">
                {submitError}
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Your Name</label>
              <input
                name="name"
                type="text"
                id="name"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 block w-full p-2.5"
                placeholder="Full Name"
              />
              {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Your Email</label>
              <input
                name="email"
                type="email"
                id="email"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 block w-full p-2.5"
                placeholder="youremail@example.com"
              />
              {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-300">Subject</label>
              <input
                name="subject"
                type="text"
                id="subject"
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 block w-full p-2.5"
                placeholder="Subject"
              />
              {errors.subject && <p className="text-rose-400 text-xs mt-1">{errors.subject}</p>}
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300">Your Message</label>
              <textarea
                name="message"
                id="message"
                rows={5}
                className="bg-gray-800 border border-gray-700 text-white text-sm rounded-lg focus:ring-rose-400 focus:border-rose-400 block w-full p-2.5"
                placeholder="Leave a message..."
              ></textarea>
              {errors.message && <p className="text-rose-400 text-xs mt-1">{errors.message}</p>}
            </div>
            <SubmitButton isSubmitting={isSubmitting} />
          </form>
        </div>
      </div>

      {/* Success Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center text-center bg-black/90 rounded-2xl shadow-2xl border border-rose-400/30 p-8 w-[90vw] max-w-md mx-auto">
            {/* Close Button */}
            <button
              type="button"
              onClick={handleCloseModal}
              className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-rose-400/10 hover:text-rose-400 rounded-lg text-base p-1.5 transition"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            {/* Success Icon */}
            <div className="w-14 h-14 rounded-full bg-rose-100 dark:bg-rose-900 p-2 flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                aria-hidden="true"
                className="w-8 h-8 text-rose-500 dark:text-rose-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Success</span>
            </div>
            <p className="mb-4 text-lg font-semibold text-white">
              Message sent successfully!
            </p>
            <button
              onClick={handleCloseModal}
              type="button"
              className="py-2 px-6 text-base font-medium text-center text-white rounded-lg bg-rose-500 hover:bg-rose-600 focus:ring-4 focus:outline-none focus:ring-rose-300 transition mt-4"
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ContactSection;