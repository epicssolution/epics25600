import Head from "next/head";
import BlogDetails from "@/components/blogdetail/page";
import siteMetadata from "@/utils/siteMetaData";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { notFound } from "next/navigation";
import VisitCourseButton from "@/components/buttons/page";
import { PortableText } from "next-sanity";

export async function generateMetadata({ params }) {
  const { slug } = params;

  const query = `
    *[_type in ["AI", "Eng", "equipment", "development", "dev"] && slug.current == $slug][0]{
      title,
      description,
      "slug": slug.current,
      image,
      publishedAt
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  const imageUrl = blog.image ? urlFor(blog.image).url() : siteMetadata.socialBanner;

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: blog.title,
    description: blog.description,
    image: imageUrl,
    datePublished: blog.publishedAt,
    url: `https://www.epicssolution.com/${slug}`,
    author: { "@type": "Person", name: "Abdul Ghaffar Khan" },
    publisher: {
      "@type": "Organization",
      name: "EPICS Solution",
      logo: { "@type": "ImageObject", url: siteMetadata.logo },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.epicssolution.com/${slug}`,
    },
  };

  return {
    title: blog.title,
    description: blog.description,
    openGraph: {
      title: blog.title,
      description: blog.description,
      url: `https://www.epicssolution.com/${slug}`,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.description,
      images: imageUrl ? [imageUrl] : [],
    },
    structuredData,
  };
}

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
      content,
      heading1,
      heading2,
      heading3,
      heading4
    }
  `;

  const blog = await client.fetch(query, { slug });

  if (!blog) {
    notFound();
    return null;
  }

  const headings = [];
  if (blog.heading1) headings.push({ text: blog.heading1, slug: "heading-1", level: "1" });
  if (blog.heading2) headings.push({ text: blog.heading2, slug: "heading-2", level: "2" });
  if (blog.heading3) headings.push({ text: blog.heading3, slug: "heading-3", level: "3" });
  if (blog.heading4) headings.push({ text: blog.heading4, slug: "heading-4", level: "4" });

  if (blog.content && Array.isArray(blog.content)) {
    blog.content
      .filter((block) => block.style && block.style.match(/^h[1-6]$/))
      .forEach((heading, index) => {
        const level = heading.style.replace("h", "");
        const text = heading.children.map((child) => child.text).join("");
        headings.push({ text, slug: `content-heading-${index}`, level });
      });
  }

  return (
    <article>
      <Head>
        <title>{blog.title}</title>
        <meta name="description" content={blog.description} />
        <meta property="og:title" content={blog.title} />
        <meta property="og:description" content={blog.description} />
        <meta property="og:image" content={urlFor(blog.image).url()} />
        <meta property="og:url" content={`https://www.epicssolution.com/${slug}`} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="EPICS Solution" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content={blog.title} />
        <meta property="twitter:description" content={blog.description} />
        <meta property="twitter:image" content={urlFor(blog.image).url()} />
      </Head>

      <div className="relative w-full h-[70vh] bg-gray-800">
        {/* Image Section */}
        {blog.image && (
          <div title={blog.title}>
            <Image
              src={urlFor(blog.image).url()}
              alt={blog.title}
              fill
              className="aspect-square w-full h-full object-cover object-center"
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 75vw, 50vw"
              priority={false}
            />
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-800/60" />
        <div className="z-10 flex flex-col items-center justify-center absolute inset-0 text-white">
          <VisitCourseButton href={blog.href} />
        </div>
      </div>

      <BlogDetails blog={blog} slug={params.slug} toc={headings} />

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
