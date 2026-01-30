'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon, ClipboardDocumentIcon, CheckIcon } from '@heroicons/react/24/outline';

interface LineQRModalProps {
  isOpen: boolean;
  onClose: () => void;
  locale: string;
}

const LINE_ID = '@365cpgih';
const LINE_URL = 'https://line.me/R/ti/p/@365cpgih';
const LINE_QR_URL = 'https://qr-official.line.me/gs/M_365cpgih_GW.png';

const texts: Record<string, { title: string; subtitle: string; copyHint: string; copied: string; openApp: string }> = {
  zh: {
    title: '加入 LINE 官方帳號',
    subtitle: '掃描 QR Code 或搜尋 LINE ID 立即諮詢',
    copyHint: '複製 LINE ID',
    copied: '已複製！',
    openApp: '用手機開啟 LINE',
  },
  en: {
    title: 'Add LINE Official Account',
    subtitle: 'Scan QR Code or search LINE ID to consult',
    copyHint: 'Copy LINE ID',
    copied: 'Copied!',
    openApp: 'Open LINE on mobile',
  },
  ja: {
    title: 'LINE公式アカウントを追加',
    subtitle: 'QRコードをスキャンまたはLINE IDで検索',
    copyHint: 'LINE IDをコピー',
    copied: 'コピーしました！',
    openApp: 'スマホでLINEを開く',
  },
};

export default function LineQRModal({ isOpen, onClose, locale }: LineQRModalProps) {
  const [copied, setCopied] = useState(false);
  const t = texts[locale] || texts.zh;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(LINE_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#06C755] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{t.title}</h3>
                  <p className="text-gray-500 text-xs">{t.subtitle}</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <XMarkIcon className="w-5 h-5 text-gray-400" />
              </button>
            </div>

            {/* QR Code */}
            <div className="p-6 flex flex-col items-center">
              <div className="w-48 h-48 bg-white border-2 border-gray-100 rounded-xl p-2 mb-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={LINE_QR_URL}
                  alt="LINE QR Code"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* LINE ID */}
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                <span className="font-mono font-medium text-gray-700">{LINE_ID}</span>
                {copied ? (
                  <CheckIcon className="w-4 h-4 text-green-500" />
                ) : (
                  <ClipboardDocumentIcon className="w-4 h-4 text-gray-400" />
                )}
                <span className="text-gray-500">{copied ? t.copied : t.copyHint}</span>
              </button>
            </div>

            {/* Footer */}
            <div className="px-6 pb-6">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center py-3 bg-[#06C755] hover:bg-[#05b34c] text-white font-medium rounded-xl transition-colors"
              >
                {t.openApp}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
