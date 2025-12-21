import { Component } from '../components';

export const heroComponents: Component[] = [
  {
    id: 'gradient-hero-1',
    name: 'Gradient Hero with CTA',
    description: 'Premium responsive hero section with gradient background, glow effects, dark mode support, and call-to-action buttons',
    category: 'hero',
    tags: ['gradient', 'cta', 'modern', 'responsive', 'premium', 'dark-mode'],
    thumbnail: '/images/hero-gradient-1.png',
    featured: true,
    popular: true,
    isNew: true,

    htmlCode: `
<section class="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800 dark:from-primary-900 dark:via-secondary-800 dark:to-primary-950">
  <!-- Glow -->
  <div class="absolute inset-0 -z-10">
    <div class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 dark:bg-white/10 blur-[140px]"></div>
  </div>

  <div class="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
    <span class="mb-4 inline-flex items-center rounded-full bg-white/15 dark:bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
      🚀 Launch faster
    </span>

    <h1 class="mb-6 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
      Build Faster with
      <span class="block bg-gradient-to-r from-white to-secondary-200 dark:from-white dark:to-secondary-300 bg-clip-text text-transparent">
        Beautiful Components
      </span>
    </h1>

    <p class="mb-10 max-w-2xl text-base text-white/90 dark:text-white/80 sm:text-lg md:text-xl">
      Copy and paste production-ready UI components built with Tailwind CSS.
      Save hours of development time.
    </p>

    <div class="flex flex-col gap-4 sm:flex-row">
      <a href="/components"
        class="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary-700 shadow-lg transition hover:bg-gray-100 dark:bg-white dark:text-primary-800 dark:hover:bg-gray-200">
        Browse Components
      </a>
      <a href="#features"
        class="inline-flex items-center justify-center rounded-lg bg-white/15 dark:bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/25 dark:hover:bg-white/20">
        Learn More
      </a>
    </div>
  </div>
</section>
`,

    reactCode: `
export default function GradientHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800 dark:from-primary-900 dark:via-secondary-800 dark:to-primary-950">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 dark:bg-white/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
        <span className="mb-4 inline-flex items-center rounded-full bg-white/15 dark:bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
          🚀 Launch faster
        </span>

        <h1 className="mb-6 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Build Faster with
          <span className="block bg-gradient-to-r from-white to-secondary-200 dark:from-white dark:to-secondary-300 bg-clip-text text-transparent">
            Beautiful Components
          </span>
        </h1>

        <p className="mb-10 max-w-2xl text-base text-white/90 dark:text-white/80 sm:text-lg md:text-xl">
          Copy and paste production-ready UI components built with Tailwind CSS.
          Save hours of development time.
        </p>

        <div className="flex flex-col gap-4 sm:flex-row">
          <a
            href="/components"
            className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary-700 shadow-lg transition hover:bg-gray-100 dark:bg-white dark:text-primary-800 dark:hover:bg-gray-200"
          >
            Browse Components
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-lg bg-white/15 dark:bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/25 dark:hover:bg-white/20"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
`,

    vueCode: `
<template>
  <section class="relative overflow-hidden bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800 dark:from-primary-900 dark:via-secondary-800 dark:to-primary-950">
    <div class="absolute inset-0 -z-10">
      <div class="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 dark:bg-white/10 blur-[140px]"></div>
    </div>

    <div class="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-4 sm:px-6 lg:px-8 text-center">
      <span class="mb-4 inline-flex items-center rounded-full bg-white/15 dark:bg-white/10 px-4 py-1 text-sm font-medium text-white backdrop-blur">
        🚀 Launch faster
      </span>

      <h1 class="mb-6 max-w-5xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
        Build Faster with
        <span class="block bg-gradient-to-r from-white to-secondary-200 dark:from-white dark:to-secondary-300 bg-clip-text text-transparent">
          Beautiful Components
        </span>
      </h1>

      <p class="mb-10 max-w-2xl text-base text-white/90 dark:text-white/80 sm:text-lg md:text-xl">
        Copy and paste production-ready UI components built with Tailwind CSS.
        Save hours of development time.
      </p>

      <div class="flex flex-col gap-4 sm:flex-row">
        <a href="/components"
          class="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 font-semibold text-primary-700 shadow-lg transition hover:bg-gray-100 dark:bg-white dark:text-primary-800 dark:hover:bg-gray-200">
          Browse Components
        </a>
        <a href="#features"
          class="inline-flex items-center justify-center rounded-lg bg-white/15 dark:bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/25 dark:hover:bg-white/20">
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely presentational
</script>
`,

    dependencies: ['tailwindcss'],
    usage: 'Place this hero at the top of a landing page. Optimized for both light and dark themes.',
    customizationTips: 'Tweak gradient colors, glow opacity, and text scale for brand alignment or ultra-wide screens.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  }
  ,
  {
    id: 'dark-neon-hero-2',
    name: 'Dark Neon Split Hero',
    description: 'Premium dark mode hero with vibrant neon accents, animated grid, and professional interface mockup',
    category: 'hero',
    tags: ['dark', 'neon', 'split-layout', 'modern', 'premium', 'animated'],
    thumbnail: '/images/hero-dark-neon-2.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-slate-950 overflow-hidden">
  <!-- Animated grid background -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

  <!-- Multi-layer neon glow effects -->
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
    <div class="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
    <div class="absolute top-20 left-20 w-72 h-72 bg-cyan-400/30 rounded-full blur-[100px]"></div>
    <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 right-20 w-72 h-72 bg-emerald-400/30 rounded-full blur-[100px]"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
  </div>

  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
    <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
      <!-- Left content -->
      <div class="space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
          <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">v2.0 Just Launched</span>
        </div>

        <!-- Heading -->
        <div class="space-y-4">
          <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
            Design the
            <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 animate-gradient">
              Future
            </span>
          </h1>
          <div class="flex items-center gap-3 text-cyan-400">
            <div class="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
            <span class="text-sm font-medium tracking-wider uppercase">Next-Gen Design System</span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
          Create stunning, performant interfaces with our revolutionary design system. Built for developers who demand excellence.
        </p>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-6 py-6">
          <div class="space-y-1">
            <div class="text-2xl sm:text-3xl font-bold text-white">10x</div>
            <div class="text-xs sm:text-sm text-slate-400">Faster</div>
          </div>
          <div class="space-y-1">
            <div class="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
            <div class="text-xs sm:text-sm text-slate-400">Uptime</div>
          </div>
          <div class="space-y-1">
            <div class="text-2xl sm:text-3xl font-bold text-white">500K+</div>
            <div class="text-xs sm:text-sm text-slate-400">Users</div>
          </div>
        </div>

        <!-- CTAs -->
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#" class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
            <span class="relative z-10 flex items-center justify-center gap-2">
              Get Started Free
              <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          <a href="#" class="group px-8 py-4 bg-white/5 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Watch Demo
          </a>
        </div>
      </div>

      <!-- Right mockup -->
      <div class="relative lg:h-[600px] flex items-center justify-center">
        <!-- Glow behind mockup -->
        <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-3xl"></div>

        <!-- Main mockup container -->
        <div class="relative w-full max-w-lg">
          <!-- Window chrome -->
          <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
            <!-- Title bar -->
            <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div class="flex items-center gap-2">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div class="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div class="text-xs text-slate-400 font-mono">dashboard.app</div>
            </div>

            <!-- Content area -->
            <div class="p-6 space-y-6">
              <!-- Header -->
              <div class="flex items-center justify-between">
                <div class="space-y-2">
                  <div class="h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded w-32"></div>
                  <div class="h-2 bg-slate-700 rounded w-24"></div>
                </div>
                <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500"></div>
              </div>

              <!-- Stats cards -->
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/20">
                  <div class="h-2 bg-slate-700 rounded w-16 mb-3"></div>
                  <div class="h-6 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded w-20"></div>
                </div>
                <div class="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/20">
                  <div class="h-2 bg-slate-700 rounded w-16 mb-3"></div>
                  <div class="h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded w-20"></div>
                </div>
              </div>

              <!-- Chart area -->
              <div class="bg-slate-800/30 rounded-xl p-6 border border-white/5">
                <div class="flex items-end justify-between h-32 gap-2">
                  <div class="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 60%"></div>
                  <div class="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t" style="height: 80%"></div>
                  <div class="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 45%"></div>
                  <div class="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t" style="height: 90%"></div>
                  <div class="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 70%"></div>
                </div>
              </div>

              <!-- Footer actions -->
              <div class="flex gap-3">
                <div class="flex-1 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg"></div>
                <div class="w-10 h-10 bg-slate-700 rounded-lg"></div>
              </div>
            </div>
          </div>

          <!-- Floating accent card -->
          <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-purple-500/90 to-pink-500/90 rounded-2xl border border-white/20 backdrop-blur-xl p-4 shadow-xl">
            <div class="space-y-2">
              <div class="w-8 h-8 bg-white/20 rounded-lg"></div>
              <div class="h-2 bg-white/30 rounded w-16"></div>
              <div class="h-2 bg-white/20 rounded w-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function DarkNeonHero() {
  return (
    <section className="relative min-h-screen bg-slate-950 overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      {/* Multi-layer neon glow effects */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-400/30 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-400/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
              <svg className="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">v2.0 Just Launched</span>
            </div>

            {/* Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
                Design the
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
                  Future
                </span>
              </h1>
              <div className="flex items-center gap-3 text-cyan-400">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Next-Gen Design System</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
              Create stunning, performant interfaces with our revolutionary design system. Built for developers who demand excellence.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">10x</div>
                <div className="text-xs sm:text-sm text-slate-400">Faster</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
                <div className="text-xs sm:text-sm text-slate-400">Uptime</div>
              </div>
              <div className="space-y-1">
                <div className="text-2xl sm:text-3xl font-bold text-white">500K+</div>
                <div className="text-xs sm:text-sm text-slate-400">Users</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </a>
              <a href="#" className="group px-8 py-4 bg-white/5 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Watch Demo
              </a>
            </div>
          </div>

          {/* Right mockup */}
          <div className="relative lg:h-[600px] flex items-center justify-center">
            {/* Glow behind mockup */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-3xl"></div>

            {/* Main mockup container */}
            <div className="relative w-full max-w-lg">
              {/* Window chrome */}
              <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
                {/* Title bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">dashboard.app</div>
                </div>

                {/* Content area */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="space-y-2">
                      <div className="h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded w-32"></div>
                      <div className="h-2 bg-slate-700 rounded w-24"></div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500"></div>
                  </div>

                  {/* Stats cards */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/20">
                      <div className="h-2 bg-slate-700 rounded w-16 mb-3"></div>
                      <div className="h-6 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded w-20"></div>
                    </div>
                    <div className="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/20">
                      <div className="h-2 bg-slate-700 rounded w-16 mb-3"></div>
                      <div className="h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded w-20"></div>
                    </div>
                  </div>

                  {/* Chart area */}
                  <div className="bg-slate-800/30 rounded-xl p-6 border border-white/5">
                    <div className="flex items-end justify-between h-32 gap-2">
                      <div className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style={{height: '60%'}}></div>
                      <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t" style={{height: '80%'}}></div>
                      <div className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style={{height: '45%'}}></div>
                      <div className="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t" style={{height: '90%'}}></div>
                      <div className="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style={{height: '70%'}}></div>
                    </div>
                  </div>

                  {/* Footer actions */}
                  <div className="flex gap-3">
                    <div className="flex-1 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg"></div>
                    <div className="w-10 h-10 bg-slate-700 rounded-lg"></div>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-purple-500/90 to-pink-500/90 rounded-2xl border border-white/20 backdrop-blur-xl p-4 shadow-xl">
                <div className="space-y-2">
                  <div className="w-8 h-8 bg-white/20 rounded-lg"></div>
                  <div className="h-2 bg-white/30 rounded w-16"></div>
                  <div className="h-2 bg-white/20 rounded w-12"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-slate-950 overflow-hidden">
    <!-- Animated grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

    <!-- Multi-layer neon glow effects -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
      <div class="absolute -top-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
      <div class="absolute top-20 left-20 w-72 h-72 bg-cyan-400/30 rounded-full blur-[100px]"></div>
      <div class="absolute -bottom-40 -right-40 w-80 h-80 bg-emerald-500/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-20 w-72 h-72 bg-emerald-400/30 rounded-full blur-[100px]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-screen">
        <!-- Left content -->
        <div class="space-y-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-emerald-500/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
            <svg class="w-4 h-4 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span class="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">v2.0 Just Launched</span>
          </div>

          <!-- Heading -->
          <div class="space-y-4">
            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tight">
              Design the
              <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400">
                Future
              </span>
            </h1>
            <div class="flex items-center gap-3 text-cyan-400">
              <div class="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400"></div>
              <span class="text-sm font-medium tracking-wider uppercase">Next-Gen Design System</span>
            </div>
          </div>

          <!-- Description -->
          <p class="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-xl">
            Create stunning, performant interfaces with our revolutionary design system. Built for developers who demand excellence.
          </p>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 py-6">
            <div class="space-y-1">
              <div class="text-2xl sm:text-3xl font-bold text-white">10x</div>
              <div class="text-xs sm:text-sm text-slate-400">Faster</div>
            </div>
            <div class="space-y-1">
              <div class="text-2xl sm:text-3xl font-bold text-white">99.9%</div>
              <div class="text-xs sm:text-sm text-slate-400">Uptime</div>
            </div>
            <div class="space-y-1">
              <div class="text-2xl sm:text-3xl font-bold text-white">500K+</div>
              <div class="text-xs sm:text-sm text-slate-400">Users</div>
            </div>
          </div>

          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#" class="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white rounded-xl font-semibold overflow-hidden transition-all hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-105 active:scale-95">
              <span class="relative z-10 flex items-center justify-center gap-2">
                Get Started Free
                <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
              <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a href="#" class="group px-8 py-4 bg-white/5 text-white rounded-xl font-semibold backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-2">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              Watch Demo
            </a>
          </div>
        </div>

        <!-- Right mockup (same as React but with v-bind for styles if needed) -->
        <div class="relative lg:h-[600px] flex items-center justify-center">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 blur-3xl rounded-3xl"></div>

          <div class="relative w-full max-w-lg">
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-2xl border border-white/10 shadow-2xl backdrop-blur-xl overflow-hidden">
              <div class="flex items-center justify-between px-6 py-4 border-b border-white/10">
                <div class="flex items-center gap-2">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div class="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div class="text-xs text-slate-400 font-mono">dashboard.app</div>
              </div>

              <div class="p-6 space-y-6">
                <div class="flex items-center justify-between">
                  <div class="space-y-2">
                    <div class="h-3 bg-gradient-to-r from-cyan-400 to-emerald-400 rounded w-32"></div>
                    <div class="h-2 bg-slate-700 rounded w-24"></div>
                  </div>
                  <div class="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-emerald-500"></div>
                </div>

                <div class="grid grid-cols-2 gap-4">
                  <div class="bg-slate-800/50 rounded-xl p-4 border border-cyan-500/20">
                    <div class="h-2 bg-slate-700 rounded w-16 mb-3"></div>
                    <div class="h-6 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded w-20"></div>
                  </div>
                  <div class="bg-slate-800/50 rounded-xl p-4 border border-emerald-500/20">
                    <div class="h-2 bg-slate-700 rounded w-16 mb-3"></div>
                    <div class="h-6 bg-gradient-to-r from-emerald-400 to-emerald-500 rounded w-20"></div>
                  </div>
                </div>

                <div class="bg-slate-800/30 rounded-xl p-6 border border-white/5">
                  <div class="flex items-end justify-between h-32 gap-2">
                    <div class="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 60%"></div>
                    <div class="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t" style="height: 80%"></div>
                    <div class="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 45%"></div>
                    <div class="w-full bg-gradient-to-t from-emerald-500 to-emerald-400 rounded-t" style="height: 90%"></div>
                    <div class="w-full bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-t" style="height: 70%"></div>
                  </div>
                </div>

                <div class="flex gap-3">
                  <div class="flex-1 h-10 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-lg"></div>
                  <div class="w-10 h-10 bg-slate-700 rounded-lg"></div>
                </div>
              </div>
            </div>

            <div class="absolute -right-6 -bottom-6 w-32 h-32 bg-gradient-to-br from-purple-500/90 to-pink-500/90 rounded-2xl border border-white/20 backdrop-blur-xl p-4 shadow-xl">
              <div class="space-y-2">
                <div class="w-8 h-8 bg-white/20 rounded-lg"></div>
                <div class="h-2 bg-white/30 rounded w-16"></div>
                <div class="h-2 bg-white/20 rounded w-12"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Component ready to use
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Premium dark hero perfect for SaaS products, tech startups, and modern applications. Features animated grid background, multi-layer neon effects, stats display, and professional dashboard mockup.',
    customizationTips: 'Customize the neon colors (cyan/emerald/purple) to match your brand. Adjust stats values and labels. Modify the mockup content to showcase your actual product. Add CSS animations for the gradient text and glow effects for extra polish.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'glassmorphic-hero-3',
    name: 'Glassmorphic Hero',
    description: 'Modern hero with frosted glass effects and soft blur backgrounds',
    category: 'hero',
    tags: ['glassmorphism', 'modern', 'blur', 'premium', 'minimal'],
    thumbnail: '/images/hero-glass-3.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden">
  <!-- Floating gradient orbs -->
  <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
  <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
  <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
    <div class="w-full">
      <!-- Glass card -->
      <div class="max-w-4xl mx-auto backdrop-blur-xl bg-white/30 rounded-3xl p-12 border border-white/50 shadow-2xl">
        <div class="text-center">
          <div class="inline-block px-6 py-2 bg-white/40 backdrop-blur-sm rounded-full mb-6 border border-white/60">
            <span class="text-purple-900 font-semibold">🎨 Premium Design System</span>
          </div>
          <h1 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Beautiful by
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Default
            </span>
          </h1>
          <p class="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of aesthetics and functionality with our glassmorphic design components.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              Explore Components
            </a>
            <a href="#" class="px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-900 rounded-xl font-semibold hover:bg-white/70 transition-colors border border-white/60">
              Documentation
            </a>
          </div>
        </div>
      </div>
      
      <!-- Feature pills -->
      <div class="flex flex-wrap gap-4 justify-center mt-12">
        <div class="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
          <span class="text-gray-800 font-medium">⚡ Lightning Fast</span>
        </div>
        <div class="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
          <span class="text-gray-800 font-medium">🎯 Pixel Perfect</span>
        </div>
        <div class="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
          <span class="text-gray-800 font-medium">📱 Fully Responsive</span>
        </div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function GlassmorphicHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden">
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
        <div className="w-full">
          {/* Glass card */}
          <div className="max-w-4xl mx-auto backdrop-blur-xl bg-white/30 rounded-3xl p-12 border border-white/50 shadow-2xl">
            <div className="text-center">
              <div className="inline-block px-6 py-2 bg-white/40 backdrop-blur-sm rounded-full mb-6 border border-white/60">
                <span className="text-purple-900 font-semibold">🎨 Premium Design System</span>
              </div>
              <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
                Beautiful by
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Default
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
                Experience the perfect blend of aesthetics and functionality with our glassmorphic design components.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                  Explore Components
                </a>
                <a href="#" className="px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-900 rounded-xl font-semibold hover:bg-white/70 transition-colors border border-white/60">
                  Documentation
                </a>
              </div>
            </div>
          </div>
          
          {/* Feature pills */}
          <div className="flex flex-wrap gap-4 justify-center mt-12">
            <div className="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
              <span className="text-gray-800 font-medium">⚡ Lightning Fast</span>
            </div>
            <div className="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
              <span className="text-gray-800 font-medium">🎯 Pixel Perfect</span>
            </div>
            <div className="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
              <span className="text-gray-800 font-medium">📱 Fully Responsive</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-blue-100 overflow-hidden">
    <!-- Floating gradient orbs -->
    <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-1/3 right-1/4 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute bottom-1/4 left-1/3 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
      <div class="w-full">
        <!-- Glass card -->
        <div class="max-w-4xl mx-auto backdrop-blur-xl bg-white/30 rounded-3xl p-12 border border-white/50 shadow-2xl">
          <div class="text-center">
            <div class="inline-block px-6 py-2 bg-white/40 backdrop-blur-sm rounded-full mb-6 border border-white/60">
              <span class="text-purple-900 font-semibold">🎨 Premium Design System</span>
            </div>
            <h1 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Beautiful by
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                Default
              </span>
            </h1>
            <p class="text-xl text-gray-700 mb-10 max-w-2xl mx-auto leading-relaxed">
              Experience the perfect blend of aesthetics and functionality with our glassmorphic design components.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#" class="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Explore Components
              </a>
              <a href="#" class="px-8 py-4 bg-white/50 backdrop-blur-sm text-gray-900 rounded-xl font-semibold hover:bg-white/70 transition-colors border border-white/60">
                Documentation
              </a>
            </div>
          </div>
        </div>
        
        <!-- Feature pills -->
        <div class="flex flex-wrap gap-4 justify-center mt-12">
          <div class="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
            <span class="text-gray-800 font-medium">⚡ Lightning Fast</span>
          </div>
          <div class="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
            <span class="text-gray-800 font-medium">🎯 Pixel Perfect</span>
          </div>
          <div class="px-6 py-3 bg-white/40 backdrop-blur-sm rounded-full border border-white/60">
            <span class="text-gray-800 font-medium">📱 Fully Responsive</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Add custom animations for the blob effect in your Tailwind config. Perfect for creative agencies and design-focused products.',
    customizationTips: 'Customize the background gradient colors and glass opacity. Add more feature pills or adjust the blur intensity.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'minimalist-hero-4',
    name: 'Minimalist Grid Hero',
    description: 'Clean white hero with subtle grid pattern and colorful gradient accents',
    category: 'hero',
    tags: ['minimalist', 'clean', 'grid', 'apple-inspired', 'modern'],
    thumbnail: '/images/hero-minimal-4.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-white overflow-hidden">
  <!-- Subtle grid background -->
  <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
  
  <!-- Gradient blob accents -->
  <div class="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl opacity-20"></div>
  <div class="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
    <div class="w-full text-center">
      <h1 class="text-7xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
        Innovation
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
          Simplified
        </span>
      </h1>
      <p class="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
        The most intuitive way to build modern applications. Clean, fast, and beautifully designed.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
        <a href="#" class="px-10 py-5 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors text-lg">
          Start Building
        </a>
        <a href="#" class="px-10 py-5 bg-gray-100 text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-colors text-lg">
          Watch Demo
        </a>
      </div>
      
      <!-- Product showcase -->
      <div class="max-w-5xl mx-auto">
        <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-2 shadow-2xl">
          <div class="bg-white rounded-2xl p-8 border border-gray-200">
            <div class="grid grid-cols-3 gap-4 mb-4">
              <div class="h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
              <div class="h-3 bg-gray-200 rounded-full"></div>
              <div class="h-3 bg-gray-200 rounded-full"></div>
            </div>
            <div class="h-64 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function MinimalistHero() {
  return (
    <section className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Gradient blob accents */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
        <div className="w-full text-center">
          <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
            Innovation
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
              Simplified
            </span>
          </h1>
          <p className="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
            The most intuitive way to build modern applications. Clean, fast, and beautifully designed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <a href="#" className="px-10 py-5 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors text-lg">
              Start Building
            </a>
            <a href="#" className="px-10 py-5 bg-gray-100 text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-colors text-lg">
              Watch Demo
            </a>
          </div>
          
          {/* Product showcase */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-2 shadow-2xl">
              <div className="bg-white rounded-2xl p-8 border border-gray-200">
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full"></div>
                  <div className="h-3 bg-gray-200 rounded-full"></div>
                </div>
                <div className="h-64 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-white overflow-hidden">
    <!-- Subtle grid background -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
    
    <!-- Gradient blob accents -->
    <div class="absolute top-40 right-20 w-96 h-96 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full blur-3xl opacity-20"></div>
    <div class="absolute bottom-40 left-20 w-96 h-96 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full blur-3xl opacity-20"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
      <div class="w-full text-center">
        <h1 class="text-7xl md:text-8xl font-bold text-gray-900 mb-8 tracking-tight">
          Innovation
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            Simplified
          </span>
        </h1>
        <p class="text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light">
          The most intuitive way to build modern applications. Clean, fast, and beautifully designed.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <a href="#" class="px-10 py-5 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 transition-colors text-lg">
            Start Building
          </a>
          <a href="#" class="px-10 py-5 bg-gray-100 text-gray-900 rounded-2xl font-semibold hover:bg-gray-200 transition-colors text-lg">
            Watch Demo
          </a>
        </div>
        
        <!-- Product showcase -->
        <div class="max-w-5xl mx-auto">
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-2 shadow-2xl">
            <div class="bg-white rounded-2xl p-8 border border-gray-200">
              <div class="grid grid-cols-3 gap-4 mb-4">
                <div class="h-3 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full"></div>
                <div class="h-3 bg-gray-200 rounded-full"></div>
                <div class="h-3 bg-gray-200 rounded-full"></div>
              </div>
              <div class="h-64 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for product launches and SaaS landing pages. The minimalist design puts focus on your product.',
    customizationTips: 'Replace the product showcase with an actual screenshot or video. Adjust gradient colors to match your brand.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'wave-hero-5',
    name: '3D Wave Hero',
    description: 'Immersive hero with 3D wave backgrounds in pastel colors',
    category: 'hero',
    tags: ['3d', 'waves', 'pastel', 'immersive', 'creative'],
    thumbnail: '/images/hero-wave-5.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden flex items-center">
  <!-- Wave layers -->
  <div class="absolute inset-0">
    <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
      <path fill="url(#wave1)" fill-opacity="0.3" d="M0,400 C320,500 640,300 960,400 C1280,500 1440,400 1440,400 L1440,800 L0,800 Z"></path>
      <path fill="url(#wave2)" fill-opacity="0.3" d="M0,500 C360,600 720,400 1080,500 C1440,600 1440,500 1440,500 L1440,800 L0,800 Z"></path>
      <defs>
        <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#818CF8;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#C084FC;stop-opacity:1" />
        </linearGradient>
        <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:#C084FC;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#F472B6;stop-opacity:1" />
        </linearGradient>
      </defs>
    </svg>
  </div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
    <div class="inline-block px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-8 border border-white/80">
      <span class="text-indigo-700 font-semibold">🌊 Next Generation Platform</span>
    </div>
    
    <h1 class="text-7xl md:text-8xl font-bold text-gray-900 mb-8">
      Ride the
      <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        Wave of Innovation
      </span>
    </h1>
    
    <p class="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
      Dive into a world of possibilities with our cutting-edge platform designed for creators and innovators.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href="#" class="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg">
        Get Started Free
      </a>
      <a href="#" class="px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl font-semibold hover:bg-white transition-colors border border-white/80 text-lg">
        See How It Works
      </a>
    </div>
    
    <!-- Stats -->
    <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
        <div class="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
        <div class="text-gray-700 font-medium">Active Users</div>
      </div>
      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
        <div class="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
        <div class="text-gray-700 font-medium">Uptime</div>
      </div>
      <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
        <div class="text-4xl font-bold text-pink-600 mb-2">24/7</div>
        <div class="text-gray-700 font-medium">Support</div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function WaveHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden flex items-center">
      {/* Wave layers */}
      <div className="absolute inset-0">
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
          <path fill="url(#wave1)" fillOpacity="0.3" d="M0,400 C320,500 640,300 960,400 C1280,500 1440,400 1440,400 L1440,800 L0,800 Z"></path>
          <path fill="url(#wave2)" fillOpacity="0.3" d="M0,500 C360,600 720,400 1080,500 C1440,600 1440,500 1440,500 L1440,800 L0,800 Z"></path>
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#818CF8',stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#C084FC',stopOpacity:1}} />
            </linearGradient>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{stopColor:'#C084FC',stopOpacity:1}} />
              <stop offset="100%" style={{stopColor:'#F472B6',stopOpacity:1}} />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
        <div className="inline-block px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-8 border border-white/80">
          <span className="text-indigo-700 font-semibold">🌊 Next Generation Platform</span>
        </div>
        
        <h1 className="text-7xl md:text-8xl font-bold text-gray-900 mb-8">
          Ride the
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
            Wave of Innovation
          </span>
        </h1>
        
        <p className="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Dive into a world of possibilities with our cutting-edge platform designed for creators and innovators.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <a href="#" className="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg">
            Get Started Free
          </a>
          <a href="#" className="px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl font-semibold hover:bg-white transition-colors border border-white/80 text-lg">
            See How It Works
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
            <div className="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
            <div className="text-gray-700 font-medium">Active Users</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
            <div className="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
            <div className="text-gray-700 font-medium">Uptime</div>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
            <div className="text-4xl font-bold text-pink-600 mb-2">24/7</div>
            <div className="text-gray-700 font-medium">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden flex items-center">
    <!-- Wave layers -->
    <div class="absolute inset-0">
      <svg class="absolute bottom-0 w-full h-full" viewBox="0 0 1440 800" preserveAspectRatio="none">
        <path fill="url(#wave1)" fill-opacity="0.3" d="M0,400 C320,500 640,300 960,400 C1280,500 1440,400 1440,400 L1440,800 L0,800 Z"></path>
        <path fill="url(#wave2)" fill-opacity="0.3" d="M0,500 C360,600 720,400 1080,500 C1440,600 1440,500 1440,500 L1440,800 L0,800 Z"></path>
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#818CF8;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#C084FC;stop-opacity:1" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style="stop-color:#C084FC;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#F472B6;stop-opacity:1" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
      <div class="inline-block px-5 py-2 bg-white/60 backdrop-blur-sm rounded-full mb-8 border border-white/80">
        <span class="text-indigo-700 font-semibold">🌊 Next Generation Platform</span>
      </div>
      
      <h1 class="text-7xl md:text-8xl font-bold text-gray-900 mb-8">
        Ride the
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
          Wave of Innovation
        </span>
      </h1>
      
      <p class="text-2xl text-gray-700 mb-12 max-w-3xl mx-auto leading-relaxed">
        Dive into a world of possibilities with our cutting-edge platform designed for creators and innovators.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="#" class="px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transition-all text-lg">
          Get Started Free
        </a>
        <a href="#" class="px-10 py-5 bg-white/80 backdrop-blur-sm text-gray-900 rounded-2xl font-semibold hover:bg-white transition-colors border border-white/80 text-lg">
          See How It Works
        </a>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20">
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
          <div class="text-4xl font-bold text-indigo-600 mb-2">50K+</div>
          <div class="text-gray-700 font-medium">Active Users</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
          <div class="text-4xl font-bold text-purple-600 mb-2">99.9%</div>
          <div class="text-gray-700 font-medium">Uptime</div>
        </div>
        <div class="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/80">
          <div class="text-4xl font-bold text-pink-600 mb-2">24/7</div>
          <div class="text-gray-700 font-medium">Support</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for creative agencies and innovative products. The wave effect creates a dynamic, flowing feel.',
    customizationTips: 'Animate the waves with CSS or JavaScript for extra dynamism. Adjust wave colors and stats to match your metrics.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'gradient-orb-hero-6',
    name: 'Asymmetric Gradient Orb Hero',
    description: 'Bold asymmetric layout with animated gradient sphere, Stripe-inspired',
    category: 'hero',
    tags: ['asymmetric', 'gradient', 'orb', 'stripe-inspired', 'modern'],
    thumbnail: '/images/hero-orb-6.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-black overflow-hidden">
  <!-- Gradient orb -->
  <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 blur-3xl opacity-40"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
    <div class="grid lg:grid-cols-2 gap-16 items-center w-full">
      <!-- Left content -->
      <div>
        <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
          <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-white/80 text-sm font-medium">Now Available</span>
        </div>
        
        <h1 class="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Payments
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
            infrastructure
          </span>
          <span class="block">for the internet</span>
        </h1>
        
        <p class="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
          Millions of companies of all sizes use our platform to accept payments, send payouts, and manage their businesses online.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#" class="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
            Start now →
          </a>
          <a href="#" class="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10 inline-flex items-center justify-center">
            Contact sales
          </a>
        </div>
      </div>
      
      <!-- Right visual -->
      <div class="relative hidden lg:block">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-2xl"></div>
          <div class="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="h-3 w-24 bg-white/20 rounded"></div>
                <div class="h-3 w-16 bg-white/20 rounded"></div>
              </div>
              <div class="h-32 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-lg"></div>
              <div class="grid grid-cols-2 gap-4">
                <div class="h-20 bg-white/10 rounded-lg"></div>
                <div class="h-20 bg-white/10 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function GradientOrbHero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Gradient orb */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 blur-3xl opacity-40"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-white/80 text-sm font-medium">Now Available</span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Payments
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
                infrastructure
              </span>
              <span className="block">for the internet</span>
            </h1>
            
            <p className="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
              Millions of companies of all sizes use our platform to accept payments, send payouts, and manage their businesses online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                Start now →
              </a>
              <a href="#" className="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10 inline-flex items-center justify-center">
                Contact sales
              </a>
            </div>
          </div>
          
          {/* Right visual */}
          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-2xl"></div>
              <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="h-3 w-24 bg-white/20 rounded"></div>
                    <div className="h-3 w-16 bg-white/20 rounded"></div>
                  </div>
                  <div className="h-32 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-lg"></div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                    <div className="h-20 bg-white/10 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-black overflow-hidden">
    <!-- Gradient orb -->
    <div class="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600 via-fuchsia-500 to-orange-500 blur-3xl opacity-40"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex items-center min-h-screen">
      <div class="grid lg:grid-cols-2 gap-16 items-center w-full">
        <!-- Left content -->
        <div>
          <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8">
            <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span class="text-white/80 text-sm font-medium">Now Available</span>
          </div>
          
          <h1 class="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Payments
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-400">
              infrastructure
            </span>
            <span class="block">for the internet</span>
          </h1>
          
          <p class="text-xl text-white/70 mb-10 leading-relaxed max-w-lg">
            Millions of companies of all sizes use our platform to accept payments, send payouts, and manage their businesses online.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#" class="px-8 py-4 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Start now →
            </a>
            <a href="#" class="px-8 py-4 bg-white/5 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors border border-white/10 inline-flex items-center justify-center">
              Contact sales
            </a>
          </div>
        </div>
        
        <!-- Right visual -->
        <div class="relative hidden lg:block">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-2xl blur-2xl"></div>
            <div class="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="h-3 w-24 bg-white/20 rounded"></div>
                  <div class="h-3 w-16 bg-white/20 rounded"></div>
                </div>
                <div class="h-32 bg-gradient-to-br from-violet-500/30 to-fuchsia-500/30 rounded-lg"></div>
                <div class="grid grid-cols-2 gap-4">
                  <div class="h-20 bg-white/10 rounded-lg"></div>
                  <div class="h-20 bg-white/10 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for fintech and SaaS platforms. Inspired by Stripe\'s bold, asymmetric design language.',
    customizationTips: 'Adjust the gradient orb colors and position. Replace the visual mockup with actual product screenshots.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'bento-hero-7',
    name: 'Bento Grid Hero',
    description: 'Modern bento-style grid layout with multiple glass cards, Notion-inspired',
    category: 'hero',
    tags: ['bento', 'grid', 'notion-inspired', 'modern', 'cards'],
    thumbnail: '/images/hero-bento-7.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-24">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- Header -->
    <div class="text-center mb-16">
      <h1 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
        Your connected
        <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
          workspace
        </span>
      </h1>
      <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
        Write, plan, and get organized. All in one place. Customize your workspace to fit your needs.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="#" class="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
          Get started free
        </a>
        <a href="#" class="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
          See how it works
        </a>
      </div>
    </div>
    
    <!-- Bento Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
      <!-- Large card -->
      <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-violet-600 rounded-3xl p-8 text-white">
        <h3 class="text-2xl font-bold mb-4">Collaborate in real-time</h3>
        <p class="text-white/90 mb-6">Work together with your team, no matter where they are.</p>
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
          <div class="space-y-3">
            <div class="h-3 bg-white/30 rounded w-3/4"></div>
            <div class="h-3 bg-white/30 rounded w-1/2"></div>
            <div class="h-20 bg-white/20 rounded-lg mt-4"></div>
          </div>
        </div>
      </div>
      
      <!-- Small card 1 -->
      <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
        <div class="text-4xl mb-4">📊</div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Analytics</h3>
        <p class="text-gray-600 text-sm">Track your progress with detailed insights</p>
      </div>
      
      <!-- Small card 2 -->
      <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
        <div class="text-4xl mb-4">🔒</div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Secure</h3>
        <p class="text-gray-600 text-sm">Enterprise-grade security for your data</p>
      </div>
      
      <!-- Medium card -->
      <div class="md:col-span-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 border border-orange-200">
        <h3 class="text-2xl font-bold text-gray-900 mb-4">Powerful integrations</h3>
        <div class="flex gap-3">
          <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
          <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
          <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
          <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
        </div>
      </div>
      
      <!-- Small card 3 -->
      <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
        <div class="text-4xl mb-4">⚡</div>
        <h3 class="text-lg font-bold text-gray-900 mb-2">Fast</h3>
        <p class="text-gray-600 text-sm">Lightning-fast performance</p>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function BentoHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Your connected
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
              workspace
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Write, plan, and get organized. All in one place. Customize your workspace to fit your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#" className="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
              Get started free
            </a>
            <a href="#" className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
              See how it works
            </a>
          </div>
        </div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {/* Large card */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-violet-600 rounded-3xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Collaborate in real-time</h3>
            <p className="text-white/90 mb-6">Work together with your team, no matter where they are.</p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <div className="space-y-3">
                <div className="h-3 bg-white/30 rounded w-3/4"></div>
                <div className="h-3 bg-white/30 rounded w-1/2"></div>
                <div className="h-20 bg-white/20 rounded-lg mt-4"></div>
              </div>
            </div>
          </div>
          
          {/* Small card 1 */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">📊</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Analytics</h3>
            <p className="text-gray-600 text-sm">Track your progress with detailed insights</p>
          </div>
          
          {/* Small card 2 */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Secure</h3>
            <p className="text-gray-600 text-sm">Enterprise-grade security for your data</p>
          </div>
          
          {/* Medium card */}
          <div className="md:col-span-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 border border-orange-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Powerful integrations</h3>
            <div className="flex gap-3">
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
              <div className="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
            </div>
          </div>
          
          {/* Small card 3 */}
          <div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Fast</h3>
            <p className="text-gray-600 text-sm">Lightning-fast performance</p>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-24">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header -->
      <div class="text-center mb-16">
        <h1 class="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
          Your connected
          <span class="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
            workspace
          </span>
        </h1>
        <p class="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Write, plan, and get organized. All in one place. Customize your workspace to fit your needs.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" class="px-8 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors">
            Get started free
          </a>
          <a href="#" class="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold hover:bg-gray-50 transition-colors border border-gray-200">
            See how it works
          </a>
        </div>
      </div>
      
      <!-- Bento Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
        <!-- Large card -->
        <div class="md:col-span-2 md:row-span-2 bg-gradient-to-br from-blue-500 to-violet-600 rounded-3xl p-8 text-white">
          <h3 class="text-2xl font-bold mb-4">Collaborate in real-time</h3>
          <p class="text-white/90 mb-6">Work together with your team, no matter where they are.</p>
          <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div class="space-y-3">
              <div class="h-3 bg-white/30 rounded w-3/4"></div>
              <div class="h-3 bg-white/30 rounded w-1/2"></div>
              <div class="h-20 bg-white/20 rounded-lg mt-4"></div>
            </div>
          </div>
        </div>
        
        <!-- Small card 1 -->
        <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <div class="text-4xl mb-4">📊</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Analytics</h3>
          <p class="text-gray-600 text-sm">Track your progress with detailed insights</p>
        </div>
        
        <!-- Small card 2 -->
        <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <div class="text-4xl mb-4">🔒</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Secure</h3>
          <p class="text-gray-600 text-sm">Enterprise-grade security for your data</p>
        </div>
        
        <!-- Medium card -->
        <div class="md:col-span-2 bg-gradient-to-br from-orange-100 to-pink-100 rounded-3xl p-8 border border-orange-200">
          <h3 class="text-2xl font-bold text-gray-900 mb-4">Powerful integrations</h3>
          <div class="flex gap-3">
            <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
            <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
            <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
            <div class="w-12 h-12 bg-white rounded-xl shadow-sm"></div>
          </div>
        </div>
        
        <!-- Small card 3 -->
        <div class="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm">
          <div class="text-4xl mb-4">⚡</div>
          <h3 class="text-lg font-bold text-gray-900 mb-2">Fast</h3>
          <p class="text-gray-600 text-sm">Lightning-fast performance</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for productivity tools and collaborative platforms. The bento grid showcases multiple features at once.',
    customizationTips: 'Customize the grid cards with your own features. Adjust colors and add icons or images to each card.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'split-screen-hero-8',
    name: 'Split Screen Hero',
    description: '50/50 split with content on one side, stunning visual on the other',
    category: 'hero',
    tags: ['split-screen', '50-50', 'modern', 'visual', 'clean'],
    thumbnail: '/images/hero-split-8.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-white">
  <div class="grid lg:grid-cols-2 min-h-screen">
    <!-- Left content -->
    <div class="flex items-center justify-center p-8 lg:p-16">
      <div class="max-w-xl">
        <div class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6 font-semibold text-sm">
          Introducing v2.0
        </div>
        
        <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Design tools for
          <span class="block text-emerald-600">creative minds</span>
        </h1>
        
        <p class="text-xl text-gray-600 mb-8 leading-relaxed">
          Everything you need to bring your ideas to life. Professional design tools that are powerful yet simple to use.
        </p>
        
        <div class="space-y-4 mb-10">
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-gray-700">Unlimited projects and exports</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-gray-700">Real-time collaboration</span>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <span class="text-gray-700">Advanced design features</span>
          </div>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#" class="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-center">
            Start free trial
          </a>
          <a href="#" class="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-center">
            Watch demo
          </a>
        </div>
      </div>
    </div>
    
    <!-- Right visual -->
    <div class="relative bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center p-8">
      <div class="relative w-full max-w-lg">
        <div class="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
        <div class="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
          <div class="space-y-6">
            <div class="flex items-center gap-4">
              <div class="w-16 h-16 bg-white/30 rounded-2xl"></div>
              <div class="flex-1 space-y-2">
                <div class="h-4 bg-white/40 rounded w-3/4"></div>
                <div class="h-3 bg-white/30 rounded w-1/2"></div>
              </div>
            </div>
            <div class="h-48 bg-white/30 rounded-2xl"></div>
            <div class="grid grid-cols-3 gap-4">
              <div class="h-20 bg-white/30 rounded-xl"></div>
              <div class="h-20 bg-white/30 rounded-xl"></div>
              <div class="h-20 bg-white/30 rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function SplitScreenHero() {
  return (
    <section className="relative min-h-screen bg-white">
      <div className="grid lg:grid-cols-2 min-h-screen">
        {/* Left content */}
        <div className="flex items-center justify-center p-8 lg:p-16">
          <div className="max-w-xl">
            <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6 font-semibold text-sm">
              Introducing v2.0
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Design tools for
              <span className="block text-emerald-600">creative minds</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Everything you need to bring your ideas to life. Professional design tools that are powerful yet simple to use.
            </p>
            
            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Unlimited projects and exports</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Real-time collaboration</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <span className="text-gray-700">Advanced design features</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-center">
                Start free trial
              </a>
              <a href="#" className="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-center">
                Watch demo
              </a>
            </div>
          </div>
        </div>
        
        {/* Right visual */}
        <div className="relative bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center p-8">
          <div className="relative w-full max-w-lg">
            <div className="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/30 rounded-2xl"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-white/40 rounded w-3/4"></div>
                    <div className="h-3 bg-white/30 rounded w-1/2"></div>
                  </div>
                </div>
                <div className="h-48 bg-white/30 rounded-2xl"></div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-20 bg-white/30 rounded-xl"></div>
                  <div className="h-20 bg-white/30 rounded-xl"></div>
                  <div className="h-20 bg-white/30 rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-white">
    <div class="grid lg:grid-cols-2 min-h-screen">
      <!-- Left content -->
      <div class="flex items-center justify-center p-8 lg:p-16">
        <div class="max-w-xl">
          <div class="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full mb-6 font-semibold text-sm">
            Introducing v2.0
          </div>
          
          <h1 class="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Design tools for
            <span class="block text-emerald-600">creative minds</span>
          </h1>
          
          <p class="text-xl text-gray-600 mb-8 leading-relaxed">
            Everything you need to bring your ideas to life. Professional design tools that are powerful yet simple to use.
          </p>
          
          <div class="space-y-4 mb-10">
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Unlimited projects and exports</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Real-time collaboration</span>
            </div>
            <div class="flex items-center gap-3">
              <div class="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
                <svg class="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <span class="text-gray-700">Advanced design features</span>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="#" class="px-8 py-4 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors text-center">
              Start free trial
            </a>
            <a href="#" class="px-8 py-4 bg-gray-100 text-gray-900 rounded-xl font-semibold hover:bg-gray-200 transition-colors text-center">
              Watch demo
            </a>
          </div>
        </div>
      </div>
      
      <!-- Right visual -->
      <div class="relative bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center p-8">
        <div class="relative w-full max-w-lg">
          <div class="absolute inset-0 bg-white/10 rounded-3xl blur-3xl"></div>
          <div class="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
            <div class="space-y-6">
              <div class="flex items-center gap-4">
                <div class="w-16 h-16 bg-white/30 rounded-2xl"></div>
                <div class="flex-1 space-y-2">
                  <div class="h-4 bg-white/40 rounded w-3/4"></div>
                  <div class="h-3 bg-white/30 rounded w-1/2"></div>
                </div>
              </div>
              <div class="h-48 bg-white/30 rounded-2xl"></div>
              <div class="grid grid-cols-3 gap-4">
                <div class="h-20 bg-white/30 rounded-xl"></div>
                <div class="h-20 bg-white/30 rounded-xl"></div>
                <div class="h-20 bg-white/30 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for design tools, creative software, and visual-focused products. The 50/50 split creates perfect balance.',
    customizationTips: 'Replace the right side mockup with actual product screenshots or videos. Customize the feature list and colors.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'animated-gradient-hero-9',
    name: 'Animated Gradient Hero',
    description: 'Dynamic animated gradient background with modern typography',
    category: 'hero',
    tags: ['animated', 'gradient', 'dynamic', 'modern', 'colorful'],
    thumbnail: '/images/hero-animated-9.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen overflow-hidden flex items-center">
  <!-- Animated gradient background -->
  <div class="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-600 animate-gradient-xy"></div>
  
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
    <h1 class="text-7xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
      Create
      <span class="block">Something</span>
      <span class="block text-yellow-300">Amazing</span>
    </h1>
    
    <p class="text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow">
      Transform your vision into reality with our powerful creative platform
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center">
      <a href="#" class="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
        Get Started
      </a>
      <a href="#" class="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/30 transition-colors border-2 border-white/40">
        Learn More
      </a>
    </div>
  </div>
  
  <style>
    @keyframes gradient-xy {
      0%, 100% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
    }
    .animate-gradient-xy {
      background-size: 400% 400%;
      animation: gradient-xy 15s ease infinite;
    }
  </style>
</section>`,
    reactCode: `export default function AnimatedGradientHero() {
  return (
    <>
      <style jsx>{\`
        @keyframes gradient-xy {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-xy {
          background-size: 400% 400%;
          animation: gradient-xy 15s ease infinite;
        }
      \`}</style>
      
      <section className="relative min-h-screen overflow-hidden flex items-center">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-600 animate-gradient-xy"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
            Create
            <span className="block">Something</span>
            <span className="block text-yellow-300">Amazing</span>
          </h1>
          
          <p className="text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow">
            Transform your vision into reality with our powerful creative platform
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="#" className="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
              Get Started
            </a>
            <a href="#" className="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/30 transition-colors border-2 border-white/40">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen overflow-hidden flex items-center">
    <!-- Animated gradient background -->
    <div class="absolute inset-0 bg-gradient-to-br from-rose-400 via-fuchsia-500 to-indigo-600 animate-gradient-xy"></div>
    
    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
      <h1 class="text-7xl md:text-8xl font-bold text-white mb-8 drop-shadow-lg">
        Create
        <span class="block">Something</span>
        <span class="block text-yellow-300">Amazing</span>
      </h1>
      
      <p class="text-2xl text-white/90 mb-12 max-w-3xl mx-auto drop-shadow">
        Transform your vision into reality with our powerful creative platform
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center">
        <a href="#" class="px-10 py-5 bg-white text-gray-900 rounded-2xl font-bold hover:scale-105 transition-transform shadow-2xl">
          Get Started
        </a>
        <a href="#" class="px-10 py-5 bg-white/20 backdrop-blur-sm text-white rounded-2xl font-bold hover:bg-white/30 transition-colors border-2 border-white/40">
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes gradient-xy {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
.animate-gradient-xy {
  background-size: 400% 400%;
  animation: gradient-xy 15s ease infinite;
}
</style>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for creative platforms and artistic products. The animated gradient creates energy and movement.',
    customizationTips: 'Adjust animation speed and gradient colors. Add more keyframes for complex animations.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
  {
    id: 'centered-impact-hero-10',
    name: 'Centered Impact Hero',
    description: 'Bold centered typography with dramatic visual impact',
    category: 'hero',
    tags: ['centered', 'bold', 'impact', 'typography', 'dramatic'],
    thumbnail: '/images/hero-impact-10.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
  <!-- Radial gradient overlay -->
  <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>
  
  <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
    <div class="mb-8">
      <span class="inline-block px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold text-sm tracking-wide">
        LAUNCHING SOON
      </span>
    </div>
    
    <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter">
      THE FUTURE
      <span class="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
        IS NOW
      </span>
    </h1>
    
    <p class="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
      Experience the next generation of innovation. Built for those who dare to dream bigger.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
      <a href="#" class="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
        Join Waitlist
        <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </a>
      <a href="#" class="px-10 py-5 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors border border-gray-700">
        Watch Trailer
      </a>
    </div>
    
    <!-- Stats -->
    <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-20 border-t border-gray-800">
      <div>
        <div class="text-4xl font-bold text-white mb-2">10M+</div>
        <div class="text-gray-500 text-sm uppercase tracking-wide">Users Worldwide</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-white mb-2">150+</div>
        <div class="text-gray-500 text-sm uppercase tracking-wide">Countries</div>
      </div>
      <div>
        <div class="text-4xl font-bold text-white mb-2">4.9★</div>
        <div class="text-gray-500 text-sm uppercase tracking-wide">App Rating</div>
      </div>
    </div>
  </div>
</section>`,
    reactCode: `export default function CenteredImpactHero() {
  return (
    <section className="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
        <div className="mb-8">
          <span className="inline-block px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold text-sm tracking-wide">
            LAUNCHING SOON
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter">
          THE FUTURE
          <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
            IS NOW
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
          Experience the next generation of innovation. Built for those who dare to dream bigger.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#" className="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
            Join Waitlist
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a href="#" className="px-10 py-5 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors border border-gray-700">
            Watch Trailer
          </a>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-20 border-t border-gray-800">
          <div>
            <div className="text-4xl font-bold text-white mb-2">10M+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wide">Users Worldwide</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">150+</div>
            <div className="text-gray-500 text-sm uppercase tracking-wide">Countries</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-white mb-2">4.9★</div>
            <div className="text-gray-500 text-sm uppercase tracking-wide">App Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen bg-gray-900 flex items-center justify-center overflow-hidden">
    <!-- Radial gradient overlay -->
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-gray-900 to-gray-900"></div>
    
    <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center z-10">
      <div class="mb-8">
        <span class="inline-block px-6 py-3 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 font-semibold text-sm tracking-wide">
          LAUNCHING SOON
        </span>
      </div>
      
      <h1 class="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none tracking-tighter">
        THE FUTURE
        <span class="block bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 text-transparent bg-clip-text">
          IS NOW
        </span>
      </h1>
      
      <p class="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto font-light">
        Experience the next generation of innovation. Built for those who dare to dream bigger.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <a href="#" class="group px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-xl font-bold hover:shadow-2xl hover:shadow-blue-500/50 transition-all">
          Join Waitlist
          <span class="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
        </a>
        <a href="#" class="px-10 py-5 bg-gray-800 text-white rounded-xl font-bold hover:bg-gray-700 transition-colors border border-gray-700">
          Watch Trailer
        </a>
      </div>
      
      <!-- Stats -->
      <div class="grid grid-cols-3 gap-8 max-w-3xl mx-auto mt-20 pt-20 border-t border-gray-800">
        <div>
          <div class="text-4xl font-bold text-white mb-2">10M+</div>
          <div class="text-gray-500 text-sm uppercase tracking-wide">Users Worldwide</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-white mb-2">150+</div>
          <div class="text-gray-500 text-sm uppercase tracking-wide">Countries</div>
        </div>
        <div>
          <div class="text-4xl font-bold text-white mb-2">4.9★</div>
          <div class="text-gray-500 text-sm uppercase tracking-wide">App Rating</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for product launches and major announcements. The centered layout creates maximum impact.',
    customizationTips: 'Update the stats with your actual metrics. Adjust the gradient colors and typography scale.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
];