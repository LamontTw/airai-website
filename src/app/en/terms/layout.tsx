import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Terms of Service | AIRAI Technology Service Agreement',
  description: 'Complete terms of service for AIRAI Technology AI implementation services, including service content, user responsibilities, payment terms, intellectual property protection and other important terms.',
  keywords: [
    'terms of service',
    'service agreement',
    'AI service terms',
    'AIRAI terms',
    'legal terms',
    'user agreement',
    'service contract',
    'AI consulting terms',
    'technical service terms',
    'privacy protection',
    'Taiwan AI services',
    'AI automation terms'
  ],
  openGraph: {
    title: 'Terms of Service | AIRAI Technology Service Agreement',
    description: 'Complete terms of service for AIRAI Technology AI implementation services, including service content, user responsibilities, payment terms, intellectual property protection.',
    url: `${siteConfig.url}/en/terms`,
    siteName: siteConfig.name,
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: `${siteConfig.url}/images/terms-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI Terms of Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | AIRAI Technology',
    description: 'Complete terms of service for AIRAI Technology AI implementation services defining rights and obligations.',
    images: [`${siteConfig.url}/images/terms-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/en/terms`,
    languages: {
      'zh': `${siteConfig.url}/terms`,
      'en': `${siteConfig.url}/en/terms`,
      'ja': `${siteConfig.url}/ja/terms`,
    },
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
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}