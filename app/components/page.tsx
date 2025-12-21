'use client';

import { useState } from 'react';
import ComponentCard from '@/components/ui/ComponentCard';
import Sidebar from '@/components/layout/Sidebar';
import { components, Category } from '@/data';

export default function ComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');

  // Filter components based on selected category
  const filteredComponents = selectedCategory === 'all' 
    ? components 
    : components.filter((c) => c.category === selectedCategory);

  // Get category display name
  const getCategoryTitle = () => {
    if (selectedCategory === 'all') return 'All Components';
    const category = components.find(c => c.category === selectedCategory);
    return category ? category.category.charAt(0).toUpperCase() + category.category.slice(1) : 'Components';
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar Navigation */}
      <Sidebar 
        selectedCategory={selectedCategory} 
        onCategoryChange={setSelectedCategory} 
      />

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-0">
        <div className="container-premium py-12">
          {/* Header */}
          <div className="mb-10 animate-fadeIn">
            <h1 className="text-4xl font-bold text-neutral-900 mb-3">
              {getCategoryTitle()}
            </h1>
            <p className="text-lg text-neutral-600">
              {filteredComponents.length} {filteredComponents.length === 1 ? 'component' : 'components'} ready to use
            </p>
          </div>

          {/* Components Grid */}
          {filteredComponents.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
              {filteredComponents.map((component, index) => (
                <div 
                  key={component.id}
                  className="animate-fadeIn"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <ComponentCard component={component} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-neutral-200 animate-fadeIn">
              <div className="max-w-md mx-auto">
                <div className="w-20 h-20 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-5">
                  <svg 
                    className="h-10 w-10 text-neutral-400" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  No components yet
                </h3>
                <p className="text-neutral-600">
                  Components for this category are coming soon.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
