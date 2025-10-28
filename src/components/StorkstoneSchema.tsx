// src/components/StorkstoneSchema.tsx
export default function StorkstoneSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "STORKSTONE",
    "url": "https://storkstone.com",
    "logo": "https://storkstone.com/logo.png",
    "description":
      "STORKSTONE — a D2C brand offering 925 silver minimalist jewelry and premium scented candles, founded by Ranjith R under Sourcebit Innovations Pvt Ltd.",
    "founder": {
      "@type": "Person",
      "name": "Ranjith R",
      "url": "https://ranjithr.dev/"
    },
    "sameAs": [
      "https://www.instagram.com/storkstone_official/",
      "https://in.linkedin.com/company/storkstoneofficial"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
