'use client';

import { useState } from 'react';
import CodeDisplay from './CodeDisplay';

type Framework = 'html' | 'react' | 'vue';

interface CodeTabsProps {
  html: string;
  react: string;
  vue: string;
}

export default function CodeTabs({ html, react, vue }: CodeTabsProps) {
  const [activeTab, setActiveTab] = useState<Framework>('html');

  const tabs: { id: Framework; label: string; language: string; code: string; color: string }[] = [
    { id: 'html', label: 'HTML', language: 'html', code: html, color: 'orange' },
    { id: 'react', label: 'React', language: 'jsx', code: react, color: 'blue' },
    { id: 'vue', label: 'Vue', language: 'vue', code: vue, color: 'green' },
  ];

  const activeTabData = tabs.find((tab) => tab.id === activeTab)!;

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
      {/* Tab Headers */}
      <div className="flex items-center gap-1 px-4 py-3 bg-gray-50 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === tab.id
                ? tab.color === 'orange'
                  ? 'bg-orange-100 text-orange-700 shadow-sm'
                  : tab.color === 'blue'
                  ? 'bg-blue-100 text-blue-700 shadow-sm'
                  : 'bg-green-100 text-green-700 shadow-sm'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Code Display */}
      <div className="p-0">
        <CodeDisplay code={activeTabData.code} language={activeTabData.language} />
      </div>
    </div>
  );
}
