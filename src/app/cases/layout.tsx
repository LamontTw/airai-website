import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI導入成功案例 | 台灣企業AI導入實戰經驗',
  description: 'AI導入實戰案例分享。跨國供應商業務自動化節省14小時、電子零件代理商發票AI自動化入帳效率提升90%。了解台灣中小企業如何成功導入AI。',
  keywords: [
    'AI成功案例',
    '企業AI實例',
    'AI導入經驗',
    'AI應用案例',
    '製造業AI',
    '零售業AI',
    '服務業AI',
    'AI效益',
    'AI投資回報',
    'AI轉型案例'
  ],
  openGraph: {
    title: 'AI導入成功案例 | 台灣企業AI導入實戰經驗',
    description: 'AI導入實戰案例分享。跨國供應商業務自動化節省14小時、電子零件代理商發票AI自動化入帳效率提升90%。了解台灣中小企業如何成功導入AI。',
    url: `${siteConfig.url}/cases`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/cases-og.png`,
        width: 1200,
        height: 630,
        alt: 'AIRAI 成功案例',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI導入成功案例 | 台灣企業AI導入實戰經驗',
    description: 'AI導入實戰案例分享。跨國供應商業務自動化、電子零件代理商發票AI自動化。了解台灣中小企業如何成功導入AI。',
    images: [`${siteConfig.url}/images/cases-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/cases`,
  },
};

export default function CasesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 