import { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: "お問い合わせ | AIRAI テクノロジー - 企業AI導入相談",
  description: "AIRAIテクノロジーへのお問い合わせ。企業AI導入に関するご相談、無料コンサルティング、サービスに関するご質問はこちらから。",
  keywords: [
    "お問い合わせ",
    "AI導入相談",
    "無料コンサルティング",
    "企業AI",
    "AIRAI テクノロジー",
    "台湾AI会社",
    "連絡先"
  ],
  openGraph: {
    title: "お問い合わせ | AIRAI テクノロジー",
    description: "AIRAIテクノロジーへのお問い合わせ。企業AI導入に関するご相談、無料コンサルティング、サービスに関するご質問はこちらから。",
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/contact`,
    siteName: "AIRAI テクノロジー",
    type: 'website',
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja/contact`,
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