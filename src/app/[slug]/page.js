export default async function BlogPage({ params }) {
  const { slug } = params;

  const query = `
    *[_type in ["AI", "Eng", "equipment", "development", "dev"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt,
      href,
      content
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  // Dynamically extract headings from blog.content
  const headings = [];
  if (Array.isArray(blog.content)) {
    blog.content.forEach((block, index) => {
      if (block.style && block.style.startsWith("h")) {
        headings.push({
          text: block.children.map((child) => child.text).join(" "),
          slug: `heading-${index}`,
          level: parseInt(block.style.replace("h", ""), 10),
        });
      }
    });
  }

  const imageUrl = blog.image ? urlFor(blog.image).url() : siteMetadata.socialBanner;

  return (
    <article>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta name="keywords" content={`${blog.title}, AI, Epic Solution, Blog`} />
        <link rel="canonical" href={`https://www.epicssolution.com/${slug}`} />
        <meta name="author" content="Epic Solution Team" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph Tags */}
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:url" content={`https://www.epicssolution.com/${slug}`} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Epic Solution Blog" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:updated_time" content={new Date().toISOString()} />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta name="twitter:description" content={blog.description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div className="relative w-full h-[70vh] bg-gray-800">
        {blog.image && (
          <div title={blog.title}>
            <Image
              src={imageUrl}
              alt={blog.title}
              fill
              className="aspect-square w-full h-full object-cover object-center"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
            />
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800/60" />
        <div className="z-10 flex flex-col items-center justify-center absolute inset-0 text-white">
          <VisitCourseButton href={blog.href} />
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8 mt-8 px-5 md:px-10">
        {/* Table of Contents - Hidden on Mobile */}
        <div className="col-span-12 lg:col-span-4 hidden lg:block">
          <details
            className="border border-dark text-black rounded-lg p-4 sticky top-6 max-h-[80vh] overflow-auto"
            open
          >
            <summary className="text-lg font-semibold capitalize cursor-pointer">
              Table Of Contents
            </summary>
            <ul className="mt-4">
              {headings.length > 0 ? (
                headings.map((heading) => (
                  <li key={heading.slug} className="py-1">
                    <a
                      href={`#${heading.slug}`}
                      className="text-blue-500 hover:underline"
                    >
                      {heading.text}
                    </a>
                  </li>
                ))
              ) : (
                <li>No content available</li>
              )}
            </ul>
          </details>
        </div>

        {/* Blog Content */}
        <div className="col-span-12 lg:col-span-8 text-black">
          {blog.content ? (
            <PortableText
              value={blog.content}
              components={{
                types: {
                  image: ({ value }) => (
                    <div className="my-4">
                      <Image
                        src={urlFor(value).url()}
                        alt={value.alt || "Blog image"}
                        className="w-full h-auto rounded"
                      />
                    </div>
                  ),
                },
                marks: {
                  link: ({ value, children }) => (
                    <a
                      href={value.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline"
                    >
                      {children}
                    </a>
                  ),
                },
                block: {
                  h1: ({ children }) => (
                    <h1 className="text-4xl font-bold my-4">{children}</h1>
                  ),
                  h2: ({ children }) => (
                    <h2 className="text-3xl font-semibold my-4">{children}</h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="text-2xl font-medium my-3">{children}</h3>
                  ),
                  normal: ({ children }) => <p className="my-2">{children}</p>,
                },
              }}
            />
          ) : (
            <p>No content available</p>
          )}
        </div>
      </div>
    </article>
  );
}
