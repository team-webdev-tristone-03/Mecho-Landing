import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = "MECHO - Water - Efficient Car Wash Service | Eco-Friendly Doorstep Car Cleaning",
  description = "Professional Water - Efficient car wash service at your doorstep. Eco-friendly 15-minute car cleaning for just ₹75. Book now for premium car care in Trichy.",
  keywords = "Water - Efficient car wash, eco-friendly car cleaning, doorstep car wash, car wash service, Trichy car wash, mobile car wash, car detailing",
  image = "https://mecho.in/og-image.jpg",
  url = "https://mecho.in",
  type = "website",
  structuredData = null
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;