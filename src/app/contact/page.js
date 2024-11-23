"use client"; // Ensure this is the first line in the file

import React, { useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [faqOpen, setFaqOpen] = useState(null);

  const toggleFaq = (index) => {
    setFaqOpen(faqOpen === index ? null : index);
  };

  const faqs = [
    {
      question: "What courses does Epics Solution offer?",
      answer:
        "Epics Solution offers courses in HVAC design, Revit MEP, HVAC equipment, web development, AI, Python, Next.js, BMS systems, energy audits, and more.",
    },
    {
      question: "How can I enroll in a course?",
      answer:
        "You can enroll by contacting us via phone or email, or by visiting the course section on our website.",
    },
    {
      question: "Where is your company located?",
      answer: "We are based at Epics Solution, Your Address Here.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center border-[1px] border-solid border-dark dark:border-light text-black dark:text-light min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-2xl">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

        {/* Company Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold mb-4">
            Epics Solution offers Online Courses & Informational Blogs
          </h2>
          <p className="text-base text-gray-600">
            Epic Solutions provides top-notch online blogs and courses in HVAC
            design, Revit MEP, HVAC equipment, web development, AI, Python,
            Next.js, BMS systems, energy audits, and more.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
          <ul className="text-lg space-y-2">
            <li>
              <strong>Phone: </strong>
              <a
                href="tel:+923095704847"
                className="text-blue-500 hover:underline"
              >
                0332-5008560
              </a>
            </li>
            <li>
              <strong>Email: </strong>
              <a
                href="mailto:abdulghaffar25600@epicssolution.com"
                className="text-blue-500 hover:underline"
              >
                abdulghaffar25600@epicssolution.com
              </a>
            </li>
            <li>
              <strong>Address: </strong>
              <span>Epics Solution, Your Address Here</span>
            </li>
          </ul>
        </section>

        {/* Google Maps Location */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Our Location</h3>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://g.co/kgs/nVWofPL"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </section>

        {/* Contact Form */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form action="#" method="POST" className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your email address"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
                className="p-2 border border-gray-300 rounded-md"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg p-4">
                <h4
                  onClick={() => toggleFaq(index)}
                  className="font-medium text-lg cursor-pointer text-blue-600"
                >
                  {faq.question}
                </h4>
                {faqOpen === index && (
                  <p className="mt-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}