import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

// Новини/Блог
const postsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx', '*.mdoc'], base: 'src/content/posts' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    publishDate: z.coerce.date(),
    category: z.enum(['news', 'announcements', 'holidays', 'parish-life']).default('news'),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    metadata: metadataDefinition(),
  }),
});

// Розклад богослужінь
const eventsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/events' }),
  schema: z.object({
    title: z.string(),
    eventType: z.enum([
      'liturgy',
      'vespers',
      'matins',
      'moleben',
      'panakhyda',
      'akathist',
      'confession',
    ]).default('liturgy'),
    recurrence: z.discriminatedUnion('discriminant', [
      z.object({
        discriminant: z.literal('single'),
        value: z.object({
          date: z.coerce.date(),
          time: z.string(),
        }),
      }),
      z.object({
        discriminant: z.literal('recurring'),
        value: z.object({
          dayOfWeek: z.enum(['0', '1', '2', '3', '4', '5', '6']),
          time: z.string(),
        }),
      }),
    ]),
    isActive: z.boolean().default(true),
  }),
});

// Проповіді
const sermonsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/sermons' }),
  schema: z.object({
    title: z.string(),
    preacher: z.string().optional(),
    date: z.coerce.date(),
    occasion: z.string().optional(),
    bibleReading: z.string().optional(),
    tags: z.array(z.string()).default([]),
    metadata: metadataDefinition(),
  }),
});

// Святі покровителі
const saintsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/saints' }),
  schema: z.object({
    name: z.string(),
    title: z.string().optional(),
    feastDay: z.string().optional(),
    icon: z.string().optional(),
    shortDescription: z.string().optional(),
    quotes: z.array(
      z.object({
        text: z.string(),
        source: z.string().optional(),
      })
    ).default([]),
    metadata: metadataDefinition(),
  }),
});

// Про прихід (singleton)
const aboutCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/about' }),
  schema: z.object({
    title: z.string(),
    heroImage: z.string().optional(),
    history: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

// Контакти (singleton)
const contactsCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/contacts' }),
  schema: z.object({
    title: z.string(),
    address: z.string().optional(),
    phone: z.string().optional(),
    email: z.string().optional(),
    mapLink: z.string().optional(),
    schedule: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

// Для зворотної сумісності з AstroWind
const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  // Нові колекції для храму
  posts: postsCollection,
  events: eventsCollection,
  sermons: sermonsCollection,
  saints: saintsCollection,
  about: aboutCollection,
  contacts: contactsCollection,

  // Стара колекція для зворотної сумісності
  post: postCollection,
};
