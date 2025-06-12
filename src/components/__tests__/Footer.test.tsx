import { render, screen } from '@testing-library/react';
import Footer from '../ui/Footer';

// Mock usePathname hook
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/'),
}));

describe('Footer', () => {
  it('應該渲染公司 logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('AIRAI - 智流科技');
    expect(logo).toBeInTheDocument();
  });

  it('應該顯示公司聯絡資訊', () => {
    render(<Footer />);
    expect(screen.getByText('新北市板橋區倉後街26號')).toBeInTheDocument();
    expect(screen.getByText('+886 953-202-811')).toBeInTheDocument();
    expect(screen.getByText('contact@airai.tw')).toBeInTheDocument();
  });

  it('應該顯示服務項目連結', () => {
    render(<Footer />);
    expect(screen.getByText('程式外包')).toBeInTheDocument();
    expect(screen.getByText('AI Agent導入')).toBeInTheDocument();
    expect(screen.getByText('智能客服')).toBeInTheDocument();
    expect(screen.getByText('流程自動化')).toBeInTheDocument();
  });

  it('應該顯示快速連結', () => {
    render(<Footer />);
    expect(screen.getByText('關於我們')).toBeInTheDocument();
    expect(screen.getByText('成功案例')).toBeInTheDocument();
    expect(screen.getByText('資源洞察')).toBeInTheDocument();
    expect(screen.getByText('聯絡我們')).toBeInTheDocument();
  });

  it('應該顯示版權資訊', () => {
    render(<Footer />);
    expect(screen.getByText(/© 2024 智流科技有限公司/)).toBeInTheDocument();
  });

  it('應該顯示法律連結', () => {
    render(<Footer />);
    expect(screen.getByText('隱私政策')).toBeInTheDocument();
    expect(screen.getByText('服務條款')).toBeInTheDocument();
    expect(screen.getByText('網站地圖')).toBeInTheDocument();
  });

  it('所有連結應該有正確的 href 屬性', () => {
    render(<Footer />);
    
    // 檢查服務項目連結
    const programmingLink = screen.getByText('程式外包').closest('a');
    expect(programmingLink).toHaveAttribute('href', '/services#programming');
    
    const aiAgentLink = screen.getByText('AI Agent導入').closest('a');
    expect(aiAgentLink).toHaveAttribute('href', '/services#ai-agent');
    
    // 檢查快速連結
    const aboutLink = screen.getByText('關於我們').closest('a');
    expect(aboutLink).toHaveAttribute('href', '/about');
    
    const contactLink = screen.getByText('聯絡我們').closest('a');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });
}); 