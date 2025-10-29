// src/pages/BlogPost.tsx
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';

export default function BlogPost() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen flex flex-col">
      {/* Use site Navigation component (fixed) */}
      <Navigation />

      <div className="max-w-[960px] w-full mx-auto flex-1 px-4 sm:px-6 py-8 sm:py-16 pt-24">{/* pt-24 to offset fixed nav */}
        <main>
          <div
            className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-80 md:min-h-96"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDN3yWckrkJlkqKfq0YnSW3uwPRpQucssYGaIjFECi89ydgq3_zeXfLJkXl4nlZcnYapAlG4tkrsKvVov8PlLf9C1I5PII-k8mKDZ_m4KrKL1ks_Q-yFZNKWUfw8XedUSCu8wogDEGQfBdqqZ563UqxDuTzpG94WAe3cp1kYavgO_gHt172aorczVviDOf5nI6-FgNrHbaYMOghxCAmwB0XnFNyh2_qWu4jC0vepOwogA2oFcb-WVovK4Ccqve-DQXT8WXCOil9jv4")',
            }}
            aria-hidden
          />

          <div className="max-w-3xl mx-auto">
            <h1 className="tracking-tight text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-center pb-3 pt-10 sm:pt-12">The Story Behind STORKSTONE</h1>
            <p className="text-text-light/70 dark:text-text-dark/70 text-sm font-normal leading-normal text-center pb-8 sm:pb-12">By STORKSTONE Team • May 20, 2024 • 5 min read</p>

            <article className="space-y-6 text-base sm:text-lg font-normal leading-relaxed sm:leading-loose">
              <p>
                Welcome to the world of STORKSTONE, where minimalism and quality are not just design principles, but a philosophy we live by. Our journey began with a simple idea: to create timeless pieces that bring a sense of quiet luxury into everyday life. This is the story of how that idea came to be.
              </p>

              <p>
                The name "STORKSTONE" is a fusion of two elements close to our heart. The "Stork" symbolizes new beginnings, craftsmanship, and deliberate care—qualities we pour into every piece. "Stone" represents the raw, natural materials we use, from the purest 92.5 sterling silver to the natural waxes in our candles. Together, they signify our commitment to creating enduring objects of beauty and purpose.
              </p>

              <div
                className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden rounded-xl min-h-72 my-10"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBJ7v3C1MOJ_fsxdr5wHqPmf6eCj5Y5AqlIUdmZcyc43sQ_s0cpIXRGkTsx_IzSCSehHSexSR1pO6yCwh8gJm_bJUHXRNeHWv8wfCK471ltTARoXtQDzxHXA02lczuugJJ4YtVeI1gk-1skC2JFZhrXNWQpEbEKJk7KgKnM3rhWeCJRD2b_lTIsw9twwDP_h6arAJw5YFhaob4JGtePFs2eRNdz79MVhZ82BSjfVQ4RQT1ptujRwSlE9elTxX4-95JUIk-Ucfv2DlA")',
                }}
                aria-hidden
              />

              <p>
                Our quest for quality begins with sourcing. We meticulously select our materials, partnering with artisans and suppliers who share our dedication to ethical practices and exceptional standards. The silver is refined for its unique luster and durability, while our candle scents are developed from premium essential oils to create subtle, evocative atmospheres.
              </p>

              <blockquote className="border-l-4 border-primary bg-primary/10 dark:bg-primary/20 p-6 my-10 rounded-r-lg">
                <p className="text-xl italic text-text-light dark:text-text-dark leading-relaxed">"We believe that true luxury lies not in extravagance, but in the quiet confidence of a perfectly crafted piece."</p>
              </blockquote>

              <p>
                Every STORKSTONE product is a testament to thoughtful design and skilled craftsmanship. From the initial sketch to the final polish, each step is performed with precision and passion. We embrace a minimalist aesthetic, allowing the inherent beauty of the materials to shine. Our vision for the future is to continue exploring the intersection of art and daily life, creating pieces that you'll cherish for years to come.
              </p>
            </article>

            <div className="text-center mt-16 py-12 bg-secondary-light dark:bg-secondary-dark rounded-xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">Experience Timeless Elegance</h2>
              <p className="text-text-light/80 dark:text-text-dark/80 mb-8 max-w-md mx-auto px-4">Discover minimalist jewelry and premium scented candles designed for the modern connoisseur.</p>
              <a className="inline-block px-10 py-3 rounded-lg bg-primary text-white text-base font-bold tracking-wide hover:opacity-90 transition-opacity" href="#">Shop The Collection</a>
            </div>

            <div className="flex items-center justify-center gap-4 mt-16 pt-8 border-t border-secondary-light dark:border-secondary-dark">
              <p className="text-sm font-medium text-text-light/70 dark:text-text-dark/70">Share this story:</p>
              <div className="flex items-center gap-4">
                <a className="text-text-light/60 dark:text-text-dark/60 hover:text-primary transition-colors" href="#" aria-label="Share Facebook">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95C22 6.48 17.52 2 12 2z"/></svg>
                </a>
                <a className="text-text-light/60 dark:text-text-dark/60 hover:text-primary transition-colors" href="#" aria-label="Share Instagram">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5.51 4.5 10 10 10 5.5 0 10-4.49 10-10S17.5 2.04 12 2.04zm4.24 15.42c-2.43 2.62-5.93 2.44-8.13.52-2.19-1.92-2.38-5.42.5-8.12 2.88-2.7 7.26-2.07 9.07 1.05-1.05.5-2.28.23-3.1-.72-.94-1.08-1.04-2.68.12-3.65.92-.76 2.15-.75 3.08-.12-1.2.1-2.29-.12-3.11-1.04-.57-.65-1.29-1.32-2.08-1.63-2.14-.84-4.78.3-6.26 2.1-2.04 2.5-2.08 6.07.03 8.6 2.11 2.53 5.82 3.1 8.44.82-1.02.5-2.17.61-3.23.44z"/></svg>
                </a>
                <a className="text-text-light/60 dark:text-text-dark/60 hover:text-primary transition-colors" href="#" aria-label="Share Twitter">
                  <svg className="size-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22 6c-1.5.6-3 1-4.6 1.2.6-1.5 1.5-2.6 1.8-4.2-1.3.8-2.7 1.3-4.2 1.6C14 3.3 12.3 2 10.4 2c-3.5 0-6.3 2.8-6.3 6.3 0 .5.1.9.2 1.4-5.2-.3-9.8-2.8-12.9-6.5-.5.9-1 2-1 3.2 0 2.2 1.1 4.1 2.8 5.2-.9 0-1.9-.3-2.7-.8v.1c0 3 2.2 5.6 5.1 6.2-.5.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.5 3.1 4.3 5.9 4.3-2.2 1.7-4.9 2.7-7.9 2.7-.5 0-1 0-1.5-.1 2.8 1.8 6.1 2.8 9.7 2.8 11.6 0 18-9.6 18-18 0-.3 0-.5 0-.8.9-.6 2-1.5 2.8-2.4z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </main>

      </div>

      {/* Place Footer outside the centered max-width container so it spans full width */}
      <Footer />
    </div>
  );
}
