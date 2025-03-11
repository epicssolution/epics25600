'use client';

import Image from 'next/image';
import Link from 'next/link'; // Import Link for navigation
import Button from '../Button';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaFilter, FaRegClock } from "react-icons/fa";
import { Tooltip } from 'react-tooltip';
import { client } from '@/sanity/lib/client';

// Filter Categories
const categories = ["Recent Posts"];

const BlogSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [blogs, setBlogs] = useState([]);

  // Fetch blogs from Sanity when the component mounts
  useEffect(() => {
    const fetchBlogs = async () => {
      const query = `
        *[_type in ["AI", "Eng", "equipment", "development", "dev", "energy", "waste"]] | order(publishedAt desc)[0...7] {
          title,
          description,
          "slug": slug.current,
          "imageUrl": image.asset->url,
          category,
          buttonText,
          readTime,
          publishedAt
        }
      `;
      const result = await client.fetch(query);
      setBlogs(result);
    };
    fetchBlogs().catch(console.error);
  }, []);

  // Filter blogs based on the active category
  const filteredBlogs =
    activeCategory === "All"
      ? blogs
      : blogs.filter((blog) => blog.category === activeCategory);

  return (
    <section className="bg-[#F8F9FA] dark:bg-[#1E293B] py-20 text-center relative">
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Expert Insights at Your Fingertips
      </motion.h2>

      <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
        Get the latest insights and data-driven reports to grow your subscription business.
      </p>

      {/* Filter Bar */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((category) => (
          <motion.button
            key={category}
            className={`px-6 py-2 rounded-full text-sm font-semibold transition ${
              activeCategory === category
                ? "bg-[#FFA07A] text-white"
                : "bg-[#E5E7EB] dark:bg-[#475569] text-gray-800 dark:text-white hover:bg-[#FF7F50] hover:text-white"
            }`}
            onClick={() => setActiveCategory(category)}
            whileTap={{ scale: 0.9 }}
          >
            {category}
          </motion.button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto px-6 md:px-20">
        {filteredBlogs.map((blog, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-[#2D3748] shadow-lg rounded-xl overflow-hidden transition-transform hover:scale-105 duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Blog Image */}
            <Link href={`/${blog.slug}`}>
              <div className="relative group cursor-pointer">
                <Image
                  src={blog.imageUrl || "https://www.epicssolution.com/default-banner.jpg"}
                  alt={blog.title}
                  width={600}
                  height={400}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">View More</span>
                </div>
              </div>
            </Link>

            {/* Blog Content */}
            <div className="p-6 text-left">
              <div className="flex justify-between items-center mb-2">
                <span
                  className="bg-[#FFA07A] text-white text-xs px-3 py-1 rounded-full"
                  data-tooltip-id={`tooltip-${index}`}
                  data-tooltip-content={`Category: ${blog.category}`}
                >
                  {blog.category}
                </span>
                <Tooltip id={`tooltip-${index}`} />

                <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <FaRegClock className="text-[#FFA07A]" />
                  {blog.readTime || "5 min read"}
                </span>
              </div>
              <Link href={`/${blog.slug}`}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 cursor-pointer hover:underline">
                  {blog.title}
                </h3>
              </Link>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {blog.description.length > 150
                  ? `${blog.description.slice(0, 150)}...`
                  : blog.description}
              </p>
              <Link href={`/${blog.slug}`}>
    <button
      className="w-full py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-dark font-semibold rounded-lg transition-colors duration-300 mt-2"
      aria-label={`Read more about ${blog.title || "this university"}`}
    >
      Read More
    </button>
  </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
