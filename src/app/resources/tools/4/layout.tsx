import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AI實施檢查清單 | 企業AI導入步驟指南',
  description: '完整的AI實施檢查清單，確保企業AI導入過程順利進行。涵蓋準備階段、實施階段、驗收階段的所有關鍵步驟。',
  keywords: [
    'AI實施清單',
    'AI導入步驟',
    'AI專案管理',
    'AI實施指南',
    'AI導入檢查',
    'AI專案清單',
    'AI實施流程',
    'AI導入規劃',
    'AI專案執行',
    'AI品質控制'
  ],
  openGraph: {
    title: 'AI實施檢查清單 | 企業AI導入步驟指南',
    description: '完整的AI實施檢查清單，確保企業AI導入過程順利進行。涵蓋準備階段、實施階段、驗收階段的所有關鍵步驟。',
    url: `${siteConfig.url}/resources/tools/4`,
    siteName: siteConfig.name,
    type: 'website',
    images: [
      {
        url: `${siteConfig.url}/images/ai-checklist-tool-og.png`,
        width: 1200,
        height: 630,
        alt: 'AI實施檢查清單',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI實施檢查清單 | 企業AI導入步驟指南',
    description: '完整的AI實施檢查清單，確保企業AI導入過程順利進行。',
    images: [`${siteConfig.url}/images/ai-checklist-tool-og.png`],
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/tools/4`,
  },
};

export default function ToolsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 