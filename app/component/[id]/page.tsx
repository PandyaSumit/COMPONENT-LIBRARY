import { notFound } from 'next/navigation';
import Link from 'next/link';
import {
  ChevronRight,
  Tag,
  Calendar,
  Sparkles,
  Info,
  Lightbulb,
} from 'lucide-react';

import { components } from '@/data';
import ComponentPreview from '@/components/ui/ComponentPreview';
import CodeTabs from '@/components/ui/CodeTabs';
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
  const { id } = await params;
  const component = components.find((c) => c.id === id);

  if (!component) notFound();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/components" className="hover:text-gray-900">
              Components
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-gray-900 font-medium">
              {component.name}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h1 className="text-3xl font-bold text-gray-900">
                  {component.name}
                </h1>

                {component.isNew && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-semibold rounded-md bg-green-500 text-white">
                    <Sparkles className="h-3 w-3" />
                    New
                  </span>
                )}

                {component.popular && (
                  <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-orange-500 text-white">
                    Popular
                  </span>
                )}
              </div>

              <p className="text-lg text-gray-600 max-w-3xl leading-relaxed mb-6">
                {component.description}
              </p>

              {/* Meta */}
              <div className="flex flex-wrap gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span className="capitalize text-primary-600 font-medium">
                    {component.category}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {formatDate(component.updatedAt)}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {component.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-gray-100 border border-gray-200 rounded-md text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Quick Start */}
            <aside className="lg:w-72">
              <div className="rounded-xl border border-primary-200 bg-gradient-to-br from-primary-50 to-secondary-50 p-5">
                <h3 className="text-sm font-semibold text-gray-900 mb-2">
                  Quick Start
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Preview the component, switch frameworks, and copy the code
                  directly into your project.
                </p>
                <Link
                  href="#code"
                  className="block text-center px-4 py-2 rounded-md bg-primary-600 text-white text-sm font-medium hover:bg-primary-700 transition"
                >
                  View Code
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Preview */}
        <section className="mb-20">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Preview
            </h2>
            <p className="text-gray-600">
              Interactive preview with responsive controls
            </p>
          </div>

          <ComponentPreview htmlCode={component.htmlCode} category={component.category} colors={component.colors} />
        </section>

        {/* Code */}
        <section id="code" className="mb-20 scroll-mt-24">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Code
            </h2>
            <p className="text-gray-600">
              Switch frameworks without scrolling
            </p>
          </div>

          <CodeTabs
            html={component.htmlCode}
            react={component.reactCode}
            vue={component.vueCode}
          />
        </section>

        {/* Info Cards */}
        <section className="grid lg:grid-cols-2 gap-6 mb-20">
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-50">
                <Info className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Usage Instructions
                </h3>
                <p className="text-sm text-gray-600">
                  How to integrate this component
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {component.usage}
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex items-start gap-3 mb-4">
              <div className="p-2 rounded-lg bg-amber-50">
                <Lightbulb className="h-5 w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Customization Tips
                </h3>
                <p className="text-sm text-gray-600">
                  Make it your own
                </p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">
              {component.customizationTips}
            </p>
          </div>
        </section>

        {/* Dependencies */}
        {component.dependencies.length > 0 && (
          <section className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Dependencies
            </h3>
            <div className="flex flex-wrap gap-3">
              {component.dependencies.map((dep) => (
                <code
                  key={dep}
                  className="px-3 py-1.5 rounded-md text-sm font-mono bg-gray-50 border border-gray-200 text-gray-800"
                >
                  {dep}
                </code>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
