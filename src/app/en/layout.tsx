import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/StructuredData";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// 英文版 SEO 配置
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"),
  title: {
    default: "AIRAI | Enterprise AI Implementation Expert - AIRAI Technology",
    template: `%s | AIRAI Technology`,
  },
  description: "AIRAI provides professional enterprise AI implementation consulting services, including AI technology selection, ROI calculation, implementation guidance and complete solutions. Help enterprises successfully transform and improve operational efficiency.",
  keywords: [
    "AI Artificial Intelligence",
    "Enterprise AI Implementation", 
    "AI Technology Selection",
    "Machine Learning",
    "Deep Learning",
    "AI Solutions",
    "Intelligent Automation",
    "AI Consulting Services",
    "Digital Transformation",
    "AI ROI",
    "Artificial Intelligence Applications",
    "Enterprise Digitalization",
    "AI Implementation Guide",
    "Smart Technology",
    "AI Consulting",
    "Large Language Models",
    "Computer Vision",
    "Natural Language Processing",
    "Recommendation Systems",
    "Speech Recognition"
  ],
  authors: [{ name: "AIRAI Team", url: "https://airai.tw" }],
  creator: "AIRAI Team",
  publisher: "AIRAI Technology Co., Ltd.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
    title: "AIRAI | Enterprise AI Implementation Expert - AIRAI Technology",
    description: "AIRAI provides professional enterprise AI implementation consulting services, including AI technology selection, ROI calculation, implementation guidance and complete solutions.",
    siteName: "AIRAI Technology",
    images: [
      {
        url: "/images/logo-full.png",
        width: 1200,
        height: 630,
        alt: "AIRAI Technology",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "AIRAI | Enterprise AI Implementation Expert - AIRAI Technology",
    description: "AIRAI provides professional enterprise AI implementation consulting services, including AI technology selection, ROI calculation, implementation guidance and complete solutions.",
    images: ["/images/logo-full.png"],
    creator: "@airai_tw",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    other: {
      'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
    languages: {
      'zh-TW': process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw",
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`,
    },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function EnglishLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
    </>
  );
} 