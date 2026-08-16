import { z } from 'zod';

export const PostSchema = z.object({
  title: z.string().min(1, 'Post title is required'),
  excerpt: z.string().min(1, 'Post excerpt is required'),
  summary: z.string().min(1, 'Post summary is required'),
  date: z.string().min(1, 'Publish date is required'),
  author: z.object({
    slug: z.string().min(1, 'Author slug is required'),
    name: z.string().min(1, 'Author name is required'),
    credentialLine: z.string().min(1, 'Author credential line is required'),
  }),
  tags: z.array(z.string()).default([]),
  category: z.string().optional(),
  subtopic: z.string().optional(),
  updated: z.string().min(1, 'Update date is required'),
  lastReviewed: z.string().optional(),
  seeAlso: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
});

export type PostFrontmatter = z.infer<typeof PostSchema>;
