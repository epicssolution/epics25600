'use client';


import BlogSection from '@/components/blog/page';
import HomePage1 from '@/components/Homecomponent/page';
import BlogSlider from '@/components/ALL/page';

const Home = () => {
  return (
    <>
    <HomePage1 />

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
