import React from "react";
import Product from "@/components/product/page";
import Head from 'next/head'; // Importing Head component for adding meta tags

export default function Products() {
  return (
    <>
      {/* Adding the Head component for Open Graph and Twitter meta tags */}
      <Head>
        <title> web Development using Next Js</title>
        <meta property="og:title" content="  web Development using Next Js" />
        <meta
          property="og:description"
          content="Educational websites help students read informative blogs  and enroll in the best online courses related to  web Development using Next Js"
        />
        <meta property="og:image" content="https://www.epicssolution.com/social-banner.png" />
        <meta property="og:url" content="https://www.epicssolution.com/" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="  web Development using Next Js courses & Blogs" />
        <meta
          name="twitter:description"
          content="Educational websites help students read informative blogs  and enroll in the best online courses related to use of  web Development using Next Js."
        />
        <meta name="twitter:image" content="https://www.epicssolution.com/social-banner.png" />
      </Head>
      
      <div className="mt-8">
        {/* Second component */}
        <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
                 <h1>      Buy all products  </h1>

        </div>
       <div className=" mt-6 "> <article  style={{ minHeight: '300px', width: '100%' }}>
          <Product />
        </article></div>
      </div>
    </>
  );
}
