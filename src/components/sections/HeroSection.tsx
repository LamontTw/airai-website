'use client';

import { useState, useEffect, useMemo, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ArrowRightIcon, PlayIcon, CheckIcon } from '@heroicons/react/24/outline';
import VideoModal from '@/components/ui/VideoModal';
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
      { id: 'code', icon: 'code', title: '老舊系統', subtitle: '不用砍掉重練', desc: 'AI 自動串接整合' },
      { id: 'chat', icon: 'chat', title: '客服爆量', subtitle: '不再漏接訊息', desc: '智能分流秒回覆' },
      { id: 'doc', icon: 'doc', title: 'Excel 地獄', subtitle: '告別手動輸入', desc: '自動化報表生成' },
    ],
    en: [
      { id: 'code', icon: 'code', title: 'Legacy Systems', subtitle: 'No need to rebuild', desc: 'AI auto-integration' },
      { id: 'chat', icon: 'chat', title: 'Support Overload', subtitle: 'Never miss a message', desc: 'Smart routing & replies' },
      { id: 'doc', icon: 'doc', title: 'Excel Hell', subtitle: 'No more manual entry', desc: 'Automated reporting' },
    ],
    ja: [
      { id: 'code', icon: 'code', title: 'レガシーシステム', subtitle: '作り直し不要', desc: 'AI自動連携' },
      { id: 'chat', icon: 'chat', title: 'サポート過負荷', subtitle: '取りこぼしゼロ', desc: 'スマート振り分け' },
      { id: 'doc', icon: 'doc', title: 'Excel地獄', subtitle: '手入力から解放', desc: '自動レポート作成' },
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
      className="absolute -top-2 -right-2 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/30"
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
  const [phase, setPhase] = useState<'scatter' | 'scanning' | 'ordered'>('scatter');
  const [scanProgress, setScanProgress] = useState(0);
  const icons = useMemo(() => generateLayeredIcons(45), []);
  const categories = useMemo(() => getCategories(locale), [locale]);
  const rafIdRef = useRef<number | null>(null);
  const timeoutIdRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
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
  }, []);

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

  const ctaText = {
    zh: { title: '這些問題，AI 都能解決', subtitle: '不需要懂技術，我們幫你從頭打造', free: '免費評估', noTech: '無需技術背景' },
    en: { title: 'AI Can Solve All These', subtitle: 'No tech skills needed. We build it for you.', free: 'Free Assessment', noTech: 'No Tech Required' },
    ja: { title: 'AIがすべて解決します', subtitle: '技術知識不要。私たちが構築します。', free: '無料診断', noTech: '技術不要' },
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
              <span className="text-xs text-slate-400 tracking-widest uppercase">Say Goodbye To</span>
            </motion.div>

            {/* 三張卡片 */}
            <div className="absolute top-[15%] left-0 right-0 flex justify-center gap-2 md:gap-4 px-2">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  className="relative bg-white rounded-xl p-3 md:p-4 shadow-lg shadow-slate-200/50 border border-slate-100 w-[100px] md:w-[130px]"
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
                  <p className="text-center text-[10px] md:text-xs text-emerald-600 font-medium mb-1">
                    {cat.subtitle}
                  </p>
                  <p className="text-center text-[10px] md:text-xs text-slate-500 hidden md:block">
                    {cat.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTA 區塊 */}
            <motion.div
              className="absolute bottom-4 left-0 right-0 px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="max-w-sm mx-auto bg-white rounded-xl p-4 text-center shadow-xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {ctaText[locale].title}
                </h3>
                <p className="text-slate-500 text-xs mb-3">
                  {ctaText[locale].subtitle}
                </p>

                <motion.div
                  className="flex justify-center gap-4 text-[10px] text-slate-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 }}
                >
                  <span className="flex items-center gap-1">
                    <CheckIcon className="w-3 h-3 text-emerald-500" />
                    {ctaText[locale].free}
                  </span>
                  <span className="flex items-center gap-1">
                    <CheckIcon className="w-3 h-3 text-emerald-500" />
                    {ctaText[locale].noTech}
                  </span>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* 階段指示 */}
      <div className="absolute top-3 right-3 text-[10px] font-mono">
        <span className={isOrdered ? 'text-slate-400' : 'text-slate-500'}>
          {phase === 'scatter' && '● CHAOS'}
          {phase === 'scanning' && `◐ ${Math.round(scanProgress * 100)}%`}
          {phase === 'ordered' && '✓ SOLVED'}
        </span>
      </div>
    </motion.div>
  );
}

// ========================================
// Main HeroSection Component
// ========================================
export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const pathname = usePathname();
  const isDesktop = useIsDesktop();

  // 判斷當前語言並取得翻譯
  const getCurrentLocale = (): 'zh' | 'en' | 'ja' => {
    if (pathname.startsWith('/en')) return 'en';
    if (pathname.startsWith('/ja')) return 'ja';
    return 'zh';
  };

  const currentLocale = getCurrentLocale();
  const t = getTranslations(currentLocale);

  // 設定是否使用影片功能
  const useVideoModal = false;

  return (
    <>
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden pt-16 lg:pt-20">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMzNzM3MzciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSI+PC9jaXJjbGU+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>

        <div className="container-max relative z-10 px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content (SEO Critical) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-6"
              >
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                {t.home.badge}
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
              >
                {currentLocale === 'zh' ? (
                  <>
                    將 <span className="gradient-text">AI 融入日常工作</span>
                    <br />
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">
                      加速中小企業數位轉型
                    </span>
                  </>
                ) : (
                  <>
                    <span className="gradient-text">{t.home.title}</span>
                    <br />
                    <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-700">
                      {t.home.subtitle}
                    </span>
                  </>
                )}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed"
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
                <Link
                  href={currentLocale === 'zh' ? "/contact" : `/${currentLocale}/contact`}
                  className="btn-primary inline-flex items-center group"
                >
                  {t.home.cta.primary}
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                {useVideoModal ? (
                  <button
                    onClick={() => setIsVideoOpen(true)}
                    className="btn-secondary inline-flex items-center group"
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    {t.home.cta.secondary}
                  </button>
                ) : (
                  <Link
                    href={currentLocale === 'zh' ? "/cases" : `/${currentLocale}/cases`}
                    className="btn-secondary inline-flex items-center group"
                  >
                    <PlayIcon className="w-5 h-5 mr-2" />
                    {t.home.cta.secondary}
                  </Link>
                )}
              </motion.div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0"
              >
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-600 mb-1">85%</div>
                  <div className="text-gray-600 text-xs">{t.home.stats.autoReply}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-600 mb-1">14{currentLocale === 'zh' ? '小時' : 'hrs'}</div>
                  <div className="text-gray-600 text-xs">{t.home.stats.timeSaved}</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50%</div>
                  <div className="text-gray-600 text-xs">{t.home.stats.costReduction}</div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right: Animation (Desktop) - 包含占位避免 CLS */}
            <div className="hidden lg:block">
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

        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-20 hidden lg:block"
          aria-hidden="true"
        />
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute bottom-20 left-10 w-16 h-16 bg-indigo-200 rounded-full opacity-20 hidden lg:block"
          aria-hidden="true"
        />
      </section>

      {/* 影片彈出組件 */}
      {useVideoModal && (
        <VideoModal
          isOpen={isVideoOpen}
          onClose={() => setIsVideoOpen(false)}
          videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title={currentLocale === 'zh' ? "智流科技成功案例展示" : "AIRAI Success Stories"}
          description={currentLocale === 'zh' ? "了解我們如何幫助台灣中小企業實現AI轉型" : "Learn how we help Taiwan SMEs achieve AI transformation"}
        />
      )}
    </>
  );
}
