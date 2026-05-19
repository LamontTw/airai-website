import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "Contact Information | AIRAI Technology",
  description: "AIRAI has ceased operations. This site no longer provides consultation, quotes, or LINE contact services. Please see the closure notice.",
  openGraph: {
    title: "Contact Information | AIRAI Technology",
    description: "AIRAI has ceased operations. This site no longer provides consultation or contact services.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/contact`,
    siteName: "AIRAI Technology",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Information | AIRAI Technology",
    description: "AIRAI has ceased operations. This site no longer provides consultation or contact services.",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/contact`,
    languages: {
      'zh-TW': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/contact`,
      'en-US': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en/contact`,
      'ja-JP': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/contact`,
      'x-default': `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/contact`,
    },
  },
};

export default function ContactPage() {
  return <ContactPageClient />;
}
