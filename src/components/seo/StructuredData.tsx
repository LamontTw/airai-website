import { siteConfig } from '@/lib/seo';

interface OrganizationSchemaProps {
  customData?: object;
}

export function OrganizationSchema({ customData }: OrganizationSchemaProps) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "description": siteConfig.company.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/images/logo.png`,
    "image": `${siteConfig.url}/images/og-image.jpg`,
    "email": siteConfig.company.email,
    "telephone": siteConfig.company.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "台北市",
      "addressRegion": "台灣",
      "addressCountry": "TW"
    },
    "sameAs": [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.youtube
    ],
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "台灣"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI解決方案服務",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI技術導入諮詢",
            "description": "專業的AI技術評估與導入策略制定"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI投資回報率分析",
            "description": "科學化的AI專案ROI計算與風險評估"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI實施指導",
            "description": "從規劃到部署的全程AI專案實施服務"
          }
        }
      ]
    },
    ...customData
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(organizationSchema, null, 2),
      }}
    />
  );
}

interface WebsiteSchemaProps {
  customData?: object;
}

export function WebsiteSchema({ customData }: WebsiteSchemaProps) {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "Website",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "image": `${siteConfig.url}/images/og-image.jpg`,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/images/logo.png`
      }
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteConfig.url}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    },
    "mainEntity": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "url": siteConfig.url
    },
    ...customData
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(websiteSchema, null, 2),
      }}
    />
  );
}

interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  price?: string;
  customData?: object;
}

export function ServiceSchema({ 
  serviceName, 
  serviceDescription, 
  serviceUrl, 
  price,
  customData 
}: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "url": siteConfig.url,
      "logo": `${siteConfig.url}/images/logo.png`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": siteConfig.company.phone,
        "contactType": "sales",
        "areaServed": "TW",
        "availableLanguage": ["Chinese", "English"]
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "台灣"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": serviceName,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": serviceName,
            "description": serviceDescription
          },
          "price": price || "聯繫報價",
          "priceCurrency": "TWD",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    ...customData
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(serviceSchema, null, 2),
      }}
    />
  );
}

interface FAQSchemaProps {
  questions: Array<{
    question: string;
    answer: string;
  }>;
}

export function FAQSchema({ questions }: FAQSchemaProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqSchema, null, 2),
      }}
    />
  );
}

interface BreadcrumbSchemaProps {
  items: Array<{
    name: string;
    url: string;
  }>;
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(breadcrumbSchema, null, 2),
      }}
    />
  );
} 