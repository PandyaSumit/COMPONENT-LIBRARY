'use client';

import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Component } from '@/data/components';
import ComponentCardPreview from './ComponentCardPreview';

interface ComponentCardProps {
  component: Component;
}

export default function ComponentCard({ component }: ComponentCardProps) {
  return (
    <Link href={`/component/${component.id}`}>
      <div className="group bg-white rounded-xl border border-neutral-200 overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Live Component Preview */}
        <div className="relative aspect-[4/3] border-b border-neutral-200 overflow-hidden">
          <ComponentCardPreview htmlCode={component.htmlCode} cssCode={component.cssCode} />

          {/* Status Badge - Only show if new */}
          {component.isNew && (
            <div className="absolute top-3 left-3">
              <div className="px-2.5 py-1 bg-primary-600 text-white text-xs font-semibold rounded-md shadow-sm flex items-center gap-1 animate-fadeInScale">
                <Sparkles className="h-3 w-3" />
                New
              </div>
            </div>
          )}

          {/* Hover Arrow Indicator */}
          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="p-2 bg-white rounded-full shadow-md">
              <ArrowRight className="h-4 w-4 text-primary-600" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex-1 flex flex-col">
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="text-base font-semibold text-neutral-900 group-hover:text-primary-600 transition-colors leading-snug">
              {component.name}
            </h3>
          </div>

          <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-2 flex-1">
            {component.description}
          </p>

          {/* Category Badge */}
          <div className="flex items-center justify-between pt-3 border-t border-neutral-100">
            <span className="px-2.5 py-1 bg-neutral-100 text-neutral-700 text-xs font-medium rounded-md capitalize">
              {component.category}
            </span>
            <span className="text-xs text-neutral-400 font-medium group-hover:text-primary-600 transition-colors">
              View Details →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
