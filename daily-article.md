# Daily Article Generation Guide

Execute the daily article creation autonomously from start to finish. Follow these instructions:

1. **Read Authoritative SEO Rules:** Read and strictly follow the primary SEO documentation in `docs/seo/` and the project root:
   - `docs/seo/content-rules.md` (or `content-rules.md`): Editorial rules, 40–55 word H2 snippet answers, heading hierarchy, tone, E-E-A-T, and the 19-point QA checklist.
   - `docs/seo/keywords.md` (or `keywords.md`): Master 20-cluster database, search intent classifications (`C`, `L`, `I`, `Q`, `N`), and URL allocations.
   - `docs/seo/roadmap.md` (or `roadmap.md`): Publishing sequence, thematic tracks, batch groupings, and conversion funnels.
   - `docs/seo/image-standards.md` (or `image-standards.md`): Exactly 2 images (1 cover + 1 body), generate-first priority, WebP format, <120 KB compression, and authentic Dubai visuals.
   - `CLAUDE.md`: System architecture, business configuration (`src/config/site.ts`), and route conventions.

2. **Select Next Unused Topic:**
   - Consult `docs/seo/roadmap.md` and `docs/seo/keywords.md` to identify the next scheduled topic.
   - When advancing beyond completed roadmap batches, continue the established daily publishing rhythm by adding the next sequential track/batch (with §16 overlap check) and numbering to `roadmap.md` and `keywords.md` (keeping `docs/seo/` and root files synchronized).

3. **Prevent Cannibalization & Duplicates:**
   - Check all existing published articles in `src/config/blog.ts` to ensure no duplicate topics or keyword cannibalization against existing blog posts, service pages (`/services/*`), or community area pages (`/service-areas/*`).

4. **Write Complete SEO-Optimized Article:**
   - Draft a comprehensive, human-sounding, Dubai-specific article.
   - Answer the primary query directly in a concise 40–55 word introductory paragraph under an H2 for featured snippet capture.
   - Include authentic Dubai operational constraints (building management NOCs, service lift bookings, summer heat, Ejari deposit handovers, Dubai Municipality regulations).

5. **Generate Required SEO & Schema Fields:**
   - Provide all fields adhering to the `BlogPost` TypeScript interface: `slug`, `title`, `excerpt`, `category`, `coverImage`, `coverImageAlt`, `publishedAt`, `readingTime`, `author`, `tags`, `keyTakeaways`, `sections`, `faqs` (3–5 real questions), `relatedSlugs`, `serviceLink`, and `sources`.

6. **Create Mandatory Visual Assets:**
   - Provide exactly two images per article (1 hero cover 16:9 + 1 in-body 16:10).
   - Use the generate-first workflow via the image generation tool; convert and compress to WebP under 120 KB into `src/assets/`.

7. **Add Relevant Internal Links:**
   - Embed contextual internal links pointing to the designated service conversion page (`/services/*`), relevant community areas (`/service-areas/*`), and 2–4 related blog articles.

8. **Validate & QA:**
   - Run the 19-point QA checklist from `docs/seo/content-rules.md`.
   - Validate with TypeScript type check (`npx tsc --noEmit`) and linter (`npm run lint`) to ensure zero errors.

9. **Save to Next.js Content Structure:**
   - Save the completed article object directly in `src/config/blog.ts` and ensure import statements are clean.
   - Keep `docs/seo/` and root roadmap/keyword files aligned.

10. **Execute Autonomously & Scope Discipline:**
    - Do not modify unrelated files or rewrite published Git history.
    - Complete the entire workflow end-to-end autonomously without prompting for user confirmation.
