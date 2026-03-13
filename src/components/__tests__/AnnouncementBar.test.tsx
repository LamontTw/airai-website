import { render, screen, fireEvent, act } from '@testing-library/react';
import AnnouncementBar from '../ui/AnnouncementBar';

// Storage mocks
const mockSessionStorage: Record<string, string> = {};
const mockLocalStorage: Record<string, string> = {};

const sessionStorageMock = {
  getItem: jest.fn((key: string) => mockSessionStorage[key] ?? null),
  setItem: jest.fn((key: string, value: string) => {
    mockSessionStorage[key] = value;
  }),
  removeItem: jest.fn((key: string) => {
    delete mockSessionStorage[key];
  }),
  clear: jest.fn(() => {
    Object.keys(mockSessionStorage).forEach((k) => delete mockSessionStorage[k]);
  }),
  get length() {
    return Object.keys(mockSessionStorage).length;
  },
  key: jest.fn(),
};

const localStorageMock = {
  getItem: jest.fn((key: string) => mockLocalStorage[key] ?? null),
  setItem: jest.fn((key: string, value: string) => {
    mockLocalStorage[key] = value;
  }),
  removeItem: jest.fn((key: string) => {
    delete mockLocalStorage[key];
  }),
  clear: jest.fn(() => {
    Object.keys(mockLocalStorage).forEach((k) => delete mockLocalStorage[k]);
  }),
  get length() {
    return Object.keys(mockLocalStorage).length;
  },
  key: jest.fn(),
};

Object.defineProperty(window, 'sessionStorage', { value: sessionStorageMock });
Object.defineProperty(window, 'localStorage', { value: localStorageMock });

const STORAGE_KEY = 'airai-announcement';
const SESSION_KEY = 'airai-announcement-dismissed';

// Fix Date to before expiry so component shows by default
const BEFORE_EXPIRY = new Date('2026-03-01T00:00:00Z');
const AFTER_EXPIRY = new Date('2026-05-01T00:00:00Z');

describe('AnnouncementBar', () => {
  let realDate: DateConstructor;

  beforeEach(() => {
    Object.keys(mockSessionStorage).forEach((k) => delete mockSessionStorage[k]);
    Object.keys(mockLocalStorage).forEach((k) => delete mockLocalStorage[k]);
    jest.clearAllMocks();

    realDate = global.Date;
    const MockDate = class extends realDate {
      constructor(...args: unknown[]) {
        if (args.length === 0) {
          super(BEFORE_EXPIRY.getTime());
        } else {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          super(...(args as [any]));
        }
      }

      static now() {
        return BEFORE_EXPIRY.getTime();
      }
    } as DateConstructor;

    global.Date = MockDate;
  });

  afterEach(() => {
    global.Date = realDate;
  });

  function renderBar(locale?: 'zh' | 'en' | 'ja') {
    let result: ReturnType<typeof render>;
    act(() => {
      result = render(<AnnouncementBar locale={locale} />);
    });
    return result!;
  }

  describe('基本渲染', () => {
    it('應該渲染帶有正確 href 的連結', () => {
      renderBar();
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', 'https://agent.airai.tw');
    });

    it('連結應該有 target="_blank" 和 rel="noopener noreferrer"', () => {
      renderBar();
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('target', '_blank');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('應該顯示 Badge 文字 "New"', () => {
      renderBar();
      const badges = screen.getAllByText('New');
      expect(badges.length).toBeGreaterThanOrEqual(1);
    });

    it('應該顯示 Air AI Agent 品牌名', () => {
      renderBar('zh');
      const brandNames = screen.getAllByText('Air AI Agent');
      expect(brandNames.length).toBeGreaterThanOrEqual(1);
    });

    it('應該顯示利益導向文案', () => {
      renderBar('zh');
      expect(screen.getByText(/AI 幫你接客服/)).toBeInTheDocument();
    });

    it('應該渲染 CTA 按鈕文字（Desktop）', () => {
      renderBar('zh');
      expect(screen.getByText('免費試用')).toBeInTheDocument();
    });

    it('英文版應該渲染 CTA 按鈕 "Free Trial"', () => {
      renderBar('en');
      expect(screen.getByText('Free Trial')).toBeInTheDocument();
    });

    it('日文版應該渲染 CTA 按鈕 "無料体験"', () => {
      renderBar('ja');
      expect(screen.getByText('無料体験')).toBeInTheDocument();
    });
  });

  describe('藍色漸層背景', () => {
    it('應該有藍色漸層 class', () => {
      const { container } = renderBar();
      const innerDiv = container.querySelector('.bg-gradient-to-r');
      expect(innerDiv).not.toBeNull();
    });
  });

  describe('Pulse 動畫', () => {
    it('應該渲染 pulse 動畫元素', () => {
      const { container } = renderBar();
      const pulseEl = container.querySelector('.motion-safe\\:animate-ping');
      expect(pulseEl).not.toBeNull();
    });
  });

  describe('Fixed 定位', () => {
    it('應該有 fixed 定位和正確的 top offset', () => {
      const { container } = renderBar();
      const wrapper = container.firstChild as HTMLElement;
      expect(wrapper.className).toContain('fixed');
      expect(wrapper.className).toContain('top-16');
      expect(wrapper.className).toContain('lg:top-20');
      expect(wrapper.className).toContain('z-40');
    });
  });

  describe('多語系 aria-label', () => {
    it('中文 locale 關閉按鈕 aria-label 為 "關閉公告"', () => {
      renderBar('zh');
      expect(screen.getByRole('button', { name: '關閉公告' })).toBeInTheDocument();
    });

    it('英文 locale 關閉按鈕 aria-label 為 "Close announcement"', () => {
      renderBar('en');
      expect(screen.getByRole('button', { name: 'Close announcement' })).toBeInTheDocument();
    });

    it('日文 locale 關閉按鈕 aria-label 為 "お知らせを閉じる"', () => {
      renderBar('ja');
      expect(screen.getByRole('button', { name: 'お知らせを閉じる' })).toBeInTheDocument();
    });

    it('中文 locale 連結 title 為 "前往 Air AI Agent 產品站"', () => {
      renderBar('zh');
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('title', '前往 Air AI Agent 產品站');
    });

    it('英文 locale 連結 title 為 "Visit Air AI Agent"', () => {
      renderBar('en');
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('title', 'Visit Air AI Agent');
    });

    it('日文 locale 連結 title 為 "Air AI Agent サイトへ"', () => {
      renderBar('ja');
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('title', 'Air AI Agent サイトへ');
    });
  });

  describe('關閉行為', () => {
    it('點擊關閉按鈕後應該隱藏 bar', () => {
      const { container } = renderBar();
      expect(container.firstChild).not.toBeNull();

      const closeBtn = screen.getByRole('button', { name: '關閉公告' });
      fireEvent.click(closeBtn);

      expect(container.firstChild).toBeNull();
    });

    it('關閉後 bar 不再顯示（link 消失）', () => {
      renderBar();
      const closeBtn = screen.getByRole('button', { name: '關閉公告' });
      fireEvent.click(closeBtn);
      expect(screen.queryByRole('link')).toBeNull();
    });
  });

  describe('SessionStorage 與 localStorage 邏輯', () => {
    it('關閉後應該設定 sessionStorage', () => {
      renderBar();
      const closeBtn = screen.getByRole('button', { name: '關閉公告' });
      fireEvent.click(closeBtn);

      expect(sessionStorageMock.setItem).toHaveBeenCalledWith(SESSION_KEY, '1');
    });

    it('關閉後 localStorage dismissCount 應該遞增', () => {
      renderBar();
      const closeBtn = screen.getByRole('button', { name: '關閉公告' });
      fireEvent.click(closeBtn);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        STORAGE_KEY,
        expect.stringContaining('"dismissCount":1')
      );
    });

    it('localStorage 已有 dismissCount 時應該遞增而非重置', () => {
      mockLocalStorage[STORAGE_KEY] = JSON.stringify({ dismissCount: 1 });

      renderBar();
      const closeBtn = screen.getByRole('button', { name: '關閉公告' });
      fireEvent.click(closeBtn);

      expect(localStorageMock.setItem).toHaveBeenCalledWith(
        STORAGE_KEY,
        expect.stringContaining('"dismissCount":2')
      );
    });

    it('sessionStorage 有 dismissed flag 時不應該顯示 bar', () => {
      mockSessionStorage[SESSION_KEY] = '1';

      const { container } = renderBar();
      expect(container.firstChild).toBeNull();
    });

    it('dismissCount >= 3 時不應該顯示 bar', () => {
      mockLocalStorage[STORAGE_KEY] = JSON.stringify({ dismissCount: 3 });

      const { container } = renderBar();
      expect(container.firstChild).toBeNull();
    });

    it('dismissCount < 3 時應該顯示 bar', () => {
      mockLocalStorage[STORAGE_KEY] = JSON.stringify({ dismissCount: 2 });

      const { container } = renderBar();
      expect(container.firstChild).not.toBeNull();
    });
  });

  describe('localStorage 損壞資料處理', () => {
    it('localStorage 包含無效 JSON 時應該仍然顯示 bar', () => {
      mockLocalStorage[STORAGE_KEY] = 'not-valid-json{{{';

      const { container } = renderBar();
      expect(container.firstChild).not.toBeNull();
    });

    it('localStorage 包含有效 JSON 但缺少 dismissCount 時應該顯示 bar', () => {
      mockLocalStorage[STORAGE_KEY] = JSON.stringify({ someOtherField: 'value' });

      const { container } = renderBar();
      expect(container.firstChild).not.toBeNull();
    });
  });

  describe('自動過期', () => {
    it('超過 EXPIRY_DATE 後不應該渲染 bar', () => {
      const MockDateAfter = class extends realDate {
        constructor(...args: unknown[]) {
          if (args.length === 0) {
            super(AFTER_EXPIRY.getTime());
          } else {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            super(...(args as [any]));
          }
        }

        static now() {
          return AFTER_EXPIRY.getTime();
        }
      } as DateConstructor;

      global.Date = MockDateAfter;

      const { container } = renderBar();
      expect(container.firstChild).toBeNull();
    });
  });

  describe('預設 locale', () => {
    it('不傳 locale 時應該使用 zh 作為預設', () => {
      renderBar();
      expect(screen.getByRole('button', { name: '關閉公告' })).toBeInTheDocument();
    });
  });
});
