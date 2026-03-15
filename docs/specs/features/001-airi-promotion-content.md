---
title: Airi 推廣內容開發
id: "001"
status: done
author: AIRAI Team
created: 2026-03-15
---

# 001 - Airi 推廣內容開發

## 背景

Airi 3/13 上線，AI.tw 官網除了 AnnouncementBar 外零推廣內容。現有 12 篇文章中沒有任何一篇提到 Airi，需要補齊站內 SEO 文章 + 站外社群文案。

## 範圍

1. **SEO 文章 A**：Airi 上線公告（`/resources/blog/airi-ai-customer-service-launch`）
2. **SEO 文章 B**：AI 客服教學長文（`/resources/blog/how-to-setup-ai-chatbot-for-business`）
3. **更新現有文章**：`ai-customer-service-agent` 加 Airi CTA
4. **更新索引**：部落格列表頁、seo.ts articleDates、ARTICLE_INDEX.md
5. **社群文案**：Threads x3 + LinkedIn x2（存到 `docs/business/campaigns/airi-social-media-drafts.md`）

## 驗收標準（AC）

- AC-1: 兩篇新文章 URL 可正常訪問，metadata/OG tags 正確
- AC-2: 現有 `ai-customer-service-agent` 文章包含 Airi CTA 連結
- AC-3: 部落格列表頁顯示新文章
- AC-4: `seo.ts` 的 articleDates 包含新文章
- AC-5: ARTICLE_INDEX.md 已更新
- AC-6: `npm run build` + `npm run lint` + `npm run test` 全通過
- AC-7: Threads x3 + LinkedIn x2 草稿完成
- AC-8: `/codex_market_review` 通過

## 文案方向

- 底層洞察：中小企業主買的是「不用再自己當客服」的解放感
- 場景翻譯：晚上 11 點，老闆已經躺床上，客戶的問題 Airi 幫你回了
- 核心一句話：「AI 幫你接客服，你去忙更重要的事」
- 禁用詞：「智能」「賦能」「數位轉型」「解決方案」
