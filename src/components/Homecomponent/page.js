"use client";

import React from "react";
import Head from "next/head"; // Importing Head for meta tags
import Image from "next/image";

const HomePage = () => {
  // Static data for blogs
  const blogs = [
    {
      id: 1,
      title: "Best Online Blogs & Courses",
      slug: "epic-solution", // Updated to a URL-safe slug
      description:
        "Epic Solutions offers the best online blogs and courses in HVAC design, Revit MEP, HVAC equipment, web development, AI, Python, Next.js, BMS systems, energy audits, and more.",
      image: "/epics.jpg", // Path to the image in the public folder
    },
  ];

  // Fallback if no blogs are found
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  // Using the first blog for the cover section
  const blog = blogs[0];

  return (
    <div className="w-full inline-block">
      {/* Adding Head for SEO and Open Graph meta tags */}
      <Head>
        <title>{blog.title} | Epic Solution Blogs</title>
        <meta name="description" content={blog.description} />

        {/* Open Graph tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={blog.image} />
        <meta property="og:url" content={`https://www.epicssolution.com/${blog.slug}`} />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={blog.image} />
      </Head>

      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        {/* Background Gradient */}
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-black/90 rounded-3xl z-0" />

        {/* Static Image */}
        <Image
          src={blog.image} // Path to the image in the public folder
          placeholder="blur" // Optional: You can still use placeholder blur
          blurDataURL={blog.image} // Blur image reference (same as source here)
          alt={`${blog.title} - Epic Solutions`} // Accessible alternative text
          fill // Makes the image fill the parent container
          className="object-center object-cover rounded-3xl -z-10" // Styling classes
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" // Responsive sizes for optimization
          priority // Improves LCP by prioritizing the first image load
        />
      </article>
    </div>
  );
};

export default HomePage;
