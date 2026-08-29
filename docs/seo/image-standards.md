# image-standards.md — Blog Image Standards & Guidelines

**Dubai Junk Collection (`dubaijunkcollection.com`)**  
**Companion to:** `keywords.md`, `content-rules.md`, and `roadmap.md`

These standards govern the selection, formatting, optimization, and on-page integration of images for every blog article published on the site.

---

## 1. Image Quantity & Placement Rule

Every published blog article **MUST contain exactly two relevant images**:

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ 1. Hero Cover Image (Top of Article)                                        │
│    • Placed immediately after the article title and metadata header.        │
│    • Serves as the primary OpenGraph/Twitter social preview card image.     │
│    • Aspect Ratio: 16:9 or 16:10.                                           │
├─────────────────────────────────────────────────────────────────────────────┤
│ 2. In-Body Contextual Image (Mid-Article)                                   │
│    • Placed strategically within the body (between H2 sections).            │
│    • Visually illustrates a process, step, item category, or scenario.      │
│    • Aspect Ratio: 16:10 or 4:3.                                            │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 2. Relevance & Authenticity (Zero Generic Stock)

- **Must Be Relevant to the Specific Article Topic:**
  - An article on sofa disposal must depict bulky furniture disassembly or loading.
  - An article on villa garden waste must show organic foliage, palm fronds, or outdoor pergolas.
  - An article on e-waste must depict electronic equipment, IT servers, or appliance recycling.
- **Reflect Real Dubai Operational Realities:**
  - High-rise service corridors, freight elevators, underground parking clearance.
  - Gated villa communities (driveways, pergolas, gardens).
  - Uniformed crew members handling items with protective blankets and tools.
- **Banned Visual Patterns:**
  - Cheesy, smiling corporate stock models holding random cardboard boxes.
  - Foreign waste trucks or recycling bins with non-UAE municipal branding.
  - Overly staged, unrealistic cleanrooms or clip art.

---

## 3. Format, Compression & Performance Standards

- **Primary Image Format:** **WebP** (`.webp`) is the mandatory format for all new article imagery.
- **File Size Target:** Under **120 KB** per image (balanced between crisp clarity and instant loading).
- **Compression:** High-efficiency lossy WebP encoding (Quality: 80–85%).
- **File Naming Convention:**
  - Use clean, hyphenated, lowercase filenames that describe the image and include primary topical context.
  - *Good:* `sofa-disposal-dubai-apartment-clearance.webp`, `villa-garden-waste-palm-fronds-dubai.webp`.
  - *Bad:* `IMG_20260829_001.webp`, `image1.webp`, `junk-removal-dubai-junk-removal-dubai.webp`.

---

## 4. Dimensions, Aspect Ratios & CLS Prevention

To ensure a seamless user experience and achieve 100% Core Web Vitals scores with zero Cumulative Layout Shift (CLS):

| Image Role | Recommended Dimensions | Aspect Ratio | Next.js Implementation | Loading Strategy |
| :--- | :---: | :---: | :--- | :---: |
| **Hero Cover Image** | **1200 × 675 px** (or 1200 × 750 px) | 16:9 / 16:10 | `<Image fill priority sizes="(min-width: 1024px) 896px, 100vw" ... />` inside an `aspect-[16/9]` wrapper | `priority` (Eager load) |
| **In-Body Image** | **800 × 500 px** (or 800 × 600 px) | 16:10 / 4:3 | `<Image fill sizes="(min-width: 1024px) 800px, 100vw" ... />` inside an `aspect-[16/10]` wrapper | `loading="lazy"` |

### Code Implementation Example:

```tsx
{/* Hero Cover Image Wrapper */}
<div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border shadow-[var(--shadow-elegant)]">
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

{/* In-Body Supporting Image */}
<figure className="my-8">
  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-border">
    <Image
      src={sectionImage}
      alt="Crew dismantling a large wooden wardrobe inside a Dubai apartment before transport"
      fill
      sizes="(min-width: 1024px) 800px, 100vw"
      className="object-cover"
    />
  </div>
  <figcaption className="mt-2 text-center text-xs text-muted-foreground">
    Proper furniture disassembly prevents damage to building hallways and elevator doors.
  </figcaption>
</figure>
```

---

## 5. Alt Text & SEO Rules

- **Alt text must describe the image for a real person who cannot see it:** Be specific, accurate, and helpful.
- **Natural Keyword Inclusion:** Include the primary or secondary keyword only if it genuinely describes what is in the picture.
- **Strictly Banned:**
  - Keyword stuffing (e.g., `alt="junk removal dubai furniture removal dubai cheap junk removal"`).
  - Generic one-word alt tags (e.g., `alt="junk"`, `alt="sofa"`).
  - Empty alt attributes on informational images.
- **Examples:**
  - *Good:* `alt="Uniformed clearance crew loading dismantled furniture into a removal truck in Dubai Marina"`
  - *Good:* `alt="Stacked electronic waste and monitors prepared for certified UAE recycling"`
  - *Bad:* `alt="junk removal"`

---

## 6. Website Visual Style Consistency

Every image must blend naturally into the website's clean, luxury aesthetic:

- **Styling Tokens:**
  - Outer containers use `rounded-3xl` with a subtle `border border-border`.
  - Inner cards or smaller images use `rounded-2xl`.
  - Soft, elegant shadows (`shadow-[var(--shadow-elegant)]`).
- **Color Temperature & Lighting:**
  - Natural, warm lighting aligned with Dubai's daylight and the site's cream/ink/bronze palette.
  - High contrast and crisp detail — avoid dark, blurry, or low-resolution photography.

---

## 7. Pre-Publish Image Checklist

Before publishing any article, verify:

- [ ] Exactly 2 images are included (1 Hero Cover + 1 In-Body Supporting image).
- [ ] Both images are formatted as **WebP** (`.webp`).
- [ ] Both images are compressed (< 120 KB each).
- [ ] Hero Cover image has `priority` and responsive `sizes` attribute.
- [ ] In-Body image is lazy-loaded with an appropriate `figcaption` if helpful.
- [ ] Both images have unique, descriptive, human-readable **alt text**.
- [ ] Dimensions match the standard 16:9 or 16:10 aspect ratios with zero layout shift.
- [ ] Images look authentic, professional, and locally grounded to Dubai.
