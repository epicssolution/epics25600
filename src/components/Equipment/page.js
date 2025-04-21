"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Head from "next/head";

const Equipment = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = `
        *[_type=="equipment"] | order(publishedAt desc) {
          description,
          "slug": slug.current,
          image,
          title,
          tags,
          publishedAt,
          "author": author->name
        }
      `;
      const result = await client.fetch(query);
      setPosts(result);
    };

    fetchData();
  }, []);

  const mainPosts = posts.slice(0, 30);
  const sidebarPosts = posts.slice(0, 4);

  const allPosts = [...mainPosts, ...sidebarPosts];
  const schemas = allPosts.map((post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [urlFor(post.image).url()],
    datePublished: post.publishedAt,
    description: post.description,
    url: `https://www.epicssolution.com/dev/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Epics Solution",
      logo: {
        "@type": "ImageObject",
        url: "https://www.epicssolution.com/logo.png",
      },
    },
    author: post.author
      ? {
          "@type": "Person",
          name: post.author,
        }
      : undefined,
  }));

  return (
    <>
      <Head>
        <title>Development Blogs | Epics Solution</title>
        <meta
          name="description"
          content="Explore the latest development blogs and insights."
        />
        {schemas.map((schema, index) => (
          <script key={index} type="application/ld+json">
            {JSON.stringify(schema)}
          </script>
        ))}
      </Head>
      <main className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 lg:px-32 ">
        <div className="flex flex-row gap-8">
          <div className="flex-1">
            {mainPosts.map((post) => (
              <div key={post.slug} className="mb-12">
                {post.tags && post.tags.length > 0 && (
                  <span className="uppercase text-[#FF6F61] font-semibold text-sm mb-2 block">
                    {post.tags[0]}
                  </span>
                )}
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <Link href={`/${post.slug}`}>
                      <div className="relative w-full pt-[75%]">
                        <Image
                          src={urlFor(post.image).url()}
                          alt={post.title}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg shadow-md"
                        />
                      </div>
                    </Link>
                  </div>
                  <div className="md:w-2/3">
                    <Link href={`/${post.slug}`}>
                      <h2 className="text-2xl font-bold hover:underline">
                        {post.title}
                      </h2>
                    </Link>
                    <span className="text-sm text-gray-500 mt-2 block">
                      by {post.author || "Abdul Ghaffar Khan"} |{" "}
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <p className="mt-2 text-gray-700">{post.description}</p>
                    <Link href={`/${post.slug}`}>
                      <button className="mt-4 px-4 py-2 bg-[#FF6F61] text-white rounded hover:bg-[#E65C50]">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/4">
            <h3 className="text-xl font-semibold mb-4">Latest Blogs</h3>
            {sidebarPosts.map((post) => (
              <div key={post.slug} className="flex items-center mb-4">
                <div className="relative w-20 h-[60px]">
                  <Image
                    src={urlFor(post.image).url()}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded shadow-sm"
                  />
                </div>
                <div className="ml-4">
                  <Link href={`/${post.slug}`}>
                    <h4 className="text-sm font-medium hover:underline">
                      {post.title}
                    </h4>
                  </Link>
                  <span className="text-xs text-gray-500">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Equipment;
