import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Calendar, CheckCircle2, Clock, Info, Lightbulb, ShieldAlert, Sparkles, Tag, User } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CTASection } from "@/components/site/CTASection";
import { getPostBySlug, getAllPostSlugs, getRelatedPosts, type BlogPost } from "@/config/blog";
import { site, absoluteUrl, getWhatsAppHref } from "@/config/site";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article Not Found — Dubai Junk Collection" };

  const title = post.seoTitle || `${post.title} — Dubai Junk Collection`;
  const description = post.seoDescription || post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `/blog/${post.slug}`,
      siteName: site.name,
      publishedTime: post.publishedAt,
      modifiedTime: post.modifiedAt || post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      images: [
        {
          url: post.coverImage.src,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.coverImage.src],
    },
  };
}

export default async function SingleBlogPostPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const relatedPosts = getRelatedPosts(post.slug, 2);
  const whatsappQuoteHref = getWhatsAppHref(
    `Hi, I read your guide "${post.title}" and would like to get a quote for clearance in Dubai.`
  );

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      { "@type": "ListItem", position: 3, name: post.title, item: absoluteUrl(`/blog/${post.slug}`) },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription || post.excerpt,
    image: [absoluteUrl(post.coverImage.src)],
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt || post.publishedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(`/blog/${post.slug}`),
    },
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      "@type": "Organization",
      name: site.name,
      url: absoluteUrl("/"),
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/apple-icon.png"),
      },
    },
    keywords: post.tags.join(", "),
  };

  const faqLd =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* ARTICLE HEADER / HERO */}
      <article className="border-b border-border bg-[color:var(--color-cream)]">
        <div className="container-x max-w-4xl py-12 md:py-16">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all articles
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="rounded-full bg-background px-3 py-1 font-medium text-[color:var(--color-accent)] border border-border">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar aria-hidden className="h-3.5 w-3.5" />
              <time dateTime={post.publishedAt}>
                {new Date(post.publishedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Clock aria-hidden className="h-3.5 w-3.5" />
              {post.readingTime}
            </span>
          </div>

          <h1
            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-semibold leading-[1.12] tracking-tight text-foreground"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {post.title}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            {post.excerpt}
          </p>

          <div className="mt-8 flex items-center justify-between border-t border-border pt-6">
            <div className="flex items-center gap-3">
              {post.author.avatar ? (
                <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)] text-xs font-semibold">
                  <User className="h-4 w-4" />
                </div>
              )}
              <div>
                <div className="text-sm font-semibold text-foreground">{post.author.name}</div>
                <div className="text-xs text-muted-foreground">{post.author.role}</div>
              </div>
            </div>

            <a
              href={whatsappQuoteHref}
              aria-label={`Ask a question about ${post.title} on WhatsApp`}
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-5 py-2 text-xs font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <WhatsAppIcon aria-hidden className="h-3.5 w-3.5" /> Ask a Question
            </a>
          </div>
        </div>
      </article>

      {/* ARTICLE COVER IMAGE & MAIN CONTENT */}
      <section className="container-x max-w-4xl py-12 md:py-16">
        {/* Cover Image */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            title={post.title}
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>

        {/* KEY TAKEAWAYS BOX */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="mt-12 rounded-3xl border border-border bg-[color:var(--color-cream)] p-6 sm:p-8">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              <Sparkles aria-hidden className="h-4 w-4" /> Key Takeaways
            </div>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {post.keyTakeaways.map((point) => (
                <li key={point} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <CheckCircle2 aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-accent)]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* STRUCTURED ARTICLE BODY */}
        <div className="mt-12 space-y-12 text-base leading-relaxed text-foreground/90">
          {post.sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              {section.heading && (
                <h2
                  className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="leading-relaxed text-foreground/85 sm:text-lg">
                  {p}
                </p>
              ))}

              {section.callout && (
                <div
                  className={`my-6 rounded-2xl border p-5 sm:p-6 ${
                    section.callout.type === "tip"
                      ? "border-[color:var(--color-accent)]/30 bg-[color:var(--color-cream)]"
                      : section.callout.type === "warning"
                      ? "border-amber-500/30 bg-amber-500/5"
                      : "border-border bg-background"
                  }`}
                >
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    {section.callout.type === "tip" && <Lightbulb aria-hidden className="h-4 w-4" />}
                    {section.callout.type === "warning" && <ShieldAlert aria-hidden className="h-4 w-4 text-amber-600" />}
                    {section.callout.type === "info" && <Info aria-hidden className="h-4 w-4" />}
                    <span>{section.callout.title}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/90">
                    {section.callout.text}
                  </p>
                </div>
              )}

              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="my-4 space-y-2.5 pl-2">
                  {section.bulletPoints.map((item, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm text-foreground/85 sm:text-base">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[color:var(--color-bronze)] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}

              {section.table && (
                <div className="my-8 overflow-x-auto rounded-2xl border border-border bg-background shadow-[var(--shadow-elegant)]">
                  <table className="w-full text-left text-sm">
                    {section.table.caption && (
                      <caption className="border-b border-border bg-[color:var(--color-cream)] p-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {section.table.caption}
                      </caption>
                    )}
                    <thead className="border-b border-border bg-[color:var(--color-cream)] text-xs font-semibold uppercase tracking-wider text-foreground">
                      <tr>
                        {section.table.headers.map((h, hIdx) => (
                          <th key={hIdx} className="px-4 py-3.5">
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-foreground/90">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="transition-colors hover:bg-muted/30">
                          {row.map((cell, cIdx) => (
                            <td key={cIdx} className={`px-4 py-3.5 ${cIdx === 0 ? "font-medium text-foreground" : ""}`}>
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {section.image && (
                <figure className="my-8">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-elegant)]">
                    <Image
                      src={section.image}
                      alt={section.imageAlt || post.title}
                      fill
                      sizes="(min-width: 1024px) 800px, 100vw"
                      className="object-cover"
                    />
                  </div>
                  {section.imageCaption && (
                    <figcaption className="mt-2 text-center text-xs text-muted-foreground">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </div>
          ))}
        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="mt-16 space-y-6">
            <h2
              className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Frequently Asked Questions
            </h2>
            <div className="grid gap-4">
              {post.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-2.5 text-sm sm:text-base leading-relaxed text-foreground/85">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONTEXTUAL QUOTE / ASSISTANCE BOX */}
        <div className="mt-14 rounded-3xl border border-border bg-[color:var(--color-cream)] p-8 text-center sm:p-10">
          <h3
            className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Planning a clearance in Dubai?
          </h3>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Send photos of what you need cleared on WhatsApp. Our team provides an instant, fixed upfront rate and handles elevator bookings and gate security smoothly.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappQuoteHref}
              className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
              style={{ fontFamily: "var(--font-display)" }}
            >
              <WhatsAppIcon aria-hidden className="h-4 w-4" /> Get Instant WhatsApp Quote
            </a>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Call {site.phone}
            </a>
            {post.serviceLink && (
              <Link
                href={post.serviceLink.href}
                className="link-underline inline-flex px-2 py-3 text-sm font-medium"
              >
                {post.serviceLink.label} →
              </Link>
            )}
          </div>
        </div>

        {/* ARTICLE TAGS */}
        {post.tags && post.tags.length > 0 && (
          <div className="mt-12 flex flex-wrap items-center gap-2 border-t border-border pt-6">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground flex items-center gap-1 mr-1">
              <Tag className="h-3 w-3" /> Tags:
            </span>
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3 py-1 text-xs text-foreground/80"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* AUTHOR BIO CARD */}
        <div className="mt-10 rounded-2xl border border-border bg-background p-6 flex flex-col sm:flex-row items-center sm:items-start gap-5">
          {post.author.avatar ? (
            <div className="relative h-14 w-14 overflow-hidden rounded-full border border-border shrink-0">
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                sizes="56px"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="grid h-14 w-14 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)] text-sm font-semibold shrink-0">
              <User className="h-6 w-6" />
            </div>
          )}
          <div>
            <div className="text-base font-semibold text-foreground">{post.author.name}</div>
            <div className="text-xs text-[color:var(--color-accent)] font-medium">{post.author.role}</div>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              Specialists in residential and commercial clearances across Dubai since 2016. Committed to safe property handovers, compliant electronic waste disposal, and municipal green waste diversion.
            </p>
          </div>
        </div>
      </section>

      {/* RELATED ARTICLES SECTION */}
      {relatedPosts.length > 0 && (
        <section className="border-t border-border bg-[color:var(--color-cream)] py-16 sm:py-20">
          <div className="container-x max-w-4xl">
            <div className="flex items-center justify-between">
              <div>
                <span className="eyebrow">Continue Reading</span>
                <h3
                  className="mt-2 text-2xl font-semibold tracking-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Related Guides & Tips
                </h3>
              </div>
              <Link href="/blog" className="link-underline text-xs font-medium uppercase tracking-[0.18em]">
                View all →
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {relatedPosts.map((related) => (
                <article
                  key={related.slug}
                  className="group flex flex-col justify-between rounded-3xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div>
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl">
                      <Image
                        src={related.coverImage}
                        alt={related.coverImageAlt}
                        title={related.title}
                        fill
                        sizes="(min-width: 640px) 45vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                      <span className="font-medium text-[color:var(--color-accent)]">{related.category}</span>
                      <span>·</span>
                      <span>{related.readingTime}</span>
                    </div>
                    <h4
                      className="mt-2 text-base font-semibold leading-snug tracking-tight"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      <Link href={`/blog/${related.slug}`} className="hover:text-[color:var(--color-accent)] transition-colors">
                        {related.title}
                      </Link>
                    </h4>
                  </div>
                  <div className="mt-5 border-t border-border pt-4">
                    <Link
                      href={`/blog/${related.slug}`}
                      className="link-underline inline-flex items-center gap-1 text-xs font-medium"
                    >
                      Read guide <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title="Ready to clear your space?"
        body="From single furniture pickups to complete villa cleanouts across Dubai. Professional, uniformed, and on time."
      />
    </>
  );
}
