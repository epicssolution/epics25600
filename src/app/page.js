import dynamic from 'next/dynamic';
import Head from 'next/head';

// Lazy load components
const HomePage = dynamic(() => import('@/components/Homecomponent/page'), {
  loading: () => <p>Loading Home Page...</p>,
  ssr: false,
});

const Engineering = dynamic(() => import('@/components/engineering/page'), {
  loading: () => <p>Loading Engineering Section...</p>,
  ssr: false,
});

const Page = () => {
  return (
    <>
      <Head>
        {/* Add JSON-LD structured data here */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Home Page",
              "description": "Homepage showcasing engineering blogs and courses.",
              "mainEntity": [
                {
                  "@type": "CreativeWork",
                  "name": "Engineering Blogs & Courses",
                  "description": "Find the latest engineering blogs and courses.",
                  "author": {
                    "@type": "Organization",
                    "name": "Your Site Name"
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <main className="flex flex-col items-center justify-center w-full">
        {/* Home Page Section */}
        <section
          className="min-h-[300px] w-full flex items-center justify-center bg-gray-100"
          aria-label="Home Page Section"
        >
          <HomePage />
        </section>

        {/* Engineering Section */}
        <div className="mt-6">
          <div className="flex justify-center align-middle font-semibold text-2xl border-[1px] border-solid border-dark dark:border-light text-black dark:text-light rounded-lg p-4 sticky top-6 max-h-[80vh]" >
            <h1>Engineering Blogs & Courses</h1>
          </div>
          <div className="mt-6">
            <article style={{ minHeight: '300px', width: '100%' }}>
              <Engineering />
            </article>
          </div>
        </div>
      </main>
    </>
  );
};

export default Page;
