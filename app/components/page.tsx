'use client';

import { useState, useMemo } from 'react';
import { Search, Filter, X, ChevronRight, Sparkles } from 'lucide-react';
import ComponentCard from '@/components/ui/ComponentCard';
import { components, categories, Category } from '@/data/components';

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'all'>('all');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    components.forEach((c) => c.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter components based on search and filters
  const filteredComponents = useMemo(() => {
    return components.filter((component) => {
      // Search filter
      const matchesSearch =
        searchQuery === '' ||
        component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        component.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );

      // Category filter
      const matchesCategory =
        selectedCategory === 'all' || component.category === selectedCategory;

      // Tags filter
      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => component.tags.includes(tag));

      return matchesSearch && matchesCategory && matchesTags;
    });
  }, [searchQuery, selectedCategory, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedTags([]);
  };

  const hasActiveFilters = selectedCategory !== 'all' || selectedTags.length > 0 || searchQuery;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
            <span>Home</span>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">Components</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Browse Components
          </h1>
          <p className="text-lg text-gray-600">
            Explore our collection of {components.length} production-ready UI components
          </p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              {/* Mobile Filter Toggle */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="p-5 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                      Filters
                    </h3>
                    {hasActiveFilters && (
                      <button
                        onClick={clearFilters}
                        className="text-xs text-primary-600 hover:text-primary-700 font-medium"
                      >
                        Clear all
                      </button>
                    )}
                  </div>
                </div>

                {/* Categories */}
                <div className="p-5">
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Categories
                  </h4>
                  <div className="space-y-1">
                    <button
                      onClick={() => setSelectedCategory('all')}
                      className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                        selectedCategory === 'all'
                          ? 'bg-primary-50 text-primary-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      All Components
                    </button>
                    {categories.map((category) => (
                      <button
                        key={category.name}
                        onClick={() => setSelectedCategory(category.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                          selectedCategory === category.name
                            ? 'bg-primary-50 text-primary-700 font-medium'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {category.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="p-5 border-t border-gray-200">
                  <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wider mb-3">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {allTags.map((tag) => (
                      <button
                        key={tag}
                        onClick={() => toggleTag(tag)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors ${
                          selectedTags.includes(tag)
                            ? 'bg-primary-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                        }`}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Info Card */}
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg border border-primary-200 p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-white rounded-lg">
                    <Sparkles className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">
                      Need a custom component?
                    </h4>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      Can&apos;t find what you&apos;re looking for? Request a custom component.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Mobile Filters Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden fixed bottom-6 right-6 z-50 px-5 py-3 bg-primary-600 text-white rounded-full shadow-lg hover:bg-primary-700 transition-colors flex items-center gap-2"
          >
            <Filter className="h-5 w-5" />
            <span className="font-medium">Filters</span>
          </button>

          {/* Main Content */}
          <div className="flex-1 min-w-0">
            {/* Search Bar */}
            <div className="mb-8">
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search components by name, description, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-12 py-3.5 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm placeholder:text-gray-500 shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                )}
              </div>
            </div>

            {/* Active Filters */}
            {hasActiveFilters && (
              <div className="mb-6 flex flex-wrap items-center gap-2">
                <span className="text-sm text-gray-600 font-medium">Active filters:</span>
                {selectedCategory !== 'all' && (
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-md text-sm font-medium flex items-center gap-2">
                    {categories.find((c) => c.name === selectedCategory)?.label}
                    <button onClick={() => setSelectedCategory('all')}>
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                )}
                {selectedTags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium flex items-center gap-2"
                  >
                    {tag}
                    <button onClick={() => toggleTag(tag)}>
                      <X className="h-3.5 w-3.5" />
                    </button>
                  </span>
                ))}
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-sm text-gray-600">
                Showing{' '}
                <span className="font-semibold text-gray-900">
                  {filteredComponents.length}
                </span>{' '}
                {filteredComponents.length === 1 ? 'component' : 'components'}
              </p>
            </div>

            {/* Components Grid */}
            {filteredComponents.length > 0 ? (
              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredComponents.map((component) => (
                  <ComponentCard key={component.id} component={component} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white rounded-lg border border-gray-200">
                <div className="max-w-md mx-auto">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No components found
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Try adjusting your search or filters to find what you&apos;re looking for.
                  </p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-2.5 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
                  >
                    Clear all filters
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
