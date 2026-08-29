import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Calendar, Clock, Sparkles, Tag } from "lucide-react";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { getAllPosts, blogCategories } from "@/config/blog";
import { site, absoluteUrl } from "@/config/site";
import skylineImg from "@/assets/dubai-skyline.jpg";

export const metadata: Metadata = {
  title: "Dubai Junk Removal & Decluttering Guides — Dubai Junk Collection Blog",
  description:
    "Practical advice, move-out checklists, and environmental guides for disposing of bulky furniture, appliances, e-waste, and garden waste across Dubai.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Dubai Junk Removal & Decluttering Guides — Dubai Junk Collection Blog",
    description:
      "Practical advice, move-out checklists, and environmental guides for clearing homes, offices, and villas across Dubai.",
    url: "/blog",
    siteName: site.name,
    type: "website",
    images: [
      {
        url: skylineImg.src,
        width: 1200,
        height: 630,
        alt: "Dubai Junk Collection Blog and Property Clearance Guides",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dubai Junk Removal & Decluttering Guides",
    description: "Practical guides and tips for property clearance in Dubai.",
    images: [skylineImg.src],
  },
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const featuredPost = posts[0];
  const remainingPosts = posts.slice(1);

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
    ],
  };

  const blogLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Dubai Junk Collection Blog & Guides",
    description: "Expert clearance tips, tenancy move-out guides, and sustainable waste advice for Dubai residents and businesses.",
    url: absoluteUrl("/blog"),
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
    },
    blogPost: posts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      description: post.excerpt,
      url: absoluteUrl(`/blog/${post.slug}`),
      datePublished: post.publishedAt,
      author: {
        "@type": "Organization",
        name: post.author.name,
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogLd) }} />

      <PageHero
        eyebrow="Blog & Practical Guides"
        title="Clearance tips, move-out checklists & eco-guides."
        subtitle="Practical advice from Dubai's trusted junk collection specialists — helping you navigate building permits, bulky furniture dismantling, and responsible recycling."
      />

      <section className="container-x py-16 sm:py-20">
        {/* CATEGORY BAR */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border pb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground mr-2">
            Categories:
          </span>
          {blogCategories.map((cat, idx) => (
            <span
              key={cat}
              className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                idx === 0
                  ? "bg-[color:var(--color-ink)] text-[color:var(--color-cream)]"
                  : "border border-border bg-background text-foreground/80 hover:border-foreground"
              }`}
            >
              {cat}
            </span>
          ))}
        </div>

        {/* FEATURED & ARTICLES OR COMING SOON STATE */}
        {posts.length === 0 ? (
          <div className="mt-12 rounded-3xl border border-border bg-[color:var(--color-cream)] p-8 text-center sm:p-16">
            <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
              <Sparkles aria-hidden className="h-5 w-5" />
            </div>
            <h2
              className="mt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Practical Clearance Guides Coming Soon
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Our team is currently preparing detailed move-out checklists, building clearance guides, and responsible recycling tips for Dubai residents and businesses.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Browse Our Services
              </Link>
              <Link
                href="/service-areas"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                View 49 Service Areas
              </Link>
            </div>
          </div>
        ) : (
          <>
            {/* FEATURED POST */}
            {featuredPost && (
              <div className="mt-12">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-4 flex items-center gap-1.5">
                  <Sparkles aria-hidden className="h-3.5 w-3.5" /> Featured Guide
                </div>
                <article className="group grid gap-8 overflow-hidden rounded-3xl border border-border bg-[color:var(--color-cream)] p-6 transition-all hover:shadow-[var(--shadow-elegant)] md:grid-cols-12 md:p-8 lg:gap-12">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl md:col-span-6 lg:col-span-7">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.coverImageAlt}
                      title={featuredPost.title}
                      fill
                      priority
                      sizes="(min-width: 1024px) 50vw, (min-width: 768px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="flex flex-col justify-between md:col-span-6 lg:col-span-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                        <span className="rounded-full bg-background px-3 py-1 font-medium text-[color:var(--color-accent)] border border-border">
                          {featuredPost.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar aria-hidden className="h-3.5 w-3.5" />
                          <time dateTime={featuredPost.publishedAt}>
                            {new Date(featuredPost.publishedAt).toLocaleDateString("en-US", {
                              month: "short",
                              day: "numeric",
                              year: "numeric",
                            })}
                          </time>
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Clock aria-hidden className="h-3.5 w-3.5" />
                          {featuredPost.readingTime}
                        </span>
                      </div>

                      <h2
                        className="mt-4 text-2xl font-semibold leading-tight tracking-tight sm:text-3xl"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        <Link href={`/blog/${featuredPost.slug}`} className="hover:text-[color:var(--color-accent)] transition-colors">
                          {featuredPost.title}
                        </Link>
                      </h2>

                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {featuredPost.excerpt}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-border pt-5 flex items-center justify-between">
                      <span className="text-xs font-medium text-muted-foreground">
                        By {featuredPost.author.name}
                      </span>
                      <Link
                        href={`/blog/${featuredPost.slug}`}
                        className="link-underline inline-flex items-center gap-1 text-sm font-medium text-foreground"
                      >
                        Read full guide <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              </div>
            )}

            {/* REMAINING ARTICLES GRID */}
            {remainingPosts.length > 0 && (
              <div className="mt-16">
                <h3
                  className="text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Latest Articles & Resource Guides
                </h3>
                <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {remainingPosts.map((post) => (
                    <article
                      key={post.slug}
                      className="group flex flex-col justify-between rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
                    >
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

                        <h4
                          className="mt-3 text-lg font-semibold leading-snug tracking-tight"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          <Link href={`/blog/${post.slug}`} className="hover:text-[color:var(--color-accent)] transition-colors">
                            {post.title}
                          </Link>
                        </h4>

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
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </section>

      <CTASection
        title="Need quick clearance assistance in Dubai?"
        body="Send us photos of the items on WhatsApp for an instant fixed price quote. Same-day bookings available across all 49 Dubai communities."
      />
    </>
  );
}
