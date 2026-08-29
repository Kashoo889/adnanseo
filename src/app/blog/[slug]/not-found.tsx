import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BlogNotFound() {
  return (
    <section className="container-x py-24 sm:py-32 text-center">
      <span className="eyebrow">Article Not Found</span>
      <h1
        className="mt-4 text-4xl sm:text-5xl font-semibold tracking-tight"
        style={{ fontFamily: "var(--font-display)" }}
      >
        We couldn&apos;t find that article.
      </h1>
      <p className="mx-auto mt-4 max-w-md text-base text-muted-foreground">
        The article you are looking for might have been moved or updated. Browse all our property clearance and moving guides below.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <ArrowLeft className="h-4 w-4" /> Back to All Articles
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium transition-colors hover:border-foreground"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}
