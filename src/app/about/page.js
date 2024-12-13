"use client";

import React from 'react';
import Head from 'next/head';

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <Head>
        <title>About Us | Epic Solutions</title>
      </Head>

      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4 text-center bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
          About Us
        </h1>
        <p className="text-base text-gray-700 leading-relaxed bg-light dark:bg-dark text-dark dark:text-light transition-all ease">
          Welcome to Epic Solutions! We are here to make learning easy and enjoyable for everyone. At Epic Solutions, we offer online blogs and courses on a variety of topics such as HVAC design, Revit MEP, HVAC equipment, web development, AI, Python, Next.js, BMS systems, energy audits, and much more. Whether you are a beginner or a professional, our content is created with simple and clear language to help you understand quickly.
        </p>
        <p className="text-base text-gray-700 leading-relaxed bg-light dark:bg-dark text-dark dark:text-light transition-all ease mt-4">
          Our goal is to empower students, workers, and anyone curious about learning new skills. We believe that knowledge should be available to all, and we strive to make our resources easy to access. With Epic Solutions, you can grow your skills, explore new opportunities, and achieve your goals. Join us on this journey of learning and discover how simple it is to gain valuable knowledge!
        </p>
      </main>
    </div>
  );
};

export default AboutUs;
