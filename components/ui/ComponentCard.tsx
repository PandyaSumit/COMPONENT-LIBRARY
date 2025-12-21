import Link from 'next/link';
import { Eye, Code, Sparkles } from 'lucide-react';
import { Component } from '@/data/components';

interface ComponentCardProps {
  component: Component;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/component/${component.id}`}>
      <div className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:border-primary-500 hover:shadow-lg transition-all duration-200 h-full flex flex-col">
        {/* Thumbnail */}
        <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 via-white to-gray-50 border-b border-gray-200 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-8">
              <Code className="h-12 w-12 text-gray-300 mx-auto mb-2" />
              <p className="text-xs text-gray-400 font-medium">Component Preview</p>
            </div>
          </div>

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-200">
            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
              <div className="flex-1 px-3 py-2 bg-white/95 backdrop-blur-sm text-gray-900 rounded-md font-medium text-sm hover:bg-white transition-colors flex items-center justify-center gap-2">
                <Eye className="h-4 w-4" />
                <span>Preview</span>
              </div>
              <div className="px-3 py-2 bg-primary-600 text-white rounded-md font-medium text-sm hover:bg-primary-700 transition-colors flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Code</span>
              </div>
            </div>
          </div>

          {/* Status Badges */}
          <div className="absolute top-3 left-3 flex gap-2">
            {component.isNew && (
              <div className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-md shadow-sm flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                New
              </div>
            )}
            {component.popular && (
              <div className="px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md shadow-sm">
                Popular
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors leading-snug">
              {component.name}
            </h3>
            <span className="px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded capitalize whitespace-nowrap">
              {component.category}
            </span>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {component.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-3 border-t border-gray-100">
            {component.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 bg-gray-50 text-gray-600 text-xs rounded border border-gray-200"
              >
                {tag}
              </span>
            ))}
            {component.tags.length > 3 && (
              <span className="px-2 py-0.5 text-gray-400 text-xs">
                +{component.tags.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
