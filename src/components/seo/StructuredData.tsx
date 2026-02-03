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
    "logo": `${siteConfig.url}/images/logo-full.png`,
    "image": `${siteConfig.url}/images/logo-full.png`,
    "email": siteConfig.company.email,
    "telephone": siteConfig.company.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "倉後街26號",
      "addressLocality": "板橋區",
      "addressRegion": "新北市",
      "addressCountry": "TW"
    },
    "sameAs": [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
      siteConfig.social.youtube,
      siteConfig.social.line
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
    "image": `${siteConfig.url}/images/logo-full.png`,
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/images/logo-full.png`
      }
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
      "logo": `${siteConfig.url}/images/logo-full.png`,
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

// === GEO 優化：強化版 Article Schema ===

interface ArticleSchemaProps {
  headline: string;
  description: string;
  url: string;
  image?: string;
  datePublished: string;
  dateModified: string;
  authorName?: string;
  authorJobTitle?: string;
  wordCount?: number;
  articleSection?: string;
  keywords?: string[];
  inLanguage?: string;
}

export function ArticleSchema({
  headline,
  description,
  url,
  image,
  datePublished,
  dateModified,
  authorName = '智流科技 AIRAI 研究團隊',
  authorJobTitle = 'AI 導入顧問',
  wordCount,
  articleSection,
  keywords,
  inLanguage = 'zh-TW',
}: ArticleSchemaProps) {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": headline,
    "description": description,
    "url": url,
    "image": image || `${siteConfig.url}/images/og-image.jpg`,
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": authorJobTitle,
      "worksFor": {
        "@type": "Organization",
        "name": siteConfig.company.name,
        "url": siteConfig.url
      }
    },
    "publisher": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/images/logo-full.png`
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "inLanguage": inLanguage,
    ...(wordCount && { "wordCount": wordCount }),
    ...(articleSection && { "articleSection": articleSection }),
    ...(keywords && keywords.length > 0 && { "keywords": keywords.join(', ') }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(articleSchema, null, 2),
      }}
    />
  );
}

// === GEO 優化：HowTo Schema ===

interface HowToStep {
  name: string;
  text: string;
  url?: string;
  estimatedTime?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  totalTime?: string;
  estimatedCost?: {
    currency: string;
    value: string;
  };
  steps: HowToStep[];
}

export function HowToSchema({ name, description, totalTime, estimatedCost, steps }: HowToSchemaProps) {
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": name,
    "description": description,
    ...(totalTime && { "totalTime": totalTime }),
    ...(estimatedCost && {
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": estimatedCost.currency,
        "value": estimatedCost.value
      }
    }),
    "step": steps.map((step, index) => ({
      "@type": "HowToStep",
      "position": index + 1,
      "name": step.name,
      "text": step.text,
      ...(step.url && { "url": step.url }),
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(howToSchema, null, 2),
      }}
    />
  );
}

// === GEO 優化：SoftwareApplication Schema ===

interface SoftwareApplicationSchemaProps {
  name: string;
  description: string;
  url: string;
  applicationCategory?: string;
  operatingSystem?: string;
  offers?: {
    price: string;
    priceCurrency: string;
  };
}

export function SoftwareApplicationSchema({
  name,
  description,
  url,
  applicationCategory = 'BusinessApplication',
  operatingSystem = 'Web',
  offers,
}: SoftwareApplicationSchemaProps) {
  const appSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "description": description,
    "url": url,
    "applicationCategory": applicationCategory,
    "operatingSystem": operatingSystem,
    "offers": {
      "@type": "Offer",
      "price": offers?.price || "0",
      "priceCurrency": offers?.priceCurrency || "TWD",
    },
    "provider": {
      "@type": "Organization",
      "name": siteConfig.company.name,
      "url": siteConfig.url
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(appSchema, null, 2),
      }}
    />
  );
} 