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
    htmlCode: `<nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800/50 dark:border-gray-800 dark:border-slate-700/50">
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
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-900 dark:text-white dark:text-white bg-gray-100 dark:bg-gray-800 rounded-lg transition-colors">Home</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Products</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Solutions</a>
        <a href="#" class="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Pricing</a>
      </div>

      <!-- Actions -->
      <div class="hidden md:flex items-center gap-3">
        <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">
          Sign In
        </button>
        <button class="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
          Get Started
        </button>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800/50 dark:border-gray-800 dark:border-slate-700/50">
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
                  ? 'text-gray-900 dark:text-white dark:text-white bg-gray-100 dark:bg-gray-800'
                  : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
              }\`}
            >
              Home
            </a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Products</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Solutions</a>
            <a href="#" className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors">Pricing</a>
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">
              Sign In
            </button>
            <button className="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-slate-800/50 dark:border-gray-800 dark:border-slate-700/50">
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
                ? 'text-gray-900 dark:text-white dark:text-white bg-gray-100 dark:bg-gray-800'
                : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800'
            ]"
          >
            {{ link.label }}
          </a>
        </div>

        <!-- Actions -->
        <div class="hidden md:flex items-center gap-3">
          <button class="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">
            Sign In
          </button>
          <button class="px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
            Get Started
          </button>
        </div>

        <!-- Mobile menu button -->
        <button class="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:text-white dark:hover:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
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

  {
    id: 'centered-logo-navbar-3',
    name: 'Centered Logo Navbar',
    description: 'Elegant navbar with centered logo, split navigation, and premium spacing',
    category: 'navigation',
    tags: ['centered', 'elegant', 'premium', 'balanced'],
    thumbnail: '/images/nav-centered-3.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-slate-800 dark:border-gray-800 dark:border-slate-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <!-- Left Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="text-sm font-medium text-gray-900 dark:text-white dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</a>
        <a href="#" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">Solutions</a>
      </div>

      <!-- Centered Logo -->
      <div class="absolute left-1/2 transform -translate-x-1/2">
        <a href="#" class="flex items-center gap-2">
          <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
            </svg>
          </div>
          <span class="text-xl font-bold text-gray-900 dark:text-white dark:text-white">Luxury</span>
        </a>
      </div>

      <!-- Right Navigation -->
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">Pricing</a>
        <a href="#" class="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30">
          Get Started
        </a>
      </div>

      <!-- Mobile menu button -->
      <button class="md:hidden p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>
</nav>`,
    reactCode: `export default function CenteredLogoNavbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-slate-800 dark:border-gray-800 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-900 dark:text-white dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">Solutions</a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white dark:text-white">Luxury</span>
            </a>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">Pricing</a>
            <a href="#" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30">
              Get Started
            </a>
          </div>

          <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
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
  <nav class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-slate-800 dark:border-gray-800 dark:border-slate-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <div class="hidden md:flex items-center gap-8">
          <a href="#" class="text-sm font-medium text-gray-900 dark:text-white dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Products</a>
          <a href="#" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">Solutions</a>
        </div>

        <div class="absolute left-1/2 transform -translate-x-1/2">
          <a href="#" class="flex items-center gap-2">
            <div class="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
              </svg>
            </div>
            <span class="text-xl font-bold text-gray-900 dark:text-white dark:text-white">Luxury</span>
          </a>
        </div>

        <div class="hidden md:flex items-center gap-6">
          <a href="#" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-white dark:hover:text-white transition-colors">Pricing</a>
          <a href="#" class="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30">
            Get Started
          </a>
        </div>

        <button class="md:hidden p-2 text-gray-600 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for luxury brands, fashion sites, and premium portfolios. The centered logo creates elegant balance and sophistication.',
    customizationTips: 'Adjust logo size and styling. Add more navigation items on each side while keeping balance. Works great with minimal designs.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'minimal-navbar-4',
    name: 'Minimal Clean Navbar',
    description: 'Ultra-minimal navbar with clean typography, functional mobile menu, and subtle hover effects',
    category: 'navigation',
    tags: ['minimal', 'clean', 'simple', 'modern', 'typography', 'responsive'],
    thumbnail: '/images/nav-minimal-4.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <!-- Logo -->
      <a href="#" class="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
        Brand
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
          Work
        </a>
        <a href="#" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          About
        </a>
        <a href="#" class="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
          Contact
        </a>
      </div>

      <!-- Mobile menu button -->
      <button type="button" class="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors" aria-label="Toggle menu">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>
  </div>

  <!-- Mobile menu (hidden by default, use JS to toggle) -->
  <div class="hidden md:hidden border-t border-gray-100 dark:border-slate-800">
    <div class="px-4 py-4 space-y-3">
      <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-900 rounded-lg transition-colors">
        Work
      </a>
      <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-900 rounded-lg transition-colors">
        About
      </a>
      <a href="#" class="block px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-900 rounded-lg transition-colors">
        Contact
      </a>
    </div>
  </div>
</nav>`,
    reactCode: `'use client';

import { useState } from 'react';

export default function MinimalNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white dark:bg-slate-950 border-b border-gray-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl sm:text-2xl font-light tracking-tight text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Brand
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-400 transition-colors">
              Work
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-900 dark:text-white bg-gray-50 dark:bg-slate-900 rounded-lg transition-colors">
              Work
            </a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-900 rounded-lg transition-colors">
              About
            </a>
            <a href="#" className="block px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-slate-900 rounded-lg transition-colors">
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}`,
    vueCode: `<template><nav class="bg-white border-b border-gray-100"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-2xl font-light">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for portfolios, agencies, and minimalist brands',
    customizationTips: 'Use custom fonts, adjust letter spacing, add subtle animations',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'gradient-navbar-5',
    name: 'Gradient Background Navbar',
    description: 'Vibrant navbar with animated gradient background',
    category: 'navigation',
    tags: ['gradient', 'colorful', 'animated', 'modern', 'vibrant'],
    thumbnail: '/images/nav-gradient-5.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-white">Brand</a>
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-white/90 hover:text-white text-sm font-medium transition">Home</a>
        <a href="#" class="text-white/90 hover:text-white text-sm font-medium transition">Features</a>
        <a href="#" class="px-5 py-2 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition">Sign Up</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function GradientNavbar() { return (<nav className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold text-white">Brand</a></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold text-white">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for creative brands, events, and bold marketing sites',
    customizationTips: 'Animate gradient with CSS, change color scheme, add patterns',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'transparent-navbar-6',
    name: 'Transparent Overlay Navbar',
    description: 'Transparent navbar that overlays hero sections',
    category: 'navigation',
    tags: ['transparent', 'overlay', 'hero', 'modern', 'clean'],
    thumbnail: '/images/nav-transparent-6.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<nav class="absolute top-0 left-0 right-0 z-50 bg-transparent">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-20">
      <a href="#" class="text-xl font-bold text-white">Brand</a>
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="text-white/90 hover:text-white text-sm font-medium transition">Home</a>
        <a href="#" class="text-white/90 hover:text-white text-sm font-medium transition">About</a>
        <a href="#" class="px-6 py-2 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 dark:text-white transition">Contact</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function TransparentNavbar() { return (<nav className="absolute top-0 left-0 right-0 z-50 bg-transparent"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-20"><a href="#" className="text-xl font-bold text-white">Brand</a></div></div></nav>); }`,
    vueCode: `<template><nav class="absolute top-0 left-0 right-0 z-50 bg-transparent"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-20"><a href="#" class="text-xl font-bold text-white">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for landing pages with hero images or videos',
    customizationTips: 'Add scroll-triggered background, adjust text shadows for readability',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'sticky-navbar-7',
    name: 'Sticky Scroll Navbar',
    description: 'Navbar that changes style on scroll with smooth transitions',
    category: 'navigation',
    tags: ['sticky', 'scroll', 'animated', 'dynamic', 'modern'],
    thumbnail: '/images/nav-sticky-7.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-14">
      <a href="#" class="text-lg font-bold text-gray-900">Brand</a>
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-sm text-gray-700 hover:text-indigo-600 transition">Home</a>
        <a href="#" class="text-sm text-gray-700 hover:text-indigo-600 transition">Services</a>
        <a href="#" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition text-sm font-medium">Get Started</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function StickyNavbar() { return (<nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all duration-300"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-14"><a href="#" className="text-lg font-bold text-gray-900">Brand</a></div></div></nav>); }`,
    vueCode: `<template><nav class="fixed top-0 left-0 right-0 z-50 bg-white shadow-md transition-all"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-14"><a href="#" class="text-lg font-bold">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for long-scrolling pages and blogs',
    customizationTips: 'Add JavaScript to change height/style on scroll, hide/show on scroll direction',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'split-navbar-8',
    name: 'Split Navigation Navbar',
    description: 'Navbar with navigation split on both sides of logo',
    category: 'navigation',
    tags: ['split', 'centered', 'balanced', 'elegant', 'modern'],
    thumbnail: '/images/nav-split-8.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Products</a>
        <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Solutions</a>
      </div>
      <a href="#" class="text-xl font-bold text-gray-900">LOGO</a>
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
        <a href="#" class="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition text-sm font-medium">Contact</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function SplitNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><div className="hidden md:flex items-center gap-6"><a href="#" className="text-sm font-medium">Products</a></div><a href="#" className="text-xl font-bold">LOGO</a><div className="hidden md:flex items-center gap-6"><a href="#" className="text-sm font-medium">About</a></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">LOGO</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for fashion, luxury, and portfolio sites',
    customizationTips: 'Ensure equal spacing, works best with 2-3 items per side',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'mega-dropdown-navbar-9',
    name: 'Mega Dropdown Navbar',
    description: 'Navbar with large dropdown menus showing multiple categories',
    category: 'navigation',
    tags: ['mega-menu', 'dropdown', 'ecommerce', 'complex', 'featured'],
    thumbnail: '/images/nav-mega-9.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-gray-900">Shop</a>
      <div class="hidden md:flex items-center gap-8">
        <div class="relative group">
          <button class="text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-white flex items-center gap-1">
            Products
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/></svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-96 bg-white rounded-lg shadow-2xl border border-gray-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
            <div class="grid grid-cols-2 gap-4">
              <div><h3 class="font-semibold text-gray-900 dark:text-white mb-2">Category 1</h3><a href="#" class="block py-1 text-sm text-gray-600 hover:text-indigo-600">Item 1</a></div>
              <div><h3 class="font-semibold text-gray-900 dark:text-white mb-2">Category 2</h3><a href="#" class="block py-1 text-sm text-gray-600 hover:text-indigo-600">Item 2</a></div>
            </div>
          </div>
        </div>
        <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">About</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function MegaDropdownNavbar() { return (<nav className="bg-white shadow-sm"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">Shop</a></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">Shop</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for ecommerce sites with many product categories',
    customizationTips: 'Add images, featured products, promotional content in dropdowns',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'dark-navbar-10',
    name: 'Dark Mode Navbar',
    description: 'Sleek dark-themed navbar with subtle accents',
    category: 'navigation',
    tags: ['dark', 'modern', 'sleek', 'premium', 'night'],
    thumbnail: '/images/nav-dark-10.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-gray-900 border-b border-gray-800 dark:border-slate-700">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-white">Brand</a>
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-sm text-gray-300 hover:text-white transition">Home</a>
        <a href="#" class="text-sm text-gray-300 hover:text-white transition">Features</a>
        <a href="#" class="px-5 py-2 bg-white text-gray-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 transition">Sign In</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function DarkNavbar() { return (<nav className="bg-gray-900 border-b border-gray-800 dark:border-slate-700"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold text-white">Brand</a></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-gray-900 border-b border-gray-800 dark:border-slate-700"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold text-white">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for tech products, developer tools, and modern apps',
    customizationTips: 'Add subtle gradients, adjust contrast for accessibility',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'search-navbar-11',
    name: 'Search-Focused Navbar',
    description: 'Navbar with prominent search bar integration',
    category: 'navigation',
    tags: ['search', 'functional', 'utility', 'modern', 'ecommerce'],
    thumbnail: '/images/nav-search-11.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 gap-4">
      <a href="#" class="text-xl font-bold text-gray-900 dark:text-white whitespace-nowrap">Brand</a>
      <div class="flex-1 max-w-2xl">
        <div class="relative">
          <input type="text" placeholder="Search products..." class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent">
          <svg class="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
        </div>
      </div>
      <div class="hidden md:flex items-center gap-4">
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Cart</a>
        <a href="#" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">Sign In</a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function SearchNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16 gap-4"><a href="#" className="text-xl font-bold">Brand</a><div className="flex-1 max-w-2xl"><input type="text" placeholder="Search..." className="w-full pl-10 pr-4 py-2 border rounded-lg" /></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16 gap-4"><a href="#" class="text-xl font-bold">Brand</a><input type="text" placeholder="Search..." class="flex-1 max-w-2xl pl-10 pr-4 py-2 border rounded-lg" /></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for ecommerce, documentation sites, and content-heavy platforms',
    customizationTips: 'Add autocomplete, recent searches, search suggestions',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'notification-navbar-12',
    name: 'Notification Badge Navbar',
    description: 'Navbar with notification badges and user menu',
    category: 'navigation',
    tags: ['notifications', 'badges', 'user-menu', 'dashboard', 'app'],
    thumbnail: '/images/nav-notification-12.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-gray-900">Dashboard</a>
      <div class="flex items-center gap-4">
        <button class="relative p-2 text-gray-600 hover:text-gray-900 dark:text-white rounded-lg hover:bg-gray-100">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
          <span class="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>
        <div class="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-medium">JD</div>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function NotificationNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">Dashboard</a><div className="flex items-center gap-4"><button className="relative p-2 rounded-lg hover:bg-gray-100"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg><span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span></button></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">Dashboard</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for web applications and dashboards',
    customizationTips: 'Add dropdown menus, notification panels, user profile menu',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'animated-navbar-13',
    name: 'Animated Hover Navbar',
    description: 'Navbar with smooth animated underlines and hover effects',
    category: 'navigation',
    tags: ['animated', 'hover', 'modern', 'interactive', 'smooth'],
    thumbnail: '/images/nav-animated-13.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-gray-900">Brand</a>
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="relative group text-sm font-medium text-gray-900">
          Home
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-100 transition-transform"></span>
        </a>
        <a href="#" class="relative group text-sm font-medium text-gray-700 hover:text-gray-900">
          About
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
        <a href="#" class="relative group text-sm font-medium text-gray-700 hover:text-gray-900">
          Services
          <span class="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
        </a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function AnimatedNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">Brand</a><div className="hidden md:flex items-center gap-8"><a href="#" className="relative group text-sm font-medium">Home<span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-600 transform scale-x-0 group-hover:scale-x-100 transition-transform"></span></a></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for modern websites wanting subtle interactions',
    customizationTips: 'Adjust animation duration, change underline color, add other effects',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'bordered-navbar-14',
    name: 'Bordered Container Navbar',
    description: 'Navbar with bordered container and rounded corners',
    category: 'navigation',
    tags: ['bordered', 'contained', 'modern', 'clean', 'rounded'],
    thumbnail: '/images/nav-bordered-14.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="p-4">
  <nav class="bg-white border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex items-center justify-between h-16">
        <a href="#" class="text-xl font-bold text-gray-900">Brand</a>
        <div class="hidden md:flex items-center gap-6">
          <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" class="text-sm text-gray-700 hover:text-gray-900">About</a>
          <a href="#" class="px-5 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 text-sm font-medium">Contact</a>
        </div>
      </div>
    </div>
  </nav>
</div>`,
    reactCode: `export default function BorderedNavbar() { return (<div className="p-4"><nav className="bg-white border border-gray-200 dark:border-slate-800 rounded-xl shadow-sm"><div className="max-w-7xl mx-auto px-6"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">Brand</a></div></div></nav></div>); }`,
    vueCode: `<template><div class="p-4"><nav class="bg-white border rounded-xl shadow-sm"><div class="max-w-7xl mx-auto px-6"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">Brand</a></div></div></nav></div></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Modern alternative to full-width navbars',
    customizationTips: 'Adjust border radius, add shadows, change container width',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'icon-navbar-15',
    name: 'Icon Navigation Navbar',
    description: 'Navbar with icon-based navigation items',
    category: 'navigation',
    tags: ['icons', 'visual', 'modern', 'app', 'dashboard'],
    thumbnail: '/images/nav-icon-15.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-gray-900">App</a>
      <div class="hidden md:flex items-center gap-2">
        <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
          Home
        </a>
        <a href="#" class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/></svg>
          Analytics
        </a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function IconNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">App</a><div className="hidden md:flex items-center gap-2"><a href="#" className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg">Home</a></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">App</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for dashboards and web applications',
    customizationTips: 'Use consistent icon library, add tooltips, adjust icon sizes',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'two-row-navbar-16',
    name: 'Two-Row Navbar',
    description: 'Navbar with logo/actions on top row and navigation on bottom',
    category: 'navigation',
    tags: ['two-row', 'stacked', 'organized', 'ecommerce', 'complex'],
    thumbnail: '/images/nav-two-row-16.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16 border-b border-gray-100">
      <a href="#" class="text-xl font-bold text-gray-900">Brand</a>
      <div class="flex items-center gap-4">
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Support</a>
        <a href="#" class="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium">Sign In</a>
      </div>
    </div>
    <div class="flex items-center justify-center h-12 gap-8">
      <a href="#" class="text-sm font-medium text-gray-900">Products</a>
      <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Solutions</a>
      <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Pricing</a>
      <a href="#" class="text-sm font-medium text-gray-700 hover:text-gray-900">Resources</a>
    </div>
  </div>
</nav>`,
    reactCode: `export default function TwoRowNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16 border-b border-gray-100"><a href="#" className="text-xl font-bold">Brand</a></div><div className="flex items-center justify-center h-12 gap-8"><a href="#" className="text-sm font-medium">Products</a></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16 border-b"><a href="#" class="text-xl font-bold">Brand</a></div><div class="flex items-center justify-center h-12 gap-8"><a href="#" class="text-sm font-medium">Products</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for sites with many navigation items and utilities',
    customizationTips: 'Add search bar, adjust row heights, make responsive',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'compact-navbar-17',
    name: 'Compact Mobile-First Navbar',
    description: 'Minimal height navbar optimized for mobile devices',
    category: 'navigation',
    tags: ['compact', 'mobile', 'minimal', 'small', 'responsive'],
    thumbnail: '/images/nav-compact-17.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4">
    <div class="flex items-center justify-between h-12">
      <a href="#" class="text-lg font-bold text-gray-900">Brand</a>
      <div class="flex items-center gap-4">
        <a href="#" class="text-xs font-medium text-gray-700 hover:text-gray-900">Home</a>
        <a href="#" class="text-xs font-medium text-gray-700 hover:text-gray-900">About</a>
        <button class="p-1.5 text-gray-700 hover:bg-gray-100 rounded">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function CompactNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-12"><a href="#" className="text-lg font-bold">Brand</a></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-12"><a href="#" class="text-lg font-bold">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for mobile apps and space-constrained layouts',
    customizationTips: 'Reduce padding, use smaller fonts, prioritize essential items',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'sidebar-toggle-navbar-18',
    name: 'Sidebar Toggle Navbar',
    description: 'Navbar with sidebar toggle button for dashboard layouts',
    category: 'navigation',
    tags: ['sidebar', 'toggle', 'dashboard', 'app', 'functional'],
    thumbnail: '/images/nav-sidebar-18.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="flex items-center justify-between h-16 px-4">
    <div class="flex items-center gap-4">
      <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </button>
      <a href="#" class="text-xl font-bold text-gray-900">Dashboard</a>
    </div>
    <div class="flex items-center gap-4">
      <button class="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/></svg>
      </button>
      <div class="w-8 h-8 bg-indigo-600 rounded-full"></div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function SidebarToggleNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="flex items-center justify-between h-16 px-4"><div className="flex items-center gap-4"><button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg></button><a href="#" className="text-xl font-bold">Dashboard</a></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="flex items-center justify-between h-16 px-4"><div class="flex items-center gap-4"><button class="p-2 hover:bg-gray-100 rounded-lg">Toggle</button><a href="#" class="text-xl font-bold">Dashboard</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for dashboard and admin panel layouts',
    customizationTips: 'Add JavaScript to toggle sidebar, include breadcrumbs',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'language-navbar-19',
    name: 'Multi-Language Navbar',
    description: 'Navbar with language selector and internationalization',
    category: 'navigation',
    tags: ['language', 'i18n', 'global', 'multilingual', 'selector'],
    thumbnail: '/images/nav-language-19.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<nav class="bg-white border-b border-gray-200 dark:border-slate-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-gray-900">Brand</a>
      <div class="hidden md:flex items-center gap-6">
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Home</a>
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">About</a>
        <div class="relative group">
          <button class="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"/></svg>
            EN
          </button>
          <div class="absolute top-full right-0 mt-2 w-32 bg-white rounded-lg shadow-xl border border-gray-100 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function LanguageNavbar() { return (<nav className="bg-white border-b border-gray-200 dark:border-slate-800"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">Brand</a><div className="hidden md:flex items-center gap-6"><button className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-gray-100 rounded-lg">EN</button></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white border-b"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">Brand</a></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for international websites and global brands',
    customizationTips: 'Add flag icons, show current language, persist selection',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'cta-navbar-20',
    name: 'CTA-Focused Navbar',
    description: 'Navbar with prominent call-to-action button',
    category: 'navigation',
    tags: ['cta', 'conversion', 'marketing', 'prominent', 'action'],
    thumbnail: '/images/nav-cta-20.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<nav class="bg-white shadow-sm">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between h-16">
      <a href="#" class="text-xl font-bold text-gray-900">Brand</a>
      <div class="hidden md:flex items-center gap-8">
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Features</a>
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">Pricing</a>
        <a href="#" class="text-sm text-gray-700 hover:text-gray-900">About</a>
        <a href="#" class="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40">
          Start Free Trial
        </a>
      </div>
    </div>
  </div>
</nav>`,
    reactCode: `export default function CTANavbar() { return (<nav className="bg-white shadow-sm"><div className="max-w-7xl mx-auto px-4"><div className="flex items-center justify-between h-16"><a href="#" className="text-xl font-bold">Brand</a><div className="hidden md:flex items-center gap-8"><a href="#" className="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 shadow-lg">Start Free Trial</a></div></div></div></nav>); }`,
    vueCode: `<template><nav class="bg-white shadow-sm"><div class="max-w-7xl mx-auto px-4"><div class="flex items-center justify-between h-16"><a href="#" class="text-xl font-bold">Brand</a><div class="hidden md:flex items-center gap-8"><a href="#" class="px-6 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg">Start Free Trial</a></div></div></div></nav></template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for SaaS products and conversion-focused landing pages',
    customizationTips: 'Make CTA stand out with contrasting colors, add urgency text',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
];
