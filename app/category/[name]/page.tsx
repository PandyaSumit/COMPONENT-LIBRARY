import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { components, categories, Category } from '@/data/components';
import ComponentCard from '@/components/ui/ComponentCard';

export async function generateStaticParams() {
  return categories.map((category) => ({
    name: category.name,
  }));
}

interface PageProps {
  params: Promise<{
    name: string;
  }>;
}

export default async function CategoryPage({ params }: PageProps) {
  const resolvedParams = await params;
  const category = categories.find((c) => c.name === resolvedParams.name);

  if (!category) {
    notFound();
  }

  const categoryComponents = components.filter(
    (c) => c.category === category.name
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Link
            href="/components"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-6 font-medium"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to All Components
          </Link>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {category.label}
          </h1>
          <p className="text-xl text-gray-600">{category.description}</p>

          <div className="mt-6">
            <p className="text-gray-600">
              <span className="font-semibold text-gray-900">
                {categoryComponents.length}
              </span>{' '}
              {categoryComponents.length === 1 ? 'component' : 'components'}{' '}
              available
            </p>
          </div>
        </div>
      </div>

      {/* Components Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {categoryComponents.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryComponents.map((component) => (
              <ComponentCard key={component.id} component={component} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-4">
              No components in this category yet
            </p>
            <Link
              href="/components"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Browse all components
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
