import Link from "next/link";

export default function AreaNotFound() {
  return (
    <div className="container-x py-24 text-center">
      <h1 className="text-4xl" style={{ fontFamily: "var(--font-display)" }}>
        Service Area Not Found
      </h1>
      <p className="mt-3 text-base text-muted-foreground">
        We couldn&apos;t find this specific community page, but we likely cover your area across Dubai.
      </p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/service-areas"
          className="inline-flex items-center rounded-full bg-[color:var(--color-ink)] px-5 py-2.5 text-sm text-[color:var(--color-cream)]"
        >
          View all service areas
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-sm"
        >
          Contact our team
        </Link>
      </div>
    </div>
  );
}
