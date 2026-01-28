import { getTranslations, getCurrentLocale } from '../i18n';

describe('i18n', () => {
  describe('getTranslations', () => {
    it('應該返回中文翻譯', () => {
      const translations = getTranslations('zh');
      expect(translations.nav.home).toBe('首頁');
      expect(translations.nav.about).toBe('關於我們');
      expect(translations.nav.services).toBe('服務項目');
      expect(translations.nav.cases).toBe('成功案例');
      expect(translations.nav.resources).toBe('資源洞察');
      expect(translations.nav.contact).toBe('聯絡我們');
    });

    it('應該返回英文翻譯', () => {
      const translations = getTranslations('en');
      expect(translations.nav.home).toBe('Home');
      expect(translations.nav.about).toBe('About Us');
      expect(translations.nav.services).toBe('Services');
      expect(translations.nav.cases).toBe('Case Studies');
      expect(translations.nav.contact).toBe('Contact');
    });

    it('應該返回日文翻譯', () => {
      const translations = getTranslations('ja');
      expect(translations.nav.home).toBe('ホーム');
      expect(translations.nav.about).toBe('私たちについて');
      expect(translations.nav.services).toBe('サービス');
      expect(translations.nav.cases).toBe('ケーススタディ');
      expect(translations.nav.contact).toBe('お問い合わせ');
    });

    it('應該有完整的公司資訊', () => {
      const translations = getTranslations('zh');
      expect(translations.company.name).toBe('智流科技有限公司');
      expect(translations.company.phone).toBe('+886 953-202-811');
      expect(translations.company.email).toBe('contact@airai.tw');
      expect(translations.company.address).toBe('新北市板橋區倉後街26號');
    });

    it('應該有完整的服務項目翻譯', () => {
      const translations = getTranslations('zh');
      expect(translations.services.programming.title).toBe('客製化 AI 解決方案');
      expect(translations.services.aiAgent.title).toBe('AI Agent 導入');
      expect(translations.services.applications.smartCustomerService.title).toBe('智能客服');
      expect(translations.services.applications.rpa.title).toBe('流程自動化 (RPA)');
    });
  });

  describe('getCurrentLocale', () => {
    it('應該從路徑中正確識別中文語言', () => {
      const locale = getCurrentLocale('/');
      expect(locale).toBe('zh');
    });

    it('應該從路徑中正確識別英文語言', () => {
      const locale = getCurrentLocale('/en/about');
      expect(locale).toBe('en');
    });

    it('應該從路徑中正確識別日文語言', () => {
      const locale = getCurrentLocale('/ja/services');
      expect(locale).toBe('ja');
    });

    it('應該處理根路徑的英文版本', () => {
      const locale = getCurrentLocale('/en');
      expect(locale).toBe('en');
    });

    it('應該處理根路徑的日文版本', () => {
      const locale = getCurrentLocale('/ja');
      expect(locale).toBe('ja');
    });

    it('應該預設返回中文', () => {
      const locale = getCurrentLocale('/some-other-path');
      expect(locale).toBe('zh');
    });
  });
}); 