<div>
  <Head>
    <title>{blog.title} | Epic Solutions Blogs</title>
    <meta
      name="description"
      content="Explore industry-leading blogs and online courses in HVAC, Revit MEP, Python, AI, energy audits, and more at Epic Solutions."
    />
    <meta
      name="keywords"
      content="HVAC, AI, Python, Next.js, web development, energy audits, BMS systems"
    />
    <link
      rel="canonical"
      href={`https://www.epicssolution.com/${blog.slug}`}
    />
    <meta property="og:title" content={blog.title} />
    <meta property="og:description" content={blog.description} />
    <meta property="og:image" content={blog.image} />
    <meta
      property="og:url"
      content={`https://www.epicssolution.com/${blog.slug}`}
    />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={blog.title} />
    <meta name="twitter:description" content={blog.description} />
    <meta name="twitter:image" content={blog.image} />
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: blog.title,
        description: blog.description,
        image: `https://www.epicssolution.com${blog.image}`,
        author: {
          "@type": "Person",
          name: "Epic Solutions",
        },
        publisher: {
          "@type": "Organization",
          name: "Epic Solutions",
          logo: {
            "@type": "ImageObject",
            url: "https://www.epicssolution.com/logo.png",
          },
        },
        url: `https://www.epicssolution.com/${blog.slug}`,
      })}
    </script>
  </Head>

  <article className="relative h-[60vh] sm:h-[85vh]">
    {/* Background Gradient */}
    <div className="absolute top-0 left-0 bottom-0 right-0 h-full bg-gradient-to-b from-transparent to-dark/90 rounded-3xl z-0" />

    {/* Static Image */}
    <Image
      src={blog.image} // Path to the image in the public folder
      placeholder="blur"
      blurDataURL={blog.image}
      alt={`${blog.title} - Epic Solutions`}
      fill
      className="object-center object-cover rounded-3xl -z-10"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      priority
    />
  </article>
</div>
