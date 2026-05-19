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
      siteConfig.social.youtube
    ],
    "foundingDate": "2024",
    "dissolutionDate": "2026-05",
    "areaServed": {
      "@type": "Country",
      "name": "台灣"
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
    "@type": "WebSite",
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
  customData?: object;
}

// 註：AIRAI 已結束營運，不再提供可承接的服務。
// ServiceSchema 保留供文章型內容描述使用，已移除銷售聯絡與供應宣告。
export function ServiceSchema({
  serviceName,
  serviceDescription,
  serviceUrl,
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
      "logo": `${siteConfig.url}/images/logo-full.png`
    },
    "areaServed": {
      "@type": "Country",
      "name": "台灣"
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
    // offers 僅在明確傳入時才輸出；AIRAI 已結束營運，預設不對外發送 Offer 結構化資料
    ...(offers && {
      "offers": {
        "@type": "Offer",
        "price": offers.price,
        "priceCurrency": offers.priceCurrency,
      },
    }),
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