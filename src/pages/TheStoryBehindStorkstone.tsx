// src/pages/TheStoryBehindStorkstone.tsx
import { Helmet } from 'react-helmet-async';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export function TheStoryBehindStorkstone() {
  return (
    <div className="bg-bg-light dark:bg-bg-dark font-body text-text-light dark:text-text-dark min-h-screen flex flex-col">
      <Helmet>
        <title>The Story Behind STORKSTONE — Minimal Luxury in 92.5 Silver</title>
        <meta
          name="description"
          content="The origin story of STORKSTONE: crafting minimal, meaningful luxury with 92.5 sterling silver jewelry and premium scented candles."
        />
        <link
          rel="canonical"
          href="https://ranjithr.dev/blog/the-story-behind-storkstone"
        />

        {/* Open Graph */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://ranjithr.dev/blog/the-story-behind-storkstone" />
        <meta property="og:title" content="The Story Behind STORKSTONE — Minimal Luxury in 92.5 Silver" />
        <meta property="og:description" content="The origin story of STORKSTONE: crafting minimal, meaningful luxury with 92.5 sterling silver jewelry and premium scented candles." />
        <meta property="og:image" content="https://lh3.googleusercontent.com/aida-public/AB6AXuDN3yWckrkJlkqKfq0YnSW3uwPRpQucssYGaIjFECi89ydgq3_zeXfLJkXl4nlZcnYapAlG4tkrsKvVov8PlLf9C1I5PII-k8mKDZ_m4KrKL1ks_Q-yFZNKWUfw8XedUSCu8wogDEGQfBdqqZ563UqxDuTzpG94WAe3cp1kYavgO_gHt172aorczVviDOf5nI6-FgNrHbaYMOghxCAmwB0XnFNyh2_qWu4jC0vepOwogA2oFcb-WVovK4Ccqve-DQXT8WXCOil9jv4" />
        <meta property="og:site_name" content="Ranjith R — Portfolio" />
        <meta property="article:published_time" content="2024-10-26T00:00:00Z" />
        <meta property="article:modified_time" content="2025-10-30T00:00:00Z" />
        <meta property="article:author" content="Ranjith R" />
        <meta property="article:section" content="Behind the Scenes" />
        <meta property="article:tag" content="STORKSTONE" />
        <meta property="article:tag" content="jewelry" />
        <meta property="article:tag" content="entrepreneurship" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Story Behind STORKSTONE — Minimal Luxury in 92.5 Silver" />
        <meta name="twitter:description" content="The origin story of STORKSTONE: crafting minimal, meaningful luxury with 92.5 sterling silver jewelry and premium scented candles." />
        <meta name="twitter:image" content="https://lh3.googleusercontent.com/aida-public/AB6AXuDN3yWckrkJlkqKfq0YnSW3uwPRpQucssYGaIjFECi89ydgq3_zeXfLJkXl4nlZcnYapAlG4tkrsKvVov8PlLf9C1I5PII-k8mKDZ_m4KrKL1ks_Q-yFZNKWUfw8XedUSCu8wogDEGQfBdqqZ563UqxDuTzpG94WAe3cp1kYavgO_gHt172aorczVviDOf5nI6-FgNrHbaYMOghxCAmwB0XnFNyh2_qWu4jC0vepOwogA2oFcb-WVovK4Ccqve-DQXT8WXCOil9jv4" />
        
        <meta name="robots" content="index, follow" />
        
        {/* Article Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "The Story Behind STORKSTONE — Minimal Luxury in 92.5 Silver",
            "description": "The origin story of STORKSTONE: crafting minimal, meaningful luxury with 92.5 sterling silver jewelry and premium scented candles.",
            "image": "https://lh3.googleusercontent.com/aida-public/AB6AXuDN3yWckrkJlkqKfq0YnSW3uwPRpQucssYGaIjFECi89ydgq3_zeXfLJkXl4nlZcnYapAlG4tkrsKvVov8PlLf9C1I5PII-k8mKDZ_m4KrKL1ks_Q-yFZNKWUfw8XedUSCu8wogDEGQfBdqqZ563UqxDuTzpG94WAe3cp1kYavgO_gHt172aorczVviDOf5nI6-FgNrHbaYMOghxCAmwB0XnFNyh2_qWu4jC0vepOwogA2oFcb-WVovK4Ccqve-DQXT8WXCOil9jv4",
            "author": {
              "@type": "Person",
              "name": "Ranjith R",
              "url": "https://ranjithr.dev/"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Sourcebit Innovations Pvt Ltd",
              "logo": {
                "@type": "ImageObject",
                "url": "https://ranjithr.dev/favicon.ico"
              }
            },
            "datePublished": "2024-10-26",
            "dateModified": "2025-10-30",
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://ranjithr.dev/blog/the-story-behind-storkstone"
            },
            "articleSection": "Behind the Scenes",
            "keywords": ["STORKSTONE", "jewelry", "entrepreneurship", "92.5 silver", "D2C brand", "startup story"]
          })}
        </script>
      </Helmet>
      {/* Use site Navigation component (fixed) */}
      <Navigation />

      <main className="flex-1 py-16 sm:py-24 px-6 md:px-10 lg:px-16 relative pt-24 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16 sm:mb-24">
            <p className="text-blue-600 font-heading font-medium text-sm tracking-widest uppercase mb-3">Our Journey</p>
            <h1 className="text-text-light dark:text-text-dark font-heading tracking-tight text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              The Story Behind <span className="text-blue-600">STORKSTONE</span>
            </h1>
            <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-400 font-light text-center pb-2 mt-6">
              Crafting Minimal Luxury for Everyday Wear
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-text-light/70 dark:text-text-dark/70 text-base font-body">
              <span>by Ranjith R</span>
              <span className="text-text-light/30 dark:text-text-dark/30">•</span>
              <span>October 2025</span>
              <span className="text-text-light/30 dark:text-text-dark/30">•</span>
              <span>5 min read</span>
            </div>
          </div>

          {/* Magazine Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10 lg:gap-12 prose-blog">
            {/* The Beginning - 3 columns */}
            <div className="md:col-span-3 lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-text-light dark:text-text-dark">The Beginning</h2>
              <p>
                Every brand has a spark. For us, it began with a quiet realization that luxury doesn't have to be loud. It can be subtle, personal, and designed for everyday life.
              </p>
              <p>
                STORKSTONE was born out of that belief. A vision shared between two co-founders, Ranjith R and Ammar, each bringing complementary strengths to one simple purpose: to make refined 92.5 sterling silver jewelry and premium scented candles accessible without losing their soul.
              </p>
              <p>
                Early seed support came from investor Jayanthi Lal, whose belief in the idea helped turn the concept into a launch-ready brand.
              </p>
            </div>

            {/* Hero Image - spans 2 columns on lg */}
            <figure className="md:col-span-1 lg:col-span-2 flex flex-col justify-end">
              <img
                alt="STORKSTONE minimalist 92.5 sterling silver jewelry"
                className="rounded-xl shadow-lg grid-img aspect-[4/3] md:aspect-[3/4] lg:aspect-[5/3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDN3yWckrkJlkqKfq0YnSW3uwPRpQucssYGaIjFECi89ydgq3_zeXfLJkXl4nlZcnYapAlG4tkrsKvVov8PlLf9C1I5PII-k8mKDZ_m4KrKL1ks_Q-yFZNKWUfw8XedUSCu8wogDEGQfBdqqZ563UqxDuTzpG94WAe3cp1kYavgO_gHt172aorczVviDOf5nI6-FgNrHbaYMOghxCAmwB0XnFNyh2_qWu4jC0vepOwogA2oFcb-WVovK4Ccqve-DQXT8WXCOil9jv4"
              />
            </figure>

            {/* The Idea of Everyday Luxury */}
            <div className="md:col-span-2 lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-text-light dark:text-text-dark">The Idea of Everyday Luxury</h2>
              <p>
                In a world where trends change every week, we wanted to slow down. To create something lasting, pieces that you'd reach for every day, not because they're trendy, but because they feel right.
              </p>
              <p>
                Our products are designed around one principle: luxury that blends into life. Every STORKSTONE design begins with balance—between modern and classic, between affordability and artistry.
              </p>
              <p>
                We believe that a ring, a pendant, or even a candle on your desk can hold meaning when designed with intention.
              </p>
            </div>

            {/* Quote Block */}
            <blockquote className="md:col-span-2 lg:col-span-2 border-l-4 border-blue-600 bg-blue-50 dark:bg-slate-800 text-text-light dark:text-text-dark rounded-r-xl px-6 py-5 my-0 not-italic self-center shadow-md">
              <p className="text-xl sm:text-2xl font-heading leading-relaxed font-medium">
                "Luxury should be personal. And that's what STORKSTONE stands for — minimal, meaningful, and made to last."
              </p>
            </blockquote>

            {/* Why 92.5 Sterling Silver */}
            <div className="md:col-span-4 lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-text-light dark:text-text-dark">Why 92.5 Sterling Silver</h2>
              <p>
                We chose 92.5 sterling silver not by chance, but by conviction. It's durable, elegant, and timeless—just like the people who wear it.
              </p>
              <p>
                Each piece is 92.5 stamped and designed to stay with you through seasons, stories, and everyday moments.
              </p>
              <p>
                At STORKSTONE, silver isn't just a material. It's a medium of expression. Our jewelry represents individuality, confidence, and subtle luxury that never tries too hard.
              </p>
            </div>

            {/* Candle Image */}
            <figure className="md:col-span-4 lg:col-span-2 flex flex-col justify-start">
              <img
                alt="STORKSTONE premium scented candles"
                className="rounded-xl shadow-lg grid-img aspect-video lg:aspect-[4/3]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7v3C1MOJ_fsxdr5wHqPmf6eCj5Y5AqlIUdmZcyc43sQ_s0cpIXRGkTsx_IzSCSehHSexSR1pO6yCwh8gJm_bJUHXRNeHWv8wfCK471ltTARoXtQDzxHXA02lczuugJJ4YtVeI1gk-1skC2JFZhrXNWQpEbEKJk7KgKnM3rhWeCJRD2b_lTIsw9twwDP_h6arAJw5YFhaob4JGtePFs2eRNdz79MVhZ82BSjfVQ4RQT1ptujRwSlE9elTxX4-95JUIk-Ucfv2DlA"
              />
            </figure>

            {/* Candles Section */}
            <div className="md:col-span-2 lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-text-light dark:text-text-dark">Candles that Complement the Experience</h2>
              <p>
                Candles have always been more than just decor. They set the mood, define spaces, and bring calm to everyday routines.
              </p>
              <p>
                Our premium scented candles were created to complement our jewelry line, adding balance to our aesthetic. They reflect the same values we stand for: minimalist design, soft detail, and a sensory experience that feels personal.
              </p>
              <p>
                Each fragrance is carefully developed to evoke emotion, comfort, and style—a reflection of the modern home and its understated charm.
              </p>
            </div>

            {/* Technology Meets Craftsmanship */}
            <div className="md:col-span-2 lg:col-span-2">
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-text-light dark:text-text-dark">Technology Meets Craftsmanship</h2>
              <p>
                Behind every product lies precision and process.
              </p>
              <p>
                As part of <strong>Sourcebit Innovations Pvt Ltd</strong>, STORKSTONE is powered by technology, automation, data, and structured systems that ensure consistent quality and smooth operations.
              </p>
              <p>
                We believe creativity thrives on structure, and technology enables craftsmanship to scale beautifully.
              </p>
            </div>

            {/* Our Promise & Closing */}
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="text-2xl sm:text-3xl font-heading mb-4 text-text-light dark:text-text-dark">Our Promise</h2>
              <p>
                We don't chase trends. We build products that stay relevant, not because of seasons, but because of the feeling they evoke.
              </p>
              <p>
                Luxury should be personal. And that's what STORKSTONE stands for — minimal, meaningful, and made to last.
              </p>

              <h2 className="text-2xl sm:text-3xl font-heading mb-4 mt-12 text-text-light dark:text-text-dark">Closing Note</h2>
              <p>
                At STORKSTONE, we don't just sell jewelry or candles. We create experiences that reflect a lifestyle of quiet confidence.
              </p>
              <p>
                This is our story, and it's only just beginning.
              </p>
              <p className="text-center text-slate-600 dark:text-slate-400 italic mt-8">
                Explore our world at <a href="https://storkstone.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">storkstone.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Bottom CTA Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm py-4 px-6 shadow-2xl flex justify-center items-center border-t border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl w-full flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-text-light dark:text-text-dark font-heading text-lg font-semibold tracking-wide">Find a piece that tells your story.</p>
          <a
            className="px-8 py-2.5 rounded-lg bg-blue-600 text-white text-base font-heading font-bold tracking-wide hover:bg-blue-700 transition-colors whitespace-nowrap"
            href="https://storkstone.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore the Collection
          </a>
        </div>
      </div>

      {/* Footer (hidden on this page as we have fixed CTA) */}
      <div className="hidden">
        <Footer />
      </div>
    </div>
  );
}
