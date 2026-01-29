'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  LightBulbIcon,
  QuestionMarkCircleIcon,
  ClipboardDocumentCheckIcon,
  CalculatorIcon,
  BuildingOfficeIcon,
  RocketLaunchIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline';

const tableOfContents = [
  { id: 'what-is-ai', title: 'AI導入是什麼', icon: LightBulbIcon },
  { id: 'why-need-ai', title: '為什麼需要AI導入', icon: QuestionMarkCircleIcon },
  { id: 'five-steps', title: 'AI導入五大步驟', icon: ClipboardDocumentCheckIcon },
  { id: 'cost-roi', title: '成本與投資回報', icon: CalculatorIcon },
  { id: 'use-cases', title: '常見應用場景', icon: BuildingOfficeIcon },
  { id: 'success-cases', title: '成功案例', icon: RocketLaunchIcon },
  { id: 'faq', title: '常見問題', icon: ChatBubbleLeftRightIcon },
];

export default function TableOfContents() {
  const [activeSection, setActiveSection] = useState('what-is-ai');
  const ticking = useRef(false);

  const computeActiveSection = useCallback(() => {
    const scrollPosition = window.scrollY + 150;

    for (let i = tableOfContents.length - 1; i >= 0; i--) {
      const section = document.getElementById(tableOfContents[i].id);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(tableOfContents[i].id);
        break;
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        computeActiveSection();
        ticking.current = false;
      });
    };

    // 初始載入時立即計算（處理從錨點進站的情境）
    requestAnimationFrame(computeActiveSection);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [computeActiveSection]);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="hidden lg:block lg:w-64 flex-shrink-0">
      <div className="sticky top-24">
        <nav className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="font-bold text-gray-900 mb-4">目錄</h3>
          <ul className="space-y-2">
            {tableOfContents.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  aria-current={activeSection === item.id ? 'true' : undefined}
                  className={`flex items-center w-full text-left px-3 py-2 rounded-lg text-sm transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-50 text-blue-700 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
