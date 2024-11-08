import React from "react";
import Artificial from "@/components/Artificial/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function Artif() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title>Artificial Intelligence courses & Blogs</title>
        <meta property="og:title" content=" HVAC Equipment and Devices courses & Blogs" />
        <meta
          property="og:description"
          content="Educational websites help students read informative blogs  and enroll in the best online courses related to use of Artificial Intelligence "
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content=" Artificial Intelligence  & Blogs" />
        <meta
          name="twitter:description"
          content="Educational websites help students read informative blogs  and enroll in the best online courses related to use of Artificial Intelligence "
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
          Artificial Intelligence
        </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
        <Artificial />
       </article></div>
      </div>
    </>
  );
}
