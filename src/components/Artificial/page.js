"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Head from "next/head";

const Artificial = () => {
  const [universities, setUniversities] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = `
          *[_type=="AI"]{
            description,
            "slug": slug.current,
            image,
            title,
            href,
            tags,
            content,
            heading1,
            heading2,
            heading4,
            publishedAt
          }
        `;
        const result = await client.fetch(query);
        setUniversities(result || []); // Fallback to empty array if result is null
      } catch (err) {
        console.error("Error fetching data from Sanity:", err);
        setError("Failed to load data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  // Display error message if data fetching fails
  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  return (
    <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 flex flex-col items-center justify-center">
      <Head>
        <title>Online Courses | Development</title>
        <meta name="description" content="Explore new courses" />
        <meta property="og:title" content="Online Courses | Epics Solution" />
        <meta
          property="og:description"
          content="Explore courses and their detailed information on Epics Solution."
        />
        <meta
          property="og:image"
          content="https://www.epicssolution.com/path-to-your-default-image.jpg"
        />
        <meta
          property="og:url"
          content="https://www.epicssolution.com/university"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Universities | Galaxy Education" />
        <meta
          name="twitter:description"
          content="Explore universities and their detailed information."
        />
        <meta
          name="twitter:image"
          content="https://www.epicssolution.com/path-to-your-default-image.jpg"
        />
      </Head>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {universities.map((uni) => (
          <div
            key={uni.slug}
            className="group flex flex-col items-center text-dark dark:text-light mb-8"
          >
            <Link
              href={`/${uni.slug}`}
              className="h-full rounded-xl overflow-hidden"
            >
              {uni.image && (
                <Image
                  src={urlFor(uni.image).url()}
                  alt={uni.image?.alt || uni.title || "University Image"}
                  width={400}
                  height={300}
                  className="aspect-[4/3] w-full h-full object-cover object-center group-hover:scale-105 transition-all ease duration-300"
                  sizes="(max-width: 440px) 80vw, (max-width: 824px) 30vw, 23vw"
                />
              )}
            </Link>

            <div className="flex flex-col w-full mt-4">
              {uni.tags && uni.tags.length > 0 && (
                <span className="uppercase text-accent dark:text-accentDark font-semibold text-xs sm:text-sm">
                  {uni.tags[0]}
                </span>
              )}
              <Link href={`/${uni.slug}`} className="inline-block my-1">
                <h2 className="font-semibold capitalize text-base sm:text-lg">
                  <span className="bg-gradient-to-r from-accent/50 to-accent/50 dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_4px] group-hover:bg-[length:100%_4px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                    {uni.title || "Untitled"}
                  </span>
                </h2>
                <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {uni.description
                    ? uni.description.length > 150
                      ? `${uni.description.slice(0, 150)}...`
                      : uni.description
                    : "No description available"}
                </p>
                <Link href={`/${uni.slug}`}>
                  <button
                    className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-dark font-semibold rounded-lg transition-colors duration-300 mt-2"
                    aria-label={`Read more about ${uni.title || "this university"}`}
                  >
                    Read More
                  </button>
                </Link>
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

export default Artificial;
