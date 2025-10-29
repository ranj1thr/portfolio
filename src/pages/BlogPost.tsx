// src/pages/BlogPost.tsx
import React, { useEffect } from "react";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollToTop } from "../components/ScrollToTop";

export default function BlogPost(): JSX.Element {
  useEffect(() => {
    const title = "The Story Behind STORKSTONE: Crafting Minimal Luxury for Everyday Wear";
    const description =
      "Discover how STORKSTONE was founded by Ranjith and Ammar — a D2C brand redefining 92.5 sterling silver jewelry and premium scented candles with minimalist luxury and technology.";
    const canonicalUrl = "https://ranjithr.dev/blog/the-story-behind-storkstone";

    document.title = title;

    const upsertMeta = (
      attrs: { name?: string; property?: string },
      content: string
    ) => {
      const selector = attrs.name
        ? `meta[name="${attrs.name}"]`
        : `meta[property="${attrs.property}"]`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement | null;

      if (!meta) {
        meta = document.createElement("meta");
        if (attrs.name) meta.name = attrs.name;
        if (attrs.property) meta.setAttribute("property", attrs.property);
        meta.content = content;
        document.head.appendChild(meta);
      } else {
        meta.content = content;
      }
    };

    upsertMeta({ name: "description" }, description);
    upsertMeta({ name: "title" }, title);
    upsertMeta({ name: "robots" }, "index,follow");

    // canonical link
    let canonical = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      canonical.href = canonicalUrl;
      document.head.appendChild(canonical);
    } else {
      canonical.href = canonicalUrl;
    }

    // JSON-LD schema
    const ld = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      author: {
        "@type": "Person",
        name: "Ranjith R",
        url: "https://ranjithr.dev/",
      },
      publisher: {
        "@type": "Organization",
        name: "Sourcebit Innovations Pvt Ltd",
        logo: "https://ranjithr.dev/favicon.ico",
      },
      datePublished: "2025-10-29",
      mainEntityOfPage: canonicalUrl,
      description,
      image: "https://ranjithr.dev/assets/images/storkstone-feature.jpg",
    };

    let script = document.getElementById("blog-json-ld") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "blog-json-ld";
      script.type = "application/ld+json";
      script.text = JSON.stringify(ld);
      document.head.appendChild(script);
    } else {
      script.text = JSON.stringify(ld);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="py-24 px-4">
        <section className="max-w-3xl mx-auto text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            The Story Behind STORKSTONE
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Crafting Minimal Luxury for Everyday Wear
          </p>
          <p className="mt-3 text-sm text-gray-500">
            by Ranjith R · October 2025 · 5 min read
          </p>
        </section>

        <section className="mt-12">
          <img
            src="/assets/images/storkstone-feature.jpg"
            alt="STORKSTONE minimalist 92.5 sterling silver jewelry and candles"
            className="w-full h-auto object-cover max-h-[520px]"
          />
        </section>

        <article className="prose prose-lg max-w-[720px] mx-auto mt-12 text-gray-700 leading-[1.8] px-4">
          <h2 className="font-serif text-2xl">The Beginning</h2>
          <p>
            Every brand has a spark. For us, it began with a quiet realization that luxury doesn’t have to be loud. It can be subtle, personal, and designed for everyday life.
          </p>

          <p>
            STORKSTONE was born out of that belief. A vision shared between two co-founders, Ranjith R and Ammar, each bringing complementary strengths to one simple purpose: to make refined 92.5 sterling silver jewelry and premium scented candles accessible without losing their soul.
          </p>

          <p>
            Early seed support came from investor Jayanthi Lal, whose belief in the idea helped turn the concept into a launch-ready brand.
          </p>

          <h2 className="font-serif text-2xl">The Idea of Everyday Luxury</h2>
          <p>
            In a world where trends change every week, we wanted to slow down. To create something lasting, pieces that you’d reach for every day, not because they’re trendy, but because they feel right.
          </p>

          <p>
            Our products are designed around one principle: luxury that blends into life. Every STORKSTONE design begins with balance, between modern and classic, between affordability and artistry.
          </p>

          <p>
            We believe that a ring, a pendant, or even a candle on your desk can hold meaning when designed with intention.
          </p>

          <h2 className="font-serif text-2xl">Why 92.5 Sterling Silver</h2>
          <p>
            We chose 92.5 sterling silver not by chance, but by conviction. It’s durable, elegant, and timeless, just like the people who wear it.
          </p>

          <p>
            Each piece is 92.5 stamped and designed to stay with you through seasons, stories, and everyday moments.
          </p>

          <p>
            At STORKSTONE, silver isn’t just a material. It’s a medium of expression. Our jewelry represents individuality, confidence, and subtle luxury that never tries too hard.
          </p>

          <h2 className="font-serif text-2xl">Candles that Complement the Experience</h2>
          <p>
            Candles have always been more than just decor. They set the mood, define spaces, and bring calm to everyday routines.
          </p>

          <p>
            Our premium scented candles were created to complement our jewelry line, adding balance to our aesthetic. They reflect the same values we stand for: minimalist design, soft detail, and a sensory experience that feels personal.
          </p>

          <p>
            Each fragrance is carefully developed to evoke emotion, comfort, and style, a reflection of the modern home and its understated charm.
          </p>

          <h2 className="font-serif text-2xl">Technology Meets Craftsmanship</h2>
          <p>Behind every product lies precision and process.</p>

          <p>
            As part of Sourcebit Innovations Pvt Ltd, STORKSTONE is powered by technology, automation, data, and structured systems that ensure consistent quality and smooth operations.
          </p>

          <p>
            We believe creativity thrives on structure, and technology enables craftsmanship to scale beautifully.
          </p>

          <h2 className="font-serif text-2xl">Our Promise</h2>
          <p>
            We don’t chase trends. We build products that stay relevant, not because of seasons, but because of the feeling they evoke.
          </p>

          <p>
            Luxury should be personal. And that’s what STORKSTONE stands for — minimal, meaningful, and made to last.
          </p>

          <h2 className="font-serif text-2xl">Closing Note</h2>
          <p>
            At STORKSTONE, we don’t just sell jewelry or candles. We create experiences that reflect a lifestyle of quiet confidence.
          </p>

          <p>This is our story, and it’s only just beginning.</p>

          <hr className="my-8 border-gray-200" />

          <div className="text-center">
            <p className="mb-4 text-lg">✨ Explore our world at storkstone.com</p>
            <a
              href="https://storkstone.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#693B62] text-white px-6 py-3 rounded-lg shadow hover:shadow-lg transition-shadow"
            >
              Visit STORKSTONE Website
            </a>
          </div>
        </article>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
