import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { defaultMetadata } from "@/lib/seo";
import { OrganizationSchema, WebsiteSchema } from "@/components/seo/StructuredData";
import { GoogleAnalytics } from '@next/third-parties/google';

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = defaultMetadata;

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <OrganizationSchema />
        <WebsiteSchema />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="alternate" hrefLang="zh-TW" href={process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"} />
        <link rel="alternate" hrefLang="en-US" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/en`} />
        <link rel="alternate" hrefLang="ja-JP" href={`${process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"}/ja`} />
        <link rel="alternate" hrefLang="x-default" href={process.env.NEXT_PUBLIC_SITE_URL || "https://airai.tw"} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "AIRAI Technology",
              "alternateName": "AIRAI科技",
              "url": "https://airai.tw",
              "logo": "https://airai.tw/images/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+886-953-202-811",
                "contactType": "customer service",
                "availableLanguage": ["zh-TW", "en", "ja"]
              },
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "倉後街26号",
                "addressLocality": "板橋区",
                "addressRegion": "新北市",
                "addressCountry": "TW"
              },
              "sameAs": [
                "https://airai.tw/en",
                "https://airai.tw/ja"
              ],
              "description": "專業的AI導入顧問公司，為中小企業提供RPA自動化、智能客服、數據分析等AI解決方案",
              "foundingDate": "2024",
              "numberOfEmployees": "1-10",
              "industry": "Software Development",
              "serviceArea": {
                "@type": "Place",
                "name": "Taiwan"
              }
            })
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <noscript>
          <div style={{ display: 'none' }}>
            本網站需要JavaScript來提供最佳使用體驗。請啟用JavaScript或使用支援JavaScript的瀏覽器。
          </div>
        </noscript>
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ""} />
      </body>
    </html>
  );
}
