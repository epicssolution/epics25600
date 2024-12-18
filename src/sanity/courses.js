import { defineField, defineType } from 'sanity';

export const coursesType = defineType({
  name: 'dev',
  title: 'dev',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Post Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading1',
      type: 'string',
      title: 'Heading 1',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading2',
      type: 'string',
      title: 'Heading 2',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading3',
      type: 'string',
      title: 'Heading 3',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heading4',
      type: 'string',
      title: 'Heading 4',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alt Text',
        }),
      ],
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [
        { type: 'block' }, // Rich text content
        {
          type: 'object', // Custom YouTube Embed
          name: 'youtube',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }).required(),
            },
          ],
          preview: {
            select: { url: 'url' },
            prepare({ url }) {
              const videoId = url ? getYouTubeID(url) : null;

              return {
                title: 'YouTube Embed',
                subtitle: videoId
                  ? `Video ID: ${videoId}`
                  : 'Invalid YouTube URL',
                media: videoId
                  ? {
                      asset: {
                        url: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                      },
                    }
                  : undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      title: 'yt',
      name: 'yt',
      type: 'array',
      of: [
        { type: 'block' }, // Standard block content
        {
          type: 'object', // YouTube Embed block
          name: 'youtube',
          title: 'YouTube Embed',
          fields: [
            {
              name: 'url',
              title: 'YouTube URL',
              type: 'url',
              validation: (Rule) =>
                Rule.uri({
                  scheme: ['http', 'https'],
                }).required(),
            },
          ],
          preview: {
            select: { url: 'url' },
            prepare({ url }) {
              const videoId = url ? getYouTubeID(url) : null;

              return {
                title: 'YouTube Embed',
                subtitle: videoId
                  ? `Video ID: ${videoId}`
                  : 'Invalid YouTube URL',
                media: videoId
                  ? {
                      asset: {
                        url: `https://img.youtube.com/vi/${videoId}/0.jpg`,
                      },
                    }
                  : undefined,
              };
            },
          },
        },
      ],
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
    }),
  ],
});

// Utility function to safely extract YouTube video ID
function getYouTubeID(url) {
  try {
    const regExp =
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.+?[?&]v=)|youtu\.be\/)([^"&?/\\ ]{11})/;
    const match = url.match(regExp);
    return match && match[1] ? match[1] : null;
  } catch (error) {
    console.error('Failed to parse YouTube URL:', error);
    return null;
  }
}
