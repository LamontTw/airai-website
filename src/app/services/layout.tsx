import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: '服務項目 | 客製化AI解決方案與智能化服務',
  description: '提供專業的客製化AI解決方案與智能化服務，包括AI導入顧問、智能客服、RPA自動化、數據分析平台等全方位AI導入服務。',
  keywords: [
    'AI導入',
    '客製化AI解決方案',
    'AI解決方案',
    '企業AI導入',
    'AI系統整合',
    'AI客服系統',
    'RPA自動化',
    '數據分析平台',
    'AI智能辨識',
    '系統整合',
    '數位轉型服務'
  ],
  openGraph: {
    title: '服務項目 | 客製化AI解決方案與智能化服務',
    description: '提供專業的客製化AI解決方案與智能化服務，包括AI導入顧問、智能客服、RPA自動化、數據分析平台等全方位AI導入服務。',
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/services-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI 服務項目',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '服務項目 | 客製化AI解決方案與智能化服務',
    description: '提供專業的客製化AI解決方案與智能化服務，從AI導入顧問到系統整合的全方位數位轉型服務。',
    images: [`${siteConfig.url}/images/services-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 