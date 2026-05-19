import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "お問い合わせ | AIRAI テクノロジー",
  description: "AIRAI は営業を終了しました。本サイトでのご相談・お見積り・LINE でのご連絡の受付は行っておりません。営業終了のお知らせをご覧ください。",
  openGraph: {
    title: "お問い合わせ | AIRAI テクノロジー",
    description: "AIRAI は営業を終了しました。本サイトでのご相談・お問い合わせの受付は行っておりません。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/contact`,
    siteName: "AIRAI テクノロジー",
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "お問い合わせ | AIRAI テクノロジー",
    description: "AIRAI は営業を終了しました。本サイトでのご相談・お問い合わせの受付は行っておりません。",
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/contact`,
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
