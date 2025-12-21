import { Component } from '../components';

export const buttonComponents: Component[] = [
  {
    id: 'gradient-button-1',
    name: 'Gradient Glow Button',
    description: 'Premium button with animated gradient background and glow effect on hover',
    category: 'buttons',
    tags: ['gradient', 'glow', 'animated', 'premium', 'modern'],
    thumbnail: '/images/button-gradient-1.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<!-- Primary Gradient Button -->
<button class="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
  <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
  <span class="relative z-10 flex items-center justify-center gap-2">
    Click Me
    <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
    </svg>
  </span>
</button>

<!-- Secondary Gradient Button -->
<button class="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30">
  <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  <span class="relative z-10">Get Started</span>
</button>

<!-- Outline Gradient Button -->
<button class="group relative px-8 py-3 bg-transparent border-2 border-transparent bg-clip-padding rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
  <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 -z-10"></div>
  <div class="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[6px] -z-10"></div>
  <span class="relative z-10 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-semibold">
    Learn More
  </span>
</button>`,
    reactCode: `export default function GradientButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Primary Gradient Button */}
      <button className="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
        <span className="relative z-10 flex items-center justify-center gap-2">
          Click Me
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </span>
      </button>

      {/* Secondary Gradient Button */}
      <button className="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <span className="relative z-10">Get Started</span>
      </button>

      {/* Outline Gradient Button */}
      <button className="group relative px-8 py-3 bg-transparent border-2 border-transparent bg-clip-padding rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 -z-10"></div>
        <div className="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[6px] -z-10"></div>
        <span className="relative z-10 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-semibold">
          Learn More
        </span>
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="flex flex-wrap gap-4">
    <!-- Primary Gradient Button -->
    <button class="group relative px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95">
      <div class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
      <span class="relative z-10 flex items-center justify-center gap-2">
        Click Me
        <svg class="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
        </svg>
      </span>
    </button>

    <!-- Secondary Gradient Button -->
    <button class="group relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-emerald-500 text-white font-semibold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-cyan-500/30">
      <div class="absolute inset-0 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span class="relative z-10">Get Started</span>
    </button>

    <!-- Outline Gradient Button -->
    <button class="group relative px-8 py-3 bg-transparent border-2 border-transparent bg-clip-padding rounded-lg overflow-hidden transition-all duration-300 hover:scale-105">
      <div class="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 -z-10"></div>
      <div class="absolute inset-[2px] bg-white dark:bg-gray-900 rounded-[6px] -z-10"></div>
      <span class="relative z-10 bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent font-semibold">
        Learn More
      </span>
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for CTAs, primary actions, and important buttons. The glow effect draws attention while maintaining elegance. Works great on both light and dark backgrounds.',
    customizationTips: 'Customize gradient colors to match your brand. Adjust blur intensity for stronger/subtle glow. Modify scale values for different hover effects. Add loading states with spinners.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: '3d-button-2',
    name: '3D Depth Buttons',
    description: 'Buttons with realistic 3D depth effect, shadows, and press animation',
    category: 'buttons',
    tags: ['3d', 'depth', 'shadow', 'modern', 'interactive'],
    thumbnail: '/images/button-3d-2.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<!-- Raised 3D Button -->
<button class="relative px-8 py-4 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/50 transition-all duration-150 hover:shadow-xl hover:shadow-indigo-500/60 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md">
  <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
  <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
  <span class="relative">Click Me</span>
</button>

<!-- Pressed 3D Button -->
<button class="relative px-8 py-4 bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(6,78,59)] transition-all duration-150 hover:shadow-[0_6px_0_0_rgb(6,78,59)] hover:translate-y-0.5 active:shadow-[0_2px_0_0_rgb(6,78,59)] active:translate-y-1">
  <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
  <span class="relative">Push Me</span>
</button>

<!-- Neumorphic Button -->
<button class="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a] transition-all duration-200 hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#2a2a2a] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] dark:active:shadow-[inset_4px_4px_8px_#0a0a0a,inset_-4px_-4px_8px_#2a2a2a]">
  Neumorphic
</button>`,
    reactCode: `export default function ThreeDButtons() {
  return (
    <div className="flex flex-wrap gap-6">
      {/* Raised 3D Button */}
      <button className="relative px-8 py-4 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/50 transition-all duration-150 hover:shadow-xl hover:shadow-indigo-500/60 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
        <span className="relative">Click Me</span>
      </button>

      {/* Pressed 3D Button */}
      <button className="relative px-8 py-4 bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(6,78,59)] transition-all duration-150 hover:shadow-[0_6px_0_0_rgb(6,78,59)] hover:translate-y-0.5 active:shadow-[0_2px_0_0_rgb(6,78,59)] active:translate-y-1">
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
        <span className="relative">Push Me</span>
      </button>

      {/* Neumorphic Button */}
      <button className="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a] transition-all duration-200 hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#2a2a2a] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] dark:active:shadow-[inset_4px_4px_8px_#0a0a0a,inset_-4px_-4px_8px_#2a2a2a]">
        Neumorphic
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="flex flex-wrap gap-6">
    <!-- Raised 3D Button -->
    <button class="relative px-8 py-4 bg-gradient-to-b from-indigo-500 to-indigo-600 text-white font-bold rounded-xl shadow-lg shadow-indigo-500/50 transition-all duration-150 hover:shadow-xl hover:shadow-indigo-500/60 hover:-translate-y-0.5 active:translate-y-0 active:shadow-md">
      <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/20 to-transparent rounded-b-xl"></div>
      <span class="relative">Click Me</span>
    </button>

    <!-- Pressed 3D Button -->
    <button class="relative px-8 py-4 bg-gradient-to-b from-emerald-500 to-emerald-600 text-white font-bold rounded-xl shadow-[0_8px_0_0_rgb(6,78,59)] transition-all duration-150 hover:shadow-[0_6px_0_0_rgb(6,78,59)] hover:translate-y-0.5 active:shadow-[0_2px_0_0_rgb(6,78,59)] active:translate-y-1">
      <div class="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent rounded-xl"></div>
      <span class="relative">Push Me</span>
    </button>

    <!-- Neumorphic Button -->
    <button class="px-8 py-4 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-bold rounded-xl shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] dark:shadow-[8px_8px_16px_#0a0a0a,-8px_-8px_16px_#2a2a2a] transition-all duration-200 hover:shadow-[4px_4px_8px_#bebebe,-4px_-4px_8px_#ffffff] dark:hover:shadow-[4px_4px_8px_#0a0a0a,-4px_-4px_8px_#2a2a2a] active:shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff] dark:active:shadow-[inset_4px_4px_8px_#0a0a0a,inset_-4px_-4px_8px_#2a2a2a]">
      Neumorphic
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for interactive elements where tactile feedback is important. The 3D effect makes buttons feel more physical and engaging. Perfect for gaming UIs, playful brands, or creative applications.',
    customizationTips: 'Adjust shadow depth and spread for different 3D intensities. Customize gradient overlays for various lighting effects. Change shadow colors to match button backgrounds.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'glassmorphic-button-3',
    name: 'Glassmorphic Buttons',
    description: 'Modern buttons with frosted glass effect, backdrop blur, and elegant transparency',
    category: 'buttons',
    tags: ['glassmorphism', 'blur', 'modern', 'elegant', 'premium'],
    thumbnail: '/images/button-glass-3.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<!-- Glass Primary Button -->
<button class="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 hover:scale-105 shadow-lg shadow-black/10">
  Glass Primary
</button>

<!-- Glass With Icon -->
<button class="group px-6 py-3 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:from-white/30 hover:to-white/20 dark:hover:from-white/20 dark:hover:to-white/10 hover:scale-105 shadow-xl">
  <span class="flex items-center gap-2">
    <svg class="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
    </svg>
    Sparkle
  </span>
</button>

<!-- Glass Outlined -->
<button class="px-8 py-3 bg-transparent backdrop-blur-sm border-2 border-white/40 dark:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/60 hover:scale-105">
  Glass Outline
</button>`,
    reactCode: `export default function GlassmorphicButtons() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Glass Primary Button */}
      <button className="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 hover:scale-105 shadow-lg shadow-black/10">
        Glass Primary
      </button>

      {/* Glass With Icon */}
      <button className="group px-6 py-3 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:from-white/30 hover:to-white/20 dark:hover:from-white/20 dark:hover:to-white/10 hover:scale-105 shadow-xl">
        <span className="flex items-center gap-2">
          <svg className="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
          </svg>
          Sparkle
        </span>
      </button>

      {/* Glass Outlined */}
      <button className="px-8 py-3 bg-transparent backdrop-blur-sm border-2 border-white/40 dark:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/60 hover:scale-105">
        Glass Outline
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="flex flex-wrap gap-4">
    <!-- Glass Primary Button -->
    <button class="px-8 py-3 bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/20 dark:hover:bg-white/10 hover:border-white/30 hover:scale-105 shadow-lg shadow-black/10">
      Glass Primary
    </button>

    <!-- Glass With Icon -->
    <button class="group px-6 py-3 bg-gradient-to-br from-white/20 to-white/10 dark:from-white/10 dark:to-white/5 backdrop-blur-xl border border-white/30 dark:border-white/20 text-white font-semibold rounded-xl transition-all duration-300 hover:from-white/30 hover:to-white/20 dark:hover:from-white/20 dark:hover:to-white/10 hover:scale-105 shadow-xl">
      <span class="flex items-center gap-2">
        <svg class="w-5 h-5 transition-transform group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
        </svg>
        Sparkle
      </span>
    </button>

    <!-- Glass Outlined -->
    <button class="px-8 py-3 bg-transparent backdrop-blur-sm border-2 border-white/40 dark:border-white/30 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 hover:border-white/60 hover:scale-105">
      Glass Outline
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for overlaying on colorful backgrounds or hero sections. The glassmorphic effect works best over gradients or images. Ensure good contrast for accessibility.',
    customizationTips: 'Adjust backdrop-blur intensity (blur-xl, blur-2xl). Modify opacity levels for different glass effects. Works best on dark or colorful backgrounds.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
];
