'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutGrid, 
  Navigation, 
  MousePointer2, 
  CreditCard, 
  FileText, 
  Megaphone, 
  Sparkles, 
  MessageSquare, 
  DollarSign, 
  Footprints,
  MoreHorizontal,
  X
} from 'lucide-react';
import { Category, categories } from '@/data/components';
import { useState } from 'react';

const categoryIcons: Record<Category, any> = {
  hero: Sparkles,
  navigation: Navigation,
  buttons: MousePointer2,
  cards: CreditCard,
  forms: FileText,
  cta: Megaphone,
  features: LayoutGrid,
  testimonials: MessageSquare,
  pricing: DollarSign,
  footers: Footprints,
  other: MoreHorizontal,
};

interface SidebarProps {
  selectedCategory: Category | 'all';
  onCategoryChange: (category: Category | 'all') => void;
}

export default function Sidebar({ selectedCategory, onCategoryChange }: SidebarProps) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleCategoryClick = (category: Category | 'all') => {
    onCategoryChange(category);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fadeIn"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen w-72 bg-white border-r border-neutral-200
          flex flex-col z-50 transition-transform duration-300 lg:translate-x-0
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <div>
            <h2 className="text-lg font-bold text-neutral-900">Components</h2>
            <p className="text-xs text-neutral-500 mt-0.5">Browse by category</p>
          </div>
          <button
            onClick={() => setIsMobileOpen(false)}
            className="lg:hidden p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-neutral-600" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <div className="space-y-1">
            {/* All Components */}
            <button
              onClick={() => handleCategoryClick('all')}
              className={`
                w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                transition-all duration-200 group
                ${selectedCategory === 'all'
                  ? 'bg-primary-50 text-primary-700 shadow-sm'
                  : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                }
              `}
            >
              <div className={`
                p-1.5 rounded-md transition-colors
                ${selectedCategory === 'all'
                  ? 'bg-primary-100 text-primary-600'
                  : 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200'
                }
              `}>
                <LayoutGrid className="h-4 w-4" />
              </div>
              <span>All Components</span>
            </button>

            {/* Divider */}
            <div className="py-2">
              <div className="h-px bg-neutral-200" />
            </div>

            {/* Category List */}
            {categories.map((category) => {
              const Icon = categoryIcons[category.name];
              const isActive = selectedCategory === category.name;
              
              return (
                <button
                  key={category.name}
                  onClick={() => handleCategoryClick(category.name)}
                  className={`
                    w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium
                    transition-all duration-200 group
                    ${isActive
                      ? 'bg-primary-50 text-primary-700 shadow-sm'
                      : 'text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900'
                    }
                  `}
                >
                  <div className={`
                    p-1.5 rounded-md transition-colors
                    ${isActive
                      ? 'bg-primary-100 text-primary-600'
                      : 'bg-neutral-100 text-neutral-600 group-hover:bg-neutral-200'
                    }
                  `}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="flex-1 text-left">{category.label}</span>
                </button>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-neutral-200">
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-4 border border-primary-100">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <Sparkles className="h-4 w-4 text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-semibold text-neutral-900 mb-1">
                  Need Help?
                </h4>
                <p className="text-xs text-neutral-600 leading-relaxed">
                  Can&apos;t find what you&apos;re looking for?
                </p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden fixed bottom-6 left-6 z-40 p-4 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-all hover:scale-105 active:scale-95"
      >
        <LayoutGrid className="h-5 w-5" />
      </button>
    </>
  );
}
