import { client } from '@/sanity/lib/client';
import EquipmentClient from './equipmentclient';
import { urlFor } from '@/sanity/lib/image';

export const metadata = {
  title: 'HVAC Equipment Blogs | Epics Solution',
  description: 'Explore the latest hvac equipment  blogs and insights.',
};

export default async function Page() {
  const posts = await client.fetch(`
    *[_type=="equipment"] | order(publishedAt desc) {
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
    url: `https://www.epicssolution.com/dev/${post.slug}`,
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
      <EquipmentClient posts={posts} />
    </>
  );
}
