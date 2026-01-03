import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

const defaultMeta = {
  title: "LumiPath Education Solutions - Every Child Deserves to Shine",
  description: "LumiPath empowers schools and parents with expert special education solutions under NIOS framework. 15+ years expertise in learning difficulties, dyslexia, ADHD support. IIM-IIT alumni partnership in Bangalore, India.",
  keywords: "LumiPath, special education, inclusive education, learning disabilities, learning difficulties, NIOS framework, teacher training, dyslexia, ADHD, autism support, NEP 2020, school partnership, special needs education, Bangalore, India, IEP, individualized education plan",
  ogImage: "/lumipath-og-image.jpg",
  siteUrl: "https://www.lumipath.in"
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "LumiPath Education Solutions",
  "description": "Expert special education solutions empowering schools and parents under NIOS framework",
  "url": "https://www.lumipath.in",
  "logo": "https://www.lumipath.in/lumipath-logo.png",
  "foundingDate": "2025",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-8792380978",
    "contactType": "customer service",
    "email": "info@lumipath.in",
    "availableLanguage": ["English", "Hindi", "Kannada"]
  },
  "sameAs": [
    "https://www.instagram.com/lumipath_edu"
  ],
  "areaServed": {
    "@type": "Country",
    "name": "India"
  },
  "serviceType": [
    "Special Education",
    "Learning Disability Support",
    "Teacher Training",
    "NIOS Framework Partnership",
    "Inclusive Education Consulting"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LumiPath Education Solutions",
  "description": "Special education and learning difficulty support services in Bangalore",
  "url": "https://www.lumipath.in",
  "telephone": "+91-8792380978",
  "email": "info@lumipath.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Educational Excellence Hub",
    "addressLocality": "Bangalore",
    "addressRegion": "Karnataka",
    "postalCode": "560001",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "12.9716",
    "longitude": "77.5946"
  },
  "openingHours": "Mo-Sa 09:00-18:00",
  "priceRange": "$$"
};

const SEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  ogImage,
  ogType = "website",
  noIndex = false
}: SEOProps) => {
  const pageTitle = title 
    ? `${title} | LumiPath Education Solutions` 
    : defaultMeta.title;
  const pageDescription = description || defaultMeta.description;
  const pageKeywords = keywords || defaultMeta.keywords;
  const pageImage = ogImage || defaultMeta.ogImage;
  const canonical = canonicalUrl || defaultMeta.siteUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="keywords" content={pageKeywords} />
      <meta name="author" content="LumiPath Education Solutions" />
      <link rel="canonical" href={canonical} />
      
      {/* Robots */}
      {noIndex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={pageImage} />
      <meta property="og:site_name" content="LumiPath Education Solutions" />
      <meta property="og:locale" content="en_IN" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />
      
      {/* Additional SEO */}
      <meta name="geo.region" content="IN-KA" />
      <meta name="geo.placename" content="Bangalore" />
      <meta name="geo.position" content="12.9716;77.5946" />
      <meta name="ICBM" content="12.9716, 77.5946" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
