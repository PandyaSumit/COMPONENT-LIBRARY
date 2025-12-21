'use client';

import { useState } from 'react';

type Framework = 'html' | 'react' | 'vue';

interface FrameworkTabsProps {
  htmlCode: string;
  reactCode: string;
  vueCode: string;
  onTabChange?: (framework: Framework) => void;
}

export default function FrameworkTabs({
  htmlCode,
  reactCode,
  vueCode,
  onTabChange,
}: FrameworkTabsProps) {
  const [activeTab, setActiveTab] = useState<Framework>('html');

  const tabs = [
    { id: 'html' as Framework, label: 'HTML', code: htmlCode },
    { id: 'react' as Framework, label: 'React', code: reactCode },
    { id: 'vue' as Framework, label: 'Vue', code: vueCode },
  ];

  const handleTabClick = (framework: Framework) => {
    setActiveTab(framework);
    onTabChange?.(framework);
  };

  const currentCode = tabs.find((tab) => tab.id === activeTab)?.code || '';

  return (
    <div>
      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleTabClick(tab.id)}
            className={`px-6 py-3 font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-primary-600 border-b-2 border-primary-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Current Code */}
      <div>{currentCode}</div>
    </div>
  );
}
