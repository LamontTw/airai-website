import { test as base, chromium } from '@playwright/test';

const locales = ['zh', 'en', 'ja'];

const viewports = [
  { name: '1920-desktop', width: 1920, height: 1080 },
  { name: '1440-laptop', width: 1440, height: 900 },
  { name: '1280-small-laptop', width: 1280, height: 800 },
  { name: '1024-lg-breakpoint', width: 1024, height: 768 },
  { name: '768-tablet', width: 768, height: 1024 },
  { name: '375-mobile', width: 375, height: 812 },
];

const localeConfig: Record<string, { locale: string; lang: string; url: string }> = {
  zh: { locale: 'zh-TW', lang: 'zh-TW,zh;q=0.9', url: '/' },
  en: { locale: 'en-US', lang: 'en-US,en;q=0.9', url: '/en' },
  ja: { locale: 'ja-JP', lang: 'ja-JP,ja;q=0.9', url: '/ja' },
};

for (const locale of locales) {
  for (const vp of viewports) {
    base(`Hero Screenshot - ${locale} - ${vp.name}`, async () => {
      const browser = await chromium.launch();
      const context = await browser.newContext({
        viewport: { width: vp.width, height: vp.height },
        locale: localeConfig[locale].locale,
        extraHTTPHeaders: {
          'Accept-Language': localeConfig[locale].lang,
        },
      });
      const page = await context.newPage();

      await page.goto(`http://localhost:3000${localeConfig[locale].url}`, { waitUntil: 'networkidle' });
      await page.waitForTimeout(2000);

      await page.screenshot({
        path: `tests/e2e/screenshots/hero-${locale}-${vp.name}.png`,
        fullPage: false,
      });

      await context.close();
      await browser.close();
    });
  }
}
