import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ChevronRight, Tag, Calendar, Sparkles, Info, Lightbulb } from 'lucide-react';
import { components } from '@/data/components';
import ComponentPreview from '@/components/ui/ComponentPreview';
import CodeDisplay from '@/components/ui/CodeDisplay';
import { formatDate } from '@/lib/utils';

export async function generateStaticParams() {
  return components.map((component) => ({
    id: component.id,
  }));
}

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ComponentDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const component = components.find((c) => c.id === resolvedParams.id);

  if (!component) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/components" className="hover:text-gray-900 transition-colors">
              Components
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">{component.name}</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              {/* Title and Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {component.name}
                </h1>
                {component.isNew && (
                  <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-semibold rounded-md flex items-center gap-1">
                    <Sparkles className="h-3 w-3" />
                    New
                  </span>
                )}
                {component.popular && (
                  <span className="px-2.5 py-1 bg-orange-500 text-white text-xs font-semibold rounded-md">
                    Popular
                  </span>
                )}
              </div>

              {/* Description */}
              <p className="text-lg text-gray-600 mb-6 leading-relaxed max-w-3xl">
                {component.description}
              </p>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-sm">
                <div className="flex items-center gap-2 text-gray-600">
                  <Tag className="h-4 w-4" />
                  <span className="font-medium text-primary-600 capitalize">
                    {component.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {formatDate(component.updatedAt)}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {component.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-md border border-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg border border-primary-200 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">
                  Quick Start
                </h3>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Copy the code below and paste it into your project. Customize the colors and spacing to match your design.
                </p>
                <Link
                  href="#code"
                  className="block w-full px-4 py-2 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors text-center"
                >
                  View Code
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Preview Section */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Preview</h2>
              <p className="text-gray-600">
                Interactive preview with responsive controls
              </p>
            </div>
          </div>
          <ComponentPreview htmlCode={component.htmlCode} />
        </section>

        {/* Code Section */}
        <section id="code" className="mb-16 scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Code</h2>
            <p className="text-gray-600">
              Choose your framework and copy the code
            </p>
          </div>

          <div className="space-y-6">
            {/* HTML */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">HTML + Tailwind CSS</h3>
                  <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-medium rounded">
                    HTML
                  </span>
                </div>
              </div>
              <div className="p-0">
                <CodeDisplay code={component.htmlCode} language="html" />
              </div>
            </div>

            {/* React */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">React Component</h3>
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs font-medium rounded">
                    JSX
                  </span>
                </div>
              </div>
              <div className="p-0">
                <CodeDisplay code={component.reactCode} language="jsx" />
              </div>
            </div>

            {/* Vue */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-semibold text-gray-900">Vue Component</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                    Vue
                  </span>
                </div>
              </div>
              <div className="p-0">
                <CodeDisplay code={component.vueCode} language="vue" />
              </div>
            </div>
          </div>
        </section>

        {/* Information Cards */}
        <section className="grid lg:grid-cols-2 gap-6 mb-16">
          {/* Usage Instructions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-blue-50 rounded-lg">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Usage Instructions
                </h3>
                <p className="text-sm text-gray-600">
                  How to integrate this component
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{component.usage}</p>
          </div>

          {/* Customization Tips */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 bg-amber-50 rounded-lg">
                <Lightbulb className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  Customization Tips
                </h3>
                <p className="text-sm text-gray-600">
                  Make it your own
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{component.customizationTips}</p>
          </div>
        </section>

        {/* Dependencies */}
        {component.dependencies.length > 0 && (
          <section className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Dependencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {component.dependencies.map((dep) => (
                <code
                  key={dep}
                  className="px-3 py-1.5 bg-gray-50 text-gray-800 rounded-md font-mono text-sm border border-gray-200"
                >
                  {dep}
                </code>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
