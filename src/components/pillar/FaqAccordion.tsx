'use client';

import { useState } from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((faq, index) => (
        <div
          key={faq.question}
          className="border border-gray-200 rounded-lg overflow-hidden"
        >
          <button
            type="button"
            id={`faq-question-${index}`}
            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            aria-expanded={expandedFaq === index}
            aria-controls={`faq-answer-${index}`}
            className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
          >
            <span className="font-semibold text-gray-900">{faq.question}</span>
            <ChevronRightIcon
              className={`w-5 h-5 text-gray-500 transition-transform ${
                expandedFaq === index ? 'rotate-90' : ''
              }`}
            />
          </button>
          <div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            hidden={expandedFaq !== index}
            className="px-6 py-4 bg-gray-50 border-t border-gray-200"
          >
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
