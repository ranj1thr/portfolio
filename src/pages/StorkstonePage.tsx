import { useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ScrollToTop } from '../components/ScrollToTop';
import { Storkstone } from '../components/Storkstone';

export default function StorkstonePage() {
  useEffect(() => {
    // Basic SEO + Open Graph + Twitter card meta tags
    const title = 'STORKSTONE — Jewelry & Candles | Storkstone';
    const descriptionContent =
      'STORKSTONE — 925 silver minimalist jewelry and premium scented candles. Visit our brand page.';
    const canonicalUrl = 'https://ranjithr.dev/storkstone';
    const ogImage = 'https://cdn.shopify.com/s/files/1/0753/9205/7579/files/Group_239.png?v=1761650530';

    document.title = title;

    const upsertMeta = (attrs: { name?: string; property?: string }, content: string) => {
      const selector = attrs.name
        ? `meta[name="${attrs.name}"]`
        : `meta[property="${attrs.property}"]`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        if (attrs.name) meta.name = attrs.name;
        if (attrs.property) meta.setAttribute('property', attrs.property);
        meta.content = content;
        document.head.appendChild(meta);
      } else {
        meta.content = content;
      }
    };

    upsertMeta({ name: 'description' }, descriptionContent);
    upsertMeta({ name: 'robots' }, 'index,follow');

    // Open Graph
    upsertMeta({ property: 'og:type' }, 'website');
    upsertMeta({ property: 'og:title' }, title);
    upsertMeta({ property: 'og:description' }, descriptionContent);
    upsertMeta({ property: 'og:url' }, canonicalUrl);
    upsertMeta({ property: 'og:image' }, ogImage);
    upsertMeta({ property: 'og:site_name' }, 'STORKSTONE');

    // Twitter
    upsertMeta({ name: 'twitter:card' }, 'summary_large_image');
    upsertMeta({ name: 'twitter:title' }, title);
    upsertMeta({ name: 'twitter:description' }, descriptionContent);
    upsertMeta({ name: 'twitter:image' }, ogImage);

    // canonical link
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    } else {
      canonical.href = canonicalUrl;
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Storkstone />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
