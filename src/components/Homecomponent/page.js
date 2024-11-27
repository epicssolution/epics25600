"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image"; // Assuming you have this function for building Sanity image URLs

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch data from Sanity
  useEffect(() => {
    const fetchData = async () => {
      const query = `*[ _type=="blog"]{
        _id,
        title,
        "slug": slug.current,
        image,
        description,
      }`;
      try {
        const result = await client.fetch(query);
        setBlogs(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Fallback if no blogs are found
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  // Using the first blog for the cover section
  const blog = blogs[0];

  return (
    <div  >
      {/* Adding Head for SEO and Open Graph meta tags */}
      <Head>
        <title>{blog.title} | Epics Solution Blogs</title>
        <meta name="description" content={blog.description} />

        {/* Preloading critical assets */}
        <link rel="preload" href="/path/to/fonts.woff2" as="font" type="font/woff2" crossorigin="anonymous" />
        <link rel="preload" href="/css/styles.css" as="style" />

        {/* Open Graph tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={urlFor(blog.image).url()} />
        <meta property="og:url" content={`https://www.epicssolution.com/${blog.slug}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={urlFor(blog.image).url()} />
      </Head>

      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-dark/90 rounded-3xl z-0" />

        {/* Optimized Image */}
           <Image
              src='/epics.jpg' // Path to the image in the public folder
              placeholder='blur' // Optional: You can still use placeholder blur
              blurDataURL='/epics.jpg' // Blur image reference (same as source here)
               alt={blog.title} // Accessible alternative text
               fill // Makes the image fill the parent container
               className='object-center object-cover rounded-3xl -z-10' // Styling classes
               sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' // Responsive sizes for optimization
               priority // Improves LCP by prioritizing the first image load
                />

     
      </article>
    </div>
  );
};

export default HomePage;
