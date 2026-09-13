import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import type { BlogPost } from "@/config/blog";

/**
 * Standard blog article card — mirrors the grid card used on the Blog listing page.
 * `headingLevel` lets callers keep a valid heading hierarchy (h4 on /blog under its h3, h3 on the home page under an h2).
 */
export function BlogPostCard({
  post,
  headingLevel: Heading = "h4",
}: {
  post: BlogPost;
  headingLevel?: "h3" | "h4";
}) {
  return (
    <article className="group flex flex-col justify-between rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]">
      <div>
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            title={post.title}
            fill
            sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span className="rounded-full bg-[color:var(--color-cream)] px-2.5 py-0.5 font-medium text-[color:var(--color-accent)] border border-border">
            {post.category}
          </span>
          <span>·</span>
          <span className="flex items-center gap-1">
            <Clock aria-hidden className="h-3 w-3" />
            {post.readingTime}
          </span>
        </div>

        <Heading
          className="mt-3 text-lg font-semibold leading-snug tracking-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <Link href={`/blog/${post.slug}`} className="hover:text-[color:var(--color-accent)] transition-colors">
            {post.title}
          </Link>
        </Heading>

        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
          {post.excerpt}
        </p>
      </div>

      <div className="mt-6 border-t border-border pt-4 flex items-center justify-between">
        <time dateTime={post.publishedAt} className="text-xs text-muted-foreground">
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
            year: "numeric",
          })}
        </time>
        <Link
          href={`/blog/${post.slug}`}
          className="link-underline inline-flex items-center gap-1 text-xs font-medium text-foreground"
        >
          Read guide <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </article>
  );
}
