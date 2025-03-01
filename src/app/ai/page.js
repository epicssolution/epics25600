"use client"; // Added "use client" to ensure client-side rendering, in case Artificial uses client-side APIs
import React from "react";
import Head from "next/head"; // Corrected import (removed unnecessary quotes)
import Artificial from "@/components/Artificial"; // Corrected path (removed "/page" suffix, assuming Artificial.js or Artificial.tsx)

export default function Artif() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>Artificial Intelligence Courses</title> {/* Fixed typo: "Artifical" to "Artificial" */}
        <meta property="og:title" content="Artificial Intelligence" /> {/* Fixed typo: "artificial intelligence" to "Artificial Intelligence" for consistency */}
        <meta
          property="og:description"
          content="Educational websites help students gain admission to top online courses and enroll in the best courses related to artificial intelligence."
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/artif" /> {/* Updated to reflect the current page URL for better SEO */}
        <meta property="og:type" content="website" /> {/* Changed "artificial intelligence" to "website" for a valid Open Graph type */}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Artificial Intelligence" /> {/* Fixed typo for consistency */}
        <meta
          name="twitter:description"
          content="Educational websites help students gain admission to top universities and enroll in the best courses related to artificial intelligence."
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center items-center font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh] bg-white dark:bg-gray-900">
          <h1>Artificial Intelligence Blogs & Courses</h1> {/* Fixed typo: "Artifical" to "Artificial" */}
        </div>
        <div className="mt-6">
          <article style={{ minHeight: "300px", width: "100%" }}>
            <Artificial />
          </article>
        </div>
      </div>
    </>
  );
}
