'use client';


import BlogSection from '@/components/blog/page';
import HomePage1 from '@/components/Homecomponent/page';
import AboutUs from '@/components/Homecomponent/aboutus';
import IndustriesSection from '@/components/Homecomponent/IndustriesSection';
import BlogSlider from '@/components/ALL/page';

const Home = () => {
  return (
    <>
    <HomePage1 />
    <AboutUs />
     <section>
        <IndustriesSection />   {/* ✅ Added your new section here */}
      </section>

    <section >
    {/* Services Section */}
    <div><BlogSlider /></div>
      </section>


      {/* Blog Section */}
      <BlogSection />
    </>
  );
};

export default Home;
