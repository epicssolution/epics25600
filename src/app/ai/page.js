import React from "react";
import Head from 'next/head'; // Importing Head component for adding meta tags
import Artificial from "@/components/Artificial/page";

export default function Artif() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>Artificial Intelligence Blogs & courses</title>
        <meta property="og:title" content="Artificial Intelligence Blogs & courses" />
        <meta
          property="og:description"
          content="read informative blogs  and enroll in the best online courses related to use of Artificial intelligence and application of  Artificial intelligence in Mechanical,HVAC,Energy and web Development"
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artificial Intelligence Blogs & courses" />
        <meta
          name="twitter:description"
          content="Educational websites help students to read informative blogs  and enroll in the best online courses related to use of Artificial intelligence  and application of Artificial Intelligence in Mechanical,HVAC,Energy and web Development"
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />

      </Head>
      
      <div className="mt-8">
        {/* Second component */}
          <div className="flex flex-col items-center font-semibold text-2xl border border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-6 sticky top-6 max-h-[80vh] space-y-4">
           <h1 className="text-3xl mb-2">Application of Artificial Intelligence</h1>
           <h2 className="text-xl font-normal">
             <strong>Introduction:</strong> Artificial Intelligence, or AI, is a smart technology that lets computers act and think like humans. It can do things like understand what we say, make decisions, and learn from experiences. Imagine giving computers a 'brain' to solve problems and get smarter over time—just like people do!
           </h2>
           <h2 className="text-xl font-normal">
            <strong>How AI Helps:</strong> AI analyzes huge amounts of data to become faster and better at tasks, making life easier and more efficient. For example, AI can recommend movies based on your tastes or even assist doctors in diagnosing illnesses.
           </h2>
      </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
          <Artificial />
        </article></div>
      </div>
    </>
  );
}
