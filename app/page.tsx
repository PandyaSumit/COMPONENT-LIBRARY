import Link from 'next/link';
import { ArrowRight, Code2, Zap, Copy, Palette, Sparkles, Check, ChevronRight, Grid3x3, Layers, Box, Star, Rocket, Shield } from 'lucide-react';
import { components, categories } from '@/data';

export default function Home() {
  const featuredComponents = components.filter((c) => c.featured);
  const stats = [
    { label: 'Components', value: '200+', icon: Box },
    { label: 'Categories', value: '11', icon: Grid3x3 },
    { label: 'Frameworks', value: '3', icon: Layers },
    { label: 'Free Forever', value: '100%', icon: Star },
  ];

  const features = [
    {
      icon: Copy,
      title: 'Copy & Paste',
      description: 'One-click copy for all components. Get the code you need instantly in HTML, React, or Vue.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Code2,
      title: 'Production Ready',
      description: 'All components are tested, accessible, and ready for production use in your projects.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Palette,
      title: 'Fully Customizable',
      description: 'Built with Tailwind CSS utility classes. Customize colors, spacing, and more with ease.',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const highlights = [
    'Responsive design out of the box',
    'Accessibility-first approach',
    'Dark mode support',
    'TypeScript definitions',
    'Regular updates',
    'Active community',
  ];

  return (
    <div className="bg-white">
      {/* Hero Section - Killer Aesthetic */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:64px_64px]" />
        
        {/* Multiple floating gradient orbs with animation */}
        <div className="absolute -top-24 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-200 to-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-24 left-1/3 w-96 h-96 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <div className="text-center max-w-4xl mx-auto">
            {/* Floating Badge with glow effect */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full text-neutral-700 text-sm font-medium mb-10 border border-neutral-200/60 shadow-lg shadow-blue-100/50 hover:shadow-xl hover:shadow-blue-200/50 hover:scale-105 transition-all duration-300">
              <div className="relative">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping" />
              </div>
              <Sparkles className="h-3.5 w-3.5 text-yellow-500" />
              <span className="text-xs font-semibold bg-gradient-to-r from-neutral-700 to-neutral-900 bg-clip-text text-transparent">200+ Production-Ready Components</span>
            </div>

            {/* Main Heading with gradient animation */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-neutral-900 mb-8 leading-[1.05] tracking-tight">
              Build faster with
              <br />
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
                  beautiful components
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 blur-2xl -z-10 opacity-50" />
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-xl sm:text-2xl text-neutral-600 mb-12 max-w-3xl mx-auto leading-relaxed font-normal">
              A comprehensive library of production-ready UI components. 
              <br className="hidden sm:block" />
              <span className="text-neutral-700 font-medium">Copy, paste, and ship faster than ever before.</span>
            </p>

            {/* CTA Buttons with premium effects */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
              <Link
                href="/components"
                className="group relative inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-900/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Browse Components</span>
                <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#features"
                className="inline-flex items-center px-8 py-4 bg-white/80 backdrop-blur-xl text-neutral-700 rounded-xl font-semibold hover:bg-white transition-all duration-300 border border-neutral-200/60 hover:border-neutral-300 hover:shadow-lg hover:scale-105"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            {/* Highlights with icons */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center text-sm text-neutral-600">
              {highlights.slice(0, 3).map((highlight, index) => (
                <div key={index} className="flex items-center gap-2 group cursor-default">
                  <div className="w-5 h-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="font-medium group-hover:text-neutral-900 transition-colors">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Stats Section - Glassmorphic */}
      <section className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={stat.label} 
                  className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-6 border border-neutral-200/60 hover:border-neutral-300 hover:bg-white/80 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/50"
                >
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                  <Icon className="h-6 w-6 text-neutral-400 mb-3 group-hover:text-neutral-600 transition-colors" />
                  <div className="text-4xl font-bold bg-gradient-to-br from-neutral-900 to-neutral-700 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-neutral-600 font-medium text-sm">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section - Premium Cards */}
      <section id="features" className="py-24 sm:py-32 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-gradient-to-r from-pink-100 to-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        
        <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 rounded-full text-neutral-600 text-sm font-medium mb-6">
              <Rocket className="h-4 w-4" />
              <span>Features</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              Everything you need
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
              Professional components designed for developers who value speed and quality
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index} 
                  className="group relative bg-white/80 backdrop-blur-xl rounded-2xl p-8 border border-neutral-200/60 hover:border-neutral-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-200/50"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Gradient glow on hover */}
                  <div className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                  
                  <div className="relative">
                    <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                    </div>
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-neutral-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section - Modern Grid */}
      <section className="py-24 sm:py-32 bg-white relative">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-neutral-100 rounded-full text-neutral-600 text-sm font-medium mb-6">
              <Grid3x3 className="h-4 w-4" />
              <span>Categories</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold text-neutral-900 mb-6 tracking-tight">
              Browse by category
            </h2>
            <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
              Explore our comprehensive collection of UI components
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.slice(0, 9).map((category, index) => (
              <Link
                key={category.name}
                href={`/category/${category.name}`}
                className="group relative bg-gradient-to-br from-white to-slate-50/50 rounded-xl p-6 border border-neutral-200/60 hover:border-neutral-300 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-neutral-200/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {/* Hover gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-lg font-bold text-neutral-900 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {category.label}
                    </h3>
                    <div className="w-8 h-8 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                      <ChevronRight className="h-4 w-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/components"
              className="group relative inline-flex items-center px-8 py-4 bg-neutral-900 text-white rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neutral-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">View All Components</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium Finish */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-br from-slate-900 via-neutral-900 to-slate-900 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-xl rounded-full text-white/80 text-sm font-medium mb-8 border border-white/20">
            <Shield className="h-4 w-4" />
            <span>Free Forever</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Ready to build something{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              amazing?
            </span>
          </h2>
          <p className="text-xl text-white/70 mb-10 leading-relaxed">
            Start browsing our component library and speed up your development workflow today
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/components"
              className="group relative inline-flex items-center px-8 py-4 bg-white text-neutral-900 rounded-xl font-semibold overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-white/20"
            >
              <span className="relative z-10">Get Started Now</span>
              <ArrowRight className="relative z-10 ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="https://github.com"
              className="inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-xl text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:scale-105"
            >
              View on GitHub
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
