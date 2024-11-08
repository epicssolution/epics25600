
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Head from "next/head"; // Importing Head component

const Equipment = () => {
  const [universities, setUniversities] = useState([]);

  useEffect(() => {
    // Fetch data from Sanity
    const fetchData = async () => {
      const query = `
        *[_type=="equipment"]{
          description,
          "slug": slug.current,
          image,
          title,
          href,
          tags,
          content,
          publishedAt
        }
      `;
      const result = await client.fetch(query);
      setUniversities(result);
    };

    fetchData();
  }, []);

  return (
    <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center">
      {/* Adding dynamic Open Graph meta tags */}
      <Head>
        <title>online Courses & Blogs|Artificial Intelligence</title>
        <meta
          name="description"
          content="Explore new courses"
        />

        {/* Open Graph tags */}
        <meta property="og:title" content="Online Courses| Epics solution" />
        <meta
          property="og:description"
          content="read informative blogs and enroll in the best online courses related to use of Artificial intelligence in Mechanical,HVAC,Energy and web Development."
        />
        <meta
          property="og:image"
          content="https://www.epicssolution.com/path-to-your-default-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.epicssolution.com/artificiali"
        />
        <meta property="og:type" content="website" />

        {/* Twitter Card tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="ONLINE COURSES | Epics Solution" />
        <meta
          name="twitter:description"
          content="read informative blogs and enroll in the best online courses related to use of Artificial intelligence in Mechanical,HVAC,Energy and web Development."
        />
        <meta
          name="twitter:image"
          content="https://www.epicssolution.com/path-to-your-default-image.jpg"
        />
      </Head>

      {/* Grid layout for displaying courses */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((uni) => (
          <div
            key={uni.slug}
            className="group flex flex-col items-center text-dark dark:text-light mb-8"
          >
          <Link href={`/equipment/${uni.slug}`} className="h-full rounded-xl overflow-hidden">
  {uni.image && (
    <Image
      src={urlFor(uni.image).url()} // Using urlFor to generate the image URL
      alt={uni.image.alt || uni.title} // Using alt text if available
      width={400}
      height={300}
      className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
      sizes="(max-width: 440px) 80vw, (max-width: 824px) 30vw, 23vw"
      loading="lazy" // Enable lazy loading
    />
  )}
</Link>
            <div className="flex flex-col w-full mt-4">
              {uni.tags && uni.tags.length > 0 && (
                <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                  {uni.tags[0]}
                </span>
              )}
              <Link href={`/equipment/${uni.slug}`} className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span
                    className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50
                    bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500"
                  >
                    {uni.title}
                  </span>
                </h2>
              </Link>

              <span className="capitalize text-gray dark:text-light/50 font-semibold text-sm sm:text-base mt-2">
                {uni.publishedAt
                  ? new Date(uni.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })
                  : "Date not available"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Equipment;
