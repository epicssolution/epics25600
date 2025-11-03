"use client";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="relative max-w-6xl mx-auto px-6 py-20 bg-gray-50 dark:bg-gray-900 rounded-3xl shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Us
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            At <span className="font-semibold text-blue-600">Epic Solutions</span>, 
            we are a passionate team of developers and designers focused on 
            delivering high-quality, innovative, and scalable digital solutions. 
            Our mission is to help businesses grow by creating user-friendly, 
            responsive, and performance-optimized web applications.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
            Over the years, we’ve successfully completed 
            <span className="font-semibold text-blue-600"> 200+ projects </span> 
            for clients in various industries — from startups to enterprise-level companies. 
            We take pride in our ability to solve complex technical challenges with creativity 
            and precision.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            Whether it’s front-end design, back-end development, or system integration, 
            we provide <span className="font-semibold text-blue-600">end-to-end solutions</span> 
            tailored to your needs — ensuring efficiency, security, and a modern digital presence.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <Image
              src="/images/office-team.jpg"
              alt="Epic Solutions Team"
              width={600}
              height={400}
              className="rounded-xl shadow-md object-cover w-full h-56"
            />
          </div>
          <Image
            src="/images/web-dev.jpg"
            alt="Web Development"
            width={300}
            height={200}
            className="rounded-xl shadow-md object-cover w-full h-40"
          />
          <Image
            src="/images/ui-design.jpg"
            alt="UI Design"
            width={300}
            height={200}
            className="rounded-xl shadow-md object-cover w-full h-40"
          />
        </div>
      </div>
    </section>
  );
}

