import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Us | AIRAI Technology - Enterprise AI Implementation Consultation",
  description: "Contact AIRAI Technology for enterprise AI implementation consultation. Get free consultation, professional services, and expert guidance for your AI transformation journey.",
  keywords: [
    "AI consultation",
    "Enterprise AI contact",
    "Free AI consultation",
    "AI implementation services",
    "AIRAI Technology contact",
    "Taiwan AI company",
    "AI transformation consultation"
  ],
  openGraph: {
    title: "Contact Us | AIRAI Technology",
    description: "Contact AIRAI Technology for enterprise AI implementation consultation. Get free consultation and expert guidance for your AI transformation journey.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/contact`,
    siteName: "AIRAI Technology",
    type: 'website',
    images: [
      {
        url: "/images/contact-og.png",
        width: 1200,
        height: 630,
        alt: "Contact AIRAI Technology",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Us | AIRAI Technology",
    description: "Contact AIRAI Technology for enterprise AI implementation consultation and expert guidance.",
    images: ["/images/contact-og.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/contact`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/contact`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/contact`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/contact`,
    },
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
} 