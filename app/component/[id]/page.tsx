import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Tag, Calendar } from 'lucide-react';
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            href="/components"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Components
          </Link>

          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h1 className="text-4xl font-bold text-gray-900">
                  {component.name}
                </h1>
                {component.isNew && (
                  <span className="px-3 py-1 bg-green-500 text-white text-sm font-semibold rounded">
                    New
                  </span>
                )}
                {component.popular && (
                  <span className="px-3 py-1 bg-yellow-500 text-white text-sm font-semibold rounded">
                    Popular
                  </span>
                )}
              </div>
              <p className="text-xl text-gray-600 mb-4">{component.description}</p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  <span className="font-medium text-primary-600">
                    {component.category}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>Updated {formatDate(component.updatedAt)}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-6">
            {component.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Preview Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Live Preview</h2>
          <ComponentPreview htmlCode={component.htmlCode} />
        </div>

        {/* Code Section */}
        <div id="code" className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Code</h2>

          <div className="space-y-8">
            {/* HTML */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">HTML</h3>
              <CodeDisplay code={component.htmlCode} language="html" />
            </div>

            {/* React */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">React</h3>
              <CodeDisplay code={component.reactCode} language="jsx" />
            </div>

            {/* Vue */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Vue</h3>
              <CodeDisplay code={component.vueCode} language="vue" />
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Usage */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Usage Instructions
            </h3>
            <p className="text-gray-600">{component.usage}</p>
          </div>

          {/* Customization */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Customization Tips
            </h3>
            <p className="text-gray-600">{component.customizationTips}</p>
          </div>
        </div>

        {/* Dependencies */}
        {component.dependencies.length > 0 && (
          <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Dependencies
            </h3>
            <div className="flex flex-wrap gap-2">
              {component.dependencies.map((dep) => (
                <code
                  key={dep}
                  className="px-3 py-1 bg-gray-100 text-gray-800 rounded font-mono text-sm"
                >
                  {dep}
                </code>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
