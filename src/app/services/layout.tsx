import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: '服務項目 | 程式外包與AI智能化解決方案',
  description: '提供專業的程式外包服務與AI智能化解決方案，包括網站開發、企業系統、行動應用程式、AI客服系統、RPA自動化等全方位服務。',
  keywords: [
    '程式外包',
    '軟體開發',
    'AI解決方案',
    '網站開發',
    '企業系統開發',
    'APP開發',
    'AI客服系統',
    'RPA自動化',
    '數據分析平台',
    'AI智能辨識',
    '系統整合',
    '數位轉型服務'
  ],
  openGraph: {
    title: '服務項目 | 程式外包與AI智能化解決方案',
    description: '提供專業的程式外包服務與AI智能化解決方案，包括網站開發、企業系統、行動應用程式、AI客服系統、RPA自動化等全方位服務。',
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
    title: '服務項目 | 程式外包與AI智能化解決方案',
    description: '提供專業的程式外包服務與AI智能化解決方案，從基礎開發到AI智能化升級的全方位數位轉型服務。',
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