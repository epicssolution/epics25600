'use client';


import BlogSection from '@/components/blog/page';
import HomePage1 from '@/components/Homecomponent/page';

const Home = () => {
  return (
    <>
    <HomePage1 />

            {/* Services Section */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full max-w-6xl py-12 px-4">
  {[
    { title: "Development", icon: "💻", href: "https://www.epicssolution.com/dev" },
    { title: "Artificial Intelligence", icon: "🤖", href: "https://www.epicssolution.com/ai" },
    { title: "Designing", icon: "🎨", href: "https://www.epicssolution.com/eng" },
    { title: "Revit MEP", icon: "📐", href: "https://www.epicssolution.com/mar" },
    { title: "Energy", icon: "❄", href: "https://www.epicssolution.com/energy" },
    { title: "HVAC Equipment", icon: "🏗", href: "https://www.epicssolution.com/equipment" },
  ].map((service, index) => (
    <a
      key={index}
      href={service.href}
      className="bg-gradient-to-b from-[#FDE68A] to-[#6366F1] p-4 sm:p-6 lg:p-8 rounded-xl text-center shadow-lg transition-transform hover:scale-105 hover:shadow-xl"
    >
      <div className="text-4xl sm:text-5xl lg:text-6xl text-[#FACC15]">{service.icon}</div>
      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold my-2 sm:my-3 text-white">{service.title}</h3>
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
