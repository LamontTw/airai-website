import { Metadata } from 'next';
import AnnouncementContent from '@/components/sections/AnnouncementContent';
import { getTranslations } from '@/lib/i18n';
import { siteConfig } from '@/lib/seo';

const t = getTranslations('en');
const a = t.announcement;

export const metadata: Metadata = {
  title: a.metaTitle,
  description: a.metaDescription,
  openGraph: {
    title: a.metaTitle,
    description: a.metaDescription,
    url: `${siteConfig.url}/en/announcement`,
    siteName: t.seo.siteName,
    type: 'website',
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: a.metaTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: a.metaTitle,
    description: a.metaDescription,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: `${siteConfig.url}/en/announcement`,
    languages: {
      'zh-TW': `${siteConfig.url}/announcement`,
      'en-US': `${siteConfig.url}/en/announcement`,
      'ja-JP': `${siteConfig.url}/ja/announcement`,
      'x-default': `${siteConfig.url}/announcement`,
    },
  },
  robots: { index: true, follow: true },
};

export default function EnglishAnnouncementPage() {
  return <AnnouncementContent locale="en" />;
}
