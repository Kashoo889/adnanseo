# Daily Article Generation Guide

Execute the daily article creation autonomously from start to finish. Follow these instructions:

1. **Read and Follow Project Rules:** Read and adhere to all existing SEO, keyword, content, internal-linking, image, and writing-rule `.md` files in the project (`content-rules.md`, `keywords.md`, `roadmap.md`, `image-standards.md`, and `CLAUDE.md`).
2. **Select Next Unused Topic:** Identify the next unused keyword/topic according to the sequencing and intent rules in `roadmap.md` and `keywords.md`.
3. **Prevent Duplicates:** Check existing published articles in `src/config/blog.ts` to ensure no duplicate topics or keyword cannibalization.
4. **Write One Complete Article:** Draft exactly one comprehensive, SEO-optimized article tailored to Dubai readers with proper heading hierarchy, concise direct-answer snippets under H2s, key takeaways, and FAQs.
5. **Generate Required SEO Fields:** Create the required title, URL slug, excerpt/meta description, SEO title, category, reading time, author, and tags according to the project's schema.
6. **Add Relevant Internal Links:** Add contextual internal links pointing to relevant service pages (`/services/*`), community areas (`/service-areas/*`), or related blog articles.
7. **Validate and QA:** Validate the article against all rules in `content-rules.md` and fix any issues before finalizing.
8. **Save to Next.js Content Structure:** Save the final article in the project's existing Next.js content structure (`src/config/blog.ts`).
9. **Maintain Scope Discipline:** Do not modify unrelated files or rewrite published git history.
10. **Execute Autonomously:** Do not ask for confirmation or approval; execute and complete the entire task end-to-end.
