import { Metadata } from 'next';
import CasesPageClient from './CasesPageClient';

export const metadata: Metadata = {
  title: "Success Cases | AIRAI Technology - Enterprise AI Implementation Results",
  description: "Explore AIRAI Technology's successful enterprise AI implementation cases across manufacturing, retail, finance, and logistics industries. Real results and proven ROI achievements.",
  keywords: [
    "AI implementation success cases",
    "Enterprise AI results",
    "Manufacturing AI",
    "Retail AI",
    "Finance AI",
    "Logistics AI",
    "ROI achievements",
    "Automation case studies"
  ],
  openGraph: {
    title: "Success Cases | AIRAI Technology",
    description: "Explore AIRAI Technology's successful enterprise AI implementation cases across manufacturing, retail, finance, and logistics industries.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/cases`,
    siteName: "AIRAI Technology",
    type: 'website',
    images: [
      {
        url: "/images/cases-og.png",
        width: 1200,
        height: 630,
        alt: "AIRAI Success Cases",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Success Cases | AIRAI Technology",
    description: "Explore AIRAI Technology's successful enterprise AI implementation cases with proven ROI achievements.",
    images: ["/images/cases-og.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/cases`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/cases`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/cases`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/cases`,
    },
  },
};

export default function CasesPage() {
  return <CasesPageClient />;
} 