'use client';

import HeroSection from '@/components/hero/page';
import AboutUs from '@/components/aboutus/page';
import Testimonial from '@/components/testimonial/page';
import BlogSection from '@/components/blog/page';
import HomePage1 from '@/components/Homecomponent/page';

const Home = () => {
  return (
    <>
    <HomePage1 />

            {/* Services Section */}
  <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8 w-full max-w-6xl py-16 px-4">
  {[
    { title: "Development", icon: "💻", href: "https://www.epicssolution.com/dev" },
    { title: "Artificial Intelligence", icon: "🤖", href: "https://www.epicssolution.com/ai" },
    { title: "Designing", icon: "🎨", href: "https://www.epicssolution.com/eng" },
    { title: "Revit MEP", icon: "📐", href: "https://www.epicssolution.com/dev" },
    { title: "HVAC Software", icon: "❄", href: "https://www.epicssolution.com/equipment" },
    { title: "MEP Solutions", icon: "🏗", href: "https://www.epicssolution.com/mar" },
  ].map((service, index) => (
    <a
      key={index}
      href={service.href}
      className="bg-gradient-to-b from-[#FDE68A] to-[#6366F1] p-6 sm:p-8 rounded-xl text-center shadow-lg transform hover:scale-105 transition-transform hover:shadow-xl"
    >
      <div className="text-4xl sm:text-6xl text-[#FACC15]">{service.icon}</div>
      <h3 className="text-xl sm:text-2xl font-semibold my-2 sm:my-3 text-white">{service.title}</h3>
      <p className="text-gray-200 text-sm sm:text-base">Explore our {service.title.toLowerCase()} solutions.</p>
    </a>
  ))}
</section>

      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home;
