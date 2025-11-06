# Changelog

## 2025-11-06

SEO & UI improvements:

- SEO: unify canonical domain to `ranjithr.dev` across root, pages, robots.txt, and sitemap.xml
- SEO: add Helmet metadata to Home and Storkstone routes; ensure robots meta and Open Graph/Twitter tags
- SEO: correct sitemap to only list actual routes and update lastmod dates
- SEO: add Article schema to blog post (The Story Behind STORKSTONE) with publisher/author and dates
- Content: rename `BlogPost.tsx` to `TheStoryBehindStorkstone.tsx` and update routes
- Social: add Medium profile link (Hero & Contact) and include in JSON-LD `sameAs`
- UI: add custom Medium and X icons (monogram with circle variant)
- Chore: ignore Lighthouse artifacts in `.gitignore`

Commit: a343c49
