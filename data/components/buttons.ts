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

  {
    id: 'loading-button-4',
    name: 'Loading State Buttons',
    description: 'Buttons with animated loading spinners and progress indicators',
    category: 'buttons',
    tags: ['loading', 'spinner', 'animated', 'async', 'state'],
    thumbnail: '/images/button-loading-4.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<!-- Spinner Loading -->
<button class="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg flex items-center gap-3 hover:bg-indigo-700 transition-colors disabled:opacity-70" disabled>
  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
  </svg>
  Loading...
</button>

<!-- Dots Loading -->
<button class="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-70" disabled>
  <span class="flex items-center gap-1">
    Processing
    <span class="flex gap-1">
      <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 0s"></span>
      <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 0.2s"></span>
      <span class="w-1.5 h-1.5 bg-white rounded-full animate-bounce" style="animation-delay: 0.4s"></span>
    </span>
  </span>
</button>`,
    reactCode: `export default function LoadingButtons() {
  const [loading, setLoading] = React.useState(false);
  return (
    <div className="flex gap-4">
      <button className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg flex items-center gap-3 hover:bg-indigo-700 transition-colors disabled:opacity-70" disabled={loading}>
        {loading && (
          <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        )}
        {loading ? 'Loading...' : 'Submit'}
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <button class="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg flex items-center gap-3" :disabled="loading">
    <svg v-if="loading" class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
    {{ loading ? 'Loading...' : 'Submit' }}
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for async operations like form submissions, API calls, and data fetching.',
    customizationTips: 'Add progress bars, change spinner colors, or use pulse animations.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'neon-button-5',
    name: 'Neon Glow Buttons',
    description: 'Vibrant neon-style buttons with glowing borders and pulsing animations',
    category: 'buttons',
    tags: ['neon', 'glow', 'vibrant', 'animated', 'cyberpunk'],
    thumbnail: '/images/button-neon-5.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<button class="relative px-8 py-3 bg-black text-cyan-400 font-bold rounded-lg border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] hover:text-cyan-300 hover:border-cyan-300 transition-all duration-300 overflow-hidden group">
  <span class="relative z-10">Neon Button</span>
  <div class="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</button>

<button class="relative px-8 py-3 bg-black text-pink-400 font-bold rounded-lg border-2 border-pink-400 shadow-[0_0_20px_rgba(236,72,153,0.5)] hover:shadow-[0_0_30px_rgba(236,72,153,0.8)] animate-pulse hover:animate-none transition-all duration-300">
  Pulsing Neon
</button>`,
    reactCode: `export default function NeonButtons() {
  return (
    <div className="flex gap-4 bg-black p-8">
      <button className="relative px-8 py-3 bg-black text-cyan-400 font-bold rounded-lg border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all duration-300 group">
        <span className="relative z-10">Neon Button</span>
        <div className="absolute inset-0 bg-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="flex gap-4 bg-black p-8">
    <button class="relative px-8 py-3 bg-black text-cyan-400 font-bold rounded-lg border-2 border-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.8)] transition-all">
      Neon Button
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for dark-themed UIs, gaming interfaces, or cyberpunk aesthetics.',
    customizationTips: 'Experiment with different neon colors, add text-shadow for extra glow.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'ripple-button-6',
    name: 'Ripple Effect Buttons',
    description: 'Material Design inspired buttons with ripple click animations',
    category: 'buttons',
    tags: ['ripple', 'material', 'animated', 'interactive', 'modern'],
    thumbnail: '/images/button-ripple-6.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<button class="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:bg-blue-700 transition-colors group">
  <span class="relative z-10">Click for Ripple</span>
  <span class="absolute inset-0 scale-0 rounded-full bg-white/30 group-active:scale-100 transition-transform duration-500"></span>
</button>`,
    reactCode: `export default function RippleButton() {
  return (
    <button className="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:bg-blue-700 transition-colors group">
      <span className="relative z-10">Click for Ripple</span>
      <span className="absolute inset-0 scale-0 rounded-full bg-white/30 group-active:scale-100 transition-transform duration-500"></span>
    </button>
  );
}`,
    vueCode: `<template>
  <button class="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg overflow-hidden hover:bg-blue-700 group">
    <span class="relative z-10">Click for Ripple</span>
    <span class="absolute inset-0 scale-0 rounded-full bg-white/30 group-active:scale-100 transition-transform duration-500"></span>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for Material Design interfaces and modern web apps.',
    customizationTips: 'Adjust ripple color opacity and duration for different effects.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'shimmer-button-7',
    name: 'Shimmer Effect Buttons',
    description: 'Buttons with animated shimmer/shine effect that sweeps across',
    category: 'buttons',
    tags: ['shimmer', 'shine', 'animated', 'premium', 'luxury'],
    thumbnail: '/images/button-shimmer-7.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<button class="relative px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg overflow-hidden group">
  <span class="relative z-10">Shimmer Button</span>
  <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
</button>`,
    reactCode: `export default function ShimmerButton() {
  return (
    <button className="relative px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg overflow-hidden group">
      <span className="relative z-10">Shimmer Button</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
    </button>
  );
}`,
    vueCode: `<template>
  <button class="relative px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-bold rounded-lg overflow-hidden group">
    <span class="relative z-10">Shimmer Button</span>
    <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for premium CTAs, payment buttons, or highlighting important actions.',
    customizationTips: 'Adjust shimmer speed and opacity for subtle or dramatic effects.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'magnetic-button-8',
    name: 'Magnetic Hover Buttons',
    description: 'Interactive buttons that follow cursor movement on hover',
    category: 'buttons',
    tags: ['magnetic', 'interactive', 'hover', 'modern', 'playful'],
    thumbnail: '/images/button-magnetic-8.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<button class="px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50">
  Magnetic Button
</button>`,
    reactCode: `export default function MagneticButton() {
  return (
    <button className="px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50">
      Magnetic Button
    </button>
  );
}`,
    vueCode: `<template>
  <button class="px-8 py-3 bg-violet-600 text-white font-semibold rounded-lg transition-all duration-200 hover:scale-110 hover:shadow-2xl hover:shadow-violet-500/50">
    Magnetic Button
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for creative portfolios and interactive experiences.',
    customizationTips: 'Add JavaScript for true magnetic effect that follows mouse position.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'border-animation-9',
    name: 'Animated Border Buttons',
    description: 'Buttons with animated rotating or gradient borders',
    category: 'buttons',
    tags: ['border', 'animated', 'gradient', 'modern', 'premium'],
    thumbnail: '/images/button-border-9.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<button class="relative px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden group">
  <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>
  <div class="absolute inset-[2px] bg-gray-900 rounded-lg"></div>
  <span class="relative z-10">Gradient Border</span>
</button>`,
    reactCode: `export default function AnimatedBorderButton() {
  return (
    <button className="relative px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur-sm group-hover:opacity-100 transition-opacity"></div>
      <div className="absolute inset-[2px] bg-gray-900 rounded-lg"></div>
      <span className="relative z-10">Gradient Border</span>
    </button>
  );
}`,
    vueCode: `<template>
  <button class="relative px-8 py-3 bg-gray-900 text-white font-semibold rounded-lg overflow-hidden group">
    <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 opacity-75 blur-sm group-hover:opacity-100"></div>
    <div class="absolute inset-[2px] bg-gray-900 rounded-lg"></div>
    <span class="relative z-10">Gradient Border</span>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for dark mode interfaces and modern web applications.',
    customizationTips: 'Animate the gradient with CSS keyframes for rotating effect.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'icon-button-10',
    name: 'Icon-Only Buttons',
    description: 'Circular and square icon buttons with hover effects',
    category: 'buttons',
    tags: ['icon', 'circular', 'minimal', 'modern', 'social'],
    thumbnail: '/images/button-icon-10.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<button class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all shadow-lg">
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 12h8M12 8v8"/></svg>
</button>

<button class="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center hover:shadow-xl hover:shadow-pink-500/50 hover:scale-110 transition-all">
  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
</button>`,
    reactCode: `export default function IconButtons() {
  return (
    <div className="flex gap-4">
      <button className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 hover:scale-110 transition-all shadow-lg">
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 12h8M12 8v8"/></svg>
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <button class="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center hover:scale-110 transition-all">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 12h8M12 8v8"/></svg>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for toolbars, social media links, and action buttons.',
    customizationTips: 'Use different shapes (circle, square, rounded) and sizes.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'outline-button-11',
    name: 'Outline Buttons',
    description: 'Clean outline buttons with fill animation on hover',
    category: 'buttons',
    tags: ['outline', 'minimal', 'clean', 'modern', 'secondary'],
    thumbnail: '/images/button-outline-11.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<button class="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300">
  Outline Button
</button>

<button class="relative px-8 py-3 border-2 border-emerald-600 text-emerald-600 font-semibold rounded-lg overflow-hidden group">
  <span class="relative z-10 group-hover:text-white transition-colors">Animated Fill</span>
  <div class="absolute inset-0 bg-emerald-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
</button>`,
    reactCode: `export default function OutlineButtons() {
  return (
    <div className="flex gap-4">
      <button className="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-300">
        Outline Button
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <button class="px-8 py-3 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-600 hover:text-white transition-all">
    Outline Button
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for secondary actions and minimal designs.',
    customizationTips: 'Add directional fill animations (left, right, top, bottom).',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'pill-button-12',
    name: 'Pill Buttons',
    description: 'Fully rounded pill-shaped buttons with smooth animations',
    category: 'buttons',
    tags: ['pill', 'rounded', 'modern', 'clean', 'minimal'],
    thumbnail: '/images/button-pill-12.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<button class="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
  Pill Button
</button>`,
    reactCode: `export default function PillButton() {
  return (
    <button className="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:from-blue-600 hover:to-purple-700 hover:shadow-lg hover:scale-105 transition-all duration-300">
      Pill Button
    </button>
  );
}`,
    vueCode: `<template>
  <button class="px-10 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all">
    Pill Button
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for tags, filters, and modern UI designs.',
    customizationTips: 'Works great with icon + text combinations.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'split-button-13',
    name: 'Split Buttons',
    description: 'Buttons with dropdown or secondary action split design',
    category: 'buttons',
    tags: ['split', 'dropdown', 'compound', 'modern', 'functional'],
    thumbnail: '/images/button-split-13.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="inline-flex rounded-lg shadow-lg">
  <button class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-700 transition-colors">
    Save
  </button>
  <button class="px-3 py-3 bg-indigo-600 text-white border-l border-indigo-500 rounded-r-lg hover:bg-indigo-700 transition-colors">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
  </button>
</div>`,
    reactCode: `export default function SplitButton() {
  return (
    <div className="inline-flex rounded-lg shadow-lg">
      <button className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-700 transition-colors">
        Save
      </button>
      <button className="px-3 py-3 bg-indigo-600 text-white border-l border-indigo-500 rounded-r-lg hover:bg-indigo-700 transition-colors">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="inline-flex rounded-lg shadow-lg">
    <button class="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-l-lg hover:bg-indigo-700">Save</button>
    <button class="px-3 py-3 bg-indigo-600 text-white border-l border-indigo-500 rounded-r-lg hover:bg-indigo-700">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for actions with multiple options or dropdown menus.',
    customizationTips: 'Add dropdown menu functionality with JavaScript.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'floating-button-14',
    name: 'Floating Action Buttons',
    description: 'FAB buttons with shadow and elevation effects',
    category: 'buttons',
    tags: ['fab', 'floating', 'material', 'elevated', 'action'],
    thumbnail: '/images/button-fab-14.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<button class="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-110 transition-all duration-300 flex items-center justify-center">
  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
</button>`,
    reactCode: `export default function FloatingButton() {
  return (
    <button className="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full shadow-2xl shadow-pink-500/50 hover:shadow-pink-500/70 hover:scale-110 transition-all duration-300 flex items-center justify-center">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"/></svg>
    </button>
  );
}`,
    vueCode: `<template>
  <button class="fixed bottom-8 right-8 w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all flex items-center justify-center">
    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for primary actions like "Add", "Create", or "Compose".',
    customizationTips: 'Position anywhere on screen, add extended FAB with text.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'social-button-15',
    name: 'Social Media Buttons',
    description: 'Brand-colored buttons for social media platforms',
    category: 'buttons',
    tags: ['social', 'brand', 'login', 'oauth', 'integration'],
    thumbnail: '/images/button-social-15.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<button class="px-6 py-3 bg-[#1877f2] text-white font-semibold rounded-lg hover:bg-[#0d65d9] transition-colors flex items-center gap-3">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  Continue with Facebook
</button>

<button class="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-900 transition-colors flex items-center gap-3">
  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/></svg>
  Continue with Google
</button>`,
    reactCode: `export default function SocialButtons() {
  return (
    <div className="flex flex-col gap-3">
      <button className="px-6 py-3 bg-[#1877f2] text-white font-semibold rounded-lg hover:bg-[#0d65d9] transition-colors flex items-center gap-3">
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
        Continue with Facebook
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <button class="px-6 py-3 bg-[#1877f2] text-white font-semibold rounded-lg hover:bg-[#0d65d9] transition-colors flex items-center gap-3">
    Continue with Facebook
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Essential for OAuth login and social media integrations.',
    customizationTips: 'Use official brand colors and logos for each platform.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'group-button-16',
    name: 'Button Groups',
    description: 'Connected button groups for segmented controls and toolbars',
    category: 'buttons',
    tags: ['group', 'segmented', 'toolbar', 'connected', 'toggle'],
    thumbnail: '/images/button-group-16.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="inline-flex rounded-lg shadow-sm">
  <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-l-lg hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo-600 focus:border-indigo-600 transition-colors">
    Left
  </button>
  <button class="px-6 py-2 bg-white border-t border-b border-gray-300 text-gray-700 font-medium hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo-600 focus:border-indigo-600 transition-colors">
    Center
  </button>
  <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-r-lg hover:bg-gray-50 focus:bg-indigo-50 focus:text-indigo-600 focus:border-indigo-600 transition-colors">
    Right
  </button>
</div>`,
    reactCode: `export default function ButtonGroup() {
  const [active, setActive] = React.useState('center');
  return (
    <div className="inline-flex rounded-lg shadow-sm">
      <button onClick={() => setActive('left')} className={\`px-6 py-2 border font-medium rounded-l-lg transition-colors \${active === 'left' ? 'bg-indigo-50 text-indigo-600 border-indigo-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}\`}>
        Left
      </button>
      <button onClick={() => setActive('center')} className={\`px-6 py-2 border-t border-b font-medium transition-colors \${active === 'center' ? 'bg-indigo-50 text-indigo-600 border-indigo-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}\`}>
        Center
      </button>
      <button onClick={() => setActive('right')} className={\`px-6 py-2 border font-medium rounded-r-lg transition-colors \${active === 'right' ? 'bg-indigo-50 text-indigo-600 border-indigo-600' : 'bg-white border-gray-300 text-gray-700 hover:bg-gray-50'}\`}>
        Right
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="inline-flex rounded-lg shadow-sm">
    <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-l-lg hover:bg-gray-50">Left</button>
    <button class="px-6 py-2 bg-white border-t border-b border-gray-300 text-gray-700 font-medium hover:bg-gray-50">Center</button>
    <button class="px-6 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-r-lg hover:bg-gray-50">Right</button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for text alignment, view toggles, and segmented controls.',
    customizationTips: 'Add active state styling and toggle functionality.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'success-button-17',
    name: 'Success State Buttons',
    description: 'Buttons with success checkmark animation after action completion',
    category: 'buttons',
    tags: ['success', 'checkmark', 'animated', 'feedback', 'state'],
    thumbnail: '/images/button-success-17.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<button class="px-8 py-3 bg-emerald-600 text-white font-semibold rounded-lg hover:bg-emerald-700 transition-all flex items-center gap-2">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
  Success!
</button>`,
    reactCode: `export default function SuccessButton() {
  const [success, setSuccess] = React.useState(false);
  
  const handleClick = () => {
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };
  
  return (
    <button onClick={handleClick} className={\`px-8 py-3 font-semibold rounded-lg transition-all flex items-center gap-2 \${success ? 'bg-emerald-600 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'}\`}>
      {success ? (
        <>
          <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
          Success!
        </>
      ) : 'Click Me'}
    </button>
  );
}`,
    vueCode: `<template>
  <button @click="handleClick" :class="success ? 'bg-emerald-600' : 'bg-indigo-600'" class="px-8 py-3 text-white font-semibold rounded-lg transition-all flex items-center gap-2">
    <svg v-if="success" class="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
    {{ success ? 'Success!' : 'Click Me' }}
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Great for form submissions and actions requiring user feedback.',
    customizationTips: 'Add error states with red color and X icon.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'download-button-18',
    name: 'Download Progress Buttons',
    description: 'Buttons with download progress bar animation',
    category: 'buttons',
    tags: ['download', 'progress', 'animated', 'loading', 'state'],
    thumbnail: '/images/button-download-18.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<button class="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors overflow-hidden group">
  <span class="relative z-10 flex items-center gap-2">
    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
    Download
  </span>
  <div class="absolute bottom-0 left-0 h-1 bg-white/30 w-0 group-hover:w-full transition-all duration-2000"></div>
</button>`,
    reactCode: `export default function DownloadButton() {
  const [downloading, setDownloading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  
  const handleDownload = () => {
    setDownloading(true);
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setDownloading(false);
          return 0;
        }
        return prev + 10;
      });
    }, 200);
  };
  
  return (
    <button onClick={handleDownload} disabled={downloading} className="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors overflow-hidden">
      <span className="relative z-10 flex items-center gap-2">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
        {downloading ? \`\${progress}%\` : 'Download'}
      </span>
      {downloading && <div className="absolute bottom-0 left-0 h-1 bg-white/50 transition-all duration-200" style={{width: \`\${progress}%\`}}></div>}
    </button>
  );
}`,
    vueCode: `<template>
  <button class="relative px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 overflow-hidden">
    <span class="relative z-10 flex items-center gap-2">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/></svg>
      Download
    </span>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for file downloads and long-running operations.',
    customizationTips: 'Add percentage display and cancel button during download.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'toggle-button-19',
    name: 'Toggle Buttons',
    description: 'Switch-style toggle buttons for on/off states',
    category: 'buttons',
    tags: ['toggle', 'switch', 'checkbox', 'state', 'interactive'],
    thumbnail: '/images/button-toggle-19.png',
    featured: false,
    popular: true,
    isNew: true,
    htmlCode: `<button class="relative w-14 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
  <span class="absolute left-1 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"></span>
</button>

<!-- Active State -->
<button class="relative w-14 h-8 bg-indigo-600 rounded-full transition-colors duration-300">
  <span class="absolute left-7 top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"></span>
</button>`,
    reactCode: `export default function ToggleButton() {
  const [enabled, setEnabled] = React.useState(false);
  
  return (
    <button onClick={() => setEnabled(!enabled)} className={\`relative w-14 h-8 rounded-full transition-colors duration-300 \${enabled ? 'bg-indigo-600' : 'bg-gray-300'}\`}>
      <span className={\`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 \${enabled ? 'left-7' : 'left-1'}\`}></span>
    </button>
  );
}`,
    vueCode: `<template>
  <button @click="enabled = !enabled" :class="enabled ? 'bg-indigo-600' : 'bg-gray-300'" class="relative w-14 h-8 rounded-full transition-colors duration-300">
    <span :class="enabled ? 'left-7' : 'left-1'" class="absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300"></span>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for settings, preferences, and binary choices.',
    customizationTips: 'Add labels, icons inside toggle, or different sizes.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },

  {
    id: 'premium-cta-20',
    name: 'Premium CTA Buttons',
    description: 'High-converting call-to-action buttons with multiple effects combined',
    category: 'buttons',
    tags: ['cta', 'premium', 'conversion', 'animated', 'gradient'],
    thumbnail: '/images/button-cta-20.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<button class="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
  <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
  <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
  <span class="relative z-10 flex items-center gap-3">
    Get Started Now
    <svg class="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
  </span>
</button>`,
    reactCode: `export default function PremiumCTAButton() {
  return (
    <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
      <span className="relative z-10 flex items-center gap-3">
        Get Started Now
        <svg className="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
      </span>
    </button>
  );
}`,
    vueCode: `<template>
  <button class="group relative px-10 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white text-lg font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl">
    <div class="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
    <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
    <span class="relative z-10 flex items-center gap-3">
      Get Started Now
      <svg class="w-6 h-6 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/></svg>
    </span>
  </button>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Use for primary conversion points like sign-ups, purchases, or key actions.',
    customizationTips: 'Combine glow, shimmer, and scale effects for maximum impact.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
];
