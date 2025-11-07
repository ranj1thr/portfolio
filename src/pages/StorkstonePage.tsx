// src/pages/StorkstonePage.tsx
import { Helmet } from 'react-helmet-async';
import { Storkstone } from '../components/Storkstone';

export function StorkstonePage() {
  return (
    <>
      <Helmet>
        <title>STORKSTONE — 925 Silver Jewelry & Scented Candles | By Sourcebit Innovations</title>
        <meta name="description" content="STORKSTONE — D2C brand offering 925 silver minimalist jewelry and premium scented candles. Crafted for everyday elegance by Sourcebit Innovations Pvt Ltd." />
        <link rel="canonical" href="https://ranjithr.dev/storkstone" />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ranjithr.dev/storkstone" />
        <meta property="og:title" content="STORKSTONE — 925 Silver Jewelry & Scented Candles" />
        <meta property="og:description" content="STORKSTONE — D2C brand offering 925 silver minimalist jewelry and premium scented candles. Crafted for everyday elegance." />
        <meta property="og:image" content="https://cdn.shopify.com/s/files/1/0753/9205/7579/files/Group_239.png?v=1761650530" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="STORKSTONE — 925 Silver Jewelry & Scented Candles" />
        <meta name="twitter:description" content="STORKSTONE — D2C brand offering 925 silver minimalist jewelry and premium scented candles. Crafted for everyday elegance." />
        <meta name="twitter:image" content="https://cdn.shopify.com/s/files/1/0753/9205/7579/files/Group_239.png?v=1761650530" />
        
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <Storkstone />
    </>
  );
}
