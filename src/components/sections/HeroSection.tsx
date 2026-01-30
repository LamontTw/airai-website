'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, BookOpenIcon } from '@heroicons/react/24/outline';
import LineQRModal from '@/components/ui/LineQRModal';
import { getTranslations } from '@/lib/i18n';

// Hook: 偵測是否為桌機版（lg breakpoint = 1024px）
function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    setIsDesktop(mediaQuery.matches);

    // Safari < 14 相容性：使用 addListener/removeListener fallback
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      setIsDesktop('matches' in e ? e.matches : mediaQuery.matches);
    };

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', handler);
    } else if (typeof mediaQuery.addListener === 'function') {
      mediaQuery.addListener(handler);
    }

    return () => {
      if (typeof mediaQuery.removeEventListener === 'function') {
        mediaQuery.removeEventListener('change', handler);
      } else if (typeof mediaQuery.removeListener === 'function') {
        mediaQuery.removeListener(handler);
      }
    };
  }, []);

  return isDesktop;
}

// ========================================
// Hero Scan Animation Components (from v7)
// ========================================

// 三個分類 - 問題導向（多語言）
const getCategories = (locale: 'zh' | 'en' | 'ja') => {
  const translations = {
    zh: [
      { id: 'code', icon: 'code', title: '系統混亂', subtitle: '不用砍掉重練', desc: 'AI 自動串接整合' },
      { id: 'chat', icon: 'chat', title: '訊息爆炸', subtitle: '不再漏接訊息', desc: '智能分流秒回覆' },
      { id: 'doc', icon: 'doc', title: '文件地獄', subtitle: '告別手動輸入', desc: '自動化報表生成' },
    ],
    en: [
      { id: 'code', icon: 'code', title: 'System Chaos', subtitle: 'No need to rebuild', desc: 'AI auto-integration' },
      { id: 'chat', icon: 'chat', title: 'Message Overload', subtitle: 'Never miss a message', desc: 'Smart routing & replies' },
      { id: 'doc', icon: 'doc', title: 'Document Hell', subtitle: 'No more manual entry', desc: 'Automated reporting' },
    ],
    ja: [
      { id: 'code', icon: 'code', title: 'システム混乱', subtitle: '作り直し不要', desc: 'AI自動連携' },
      { id: 'chat', icon: 'chat', title: 'メッセージ爆発', subtitle: '取りこぼしゼロ', desc: 'スマート振り分け' },
      { id: 'doc', icon: 'doc', title: '書類地獄', subtitle: '手入力から解放', desc: '自動レポート作成' },
    ],
  };
  return translations[locale];
};

// 生成散落圖示 - 大小差異更大、數量更多
function generateLayeredIcons(count: number) {
  const icons = [];
  const types = ['doc', 'chat', 'code'];

  for (let i = 0; i < count; i++) {
    const layerRand = Math.random();
    let scale: number;
    let opacity: number;
    let blur: number;

    if (layerRand < 0.2) {
      scale = 1.3 + Math.random() * 0.7;
      opacity = 1;
      blur = 0;
    } else if (layerRand < 0.45) {
      scale = 0.9 + Math.random() * 0.4;
      opacity = 0.95;
      blur = 0;
    } else if (layerRand < 0.7) {
      scale = 0.5 + Math.random() * 0.35;
      opacity = 0.75;
      blur = 0;
    } else if (layerRand < 0.85) {
      scale = 0.3 + Math.random() * 0.2;
      opacity = 0.5;
      blur = 0.5;
    } else {
      scale = 0.15 + Math.random() * 0.15;
      opacity = 0.25 + Math.random() * 0.15;
      blur = 1;
    }

    icons.push({
      id: i,
      type: types[i % 3],
      scatterX: 2 + Math.random() * 96,
      scatterY: 3 + Math.random() * 94,
      scatterRotate: (Math.random() - 0.5) * 60,
      scatterScale: scale,
      scatterOpacity: opacity,
      blur,
    });
  }

  return icons.sort((a, b) => a.scatterScale - b.scatterScale);
}

// 小圖示 SVG
function MiniIcon({ type, colored = false }: { type: string; colored?: boolean }) {
  const grayColor = '#6b7280';
  const colors: Record<string, string> = {
    doc: '#10b981',
    chat: '#8b5cf6',
    code: '#3b82f6',
  };
  const color = colored ? colors[type] : grayColor;

  switch (type) {
    case 'doc':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
          <rect x="4" y="2" width="16" height="20" rx="2" fill="none" stroke={color} strokeWidth="1.5" />
          <line x1="8" y1="8" x2="16" y2="8" stroke={color} strokeWidth="1.5" />
          <line x1="8" y1="12" x2="16" y2="12" stroke={color} strokeWidth="1.5" opacity="0.6" />
          <line x1="8" y1="16" x2="12" y2="16" stroke={color} strokeWidth="1.5" opacity="0.4" />
        </svg>
      );
    case 'chat':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
          <path d="M4 6 Q4 4 6 4 L18 4 Q20 4 20 6 L20 14 Q20 16 18 16 L8 16 L4 20 L4 6 Z" fill="none" stroke={color} strokeWidth="1.5" />
          <circle cx="8" cy="10" r="1" fill={color} />
          <circle cx="12" cy="10" r="1" fill={color} />
          <circle cx="16" cy="10" r="1" fill={color} />
        </svg>
      );
    case 'code':
      return (
        <svg viewBox="0 0 24 24" className="w-full h-full" aria-hidden="true">
          <polyline points="8,6 4,12 8,18" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
          <polyline points="16,6 20,12 16,18" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return null;
  }
}

// 分類圖示
function CategoryIcon({ type }: { type: string }) {
  const colors: Record<string, { bg: string; border: string }> = {
    code: { bg: 'bg-blue-50', border: 'border-blue-200' },
    chat: { bg: 'bg-purple-50', border: 'border-purple-200' },
    doc: { bg: 'bg-emerald-50', border: 'border-emerald-200' },
  };
  const c = colors[type];

  return (
    <div className={`w-12 h-12 ${c.bg} ${c.border} border-2 rounded-xl flex items-center justify-center`}>
      <div className="w-6 h-6">
        <MiniIcon type={type} colored />
      </div>
    </div>
  );
}

// 打勾
function CheckMark({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay, type: 'spring', stiffness: 500, damping: 25 }}
      className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/30"
      aria-hidden="true"
    >
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <motion.path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 13l4 4L19 7"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: delay + 0.1, duration: 0.3 }}
        />
      </svg>
    </motion.div>
  );
}

// Hero 掃描動畫（只執行一次）
function HeroScanAnimation({ locale }: { locale: 'zh' | 'en' | 'ja' }) {
  const prefersReducedMotion = useReducedMotion();
  const [phase, setPhase] = useState<'scatter' | 'scanning' | 'ordered'>('scatter');
  const [scanProgress, setScanProgress] = useState(0);
  const icons = useMemo(() => generateLayeredIcons(prefersReducedMotion ? 12 : 45), [prefersReducedMotion]);
  const categories = useMemo(() => getCategories(locale), [locale]);
  const rafIdRef = useRef<number | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // 偏好減少動態：直接跳到最終狀態
    if (prefersReducedMotion) {
      setPhase('ordered');
      setScanProgress(1);
      return;
    }

    let isMounted = true;

    const runAnimation = () => {
      if (!isMounted) return;

      setPhase('scatter');
      setScanProgress(0);

      // 1.2 秒後開始掃描
      timeoutIdRef.current = setTimeout(() => {
        if (!isMounted) return;
        setPhase('scanning');

        const scanDuration = 1600;
        const startTime = Date.now();

        const animateScan = () => {
          if (!isMounted) return;

          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / scanDuration, 1);
          setScanProgress(progress);

          if (progress < 1) {
            rafIdRef.current = requestAnimationFrame(animateScan);
          } else {
            setPhase('ordered');
            // 動畫完成，停在 ordered 狀態，不再循環
          }
        };

        rafIdRef.current = requestAnimationFrame(animateScan);
      }, 1200);
    };

    runAnimation();

    // Cleanup: 取消所有 pending 的 timeout 和 rAF
    return () => {
      isMounted = false;
      if (timeoutIdRef.current) {
        clearTimeout(timeoutIdRef.current);
      }
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [prefersReducedMotion]);

  const isOrdered = phase === 'ordered';
  const isScanning = phase === 'scanning';

  const isIconScanned = (iconY: number) => {
    if (phase === 'ordered') return true;
    if (phase === 'scatter') return false;
    return (scanProgress * 100) > iconY;
  };

  const getCategoryCenter = (type: string) => {
    const positions: Record<string, { x: number; y: number }> = {
      code: { x: 20, y: 35 },
      chat: { x: 50, y: 35 },
      doc: { x: 80, y: 35 },
    };
    return positions[type];
  };

  const bgWhiteProgress = Math.min(scanProgress * 1.15, 1);

  const trustBarText = {
    zh: '50+ 台灣企業信賴的 AI 導入夥伴',
    en: '50+ Taiwan enterprises trust us',
    ja: '50社以上の台湾企業が信頼',
  };

  const workflowSubtext = {
    zh: '診斷 · 整合 · 落地',
    en: 'Diagnose · Integrate · Deploy',
    ja: '診断 · 統合 · 実装',
  };

  return (
    <motion.div
      className="relative w-full h-[420px] lg:h-[480px] rounded-xl overflow-hidden"
      style={{
        backgroundColor: isScanning
          ? `rgba(248, 250, 252, ${bgWhiteProgress})`
          : isOrdered ? '#f8fafc' : '#0a0a0f'
      }}
      aria-hidden="true"
    >
      {/* 深色網格 */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px]"
        animate={{ opacity: isOrdered ? 0 : 1 - bgWhiteProgress }}
      />

      {/* 掃描光束 */}
      {isScanning && (
        <>
          <motion.div
            className="absolute left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${scanProgress * 100}%`, boxShadow: '0 0 60px 20px rgba(34, 211, 238, 0.5)' }}
          />
          <motion.div
            className="absolute left-0 right-0 top-0 bg-gradient-to-b from-slate-50 via-slate-50/90 to-transparent"
            style={{ height: `${Math.min(scanProgress * 115, 100)}%` }}
          />
        </>
      )}

      {/* 散落圖示 */}
      {icons.map((icon) => {
        const scanned = isIconScanned(icon.scatterY);
        const center = getCategoryCenter(icon.type);

        return (
          <motion.div
            key={icon.id}
            className="absolute"
            style={{
              width: '20px',
              height: '20px',
              filter: icon.blur > 0 && !scanned ? `blur(${icon.blur}px)` : 'none',
            }}
            animate={{
              left: scanned ? `${center.x}%` : `${icon.scatterX}%`,
              top: scanned ? `${center.y}%` : `${icon.scatterY}%`,
              rotate: scanned ? 0 : icon.scatterRotate,
              scale: scanned ? 0 : icon.scatterScale,
              opacity: scanned ? 0 : icon.scatterOpacity,
              x: '-50%',
              y: '-50%',
            }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <MiniIcon type={icon.type} colored={scanned} />
          </motion.div>
        );
      })}

      {/* 結束畫面 */}
      <AnimatePresence>
        {isOrdered && (
          <>
            {/* 頂部標語 */}
            <motion.div
              className="absolute top-4 left-0 right-0 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-xs text-slate-500 tracking-widest uppercase">Say Goodbye To</span>
            </motion.div>

            {/* 三張卡片 */}
            <div className="absolute top-[13%] left-0 right-0 flex justify-center gap-2 md:gap-3 px-4">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  className="relative bg-white rounded-xl p-3 md:p-4 shadow-lg shadow-slate-200/50 border border-slate-100 w-[110px] md:w-[145px]"
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                >
                  <CheckMark delay={0.6 + i * 0.15} />
                  <div className="flex justify-center mb-2">
                    <CategoryIcon type={cat.icon} />
                  </div>
                  <h4 className="text-center text-xs md:text-sm font-bold text-slate-800 mb-0.5">
                    {cat.title}
                  </h4>
                  <p className="text-center text-[10px] md:text-xs text-blue-600 font-medium mb-1">
                    {cat.subtitle}
                  </p>
                  <p className="text-center text-[10px] md:text-xs text-slate-500 hidden md:block whitespace-nowrap">
                    {cat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Trust Bar */}
            <motion.div
              className="absolute bottom-4 left-0 right-0 px-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center justify-center gap-2 text-xs text-slate-500">
                <div className="flex -space-x-1">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  ))}
                </div>
                <span>{trustBarText[locale]}</span>
              </div>
            </motion.div>

            {/* AI Circuit Lines - 卡片底部連線 */}
            {!prefersReducedMotion && (
              <svg className="absolute top-[52%] left-0 right-0 w-full h-[20%] pointer-events-none" viewBox="0 0 400 80" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="circuit-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.6" />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
                <path d="M 105 10 Q 152 45 200 10" fill="none" stroke="url(#circuit-grad)" strokeWidth="1.5" strokeDasharray="8 6" style={{ animation: 'circuit-flow 2s linear infinite' }} />
                <path d="M 200 10 Q 248 45 295 10" fill="none" stroke="url(#circuit-grad)" strokeWidth="1.5" strokeDasharray="8 6" style={{ animation: 'circuit-flow 2s linear infinite', animationDelay: '0.5s' }} />
                <circle r="3" fill="#3b82f6" style={{ animation: 'circuit-pulse 1.5s ease-in-out infinite' }}>
                  <animateMotion dur="2s" repeatCount="indefinite" path="M 105 10 Q 152 45 200 10" />
                </circle>
                <circle r="3" fill="#06b6d4" style={{ animation: 'circuit-pulse 1.5s ease-in-out infinite', animationDelay: '0.7s' }}>
                  <animateMotion dur="2s" repeatCount="indefinite" path="M 200 10 Q 248 45 295 10" />
                </circle>
              </svg>
            )}

            {/* AI Workflow 文字 */}
            <motion.div
              className="absolute top-[72%] left-0 right-0 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <div className="text-base font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent tracking-[0.15em] uppercase">
                AI Workflow
              </div>
              <div className="text-xs text-slate-500 mt-0.5">
                {workflowSubtext[locale]}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 階段指示 */}
      {!isOrdered && (
        <div className="absolute top-3 right-3 text-[10px] font-mono">
          <span className="text-slate-500">
            {phase === 'scatter' && '● CHAOS'}
            {phase === 'scanning' && `◐ ${Math.round(scanProgress * 100)}%`}
          </span>
        </div>
      )}
    </motion.div>
  );
}

// ========================================
// Main HeroSection Component
// ========================================
export default function HeroSection() {
  const pathname = usePathname();
  const isDesktop = useIsDesktop();
  const [isLineModalOpen, setIsLineModalOpen] = useState(false);

  // 判斷當前語言並取得翻譯
  const getCurrentLocale = (): 'zh' | 'en' | 'ja' => {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/ja')) return 'ja';
    return 'zh';
  };

  const currentLocale = getCurrentLocale();
  const t = getTranslations(currentLocale);

  return (
    <>
      <section className="relative flex items-start bg-gradient-to-br from-slate-50 via-white to-blue-50/30 overflow-hidden py-20 lg:py-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-8 items-start">
            {/* Left: Text Content (SEO Critical) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left lg:col-span-3 xl:w-[630px] xl:h-[610px] lg:pt-[15px]"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50/80 text-blue-800 text-sm font-medium mb-6"
              >
                <span className="relative w-2 h-2 mr-2">
                  <span className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></span>
                  <span className="relative block w-2 h-2 bg-blue-600 rounded-full"></span>
                </span>
                {t.home.badge}
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-[4.2rem] font-bold text-gray-900 mb-6 leading-[1.15]"
              >
                {currentLocale === 'zh' ? (
                  <>
                    將 <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">AI 融入日常工作</span>
                  </>
                ) : (
                  <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">{t.home.title}</span>
                )}
              </motion.h1>
              <p className="text-2xl sm:text-3xl lg:text-4xl text-slate-500 font-medium mb-6">
                {currentLocale === 'zh' ? '加速中小企業AI轉型' : t.home.subtitle}
              </p>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-xl text-gray-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed"
              >
                {t.home.description}
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-8"
              >
                {isDesktop === true ? (
                  <button
                    onClick={() => setIsLineModalOpen(true)}
                    className="btn-primary inline-flex items-center group shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    {t.home.cta.primary}
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </button>
                ) : (
                  <a
                    href="https://line.me/R/ti/p/@365cpgih"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary inline-flex items-center group shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200"
                  >
                    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                    </svg>
                    {t.home.cta.primary}
                    <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                  </a>
                )}

                <Link
                  href="/resources/ai-introduction-guide"
                  className="inline-flex items-center group text-slate-600 hover:text-blue-600 font-medium py-3 px-6 transition-colors duration-200"
                >
                  <span className="w-8 h-8 rounded-full border-2 border-slate-300 group-hover:border-blue-500 flex items-center justify-center mr-2 transition-colors duration-200">
                    <BookOpenIcon className="w-4 h-4" />
                  </span>
                  {t.home.cta.secondary}
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent mb-1">85%</div>
                  <div className="text-gray-600 text-sm">{t.home.stats.autoReply}</div>
                  <div className="text-gray-400 text-xs">{t.home.stats.autoReplySub}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent mb-1">14{currentLocale === 'zh' ? '小時' : 'hrs'}</div>
                  <div className="text-gray-600 text-sm">{t.home.stats.timeSaved}</div>
                  <div className="text-gray-400 text-xs">{t.home.stats.timeSavedSub}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent mb-1">50%</div>
                  <div className="text-gray-600 text-sm">{t.home.stats.costReduction}</div>
                  <div className="text-gray-400 text-xs">{t.home.stats.costReductionSub}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Animation (Desktop) - 包含占位避免 CLS */}
            <div className="hidden lg:block lg:col-span-2 xl:w-[500px] lg:mt-[75px]">
              {isDesktop === null ? (
                // 占位元素：與動畫容器同高，避免版面跳動
                <div className="w-full h-[480px] rounded-xl bg-slate-100/50" />
              ) : isDesktop ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  <HeroScanAnimation locale={currentLocale} />
                </motion.div>
              ) : null}
            </div>
          </div>

          {/* Mobile Animation (below content) - 包含占位避免 CLS */}
          <div className="mt-8 lg:hidden">
            {isDesktop === null ? (
              // 占位元素：與動畫容器同高，避免版面跳動
              <div className="w-full h-[420px] rounded-xl bg-slate-100/50" />
            ) : isDesktop === false ? (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                <HeroScanAnimation locale={currentLocale} />
              </motion.div>
            ) : null}
          </div>
        </div>

        {/* Decorative Blur Circles */}
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-100/10 rounded-full blur-3xl hidden lg:block" aria-hidden="true" />
        <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-slate-200/10 rounded-full blur-3xl hidden lg:block" aria-hidden="true" />
      </section>

      <LineQRModal
        isOpen={isLineModalOpen}
        onClose={() => setIsLineModalOpen(false)}
        locale={currentLocale}
      />
    </>
  );
}
