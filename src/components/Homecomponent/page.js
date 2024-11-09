"use client";

import React from "react";
import Head from 'next/head';
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

export async function getServerSideProps() {
  const query = `*[ _type=="blog"]{ _id, title, "slug": slug.current, image, description }`;
  const blogs = await client.fetch(query);

  return {
    props: { blogs }
  };
}

const HomePage = ({ blogs }) => {
  if (!blogs || blogs.length === 0) {
    return <div>No blogs available</div>;
  }

  const blog = blogs[0];

  return (
    <div className="w-full inline-block">
      <Head>
        <title>{blog.title} | Epics Solution Platform - Best Courses and Blogs</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content="Epics Solution, Courses, Blogs, Education" />
        
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={urlFor(blog.image).url()} />
        <meta property="og:url" content={`https://www.epicssolution.com/`} />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={urlFor(blog.image).url()} />

        <meta property="fb:app_id" content="your-facebook-app-id-here" />
        
        <link rel="canonical" href="https://www.epicssolution.com/" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": blog.title,
            "description": blog.description,
            "image": urlFor(blog.image).url(),
            "author": "Author Name",
            "publisher": {
              "@type": "Organization",
              "name": "Epics Solution",
              "logo": { "@type": "ImageObject", "url": "https://www.epicssolution.com/logo.png" }
            },
            "datePublished": blog.publishedAt,
            "url": "https://www.epicssolution.com/"
          })}
        </script>
      </Head>

      <article className="flex flex-col items-start justify-end mx-5 sm:mx-10 relative h-[60vh] sm:h-[85vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-dark/90 rounded-3xl z-0" />

        {blog.image && (
          <Image
            src={urlFor(blog.image).url()}
            placeholder="blur"
            blurDataURL={urlFor(blog.image).url()}
            alt={`Cover image for ${blog.title}`}
            fill
            className="object-center object-cover rounded-3xl -z-10"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
          />
        )}

        <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
          {blog.tags && blog.tags.length > 0 && (
            <span className="mt-2 text-sm text-gray-300">{blog.tags[0]}</span>
          )}
          <div>
            <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
              <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
                {blog.title}
              </span>
            </h1>
          </div>
          <p className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
            {blog.description}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomePage;
