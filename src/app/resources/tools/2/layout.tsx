import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { SoftwareApplicationSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'AI投資ROI計算器 | 免費AI效益評估',
  description: '免費的AI投資ROI計算器，幫助企業快速計算AI導入的投資回報率，評估成本效益與回本時間。',
  keywords: [
    'AI ROI計算器',
    'AI投資回報',
    'AI效益計算',
    'AI成本效益',
    'ROI計算工具',
    'AI投資評估',
  ],
  openGraph: {
    title: 'AI投資ROI計算器 | 免費AI效益評估',
    description: '免費的AI投資ROI計算器，幫助企業快速計算AI導入的投資回報率。',
    url: `${siteConfig.url}/resources/tools/2`,
    siteName: siteConfig.name,
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/tools/2`,
  },
};

export default function Tools2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SoftwareApplicationSchema
        name="AI投資ROI計算器"
        description="免費的AI投資ROI計算器，幫助企業快速計算AI導入的投資回報率，評估成本效益與回本時間。"
        url="https://airai.tw/resources/tools/2"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={{ price: "0", priceCurrency: "TWD" }}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "實用工具", url: "https://airai.tw/resources/tools" },
          { name: "AI投資ROI計算器", url: "https://airai.tw/resources/tools/2" },
        ]}
      />
    </>
  );
}
