export interface Component {
  id: string;
  name: string;
  description: string;
  category: Category;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  popular: boolean;
  isNew: boolean;
  htmlCode: string;
  reactCode: string;
  vueCode: string;
  cssCode?: string;
  dependencies: string[];
  usage: string;
  customizationTips: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  likes: number;
}

export type Category =
  | 'hero'
  | 'navigation'
  | 'buttons'
  | 'cards'
  | 'forms'
  | 'cta'
  | 'features'
  | 'testimonials'
  | 'pricing'
  | 'footers'
  | 'other';

export const categories: { name: Category; label: string; description: string }[] = [
  { name: 'hero', label: 'Hero Sections', description: 'Eye-catching hero sections for landing pages' },
  { name: 'navigation', label: 'Navigation', description: 'Navigation bars, menus, and sidebars' },
  { name: 'buttons', label: 'Buttons', description: 'Call-to-action buttons and button groups' },
  { name: 'cards', label: 'Cards', description: 'Content cards for products, blog posts, and more' },
  { name: 'forms', label: 'Forms', description: 'Form layouts and input components' },
  { name: 'cta', label: 'Call-to-Action', description: 'CTA sections to drive conversions' },
  { name: 'features', label: 'Features', description: 'Feature showcases and highlights' },
  { name: 'testimonials', label: 'Testimonials', description: 'Customer testimonials and reviews' },
  { name: 'pricing', label: 'Pricing Tables', description: 'Pricing plans and comparison tables' },
  { name: 'footers', label: 'Footers', description: 'Website footers with links and information' },
  { name: 'other', label: 'Other Components', description: 'Modals, alerts, tabs, and more' },
];

// Sample components for initial testing
export const components: Component[] = [
  {
    id: 'gradient-hero-1',
    name: 'Gradient Hero with CTA',
    description: 'Modern hero section with gradient background and call-to-action buttons',
    category: 'hero',
    tags: ['gradient', 'cta', 'modern', 'responsive'],
    thumbnail: '/images/hero-gradient-1.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
    <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
      Build Faster with <span class="text-secondary-200">Beautiful Components</span>
    </h1>
    <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
      Copy and paste production-ready UI components built with Tailwind CSS. Save hours of development time.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href="/components" class="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
        Browse Components
      </a>
      <a href="#features" class="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
        Learn More
      </a>
    </div>
  </div>
</section>`,
    reactCode: `export default function GradientHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Build Faster with <span className="text-secondary-200">Beautiful Components</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
          Copy and paste production-ready UI components built with Tailwind CSS. Save hours of development time.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/components" className="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Browse Components
          </a>
          <a href="#features" className="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}`,
    vueCode: `<template>
  <section class="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-secondary-500 to-primary-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <h1 class="text-5xl md:text-7xl font-bold text-white mb-6">
        Build Faster with <span class="text-secondary-200">Beautiful Components</span>
      </h1>
      <p class="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto">
        Copy and paste production-ready UI components built with Tailwind CSS. Save hours of development time.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/components" class="px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
          Browse Components
        </a>
        <a href="#features" class="px-8 py-4 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors backdrop-blur-sm">
          Learn More
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed for this component
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Add this hero section to the top of your landing page. Customize the gradient colors in your Tailwind config.',
    customizationTips: 'Change gradient colors by modifying the from-, via-, and to- classes. Adjust text sizes for different screen sizes.',
    createdAt: '2024-12-21',
    updatedAt: '2024-12-21',
    views: 0,
    likes: 0,
  },
];
