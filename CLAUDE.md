# CLAUDE.md — Project Guide & AI Assistant Instructions

**Project:** Dubai Junk Collection (`dubaijunkcollection.com`)  
**Repository:** `MuhammadKashif10/new-website-junk`  
**Purpose:** Premium residential and commercial property clearance, furniture disposal, and decluttering service across Dubai, UAE.

---

## 1. Tech Stack & Architecture

- **Framework:** Next.js 15 (App Router, Static Site Generation / SSG with `generateStaticParams`)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom CSS Variables (`--font-display`, `--color-cream`, `--color-ink`, `--color-accent`, `--color-bronze`)
- **Icons:** Lucide React (`lucide-react`) + Custom inline SVG components (`WhatsAppIcon`)
- **Metadata & SEO:** Next.js dynamic `Metadata`, canonical alternates, OpenGraph/Twitter cards, and JSON-LD structured data (`BlogPosting`, `LocalBusiness`, `Service`, `BreadcrumbList`, `CollectionPage`).

---

## 2. Essential Commands

```bash
# Start local development server
npm run dev

# Run ESLint validation
npm run lint

# Build production static export & validate all routes (73+ static pages)
npm run build
```

---

## 3. Contact & Business Configuration (Single Source of Truth)

All contact details across the website must **always** read from [`src/config/site.ts`](file:///d:/Projects/Dubai/rasheed/src/config/site.ts). Never hardcode contact numbers elsewhere.

- **Phone Number:** `+971 56 725 6386` (Local: `0567256386`)
- **Direct Call Link (`tel:`):** `tel:+971567256386` (`site.phoneHref`)
- **WhatsApp Link:** `https://wa.me/971567256386` (`site.whatsappHref`)
- **Dynamic WhatsApp Helper:** `getWhatsAppHref("custom pre-filled greeting")`
- **Location:** Al Quoz Industrial 3, Dubai, United Arab Emirates
- **Operating Hours:** Every day · 7:00 – 22:00

---

## 4. Content Structure & Route Mapping

### Core Pages
- `/` — Homepage (Head commercial keywords, service overview, social proof)
- `/about` — About Page (Brand story, E-E-A-T credentials, insured & uniformed team since 2016)
- `/contact` — Contact Page (WhatsApp photo-quote CTA, direct call, base map)
- `/sitemap.xml` — Dynamic XML Sitemap ([`src/app/sitemap.ts`](file:///d:/Projects/Dubai/rasheed/src/app/sitemap.ts))
- `/llms.txt` — Machine-readable AI sitemap ([`src/app/llms.txt/route.ts`](file:///d:/Projects/Dubai/rasheed/src/app/llms.txt/route.ts))

### Commercial Services (`/services/*`)
- Configured in [`src/config/services.ts`](file:///d:/Projects/Dubai/rasheed/src/config/services.ts)
- 8 Live services: Household Junk, Furniture Removal, Appliance Removal, Office Junk, Garden Waste, Villa & Apartment Cleanouts, Warehouse Clearance, Mattress & Bulky Items.

### 49 Community Service Areas (`/service-areas/*`)
- Configured in [`src/config/areas.ts`](file:///d:/Projects/Dubai/rasheed/src/config/areas.ts) & [`src/config/areaDetails.ts`](file:///d:/Projects/Dubai/rasheed/src/config/areaDetails.ts)
- 49 Individual landing pages covering every major Dubai community (Palm Jumeirah, Dubai Marina, Downtown, Arabian Ranches, JVC, Business Bay, etc.).

### Blog & Knowledge Base (`/blog/*`)
- Configured in [`src/config/blog.ts`](file:///d:/Projects/Dubai/rasheed/src/config/blog.ts)
- Main directory: [`src/app/blog/page.tsx`](file:///d:/Projects/Dubai/rasheed/src/app/blog/page.tsx)
- Reusable post template: [`src/app/blog/[slug]/page.tsx`](file:///d:/Projects/Dubai/rasheed/src/app/blog/%5Bslug%5D/page.tsx)
- 404 handler: [`src/app/blog/[slug]/not-found.tsx`](file:///d:/Projects/Dubai/rasheed/src/app/blog/%5Bslug%5D/not-found.tsx)

---

## 5. SEO Documentation & Rules Reference

Always consult the primary SEO foundation documents before creating or modifying content:

1. **[`keywords.md`](file:///d:/Projects/Dubai/rasheed/keywords.md):** Master database of 298 keywords organized into 20 topic clusters with strict search intent tags (`C`, `L`, `I`, `Q`, `N`).
2. **[`content-rules.md`](file:///d:/Projects/Dubai/rasheed/content-rules.md):** Mandatory editorial rules governing search intent separation, snippet optimization (40–55 word direct answers under H2s), internal linking silos, E-E-A-T standards, and the 19-point QA checklist.
3. **[`roadmap.md`](file:///d:/Projects/Dubai/rasheed/roadmap.md):** The structured publishing sequence and 6 thematic content tracks.
4. **[`image-standards.md`](file:///d:/Projects/Dubai/rasheed/image-standards.md):** Blog image rules — exactly 2 images per article (1 featured + 1 in-body), the generate-first / Pexels-fallback sourcing priority, formats, dimensions, and alt text.

---

## 6. Development & Coding Rules

- **Anti-Cannibalization:** Never target commercial head terms (e.g., *"furniture removal dubai"*) or local terms (e.g., *"junk removal dubai marina"*) as blog posts. Blogs own informational (`I`), question (`Q`), cost, and comparison queries.
- **Image Optimization:** Always use Next.js `<Image>` with explicit `sizes`, descriptive `alt` text, and responsive aspect ratios.
- **Article Images:** Exactly **2 images per blog article** (1 featured + 1 relevant in-body image) — never more. Priority 1: generate a unique, relevant image yourself when image generation is available. Priority 2: if generation is unavailable or unsuitable, use the existing Pexels/image sourcing workflow. See `image-standards.md`.
- **Git History Guardrail:** This project is connected to Lovable. Never force push, rebase, or rewrite pushed Git history. Keep commits clean, descriptive, and atomic.
- **Accessibility:** Ensure high-contrast text, semantic heading structures (`h1` → `h2` → `h3`), `aria-hidden` on decorative icons, and min 44px+ touch targets on mobile contact buttons.
