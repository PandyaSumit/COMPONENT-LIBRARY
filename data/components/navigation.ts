import { Component } from '../components';

export const navigationComponents: Component[] = [
  {
    id: 'glassmorphic-navbar-1',
    name: 'Glassmorphic Navbar',
    description: 'Premium navbar with frosted glass effect, backdrop blur, and smooth animations',
    category: 'navigation',
    tags: ['glassmorphism', 'modern', 'premium', 'sticky', 'responsive'],
    thumbnail: '/images/nav-glass-1.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
          <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
          </svg>
        </div>
        <span class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Brand</span>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-1">
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors">Home</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Products</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Solutions</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Pricing</a>
      </div>

      <!-- Actions -->
      <div class="hidden md:flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
          Sign In
        </button>
        <button class="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
          Get Started
        </button>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
</nav>`,
    reactCode: `'use client';

import { useState } from 'react';

export default function GlassmorphicNavbar() {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Brand</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            <a
              href="#"
              onClick={() => setActiveLink('home')}
              className={\`px-4 py-2 text-sm font-medium rounded-lg transition-colors \${
                activeLink === 'home'
                  ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }\`}
            >
              Home
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Products</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Solutions</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Pricing</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}`,
    vueCode: `<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <div class="flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
            </svg>
          </div>
          <span class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Brand</span>
        </div>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-1">
          <a
            v-for="link in links"
            :key="link.id"
            :href="link.href"
            @click="activeLink = link.id"
            :class="[
              'px-4 py-2 text-sm font-medium rounded-lg transition-colors',
              activeLink === link.id
                ? 'text-gray-900 dark:text-white bg-gray-100 dark:bg-gray-800'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-3">
          <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Sign In
          </button>
          <button class="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
            Get Started
          </button>
        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';

const activeLink = ref('home');
const links = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'products', label: 'Products', href: '#' },
  { id: 'solutions', label: 'Solutions', href: '#' },
  { id: 'pricing', label: 'Pricing', href: '#' }
];
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for modern SaaS applications and premium websites. The glassmorphic effect creates depth while maintaining readability. Use fixed positioning for sticky behavior.',
    customizationTips: 'Adjust backdrop-blur intensity (backdrop-blur-xl), customize gradient colors for logo and CTA button, modify border opacity for subtler or stronger separation.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'neon-navbar-2',
    name: 'Neon Glow Navbar',
    description: 'Dark navbar with vibrant neon accents and glow effects for tech-forward brands',
    category: 'navigation',
    tags: ['dark', 'neon', 'modern', 'premium', 'animated'],
    thumbnail: '/images/nav-neon-2.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-cyan-500/20">
  <!-- Neon glow line -->
  <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo with glow -->
      <div class="flex items-center gap-3">
        <div class="relative">
          <div class="absolute inset-0 bg-cyan-500 blur-lg opacity-50"></div>
          <div class="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
        </div>
        <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">NeoTech</span>
      </div>

      <!-- Navigation with neon hover -->
      <div class="hidden md:flex items-center gap-2">
        <a href="#" class="group relative px-4 py-2 text-sm font-medium text-cyan-400 overflow-hidden">
          <span class="relative z-10">Home</span>
          <div class="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
        </a>
        <a href="#" class="group relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors overflow-hidden">
          <span class="relative z-10">Features</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
        </a>
        <a href="#" class="group relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors overflow-hidden">
          <span class="relative z-10">Products</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
        </a>
        <a href="#" class="group relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors overflow-hidden">
          <span class="relative z-10">Pricing</span>
          <div class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
        </a>
      </div>

      <!-- CTA with neon glow -->
      <div class="hidden md:flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
          Sign In
        </button>
        <button class="relative group px-5 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
          <span class="relative z-10">Get Started</span>
        </button>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
</nav>`,
    reactCode: `export default function NeonNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-cyan-500/20">
      {/* Neon glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with glow */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-50"></div>
              <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">NeoTech</span>
          </div>

          {/* Navigation with neon hover */}
          <div className="hidden md:flex items-center gap-2">
            <a href="#" className="group relative px-4 py-2 text-sm font-medium text-cyan-400 overflow-hidden">
              <span className="relative z-10">Home</span>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
            </a>
            <a href="#" className="group relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors overflow-hidden">
              <span className="relative z-10">Features</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors overflow-hidden">
              <span className="relative z-10">Products</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a href="#" className="group relative px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors overflow-hidden">
              <span className="relative z-10">Pricing</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>

          {/* CTA with neon glow */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="relative group px-5 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
              <span className="relative z-10">Get Started</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}`,
    vueCode: `<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-lg border-b border-cyan-500/20">
    <!-- Neon glow line -->
    <div class="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <!-- Logo with glow -->
        <div class="flex items-center gap-3">
          <div class="relative">
            <div class="absolute inset-0 bg-cyan-500 blur-lg opacity-50"></div>
            <div class="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-emerald-500 rounded-lg flex items-center justify-center">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
          </div>
          <span class="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">NeoTech</span>
        </div>

        <!-- Navigation with neon hover -->
        <div class="hidden md:flex items-center gap-2">
          <a
            v-for="(link, index) in links"
            :key="link.id"
            :href="link.href"
            :class="[
              'group relative px-4 py-2 text-sm font-medium overflow-hidden transition-colors',
              index === 0 ? 'text-cyan-400' : 'text-slate-300 hover:text-white'
            ]"
          >
            <span class="relative z-10">{{ link.label }}</span>
            <div
              :class="[
                'absolute bottom-0 h-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500',
                index === 0 ? 'left-0 right-0' : 'left-0 w-0 group-hover:w-full transition-all duration-300'
              ]"
            ></div>
          </a>
        </div>

        <!-- CTA with neon glow -->
        <div class="hidden md:flex items-center gap-3">
          <button class="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Sign In
          </button>
          <button class="relative group px-5 py-2 text-sm font-semibold text-white rounded-lg overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
            <span class="relative z-10">Get Started</span>
          </button>
        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2 text-cyan-400 hover:text-cyan-300 transition-colors">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const links = [
  { id: 'home', label: 'Home', href: '#' },
  { id: 'features', label: 'Features', href: '#' },
  { id: 'products', label: 'Products', href: '#' },
  { id: 'pricing', label: 'Pricing', href: '#' }
];
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for tech startups, gaming platforms, and futuristic brands. The neon glow creates a cutting-edge aesthetic perfect for developer tools and SaaS products.',
    customizationTips: 'Change neon colors from cyan/emerald to match your brand. Adjust blur intensity for glow effects. Add animation to the bottom gradient line for extra flair.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
];
