import Link from 'next/link';
import { Eye, Code } from 'lucide-react';
import { Component } from '@/data/components';

interface ComponentCardProps {
  component: Component;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all group">
      {/* Thumbnail */}
      <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Code className="h-16 w-16 text-gray-400" />
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link
            href={`/component/${component.id}`}
            className="px-4 py-2 bg-white text-gray-900 rounded-lg font-medium hover:bg-gray-100 transition-colors flex items-center gap-2"
          >
            <Eye className="h-4 w-4" />
            Preview
          </Link>
          <Link
            href={`/component/${component.id}#code`}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
          >
            <Code className="h-4 w-4" />
            Code
          </Link>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {component.isNew && (
            <span className="px-2 py-1 bg-green-500 text-white text-xs font-semibold rounded">
              New
            </span>
          )}
          {component.popular && (
            <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-semibold rounded">
              Popular
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
            {component.name}
          </h3>
          <span className="px-2 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded">
            {component.category}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{component.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {component.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
