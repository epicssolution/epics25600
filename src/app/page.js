'use client';

import BlogSection from '@/components/blog/page';
import HomePage1 from '@/components/Homecomponent/page';
import AboutUs from '@/components/Homecomponent/aboutus';
import IndustriesSection from '@/components/Homecomponent/IndustriesSection';
import HowItWorks from '@/components/Homecomponent/HowItWorks';
import BlogSlider from '@/components/ALL/page';


const Home = () => {
  return (
    <>
      <HomePage1 />
      <AboutUs />
      <IndustriesSection />
     <HowItWorks />

      {/* Services Section */}
      <div>
        <BlogSlider />
      </div>

      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home;

