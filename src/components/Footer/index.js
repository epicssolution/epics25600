"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { YoutubeIcon, FacebookIcon, LinkedinIcon, InstagramIcon } from "../Icons";
import Link from "next/link";
import siteMetadata from "@/utils/siteMetaData";

const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <footer className="mt-16 rounded-2xl bg-dark dark:bg-accentDark/90 m-2 sm:m-10 flex flex-col items-center text-light dark:text-dark">
      <h3 className="mt-16 font-medium dark:font-bold text-center capitalize text-2xl sm:text-3xl lg:text-4xl px-4">
       Online Courses | udemy | Courses
      </h3>
      <p className="mt-5 px-4 text-center w-full sm:w-3/5 font-light dark:font-medium text-sm sm:text-base">
      Educate yourself and lead the word. Enroll in best courses of every field.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 w-fit sm:min-w-[384px] flex items-stretch bg-light dark:bg-dark p-1 sm:p-2 rounded mx04"
      >
        <input
          type="email"
          placeholder="Enter your email"
          {...register("email", { required: true, maxLength: 80 })}
          className="w-full bg-transparent pl-2 sm:pl-0 text-dark focus:border-dark focus:ring-0 border-0 border-b mr-2 pb-1"
        />

        <input
          type="submit"
          className="bg-dark text-light dark:text-dark dark:bg-light cursor-pointer font-medium rounded px-3 sm:px-5 py-1"
        />
      </form>
      <div className="flex items-center mt-8">
      <a href={siteMetadata.linkedin} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via LinkedIn" target="_blank"><LinkedinIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.facebook} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Reach out to me via Twitter" target="_blank"><FacebookIcon className="hover:scale-125 transition-all ease duration-200" /></a>
        <a href={siteMetadata.youtube} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Github" target="_blank"><YoutubeIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" /></a>
        <a href={siteMetadata.Instagram} rel="noopener noreferrer" className="inline-block w-6 h-6 mr-4" aria-label="Check my profile on Dribbble" target="_blank"><InstagramIcon className="hover:scale-125 transition-all ease duration-200" /></a>
      </div>

      <div className="mt-8 flex flex-wrap justify-center space-x-4">
        <Link href="/about-us" className="text-sm hover:underline">
          About Us
        </Link>
        <Link  href="/contact" className="text-sm hover:underline">
          Contact Us
        </Link>
        <Link href="/privacy-policy" className="text-sm hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-and-conditions" className="text-sm hover:underline">
          Terms & Conditions
        </Link>
      </div>

      <div className="w-full  mt-16 md:mt-24 relative font-medium border-t border-solid border-light py-6 px-8 flex  flex-col md:flex-row items-center justify-between">
        <span className="text-center">
          &copy;Professional Courses.
        </span>
        <Link
          href="https://g.co/kgs/mCZEPTi"
          className="text-center underline my-4 md:my-0"
        >
          Our Location
        </Link>
        <div className="text-center">
          Made with &hearts; by{" "}
          <a href={siteMetadata.facebook} className="underline" target="_blank">
            AGKS
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
