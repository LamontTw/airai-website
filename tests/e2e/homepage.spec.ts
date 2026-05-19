import { test, expect } from '@playwright/test';

test.describe('首頁測試', () => {
  test('應該正確載入首頁', async ({ page }) => {
    await page.goto('/');

    // 檢查頁面標題
    await expect(page).toHaveTitle(/AIRAI/);

    // 檢查導航欄
    await expect(page.locator('nav')).toBeVisible();
    await expect(page.getByRole('link', { name: '首頁' })).toBeVisible();
    await expect(page.getByRole('link', { name: '關於我們' })).toBeVisible();
    await expect(page.getByRole('link', { name: '服務項目' })).toBeVisible();
    await expect(page.getByRole('link', { name: '成功案例' })).toBeVisible();
    // 結束營運後，導覽列「聯絡我們」改為「結束營運說明」
    await expect(
      page.getByRole('link', { name: '結束營運說明' }).first()
    ).toBeVisible();
  });

  test('應該顯示全站結束營運公告條', async ({ page }) => {
    await page.goto('/');

    // 公告條為連往 /announcement 的連結
    const announcementLink = page
      .locator('a[href="/announcement"]')
      .first();
    await expect(announcementLink).toBeVisible();
  });

  test('應該顯示 Hero 區塊', async ({ page }) => {
    await page.goto('/');

    // 檢查主標題
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // 主要 CTA 連往結束營運說明
    await expect(
      page.getByRole('link', { name: '查看結束營運說明' })
    ).toBeVisible();
  });

  test('應該顯示 Footer', async ({ page }) => {
    await page.goto('/');

    // 滾動到頁面底部
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

    // 結束營運後 Footer 不再提供聯絡資訊
    await expect(
      page.getByText('本站不再提供諮詢與聯絡服務。')
    ).toBeVisible();
  });

  test('導航連結應該正常工作', async ({ page }) => {
    await page.goto('/');

    // 點擊關於我們連結
    await page.getByRole('link', { name: '關於我們' }).click();
    await expect(page).toHaveURL('/about');

    // 回到首頁
    await page.goto('/');

    // 點擊服務項目連結
    await page.getByRole('link', { name: '服務項目' }).click();
    await expect(page).toHaveURL('/services');

    // 回到首頁
    await page.goto('/');

    // 點擊結束營運說明連結
    await page.getByRole('link', { name: '結束營運說明' }).first().click();
    await expect(page).toHaveURL('/announcement');
  });

  test('結束營運說明頁應該可正常載入', async ({ page }) => {
    await page.goto('/announcement');
    await expect(page).toHaveURL('/announcement');
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  });

  test('響應式設計應該在手機版正常顯示', async ({ page }) => {
    // 設置手機視窗大小
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');

    // 檢查導航欄在手機版的顯示
    await expect(page.locator('nav')).toBeVisible();

    // 檢查主要內容是否正常顯示
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // 檢查 Footer 在手機版的顯示
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await expect(
      page.getByText('本站不再提供諮詢與聯絡服務。')
    ).toBeVisible();
  });
});
