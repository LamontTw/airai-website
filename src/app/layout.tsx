import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "智流科技 | 將AI融入日常工作，加速中小企業數位轉型",
  description: "智流科技專注於為台灣中小企業提供AI Agent導入與程式外包服務，透過實用的AI解決方案加速工作流程，提升營運效率。",
  keywords: "AI導入, 數位轉型, 中小企業, 程式外包, AI Agent, 智能客服, 流程自動化, RPA",
  openGraph: {
    title: "智流科技 | 將AI融入日常工作",
    description: "專為中小企業設計的AI解決方案，提升效率、降低成本",
    type: "website",
    url: "https://airai.tw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
