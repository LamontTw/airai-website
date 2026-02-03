import { Metadata } from 'next';
import { siteConfig } from '@/lib/seo';
import { SoftwareApplicationSchema, BreadcrumbSchema } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'AI專案規劃範本 | 免費AI導入規劃工具',
  description: '免費的AI專案規劃範本，提供完整的AI導入專案規劃框架，包含時程規劃、資源分配、里程碑設定等實用範本。',
  keywords: [
    'AI專案規劃',
    'AI導入範本',
    'AI專案管理',
    'AI導入規劃',
    'AI專案時程',
    'AI導入框架',
  ],
  openGraph: {
    title: 'AI專案規劃範本 | 免費AI導入規劃工具',
    description: '免費的AI專案規劃範本，提供完整的AI導入專案規劃框架。',
    url: `${siteConfig.url}/resources/tools/3`,
    siteName: siteConfig.name,
    type: 'website',
  },
  alternates: {
    canonical: `${siteConfig.url}/resources/tools/3`,
  },
};

export default function Tools3Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <SoftwareApplicationSchema
        name="AI專案規劃範本"
        description="免費的AI專案規劃範本，提供完整的AI導入專案規劃框架，包含時程規劃、資源分配、里程碑設定等實用範本。"
        url="https://airai.tw/resources/tools/3"
        applicationCategory="BusinessApplication"
        operatingSystem="Web"
        offers={{ price: "0", priceCurrency: "TWD" }}
      />
      <BreadcrumbSchema
        items={[
          { name: "首頁", url: "https://airai.tw" },
          { name: "資源中心", url: "https://airai.tw/resources" },
          { name: "實用工具", url: "https://airai.tw/resources/tools" },
          { name: "AI專案規劃範本", url: "https://airai.tw/resources/tools/3" },
        ]}
      />
    </>
  );
}
