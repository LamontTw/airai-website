import { Metadata } from 'next';
import ServicesPageClient from './ServicesPageClient';

export const metadata: Metadata = {
  title: "Services | AIRAI Technology - Software Outsourcing & AI Solutions",
  description: "Professional software outsourcing services and AI intelligent solutions including web development, enterprise systems, mobile apps, AI chatbots, RPA automation, and data analytics platforms.",
  keywords: [
    "Software outsourcing",
    "Software development",
    "AI solutions",
    "Web development",
    "Enterprise system development",
    "App development",
    "AI chatbot system",
    "RPA automation",
    "Data analytics platform",
    "AI intelligent recognition",
    "System integration",
    "Digital transformation services"
  ],
  openGraph: {
    title: "Services | AIRAI Technology - Software Outsourcing & AI Solutions",
    description: "Professional software outsourcing services and AI intelligent solutions including web development, enterprise systems, mobile apps, AI chatbots, RPA automation, and data analytics platforms.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/services`,
    siteName: "AIRAI Technology",
    type: 'website',
    images: [
      {
        url: "/images/services-og.png",
        width: 1200,
        height: 630,
        alt: "AIRAI Services",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Services | AIRAI Technology - Software Outsourcing & AI Solutions",
    description: "Professional software outsourcing services and AI intelligent solutions from basic development to AI intelligent upgrades.",
    images: ["/images/services-og.png"],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/services`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/services`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/services`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/services`,
    },
  },
};

export default function ServicesPage() {
  return <ServicesPageClient />;
} 