import Link from 'next/link';
import { ArrowRight, Code2, Zap, Copy, Palette, Sparkles } from 'lucide-react';
import { components, categories } from '@/data';

export default function Home() {
  const featuredComponents = components.filter((c) => c.featured);
  const stats = [
    { label: 'Components', value: '200+' },
    { label: 'Categories', value: '11' },
    { label: 'Frameworks', value: '3' },
    { label: 'Free Forever', value: '100%' },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800">
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:32px_32px]" />
        <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <Sparkles className="h-4 w-4" />
              <span>200+ Production-Ready Components</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Beautiful Components for{' '}
              <span className="bg-gradient-to-r from-secondary-200 to-white bg-clip-text text-transparent">
                Modern Web Apps
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Copy and paste production-ready UI components built with Tailwind CSS.
              Save hours of development time with our comprehensive library.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/components"
                className="group inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Browse Components
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-all backdrop-blur-sm border border-white/20"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>

        {/* Decorative gradient orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-secondary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-5xl font-bold bg-gradient-to-br from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need to Build Faster
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Professional components designed for developers who value speed and quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Copy className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Copy & Paste</h3>
              <p className="text-gray-600 leading-relaxed">
                One-click copy for all components. Get the code you need instantly in HTML, React, or Vue.
              </p>
            </div>

            <div className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-secondary-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Code2 className="h-7 w-7 text-secondary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Production Ready</h3>
              <p className="text-gray-600 leading-relaxed">
                All components are tested, accessible, and ready for production use in your projects.
              </p>
            </div>

            <div className="group bg-white rounded-lg p-8 border border-gray-200 hover:border-primary-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <Palette className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Fully Customizable</h3>
              <p className="text-gray-600 leading-relaxed">
                Built with Tailwind CSS utility classes. Customize colors, spacing, and more with ease.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Browse by Category</h2>
            <p className="text-xl text-gray-600">
              Explore our comprehensive collection of UI components
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 9).map((category) => (
              <Link
                key={category.name}
                href={`/category/${category.name}`}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-200 hover:shadow-xl hover:border-primary-300 transition-all group"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {category.label}
                </h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/components"
              className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
            >
              View All Components
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Start browsing our component library and speed up your development workflow today
          </p>
          <Link
            href="/components"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Now
            <Zap className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
