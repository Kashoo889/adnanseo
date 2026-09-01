import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Check, MapPin, Phone, ShieldCheck, Sparkles, Truck } from "lucide-react";
import { WhatsAppIcon } from "@/components/site/WhatsAppIcon";
import { CTASection } from "@/components/site/CTASection";
import { getAreaDetail, getAllAreaSlugs } from "@/config/areaDetails";
import { site, absoluteUrl, getWhatsAppHref } from "@/config/site";
import { services } from "@/config/services";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return getAllAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaDetail(slug);
  if (!area) return { title: "Service Area — Dubai Junk Collection" };

  const title = `Junk Removal in ${area.name}, Dubai — Same-Day Pickup`;
  return {
    title,
    description: area.seoDescription,
    alternates: { canonical: `/service-areas/${area.slug}` },
    openGraph: {
      title: `Junk Removal in ${area.name} — Dubai Junk Collection`,
      description: area.seoDescription,
      type: "website",
      url: `/service-areas/${area.slug}`,
      siteName: site.name,
      images: [
        {
          url: area.image.src,
          width: 1200,
          height: 630,
          alt: `Dubai Junk Collection crew carrying out junk removal in ${area.name}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `Junk Removal in ${area.name}, Dubai — Same-Day Pickup`,
      description: area.seoDescription,
      images: [area.image.src],
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const area = getAreaDetail(slug);
  if (!area) notFound();

  const whatsappMessage = `Hi, I would like to get a quote for junk removal in ${area.name}, Dubai.`;

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: absoluteUrl("/service-areas") },
      { "@type": "ListItem", position: 3, name: area.name, item: absoluteUrl(`/service-areas/${area.slug}`) },
    ],
  };

  const serviceLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Junk Removal & Clearance in ${area.name}`,
    description: area.seoDescription,
    serviceType: "Junk Removal & Property Clearance",
    areaServed: {
      "@type": "AdministrativeArea",
      name: area.name,
      containedInPlace: { "@type": "City", name: "Dubai" },
    },
    provider: {
      "@type": "LocalBusiness",
      "@id": absoluteUrl("/#business"),
      name: site.name,
      telephone: site.phoneHref.replace(/^tel:/, ""),
      url: absoluteUrl("/"),
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
    },
  };

  const faqLd = area.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: area.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      }
    : null;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceLd) }} />
      {faqLd && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
      )}

      {/* HERO SECTION */}
      <section className="border-b border-border bg-[color:var(--color-cream)]">
        <div className="container-x grid gap-12 py-16 md:grid-cols-12 md:items-center md:py-24">
          <div className="animate-rise md:col-span-7">
            <div className="flex flex-wrap items-center gap-2">
              <Link
                href="/service-areas"
                className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground hover:text-foreground"
              >
                ← All Service Areas
              </Link>
              <span className="text-muted-foreground">·</span>
              <span className="inline-flex items-center gap-1 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] font-medium text-[color:var(--color-accent)]">
                <MapPin aria-hidden className="h-3 w-3" /> {area.group}
              </span>
            </div>

            <h1
              className="mt-6 text-4xl leading-[1.06] tracking-tight sm:text-5xl md:text-6xl"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Junk removal in <span className="text-[color:var(--color-ink)]">{area.name}</span>
            </h1>

            <p className="mt-3 text-lg font-medium text-[color:var(--color-accent)]">
              {area.tagline}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {area.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getWhatsAppHref(whatsappMessage)}
                aria-label={`Book on WhatsApp for ${area.name}`}
                className="inline-flex items-center gap-2 rounded-full bg-[color:var(--color-ink)] px-6 py-3.5 text-sm font-medium text-[color:var(--color-cream)] transition-transform hover:-translate-y-0.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <WhatsAppIcon aria-hidden className="h-4 w-4" /> Book on WhatsApp
              </a>
              <a
                href={site.phoneHref}
                aria-label={`Call ${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium transition-colors hover:border-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <Phone aria-hidden className="h-4 w-4" /> Call {site.phone}
              </a>
            </div>

            <ul className="mt-8 space-y-2.5">
              {area.heroHighlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2.5 text-sm text-foreground/85">
                  <Check aria-hidden className="h-4 w-4 text-[color:var(--color-accent)] shrink-0" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="animate-fade md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
              <Image
                src={area.image}
                alt={`Dubai Junk Collection crew carrying out junk removal in ${area.name}`}
                title={`Junk Removal in ${area.name}, Dubai`}
                fill
                priority
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-6 text-white">
                <div className="text-xs uppercase tracking-[0.2em] text-white/80">Local Dubai Coverage</div>
                <div className="mt-1 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  {area.name} · Same-Day Service
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL NEIGHBOURHOOD CONTEXT & LOGISTICS */}
      <section className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">
              <ShieldCheck aria-hidden className="h-3.5 w-3.5" /> Neighborhood Logistics
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Clearance logistics tailored to {area.name}.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Every Dubai community has unique access procedures — from high-rise freight elevator timings to gated villa security passes. Our experienced local crews handle all requirements smoothly.
            </p>

            <div className="mt-8 rounded-2xl border border-border bg-[color:var(--color-cream)] p-6">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Property Architecture
              </div>
              <p className="mt-2 text-sm leading-relaxed text-foreground/85">
                {area.localContext.propertyTypes}
              </p>
            </div>
          </div>

          <div className="md:col-span-7 space-y-6">
            <div className="rounded-3xl border border-border bg-background p-8">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                <Truck aria-hidden className="h-4 w-4" /> Access & Building Protocols
              </div>
              <p className="mt-3 text-base leading-relaxed text-foreground/90">
                {area.localContext.accessLogistics}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-background p-8">
              <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                Most Common Items Cleared in {area.name}
              </h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {area.localContext.popularItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[color:var(--color-bronze)] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* KEY SERVICES IN THIS AREA */}
      <section className="bg-[color:var(--color-cream)] py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">What We Do in {area.shortName || area.name}</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Specialized clearance services.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Handled with uniformed care, fixed upfront pricing, and zero hassle for your building management or neighbors.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {area.keyServices.map((service) => (
              <div
                key={service.title}
                className="flex flex-col justify-between rounded-3xl border border-border bg-background p-8 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-elegant)]"
              >
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-cream)]">
                    <Sparkles aria-hidden className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold leading-snug">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                </div>
                <div className="mt-6 border-t border-border pt-5">
                  <a
                    href={getWhatsAppHref(`Hi, I'm interested in ${service.title} in ${area.name}.`)}
                    className="link-underline inline-flex items-center gap-1 text-sm font-medium"
                  >
                    Request a quote <ArrowUpRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL TIPS & GUIDELINES */}
      <section className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="eyebrow">Local Tips</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              How to ensure a smooth pickup in {area.name}.
            </h2>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-4">
              {area.localTips.map((tip, idx) => (
                <li key={tip} className="flex items-start gap-4 rounded-2xl border border-border bg-background p-6">
                  <span
                    className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[color:var(--color-ink)] text-xs font-semibold text-[color:var(--color-cream)]"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    0{idx + 1}
                  </span>
                  <p className="text-sm leading-relaxed text-foreground/85">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3-STEP PROCESS */}
      <section className="bg-[color:var(--color-cream)] py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="eyebrow">Simple Booking</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Three easy steps to clear your space.
            </h2>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Send photos on WhatsApp",
                body: `Snap a quick picture or video of the items in ${area.name}. We reply with a fixed, transparent quote in minutes.`,
              },
              {
                step: "02",
                title: "Choose a convenient time",
                body: "Select a 2-hour arrival slot that fits your schedule. Evenings and weekends are included at no surcharge.",
              },
              {
                step: "03",
                title: "Sit back and relax",
                body: "Our uniformed team arrives, protects your floors, loads everything into our truck, and sweeps up before leaving.",
              },
            ].map((p) => (
              <div key={p.step} className="relative">
                <div
                  className="text-5xl leading-none text-[color:var(--color-bronze-soft)]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {p.step}
                </div>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AREA FAQS */}
      <section className="container-x py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <span className="eyebrow">FAQ</span>
            <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
              Questions about {area.name} clearances.
            </h2>
          </div>
          <div className="md:col-span-8">
            <div className="divide-y divide-border rounded-3xl border border-border bg-background">
              {area.faqs.map((faq) => (
                <details key={faq.q} className="group px-6 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-medium">
                    {faq.q}
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL SERVICES CROSS-LINK */}
      <section className="bg-[color:var(--color-cream)] py-20">
        <div className="container-x">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="eyebrow">Our Full Range</span>
              <h2 className="mt-4 text-3xl sm:text-4xl" style={{ fontFamily: "var(--font-display)" }}>
                Services available in {area.name}.
              </h2>
            </div>
            <Link href="/services" className="link-underline text-sm font-medium">
              View all services →
            </Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-semibold leading-tight">{s.title}</h3>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-2">{s.short}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEARBY AREAS */}
      {area.nearbyAreas.length > 0 && (
        <section className="container-x py-16 border-t border-border">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                Also serving neighboring communities
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                We provide fast same-day pickups throughout the surrounding districts.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {area.nearbyAreas.map((nearby) => (
                <Link
                  key={nearby.slug}
                  href={`/service-areas/${nearby.slug}`}
                  className="rounded-full border border-border bg-background px-4 py-2 text-xs font-medium text-foreground/85 transition-colors hover:border-foreground"
                >
                  {nearby.name} →
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready for junk removal in ${area.name}?`}
        body={`Send us a quick photo on WhatsApp and we'll reply with a fixed price in minutes. Same-day bookings available across ${area.name}.`}
      />
    </>
  );
}
