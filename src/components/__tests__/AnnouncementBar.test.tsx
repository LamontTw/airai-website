import { render, screen } from '@testing-library/react';
import AnnouncementBar from '../ui/AnnouncementBar';
import { getTranslations } from '@/lib/i18n';

describe('AnnouncementBar（結束營運公告條）', () => {
  describe('基本渲染', () => {
    it('應該渲染連往 /announcement 的連結（中文）', () => {
      render(<AnnouncementBar locale="zh" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/announcement');
    });

    it('英文版連結應該帶 /en 前綴', () => {
      render(<AnnouncementBar locale="en" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/en/announcement');
    });

    it('日文版連結應該帶 /ja 前綴', () => {
      render(<AnnouncementBar locale="ja" />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/ja/announcement');
    });

    it('不傳 locale 時應該使用 zh 作為預設', () => {
      render(<AnnouncementBar />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/announcement');
    });
  });

  describe('結束營運文案', () => {
    it('應該顯示桌機版結束營運文字', () => {
      const t = getTranslations('zh');
      render(<AnnouncementBar locale="zh" />);
      expect(screen.getByText(t.announcementBar.text)).toBeInTheDocument();
    });

    it('應該顯示行動版結束營運文字', () => {
      const t = getTranslations('zh');
      render(<AnnouncementBar locale="zh" />);
      expect(screen.getByText(t.announcementBar.textMobile)).toBeInTheDocument();
    });

    it('應該顯示「查看說明」連結文字', () => {
      const t = getTranslations('zh');
      render(<AnnouncementBar locale="zh" />);
      expect(screen.getByText(t.announcementBar.linkText)).toBeInTheDocument();
    });
  });

  describe('Fixed 定位', () => {
    it('應該有 fixed 定位和正確的 top offset', () => {
      const { container } = render(<AnnouncementBar locale="zh" />);
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain('fixed');
      expect(wrapper.className).toContain('top-16');
      expect(wrapper.className).toContain('lg:top-20');
      expect(wrapper.className).toContain('z-40');
    });
  });

  describe('永久顯示（無關閉按鈕）', () => {
    it('不應該渲染關閉按鈕', () => {
      render(<AnnouncementBar locale="zh" />);
      expect(screen.queryByRole('button')).toBeNull();
    });
  });
});
