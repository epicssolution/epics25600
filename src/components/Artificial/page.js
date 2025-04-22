import { client } from '@/sanity/lib/client';
import AiClient  from './aiclient';
import { urlFor } from '@/sanity/lib/image';

export const metadata = {
  title: 'AI Blogs | Epics Solution',
  description: 'Explore the latest AI blogs and insights.',
};

export default async function Page() {
  const posts = await client.fetch(`
    *[_type=="AI"] | order(publishedAt desc) {
      description,
      "slug": slug.current,
      image,
      title,
      tags,
      publishedAt,
      "author": author->name
    }
  `);

  const schemas = posts.map((post) => ({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [urlFor(post.image).url()],
    datePublished: post.publishedAt,
    description: post.description,
    url: `https://www.epicssolution.com/ai/${post.slug}`,
    publisher: {
      "@type": "Organization",
      name: "Epics Solution",
      logo: {
        "@type": "ImageObject",
        url: "https://www.epicssolution.com/logo.png",
      },
    },
    author: post.author
      ? {
          "@type": "Person",
          name: post.author,
        }
      : undefined,
  }));

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
      <AiClient posts={posts} />
    </>
  );
}
