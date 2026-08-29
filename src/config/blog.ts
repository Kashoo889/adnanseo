import type { StaticImageData } from "next/image";
import heroImg from "@/assets/hero-main.jpg";
import householdImg from "@/assets/service-household.jpg";
import villaImg from "@/assets/service-villa.jpg";
import officeImg from "@/assets/service-office.jpg";
import teamImg from "@/assets/team.jpg";

export type BlogAuthor = {
  name: string;
  role: string;
  avatar?: StaticImageData;
};

export type BlogCallout = {
  type: "tip" | "info" | "warning";
  title: string;
  text: string;
};

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  callout?: BlogCallout;
  bulletPoints?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Guides & Tips" | "Moving & Tenancy" | "Villa & Garden" | "Commercial & Office" | "Eco & Recycling";
  coverImage: StaticImageData;
  coverImageAlt: string;
  publishedAt: string; // ISO date string "YYYY-MM-DD"
  modifiedAt?: string;
  readingTime: string;
  author: BlogAuthor;
  tags: string[];
  keyTakeaways?: string[];
  sections: BlogSection[];
  relatedSlugs?: string[];
  seoTitle?: string;
  seoDescription?: string;
};

export const defaultAuthor: BlogAuthor = {
  name: "Dubai Junk Collection Editorial Team",
  role: "Operations & Sustainability Specialists",
  avatar: teamImg,
};

export const blogCategories = [
  "All",
  "Guides & Tips",
  "Moving & Tenancy",
  "Villa & Garden",
  "Commercial & Office",
  "Eco & Recycling",
] as const;

export type BlogCategory = (typeof blogCategories)[number];

// Active blog posts (articles will be added in the content/MD phase)
export const blogPosts: BlogPost[] = [];

// Helper Functions
export const getAllPosts = (): BlogPost[] => {
  return [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find((p) => p.slug === slug);
};

export const getAllPostSlugs = (): string[] => {
  return blogPosts.map((p) => p.slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === "All") return getAllPosts();
  return getAllPosts().filter((p) => p.category === category);
};

export const getRelatedPosts = (currentSlug: string, limit = 2): BlogPost[] => {
  const current = getPostBySlug(currentSlug);
  if (!current) return [];

  if (current.relatedSlugs && current.relatedSlugs.length > 0) {
    const explicit = current.relatedSlugs
      .map((slug) => getPostBySlug(slug))
      .filter((p): p is BlogPost => Boolean(p));
    if (explicit.length > 0) return explicit.slice(0, limit);
  }

  return getAllPosts()
    .filter((p) => p.slug !== currentSlug)
    .slice(0, limit);
};
