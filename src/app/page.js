// Mark the file as a client component
"use client";

import { useEffect, useState } from 'react';
import HomePage from '@/components/Homecomponent/page';
import Engineering from '@/components/engineering/page';
import { client } from '@/sanity/lib/client';

const Page = () => {
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
    <div className="flex flex-col items-center justify-center">
      {/* Home Page Section */}
      <div style={{ minHeight: '300px', width: '100%' }}>
        <HomePage />
      </div>

      {/* Blog Detail Section */}
      <div className="w-full lg:w-3/4 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col items-start justify-center z-0 text-light">
        {blog.tags && blog.tags.length > 0 && (
          <span className="mt-2 text-sm text-gray-300">{blog.tags[0]}</span>
        )}
        <h1 className="font-bold capitalize text-lg sm:text-xl md:text-3xl lg:text-4xl">
          <span className="bg-gradient-to-r from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-[length:0px_6px] hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500">
            {blog.title}
          </span>
        </h1>
        <h2 className="hidden sm:inline-block mt-4 md:text-lg lg:text-xl font-in">
          {blog.description}
        </h2>
      </div>

      {/* Engineering Section */}
      <div style={{ minHeight: '300px', width: '100%' }}>
        <Engineering />
      </div>
    </div>
  );
};

export default Page;
