import { Component } from '../components';

export const cardComponents: Component[] = [
  // Card 1: Basic Content Card
  {
    id: 'basic-content-card-1',
    name: 'Basic Content Card',
    description: 'Clean and simple card with title, description, and action button',
    category: 'cards',
    tags: ['basic', 'simple', 'content'],
    thumbnail: '/images/card-basic-1.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Getting Started</h3>
  <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Learn the fundamentals and start building amazing projects with our comprehensive guide.</p>
  <button class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
    Read more →
  </button>
</div>`,
    reactCode: `export default function BasicContentCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Getting Started</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Learn the fundamentals and start building amazing projects with our comprehensive guide.</p>
      <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
        Read more →
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:border-primary-300 dark:hover:border-primary-700 transition-colors">
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Getting Started</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Learn the fundamentals and start building amazing projects with our comprehensive guide.</p>
    <button class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
      Read more →
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for content previews, documentation sections, or feature highlights.',
    customizationTips: 'Add icons, modify padding, include images, or stack multiple cards in a grid.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 2: Pricing Card
  {
    id: 'pricing-card-2',
    name: 'Premium Pricing Card',
    description: 'Feature-rich pricing card with gradient accent and feature list',
    category: 'cards',
    tags: ['pricing', 'premium', 'gradient', 'subscription'],
    thumbnail: '/images/card-pricing-2.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<div class="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-primary-500 dark:border-primary-600 p-8 shadow-xl shadow-primary-500/10">
  <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold rounded-full">
    POPULAR
  </div>
  <div class="text-center mb-6">
    <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
    <div class="flex items-end justify-center gap-1">
      <span class="text-5xl font-bold text-gray-900 dark:text-white">$49</span>
      <span class="text-gray-600 dark:text-gray-400 pb-2">/month</span>
    </div>
  </div>
  <ul class="space-y-3 mb-8">
    <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      Unlimited projects
    </li>
    <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      Advanced analytics
    </li>
    <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      Priority support
    </li>
    <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
      <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
      </svg>
      Custom integrations
    </li>
  </ul>
  <button class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all">
    Get Started
  </button>
</div>`,
    reactCode: `export default function PremiumPricingCard() {
  return (
    <div className="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-primary-500 dark:border-primary-600 p-8 shadow-xl shadow-primary-500/10">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold rounded-full">
        POPULAR
      </div>
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
        <div className="flex items-end justify-center gap-1">
          <span className="text-5xl font-bold text-gray-900 dark:text-white">$49</span>
          <span className="text-gray-600 dark:text-gray-400 pb-2">/month</span>
        </div>
      </div>
      <ul className="space-y-3 mb-8">
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Unlimited projects
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Advanced analytics
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Priority support
        </li>
        <li className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          Custom integrations
        </li>
      </ul>
      <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all">
        Get Started
      </button>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="relative bg-white dark:bg-gray-900 rounded-2xl border-2 border-primary-500 dark:border-primary-600 p-8 shadow-xl shadow-primary-500/10">
    <div class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-xs font-bold rounded-full">
      POPULAR
    </div>
    <div class="text-center mb-6">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">Professional</h3>
      <div class="flex items-end justify-center gap-1">
        <span class="text-5xl font-bold text-gray-900 dark:text-white">$49</span>
        <span class="text-gray-600 dark:text-gray-400 pb-2">/month</span>
      </div>
    </div>
    <ul class="space-y-3 mb-8">
      <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Unlimited projects
      </li>
      <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Advanced analytics
      </li>
      <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Priority support
      </li>
      <li class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
        <svg class="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
        </svg>
        Custom integrations
      </li>
    </ul>
    <button class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-xl hover:from-primary-700 hover:to-secondary-700 transition-all">
      Get Started
    </button>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for pricing pages, subscription plans, and product tiers.',
    customizationTips: 'Adjust border color for different plan levels, add annual/monthly toggle, include savings badge.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 3: Team Member Card
  {
    id: 'team-member-card-3',
    name: 'Team Member Card',
    description: 'Profile card with avatar, role, and social links in horizontal layout',
    category: 'cards',
    tags: ['team', 'profile', 'avatar', 'social'],
    thumbnail: '/images/card-team-3.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
  <div class="flex items-center gap-4">
    <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
      JD
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="text-base font-semibold text-gray-900 dark:text-white truncate">Jane Doe</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">Lead Designer</p>
    </div>
    <div class="flex gap-2 flex-shrink-0">
      <a href="#" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
      </a>
      <a href="#" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
      </a>
    </div>
  </div>
</div>`,
    reactCode: `export default function TeamMemberCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
          JD
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-base font-semibold text-gray-900 dark:text-white truncate">Jane Doe</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Lead Designer</p>
        </div>
        <div className="flex gap-2 flex-shrink-0">
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
          </a>
          <a href="#" className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-center gap-4">
      <div class="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-500 rounded-full flex items-center justify-center text-white text-xl font-bold flex-shrink-0">
        JD
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="text-base font-semibold text-gray-900 dark:text-white truncate">Jane Doe</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">Lead Designer</p>
      </div>
      <div class="flex gap-2 flex-shrink-0">
        <a href="#" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
        </a>
        <a href="#" class="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for team pages, author bios, and staff directories.',
    customizationTips: 'Replace initials with actual images, add more social links, include contact button.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 4: Product Card with Image
  {
    id: 'product-image-card-4',
    name: 'Product Image Card',
    description: 'E-commerce product card with image, badge, rating, and price',
    category: 'cards',
    tags: ['product', 'ecommerce', 'shopping', 'image'],
    thumbnail: '/images/card-product-4.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group">
  <div class="relative aspect-square bg-gray-100 dark:bg-gray-800">
    <div class="absolute top-3 right-3 px-2 py-1 bg-secondary-600 text-white text-xs font-bold rounded-lg">
      -20%
    </div>
    <div class="absolute inset-0 flex items-center justify-center text-gray-400">
      <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
      </svg>
    </div>
  </div>
  <div class="p-4">
    <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1 truncate">Premium Wireless Headphones</h3>
    <div class="flex items-center gap-1 mb-2">
      <div class="flex">
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
      </div>
      <span class="text-xs text-gray-600 dark:text-gray-400">(128)</span>
    </div>
    <div class="flex items-center justify-between">
      <div>
        <span class="text-xl font-bold text-gray-900 dark:text-white">$79.99</span>
        <span class="text-sm text-gray-500 dark:text-gray-500 line-through ml-2">$99.99</span>
      </div>
      <button class="w-9 h-9 flex items-center justify-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      </button>
    </div>
  </div>
</div>`,
    reactCode: `export default function ProductImageCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-800">
        <div className="absolute top-3 right-3 px-2 py-1 bg-secondary-600 text-white text-xs font-bold rounded-lg">
          -20%
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
          </svg>
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 truncate">Premium Wireless Headphones</h3>
        <div className="flex items-center gap-1 mb-2">
          <div className="flex">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            ))}
            <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400">(128)</span>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-bold text-gray-900 dark:text-white">$79.99</span>
            <span className="text-sm text-gray-500 dark:text-gray-500 line-through ml-2">$99.99</span>
          </div>
          <button className="w-9 h-9 flex items-center justify-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group">
    <div class="relative aspect-square bg-gray-100 dark:bg-gray-800">
      <div class="absolute top-3 right-3 px-2 py-1 bg-secondary-600 text-white text-xs font-bold rounded-lg">
        -20%
      </div>
      <div class="absolute inset-0 flex items-center justify-center text-gray-400">
        <svg class="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
        </svg>
      </div>
    </div>
    <div class="p-4">
      <h3 class="text-base font-semibold text-gray-900 dark:text-white mb-1 truncate">Premium Wireless Headphones</h3>
      <div class="flex items-center gap-1 mb-2">
        <div class="flex">
          <svg v-for="i in 4" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
        <span class="text-xs text-gray-600 dark:text-gray-400">(128)</span>
      </div>
      <div class="flex items-center justify-between">
        <div>
          <span class="text-xl font-bold text-gray-900 dark:text-white">$79.99</span>
          <span class="text-sm text-gray-500 dark:text-gray-500 line-through ml-2">$99.99</span>
        </div>
        <button class="w-9 h-9 flex items-center justify-center bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for product listings, online stores, and marketplace applications.',
    customizationTips: 'Replace placeholder with real images, add wishlist button, include color/size variants.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 5: Stats Card
  {
    id: 'stats-card-5',
    name: 'Stats Dashboard Card',
    description: 'Analytics card with large metric, trend indicator, and sparkline visualization',
    category: 'cards',
    tags: ['stats', 'analytics', 'dashboard', 'metrics'],
    thumbnail: '/images/card-stats-5.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<div class="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-900 rounded-xl p-6 text-white shadow-lg">
  <div class="flex items-start justify-between mb-4">
    <div>
      <p class="text-primary-100 text-sm font-medium mb-1">Total Revenue</p>
      <h3 class="text-3xl font-bold">$54,239</h3>
    </div>
    <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
  </div>
  <div class="flex items-center gap-2">
    <div class="flex items-center gap-1 px-2 py-1 bg-green-500/30 rounded-lg">
      <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
      </svg>
      <span class="text-sm font-semibold">12.5%</span>
    </div>
    <span class="text-sm text-primary-100">vs last month</span>
  </div>
</div>`,
    reactCode: `export default function StatsDashboardCard() {
  return (
    <div className="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-900 rounded-xl p-6 text-white shadow-lg">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-primary-100 text-sm font-medium mb-1">Total Revenue</p>
          <h3 className="text-3xl font-bold">$54,239</h3>
        </div>
        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1 px-2 py-1 bg-green-500/30 rounded-lg">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
          </svg>
          <span className="text-sm font-semibold">12.5%</span>
        </div>
        <span className="text-sm text-primary-100">vs last month</span>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-gradient-to-br from-primary-500 to-primary-700 dark:from-primary-600 dark:to-primary-900 rounded-xl p-6 text-white shadow-lg">
    <div class="flex items-start justify-between mb-4">
      <div>
        <p class="text-primary-100 text-sm font-medium mb-1">Total Revenue</p>
        <h3 class="text-3xl font-bold">$54,239</h3>
      </div>
      <div class="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
    </div>
    <div class="flex items-center gap-2">
      <div class="flex items-center gap-1 px-2 py-1 bg-green-500/30 rounded-lg">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
        <span class="text-sm font-semibold">12.5%</span>
      </div>
      <span class="text-sm text-primary-100">vs last month</span>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for admin dashboards, analytics panels, and KPI displays.',
    customizationTips: 'Add chart integration, customize gradient colors, include time period selector.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 6: Testimonial Card
  {
    id: 'testimonial-card-6',
    name: 'Testimonial Quote Card',
    description: 'Customer testimonial with large quote, avatar, and company details',
    category: 'cards',
    tags: ['testimonial', 'review', 'quote', 'social-proof'],
    thumbnail: '/images/card-testimonial-6.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
  <svg class="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
  </svg>
  <p class="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
    "This product has completely transformed how we work. The attention to detail and user experience is outstanding."
  </p>
  <div class="flex items-center gap-3">
    <div class="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white font-semibold">
      SK
    </div>
    <div>
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</h4>
      <p class="text-xs text-gray-600 dark:text-gray-400">CEO, TechCorp</p>
    </div>
  </div>
</div>`,
    reactCode: `export default function TestimonialQuoteCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
      <svg className="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
      </svg>
      <p className="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
        "This product has completely transformed how we work. The attention to detail and user experience is outstanding."
      </p>
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white font-semibold">
          SK
        </div>
        <div>
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">CEO, TechCorp</p>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8">
    <svg class="w-10 h-10 text-primary-500 mb-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
    </svg>
    <p class="text-gray-700 dark:text-gray-300 text-base mb-6 leading-relaxed">
      "This product has completely transformed how we work. The attention to detail and user experience is outstanding."
    </p>
    <div class="flex items-center gap-3">
      <div class="w-12 h-12 bg-gradient-to-br from-secondary-400 to-secondary-600 rounded-full flex items-center justify-center text-white font-semibold">
        SK
      </div>
      <div>
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Sarah Kim</h4>
        <p class="text-xs text-gray-600 dark:text-gray-400">CEO, TechCorp</p>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for testimonial sections, review showcases, and social proof displays.',
    customizationTips: 'Add star ratings, include company logo, link to full case study.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 7: Blog Post Card
  {
    id: 'blog-post-card-7',
    name: 'Blog Post Card',
    description: 'Article preview with cover image, category tag, reading time, and author info',
    category: 'cards',
    tags: ['blog', 'article', 'content', 'news'],
    thumbnail: '/images/card-blog-7.png',
    featured: true,
    popular: true,
    isNew: false,
    htmlCode: `<article class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow group">
  <div class="relative h-48 bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900">
    <div class="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
      Technology
    </div>
  </div>
  <div class="p-6">
    <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
      <time datetime="2024-12-24">Dec 24, 2024</time>
      <span>•</span>
      <span>5 min read</span>
    </div>
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
      The Future of Web Development
    </h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
      Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond.
    </p>
    <div class="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
      <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
      <div class="text-sm">
        <p class="font-medium text-gray-900 dark:text-white">John Smith</p>
      </div>
    </div>
  </div>
</article>`,
    reactCode: `export default function BlogPostCard() {
  return (
    <article className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow group">
      <div className="relative h-48 bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900">
        <div className="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
          Technology
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
          <time dateTime="2024-12-24">Dec 24, 2024</time>
          <span>•</span>
          <span>5 min read</span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          The Future of Web Development
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond.
        </p>
        <div className="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
          <div className="text-sm">
            <p className="font-medium text-gray-900 dark:text-white">John Smith</p>
          </div>
        </div>
      </div>
    </article>
  );
}`,
    vueCode: `<template>
  <article class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow group">
    <div class="relative h-48 bg-gradient-to-br from-primary-200 to-secondary-200 dark:from-primary-900 dark:to-secondary-900">
      <div class="absolute top-4 left-4 px-3 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
        Technology
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
        <time datetime="2024-12-24">Dec 24, 2024</time>
        <span>•</span>
        <span>5 min read</span>
      </div>
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
        The Future of Web Development
      </h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        Exploring the latest trends and technologies shaping the future of web development in 2024 and beyond.
      </p>
      <div class="flex items-center gap-3 pt-4 border-t border-gray-200 dark:border-gray-800">
        <div class="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
        <div class="text-sm">
          <p class="font-medium text-gray-900 dark:text-white">John Smith</p>
        </div>
      </div>
    </div>
  </article>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for blog listings, news sites, and content platforms.',
    customizationTips: 'Replace gradient with real images, add tags, include share buttons, bookmark feature.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 8: Feature Icon Card
  {
    id: 'feature-icon-card-8',
    name: 'Feature Icon Card',
    description: 'Centered icon card with gradient background and feature description',
    category: 'cards',
    tags: ['feature', 'icon', 'service', 'centered'],
    thumbnail: '/images/card-feature-8.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:-translate-y-1">
  <div class="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
    <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
    </svg>
  </div>
  <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
  <p class="text-sm text-gray-600 dark:text-gray-400">
    Optimized performance that delivers blazing fast load times for the best user experience.
  </p>
</div>`,
    reactCode: `export default function FeatureIconCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
        <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Optimized performance that delivers blazing fast load times for the best user experience.
      </p>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-8 text-center hover:border-primary-300 dark:hover:border-primary-700 transition-all hover:-translate-y-1">
    <div class="w-14 h-14 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary-500/30">
      <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Lightning Fast</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">
      Optimized performance that delivers blazing fast load times for the best user experience.
    </p>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for feature grids, service highlights, and benefits sections.',
    customizationTips: 'Customize icon and gradient colors, add learn more link, adjust spacing.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 9: Profile Card (Vertical)
  {
    id: 'profile-vertical-card-9',
    name: 'Vertical Profile Card',
    description: 'User profile card with large avatar, bio, stats, and action buttons in vertical layout',
    category: 'cards',
    tags: ['profile', 'user', 'avatar', 'vertical', 'social'],
    thumbnail: '/images/card-profile-9.png',
    featured: true,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
  <div class="h-24 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
  <div class="px-6 pb-6">
    <div class="flex flex-col items-center -mt-12">
      <div class="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white text-2xl font-bold">
        AM
      </div>
      <h3 class="mt-3 text-xl font-bold text-gray-900 dark:text-white">Alex Morgan</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">@alexmorgan</p>
      <p class="mt-3 text-sm text-gray-700 dark:text-gray-300 text-center">
        Product designer passionate about creating beautiful user experiences.
      </p>
    </div>
    <div class="grid grid-cols-3 gap-4 mt-6 mb-6 text-center">
      <div>
        <p class="text-lg font-bold text-gray-900 dark:text-white">1.2K</p>
        <p class="text-xs text-gray-600 dark:text-gray-400">Followers</p>
      </div>
      <div>
        <p class="text-lg font-bold text-gray-900 dark:text-white">543</p>
        <p class="text-xs text-gray-600 dark:text-gray-400">Following</p>
      </div>
      <div>
        <p class="text-lg font-bold text-gray-900 dark:text-white">89</p>
        <p class="text-xs text-gray-600 dark:text-gray-400">Posts</p>
      </div>
    </div>
    <div class="flex gap-2">
      <button class="flex-1 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700">
        Follow
      </button>
      <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
        Message
      </button>
    </div>
  </div>
</div>`,
    reactCode: `export default function VerticalProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
      <div className="h-24 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      <div className="px-6 pb-6">
        <div className="flex flex-col items-center -mt-12">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white text-2xl font-bold">
            AM
          </div>
          <h3 className="mt-3 text-xl font-bold text-gray-900 dark:text-white">Alex Morgan</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">@alexmorgan</p>
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300 text-center">
            Product designer passionate about creating beautiful user experiences.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-6 mb-6 text-center">
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">1.2K</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Followers</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">543</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Following</p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">89</p>
            <p className="text-xs text-gray-600 dark:text-gray-400">Posts</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="flex-1 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700">
            Follow
          </button>
          <button className="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
            Message
          </button>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden">
    <div class="h-24 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
    <div class="px-6 pb-6">
      <div class="flex flex-col items-center -mt-12">
        <div class="w-24 h-24 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center text-white text-2xl font-bold">
          AM
        </div>
        <h3 class="mt-3 text-xl font-bold text-gray-900 dark:text-white">Alex Morgan</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">@alexmorgan</p>
        <p class="mt-3 text-sm text-gray-700 dark:text-gray-300 text-center">
          Product designer passionate about creating beautiful user experiences.
        </p>
      </div>
      <div class="grid grid-cols-3 gap-4 mt-6 mb-6 text-center">
        <div>
          <p class="text-lg font-bold text-gray-900 dark:text-white">1.2K</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Followers</p>
        </div>
        <div>
          <p class="text-lg font-bold text-gray-900 dark:text-white">543</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Following</p>
        </div>
        <div>
          <p class="text-lg font-bold text-gray-900 dark:text-white">89</p>
          <p class="text-xs text-gray-600 dark:text-gray-400">Posts</p>
        </div>
      </div>
      <div class="flex gap-2">
        <button class="flex-1 py-2 bg-gradient-to-r from-primary-600 to-secondary-600 text-white text-sm font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700">
          Follow
        </button>
        <button class="px-4 py-2 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
          Message
        </button>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for social media apps, user directories, and community platforms.',
    customizationTips: 'Add real images, include badge/verification icon, add more social stats.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 10: Event Card
  {
    id: 'event-card-10',
    name: 'Event Date Card',
    description: 'Event card with prominent date block, location, and registration button',
    category: 'cards',
    tags: ['event', 'calendar', 'date', 'meeting'],
    thumbnail: '/images/card-event-10.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
  <div class="flex gap-4">
    <div class="flex-shrink-0 w-16 text-center">
      <div class="bg-primary-600 text-white rounded-t-lg py-1 px-2 text-xs font-semibold">
        DEC
      </div>
      <div class="bg-gray-100 dark:bg-gray-800 rounded-b-lg py-2 px-2">
        <span class="text-2xl font-bold text-gray-900 dark:text-white">24</span>
      </div>
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
        Product Launch Webinar
      </h3>
      <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>2:00 PM - 3:30 PM</span>
      </div>
      <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span>Virtual Event</span>
      </div>
      <button class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
        Register now →
      </button>
    </div>
  </div>
</div>`,
    reactCode: `export default function EventDateCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
      <div className="flex gap-4">
        <div className="flex-shrink-0 w-16 text-center">
          <div className="bg-primary-600 text-white rounded-t-lg py-1 px-2 text-xs font-semibold">
            DEC
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 rounded-b-lg py-2 px-2">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">24</span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
            Product Launch Webinar
          </h3>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>2:00 PM - 3:30 PM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>Virtual Event</span>
          </div>
          <button className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
            Register now →
          </button>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
    <div class="flex gap-4">
      <div class="flex-shrink-0 w-16 text-center">
        <div class="bg-primary-600 text-white rounded-t-lg py-1 px-2 text-xs font-semibold">
          DEC
        </div>
        <div class="bg-gray-100 dark:bg-gray-800 rounded-b-lg py-2 px-2">
          <span class="text-2xl font-bold text-gray-900 dark:text-white">24</span>
        </div>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-1 truncate">
          Product Launch Webinar
        </h3>
        <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>2:00 PM - 3:30 PM</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-3">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>Virtual Event</span>
        </div>
        <button class="text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
          Register now →
        </button>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for event listings, calendar applications, and conference schedules.',
    customizationTips: 'Add attendee count, include speaker info, add to calendar button, show availability.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 11: Notification Card
  {
    id: 'notification-card-11',
    name: 'Notification Alert Card',
    description: 'Notification card with icon, message, timestamp, and dismiss button',
    category: 'cards',
    tags: ['notification', 'alert', 'message', 'toast'],
    thumbnail: '/images/card-notification-11.png',
    featured: false,
    popular: false,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border-l-4 border-primary-600 border-r border-t border-b border-gray-200 dark:border-gray-800 p-4 shadow-sm">
  <div class="flex items-start gap-3">
    <div class="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
      <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    </div>
    <div class="flex-1 min-w-0">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">New update available</h4>
      <p class="text-sm text-gray-600 dark:text-gray-400">Version 2.0 is now available for download with exciting new features.</p>
      <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">2 minutes ago</p>
    </div>
    <button class="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
</div>`,
    reactCode: `export default function NotificationAlertCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border-l-4 border-primary-600 border-r border-t border-b border-gray-200 dark:border-gray-800 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">New update available</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">Version 2.0 is now available for download with exciting new features.</p>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">2 minutes ago</p>
        </div>
        <button className="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border-l-4 border-primary-600 border-r border-t border-b border-gray-200 dark:border-gray-800 p-4 shadow-sm">
    <div class="flex items-start gap-3">
      <div class="flex-shrink-0 w-10 h-10 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
        <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </div>
      <div class="flex-1 min-w-0">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-1">New update available</h4>
        <p class="text-sm text-gray-600 dark:text-gray-400">Version 2.0 is now available for download with exciting new features.</p>
        <p class="text-xs text-gray-500 dark:text-gray-500 mt-2">2 minutes ago</p>
      </div>
      <button class="flex-shrink-0 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for notification systems, activity feeds, and alert messages.',
    customizationTips: 'Change border color for different alert types (success, warning, error), add action buttons.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 12: Weather Card
  {
    id: 'weather-card-12',
    name: 'Weather Widget Card',
    description: 'Weather card with temperature, condition, and forecast icons',
    category: 'cards',
    tags: ['weather', 'widget', 'temperature', 'forecast'],
    thumbnail: '/images/card-weather-12.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
  <div class="flex items-start justify-between mb-4">
    <div>
      <h3 class="text-xl font-semibold">San Francisco</h3>
      <p class="text-sky-100 text-sm">Monday, 3:45 PM</p>
    </div>
    <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm12.728 12.728a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm18 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM5.05 18.778a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zm12.728-12.728a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
    </svg>
  </div>
  <div class="mb-6">
    <div class="text-6xl font-bold mb-1">72°</div>
    <p class="text-sky-100">Sunny</p>
  </div>
  <div class="grid grid-cols-3 gap-4 pt-4 border-t border-sky-300/30">
    <div class="text-center">
      <p class="text-sky-100 text-xs mb-1">Wind</p>
      <p class="font-semibold">12 mph</p>
    </div>
    <div class="text-center">
      <p class="text-sky-100 text-xs mb-1">Humidity</p>
      <p class="font-semibold">65%</p>
    </div>
    <div class="text-center">
      <p class="text-sky-100 text-xs mb-1">UV Index</p>
      <p class="font-semibold">6</p>
    </div>
  </div>
</div>`,
    reactCode: `export default function WeatherWidgetCard() {
  return (
    <div className="bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold">San Francisco</h3>
          <p className="text-sky-100 text-sm">Monday, 3:45 PM</p>
        </div>
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm12.728 12.728a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm18 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM5.05 18.778a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zm12.728-12.728a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
        </svg>
      </div>
      <div className="mb-6">
        <div className="text-6xl font-bold mb-1">72°</div>
        <p className="text-sky-100">Sunny</p>
      </div>
      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-sky-300/30">
        <div className="text-center">
          <p className="text-sky-100 text-xs mb-1">Wind</p>
          <p className="font-semibold">12 mph</p>
        </div>
        <div className="text-center">
          <p className="text-sky-100 text-xs mb-1">Humidity</p>
          <p className="font-semibold">65%</p>
        </div>
        <div className="text-center">
          <p className="text-sky-100 text-xs mb-1">UV Index</p>
          <p className="font-semibold">6</p>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl p-6 text-white shadow-xl">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-xl font-semibold">San Francisco</h3>
        <p class="text-sky-100 text-sm">Monday, 3:45 PM</p>
      </div>
      <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm0 18a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 5.05a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414zm12.728 12.728a1 1 0 011.414 0l.707.707a1 1 0 01-1.414 1.414l-.707-.707a1 1 0 010-1.414zM2 12a1 1 0 011-1h1a1 1 0 110 2H3a1 1 0 01-1-1zm18 0a1 1 0 011-1h1a1 1 0 110 2h-1a1 1 0 01-1-1zM5.05 18.778a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zm12.728-12.728a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
      </svg>
    </div>
    <div class="mb-6">
      <div class="text-6xl font-bold mb-1">72°</div>
      <p class="text-sky-100">Sunny</p>
    </div>
    <div class="grid grid-cols-3 gap-4 pt-4 border-t border-sky-300/30">
      <div class="text-center">
        <p class="text-sky-100 text-xs mb-1">Wind</p>
        <p class="font-semibold">12 mph</p>
      </div>
      <div class="text-center">
        <p class="text-sky-100 text-xs mb-1">Humidity</p>
        <p class="font-semibold">65%</p>
      </div>
      <div class="text-center">
        <p class="text-sky-100 text-xs mb-1">UV Index</p>
        <p class="font-semibold">6</p>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for dashboard widgets, weather apps, and home screens.',
    customizationTips: 'Connect to weather API, add hourly forecast, include animations for conditions.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 13: Social Media Card
  {
    id: 'social-media-card-13',
    name: 'Social Media Post Card',
    description: 'Social feed card with avatar, post content, interactions, and engagement metrics',
    category: 'cards',
    tags: ['social', 'post', 'feed', 'engagement'],
    thumbnail: '/images/card-social-13.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
  <div class="flex items-center gap-3 mb-4">
    <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
    <div class="flex-1">
      <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Jessica Chen</h4>
      <p class="text-xs text-gray-600 dark:text-gray-400">2 hours ago</p>
    </div>
    <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
      <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
      </svg>
    </button>
  </div>
  <p class="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
    Just launched our new design system! 🎉 Excited to share what we've been working on for the past 3 months.
  </p>
  <div class="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
    <button class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
      <span class="text-sm font-medium">124</span>
    </button>
    <button class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
      </svg>
      <span class="text-sm font-medium">38</span>
    </button>
    <button class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 ml-auto">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
      </svg>
    </button>
  </div>
</div>`,
    reactCode: `export default function SocialMediaPostCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
        <div className="flex-1">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Jessica Chen</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400">2 hours ago</p>
        </div>
        <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
          </svg>
        </button>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
        Just launched our new design system! 🎉 Excited to share what we've been working on for the past 3 months.
      </p>
      <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
          <span className="text-sm font-medium">124</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
          <span className="text-sm font-medium">38</span>
        </button>
        <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 ml-auto">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
    <div class="flex items-center gap-3 mb-4">
      <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full"></div>
      <div class="flex-1">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Jessica Chen</h4>
        <p class="text-xs text-gray-600 dark:text-gray-400">2 hours ago</p>
      </div>
      <button class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"/>
        </svg>
      </button>
    </div>
    <p class="text-sm text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
      Just launched our new design system! 🎉 Excited to share what we've been working on for the past 3 months.
    </p>
    <div class="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
      <button class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
        <span class="text-sm font-medium">124</span>
      </button>
      <button class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        <span class="text-sm font-medium">38</span>
      </button>
      <button class="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 ml-auto">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"/>
        </svg>
      </button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for social media feeds, community platforms, and activity streams.',
    customizationTips: 'Add media attachments, expand comment section, include repost functionality.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 14: Music/Media Player Card
  {
    id: 'music-player-card-14',
    name: 'Music Player Card',
    description: 'Media player card with album art, track info, and playback controls',
    category: 'cards',
    tags: ['music', 'media', 'player', 'audio'],
    thumbnail: '/images/card-music-14.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 max-w-sm">
  <div class="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-xl mb-6 flex items-center justify-center">
    <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
      <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
    </svg>
  </div>
  <div class="text-center mb-6">
    <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Midnight Dreams</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400">The Synthwave Collective</p>
  </div>
  <div class="mb-4">
    <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
      <span>1:23</span>
      <span>3:45</span>
    </div>
    <div class="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
      <div class="h-full w-1/3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
    </div>
  </div>
  <div class="flex items-center justify-center gap-4">
    <button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
      </svg>
    </button>
    <button class="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:from-primary-700 hover:to-secondary-700 shadow-lg">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
      </svg>
    </button>
    <button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
      </svg>
    </button>
  </div>
</div>`,
    reactCode: `export default function MusicPlayerCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 max-w-sm">
      <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-xl mb-6 flex items-center justify-center">
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
        </svg>
      </div>
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">Midnight Dreams</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">The Synthwave Collective</p>
      </div>
      <div className="mb-4">
        <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
          <span>1:23</span>
          <span>3:45</span>
        </div>
        <div className="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4">
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
          </svg>
        </button>
        <button className="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:from-primary-700 hover:to-secondary-700 shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"/>
          </svg>
        </button>
        <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
          </svg>
        </button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 max-w-sm">
    <div class="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-xl mb-6 flex items-center justify-center">
      <svg class="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z"/>
      </svg>
    </div>
    <div class="text-center mb-6">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">Midnight Dreams</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">The Synthwave Collective</p>
    </div>
    <div class="mb-4">
      <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-2">
        <span>1:23</span>
        <span>3:45</span>
      </div>
      <div class="h-1.5 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div class="h-full w-1/3 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
      </div>
    </div>
    <div class="flex items-center justify-center gap-4">
      <button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M8.445 14.832A1 1 0 0010 14v-2.798l5.445 3.63A1 1 0 0017 14V6a1 1 0 00-1.555-.832L10 8.798V6a1 1 0 00-1.555-.832l-6 4a1 1 0 000 1.664l6 4z"/>
        </svg>
      </button>
      <button class="w-14 h-14 flex items-center justify-center bg-gradient-to-r from-primary-600 to-secondary-600 text-white rounded-full hover:from-primary-700 hover:to-secondary-700 shadow-lg">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"/>
        </svg>
      </button>
      <button class="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z"/>
        </svg>
      </button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for music apps, podcast players, and audio streaming platforms.',
    customizationTips: 'Add playlist queue, include volume control, integrate with audio APIs, add like/favorite button.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 15: Job Listing Card
  {
    id: 'job-listing-card-15',
    name: 'Job Listing Card',
    description: 'Job posting card with company logo, position details, tags, and apply button',
    category: 'cards',
    tags: ['job', 'career', 'listing', 'recruitment'],
    thumbnail: '/images/card-job-15.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
  <div class="flex items-start gap-4 mb-4">
    <div class="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
      TC
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Senior Frontend Developer</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">TechCorp Inc.</p>
    </div>
    <button class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
      </svg>
    </button>
  </div>
  <div class="flex flex-wrap gap-2 mb-4">
    <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">Full-time</span>
    <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">Remote</span>
    <span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-xs font-medium rounded-full">$120k-$180k</span>
  </div>
  <p class="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
    We're looking for an experienced frontend developer to join our team and help build the next generation of our product.
  </p>
  <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
    <div class="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
        <span>San Francisco, CA</span>
      </div>
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>Posted 2 days ago</span>
      </div>
    </div>
    <button class="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700">Apply</button>
  </div>
</div>`,
    reactCode: `export default function JobListingCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
          TC
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Senior Frontend Developer</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">TechCorp Inc.</p>
        </div>
        <button className="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </button>
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">Full-time</span>
        <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">Remote</span>
        <span className="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-xs font-medium rounded-full">$120k-$180k</span>
      </div>
      <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
        We're looking for an experienced frontend developer to join our team and help build the next generation of our product.
      </p>
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span>San Francisco, CA</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>Posted 2 days ago</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700">Apply</button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6 hover:shadow-lg transition-shadow">
    <div class="flex items-start gap-4 mb-4">
      <div class="w-14 h-14 flex-shrink-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-white text-xl font-bold">
        TC
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Senior Frontend Developer</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">TechCorp Inc.</p>
      </div>
      <button class="text-gray-400 hover:text-primary-600 dark:hover:text-primary-400">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
        </svg>
      </button>
    </div>
    <div class="flex flex-wrap gap-2 mb-4">
      <span class="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium rounded-full">Full-time</span>
      <span class="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-xs font-medium rounded-full">Remote</span>
      <span class="px-3 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-xs font-medium rounded-full">$120k-$180k</span>
    </div>
    <p class="text-sm text-gray-700 dark:text-gray-300 mb-4 line-clamp-2">
      We're looking for an experienced frontend developer to join our team and help build the next generation of our product.
    </p>
    <div class="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800">
      <div class="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
          </svg>
          <span>San Francisco, CA</span>
        </div>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>Posted 2 days ago</span>
        </div>
      </div>
      <button class="px-4 py-2 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700">Apply</button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for job boards, career pages, and recruitment platforms.',
    customizationTips: 'Add company logo image, include skill requirements, add quick apply feature.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 16: Achievement/Badge Card
  {
    id: 'achievement-badge-card-16',
    name: 'Achievement Badge Card',
    description: 'Gamification card displaying achievement with badge icon, progress, and unlock date',
    category: 'cards',
    tags: ['achievement', 'badge', 'gamification', 'reward'],
    thumbnail: '/images/card-achievement-16.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<div class="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-xl border-2 border-amber-200 dark:border-amber-800 p-6 overflow-hidden">
  <div class="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 dark:bg-amber-800/30 rounded-full -mr-16 -mt-16"></div>
  <div class="relative">
    <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
      <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    </div>
    <div class="text-center">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Early Adopter</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Complete 100 tasks in your first week</p>
      <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        Unlocked Dec 20, 2024
      </div>
    </div>
  </div>
</div>`,
    reactCode: `export default function AchievementBadgeCard() {
  return (
    <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-xl border-2 border-amber-200 dark:border-amber-800 p-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 dark:bg-amber-800/30 rounded-full -mr-16 -mt-16"></div>
      <div className="relative">
        <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
          <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Early Adopter</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Complete 100 tasks in your first week</p>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
            </svg>
            Unlocked Dec 20, 2024
          </div>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="relative bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950 dark:to-orange-950 rounded-xl border-2 border-amber-200 dark:border-amber-800 p-6 overflow-hidden">
    <div class="absolute top-0 right-0 w-32 h-32 bg-amber-200/30 dark:bg-amber-800/30 rounded-full -mr-16 -mt-16"></div>
    <div class="relative">
      <div class="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
        <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>
      <div class="text-center">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">Early Adopter</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Complete 100 tasks in your first week</p>
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 text-xs font-semibold rounded-full">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
          </svg>
          Unlocked Dec 20, 2024
        </div>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for gamification systems, learning platforms, and progress tracking.',
    customizationTips: 'Add progress bar for locked achievements, include rarity indicator, add share functionality.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },


  // Card 17: Property/Real Estate Card
  {
    id: 'property-real-estate-card-17',
    name: 'Property Listing Card',
    description: 'Real estate card with property image, price, specs, and location details',
    category: 'cards',
    tags: ['property', 'real-estate', 'listing', 'home'],
    thumbnail: '/images/card-property-17.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group">
  <div class="relative h-48 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900">
    <div class="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg">FOR SALE</div>
    <div class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    </div>
  </div>
  <div class="p-5">
    <div class="mb-3">
      <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">$2,450,000</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400">123 Oakwood Drive, Beverly Hills, CA</p>
    </div>
    <div class="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
      <div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Bedrooms</p>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">4</p>
      </div>
      <div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Bathrooms</p>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">3.5</p>
      </div>
      <div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Sq. Ft.</p>
        <p class="text-sm font-semibold text-gray-900 dark:text-white">3,200</p>
      </div>
    </div>
    <button class="w-full py-2.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors">
      Schedule Tour
    </button>
  </div>
</div>`,
    reactCode: `export default function PropertyListingCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group">
      <div className="relative h-48 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900">
        <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg">FOR SALE</div>
        <div className="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
          </svg>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">$2,450,000</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">123 Oakwood Drive, Beverly Hills, CA</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Bedrooms</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">4</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Bathrooms</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">3.5</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">Sq. Ft.</p>
            <p className="text-sm font-semibold text-gray-900 dark:text-white">3,200</p>
          </div>
        </div>
        <button className="w-full py-2.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors">
          Schedule Tour
        </button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow group">
    <div class="relative h-48 bg-gradient-to-br from-emerald-200 to-teal-200 dark:from-emerald-900 dark:to-teal-900">
      <div class="absolute top-3 left-3 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-lg">FOR SALE</div>
      <div class="absolute top-3 right-3 p-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-900">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
        </svg>
      </div>
    </div>
    <div class="p-5">
      <div class="mb-3">
        <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">$2,450,000</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400">123 Oakwood Drive, Beverly Hills, CA</p>
      </div>
      <div class="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-gray-800">
        <div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Bedrooms</p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white">4</p>
        </div>
        <div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Bathrooms</p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white">3.5</p>
        </div>
        <div>
          <p class="text-xs text-gray-600 dark:text-gray-400 mb-1">Sq. Ft.</p>
          <p class="text-sm font-semibold text-gray-900 dark:text-white">3,200</p>
        </div>
      </div>
      <button class="w-full py-2.5 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 font-semibold rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-gray-900 transition-colors">
        Schedule Tour
      </button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for real estate listings, property marketplaces, and rental platforms.',
    customizationTips: 'Add property images, include virtual tour option, add agent contact info.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 18: Dashboard Analytics Card
  {
    id: 'dashboard-analytics-card-18',
    name: 'Dashboard Analytics Card',
    description: 'Analytics card with metric comparison, percentage change, and mini trend chart',
    category: 'cards',
    tags: ['dashboard', 'analytics', 'metrics', 'chart'],
    thumbnail: '/images/card-dashboard-18.png',
    featured: true,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
  <div class="flex items-start justify-between mb-4">
    <div>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sales</p>
      <h3 class="text-3xl font-bold text-gray-900 dark:text-white">$128,459</h3>
    </div>
    <div class="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
      <div class="flex items-center gap-1 text-green-700 dark:text-green-400 text-sm font-semibold">
        <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
        </svg>
        <span>+12.5%</span>
      </div>
    </div>
  </div>
  <div class="flex items-end gap-1 h-16 mb-3">
    <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[40%]"></div>
    <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[55%]"></div>
    <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[45%]"></div>
    <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[70%]"></div>
    <div class="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[85%]"></div>
    <div class="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[100%]"></div>
    <div class="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[95%]"></div>
  </div>
  <p class="text-xs text-gray-600 dark:text-gray-400">Compared to last month: <span class="font-semibold text-gray-900 dark:text-white">$114,280</span></p>
</div>`,
    reactCode: `export default function DashboardAnalyticsCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sales</p>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white">$128,459</h3>
        </div>
        <div className="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
          <div className="flex items-center gap-1 text-green-700 dark:text-green-400 text-sm font-semibold">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
            </svg>
            <span>+12.5%</span>
          </div>
        </div>
      </div>
      <div className="flex items-end gap-1 h-16 mb-3">
        <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[40%]"></div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[55%]"></div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[45%]"></div>
        <div className="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[70%]"></div>
        <div className="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[85%]"></div>
        <div className="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[100%]"></div>
        <div className="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[95%]"></div>
      </div>
      <p className="text-xs text-gray-600 dark:text-gray-400">Compared to last month: <span className="font-semibold text-gray-900 dark:text-white">$114,280</span></p>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
    <div class="flex items-start justify-between mb-4">
      <div>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-1">Total Sales</p>
        <h3 class="text-3xl font-bold text-gray-900 dark:text-white">$128,459</h3>
      </div>
      <div class="px-3 py-1 bg-green-100 dark:bg-green-900/30 rounded-lg">
        <div class="flex items-center gap-1 text-green-700 dark:text-green-400 text-sm font-semibold">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clip-rule="evenodd"/>
          </svg>
          <span>+12.5%</span>
        </div>
      </div>
    </div>
    <div class="flex items-end gap-1 h-16 mb-3">
      <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[40%]"></div>
      <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[55%]"></div>
      <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[45%]"></div>
      <div class="flex-1 bg-gray-200 dark:bg-gray-800 rounded-t h-[70%]"></div>
      <div class="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[85%]"></div>
      <div class="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[100%]"></div>
      <div class="flex-1 bg-primary-600 dark:bg-primary-500 rounded-t h-[95%]"></div>
    </div>
    <p class="text-xs text-gray-600 dark:text-gray-400">Compared to last month: <span class="font-semibold text-gray-900 dark:text-white">$114,280</span></p>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for admin dashboards, reporting tools, and analytics platforms.',
    customizationTips: 'Integrate real chart library, add interactive tooltips, include drill-down functionality.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 19: Comment/Review Card
  {
    id: 'comment-review-card-19',
    name: 'Comment Review Card',
    description: 'User comment card with rating stars, helpful votes, and reply option',
    category: 'cards',
    tags: ['comment', 'review', 'rating', 'feedback'],
    thumbnail: '/images/card-comment-19.png',
    featured: false,
    popular: false,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
  <div class="flex items-start gap-4 mb-4">
    <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex-shrink-0"></div>
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1">
        <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Michael Roberts</h4>
        <div class="flex">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
        </div>
      </div>
      <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">Reviewed 3 days ago</p>
      <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
        Absolutely fantastic! The quality exceeded my expectations. Great attention to detail and excellent customer service throughout.
      </p>
    </div>
  </div>
  <div class="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
    <button class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
      </svg>
      <span class="font-medium">Helpful (24)</span>
    </button>
    <button class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
      Reply
    </button>
  </div>
</div>`,
    reactCode: `export default function CommentReviewCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex-shrink-0"></div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Michael Roberts</h4>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-3">Reviewed 3 days ago</p>
          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
            Absolutely fantastic! The quality exceeded my expectations. Great attention to detail and excellent customer service throughout.
          </p>
        </div>
      </div>
      <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
        <button className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
          </svg>
          <span className="font-medium">Helpful (24)</span>
        </button>
        <button className="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
          Reply
        </button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 p-6">
    <div class="flex items-start gap-4 mb-4">
      <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex-shrink-0"></div>
      <div class="flex-1 min-w-0">
        <div class="flex items-center gap-2 mb-1">
          <h4 class="text-sm font-semibold text-gray-900 dark:text-white">Michael Roberts</h4>
          <div class="flex">
            <svg v-for="i in 5" :key="i" class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
        </div>
        <p class="text-xs text-gray-600 dark:text-gray-400 mb-3">Reviewed 3 days ago</p>
        <p class="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          Absolutely fantastic! The quality exceeded my expectations. Great attention to detail and excellent customer service throughout.
        </p>
      </div>
    </div>
    <div class="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-800">
      <button class="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"/>
        </svg>
        <span class="font-medium">Helpful (24)</span>
      </button>
      <button class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 font-medium">
        Reply
      </button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for review sections, comment threads, and feedback displays.',
    customizationTips: 'Add verified purchase badge, include images, nested replies, report functionality.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },


  // Card 20: Contact Card
  {
    id: 'contact-card-20',
    name: 'Contact Info Card',
    description: 'Business contact card with QR code, contact details, and action buttons',
    category: 'cards',
    tags: ['contact', 'business', 'vcard', 'qr'],
    thumbnail: '/images/card-contact-20.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
  <div class="flex gap-6 mb-6">
    <div class="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
      <div class="text-xs font-mono text-gray-400">QR CODE</div>
    </div>
    <div class="flex-1 min-w-0">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">David Chen</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Product Manager</p>
      <div class="space-y-2">
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span>david.chen@company.com</span>
        </div>
        <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
          <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
          </svg>
          <span>+1 (555) 987-6543</span>
        </div>
      </div>
    </div>
  </div>
  <div class="grid grid-cols-2 gap-3">
    <button class="px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700">Add Contact</button>
    <button class="px-4 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Share</button>
  </div>
</div>`,
    reactCode: `export default function ContactInfoCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
      <div className="flex gap-6 mb-6">
        <div className="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
          <div className="text-xs font-mono text-gray-400">QR CODE</div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">David Chen</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Product Manager</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>david.chen@company.com</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              <span>+1 (555) 987-6543</span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button className="px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700">Add Contact</button>
        <button className="px-4 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Share</button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
    <div class="flex gap-6 mb-6">
      <div class="w-24 h-24 flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center">
        <div class="text-xs font-mono text-gray-400">QR CODE</div>
      </div>
      <div class="flex-1 min-w-0">
        <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-1">David Chen</h3>
        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">Product Manager</p>
        <div class="space-y-2">
          <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
            </svg>
            <span>david.chen@company.com</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
            <svg class="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
            </svg>
            <span>+1 (555) 987-6543</span>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-3">
      <button class="px-4 py-2.5 bg-primary-600 text-white text-sm font-semibold rounded-lg hover:bg-primary-700">Add Contact</button>
      <button class="px-4 py-2.5 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">Share</button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for business cards, contact directories, and networking platforms.',
    customizationTips: 'Add real QR code generation, include social links, add vCard export.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 21: Portfolio Project Card
  {
    id: 'portfolio-project-card-21',
    name: 'Portfolio Project Card',
    description: 'Creative project showcase with image, tags, and hover overlay effects',
    category: 'cards',
    tags: ['portfolio', 'project', 'showcase', 'creative'],
    thumbnail: '/images/card-portfolio-21.png',
    featured: true,
    popular: true,
    isNew: false,
    htmlCode: `<div class="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
  <div class="relative aspect-video bg-gradient-to-br from-violet-200 via-fuchsia-200 to-pink-200 dark:from-violet-900 dark:via-fuchsia-900 dark:to-pink-900 overflow-hidden">
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
      <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
        <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
          </svg>
        </button>
        <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
  <div class="p-5">
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Brand Identity Redesign</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
      Complete visual identity overhaul for a modern tech startup including logo, colors, and guidelines.
    </p>
    <div class="flex flex-wrap gap-2">
      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">Branding</span>
      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">UI/UX</span>
      <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">2024</span>
    </div>
  </div>
</div>`,
    reactCode: `export default function PortfolioProjectCard() {
  return (
    <div className="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
      <div className="relative aspect-video bg-gradient-to-br from-violet-200 via-fuchsia-200 to-pink-200 dark:from-violet-900 dark:via-fuchsia-900 dark:to-pink-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
              </svg>
            </button>
            <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Brand Identity Redesign</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          Complete visual identity overhaul for a modern tech startup including logo, colors, and guidelines.
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">Branding</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">UI/UX</span>
          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">2024</span>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="group relative bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-2xl transition-all duration-300">
    <div class="relative aspect-video bg-gradient-to-br from-violet-200 via-fuchsia-200 to-pink-200 dark:from-violet-900 dark:via-fuchsia-900 dark:to-pink-900 overflow-hidden">
      <div class="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        <div class="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-3">
          <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
            </svg>
          </button>
          <button class="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:scale-110 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="p-5">
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Brand Identity Redesign</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        Complete visual identity overhaul for a modern tech startup including logo, colors, and guidelines.
      </p>
      <div class="flex flex-wrap gap-2">
        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">Branding</span>
        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">UI/UX</span>
        <span class="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-medium rounded-full">2024</span>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for portfolio sites, creative showcases, and case study galleries.',
    customizationTips: 'Add real project images, include client logo, add live demo link, modal lightbox.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 22: Newsletter Signup Card
  {
    id: 'newsletter-signup-card-22',
    name: 'Newsletter Signup Card',
    description: 'Email subscription card with gradient background and inline form',
    category: 'cards',
    tags: ['newsletter', 'signup', 'email', 'subscription'],
    thumbnail: '/images/card-newsletter-22.png',
    featured: true,
    popular: false,
    isNew: true,
    htmlCode: `<div class="relative bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 overflow-hidden">
  <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
  <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
  <div class="relative">
    <div class="mb-6">
      <svg class="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
      <h3 class="text-2xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
      <p class="text-primary-100">Get the latest updates, articles, and resources delivered to your inbox weekly.</p>
    </div>
    <div class="flex gap-2">
      <input 
        type="email" 
        placeholder="Enter your email" 
        class="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
      />
      <button class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
        Subscribe
      </button>
    </div>
    <p class="text-xs text-primary-100 mt-3">We respect your privacy. Unsubscribe at any time.</p>
  </div>
</div>`,
    reactCode: `export default function NewsletterSignupCard() {
  return (
    <div className="relative bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
      <div className="relative">
        <div className="mb-6">
          <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <h3 className="text-2xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
          <p className="text-primary-100">Get the latest updates, articles, and resources delivered to your inbox weekly.</p>
        </div>
        <div className="flex gap-2">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
            Subscribe
          </button>
        </div>
        <p className="text-xs text-primary-100 mt-3">We respect your privacy. Unsubscribe at any time.</p>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="relative bg-gradient-to-br from-primary-600 to-secondary-600 rounded-2xl p-8 overflow-hidden">
    <div class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
    <div class="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24"></div>
    <div class="relative">
      <div class="mb-6">
        <svg class="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        <h3 class="text-2xl font-bold text-white mb-2">Subscribe to our newsletter</h3>
        <p class="text-primary-100">Get the latest updates, articles, and resources delivered to your inbox weekly.</p>
      </div>
      <div class="flex gap-2">
        <input 
          type="email" 
          placeholder="Enter your email" 
          class="flex-1 px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/60 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50"
        />
        <button class="px-6 py-3 bg-white text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors">
          Subscribe
        </button>
      </div>
      <p class="text-xs text-primary-100 mt-3">We respect your privacy. Unsubscribe at any time.</p>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for blog sidebars, landing pages, and email capture campaigns.',
    customizationTips: 'Connect to email service API, add GDPR checkbox, include success state, add benefits list.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 23: Course/Learning Card
  {
    id: 'course-learning-card-23',
    name: 'Course Learning Card',
    description: 'Educational course card with progress bar, duration, lessons count, and enroll button',
    category: 'cards',
    tags: ['course', 'education', 'learning', 'progress'],
    thumbnail: '/images/card-course-23.png',
    featured: false,
    popular: true,
    isNew: false,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
  <div class="relative h-40 bg-gradient-to-br from-indigo-200 to-blue-300 dark:from-indigo-900 dark:to-blue-900 flex items-center justify-center">
    <svg class="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
    </svg>
    <div class="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
      Bestseller
    </div>
  </div>
  <div class="p-6">
    <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
      <span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded">Development</span>
      <span>•</span>
      <span>Intermediate</span>
    </div>
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Complete Web Development Bootcamp</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
      Master modern web development from scratch with hands-on projects and real-world applications.
    </p>
    <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>48 hours</span>
      </div>
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
        </svg>
        <span>156 lessons</span>
      </div>
      <div class="flex items-center gap-1">
        <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
        <span class="font-semibold text-gray-900 dark:text-white">4.8</span>
      </div>
    </div>
    <div class="mb-4">
      <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
        <span>Course progress</span>
        <span class="font-semibold">35%</span>
      </div>
      <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
        <div class="h-full w-[35%] bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
      </div>
    </div>
    <button class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700">
      Continue Learning
    </button>
  </div>
</div>`,
    reactCode: `export default function CourseLearningCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-40 bg-gradient-to-br from-indigo-200 to-blue-300 dark:from-indigo-900 dark:to-blue-900 flex items-center justify-center">
        <svg className="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
        </svg>
        <div className="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
          Bestseller
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
          <span className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded">Development</span>
          <span>•</span>
          <span>Intermediate</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Complete Web Development Bootcamp</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
          Master modern web development from scratch with hands-on projects and real-world applications.
        </p>
        <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span>48 hours</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>156 lessons</span>
          </div>
          <div className="flex items-center gap-1">
            <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
            <span className="font-semibold text-gray-900 dark:text-white">4.8</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
            <span>Course progress</span>
            <span className="font-semibold">35%</span>
          </div>
          <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full w-[35%] bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
          </div>
        </div>
        <button className="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700">
          Continue Learning
        </button>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow">
    <div class="relative h-40 bg-gradient-to-br from-indigo-200 to-blue-300 dark:from-indigo-900 dark:to-blue-900 flex items-center justify-center">
      <svg class="w-16 h-16 text-white/80" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
      </svg>
      <div class="absolute top-3 right-3 px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
        Bestseller
      </div>
    </div>
    <div class="p-6">
      <div class="flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 mb-3">
        <span class="px-2 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded">Development</span>
        <span>•</span>
        <span>Intermediate</span>
      </div>
      <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Complete Web Development Bootcamp</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
        Master modern web development from scratch with hands-on projects and real-world applications.
      </p>
      <div class="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <span>48 hours</span>
        </div>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          <span>156 lessons</span>
        </div>
        <div class="flex items-center gap-1">
          <svg class="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
          <span class="font-semibold text-gray-900 dark:text-white">4.8</span>
        </div>
      </div>
      <div class="mb-4">
        <div class="flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
          <span>Course progress</span>
          <span class="font-semibold">35%</span>
        </div>
        <div class="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
          <div class="h-full w-[35%] bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full"></div>
        </div>
      </div>
      <button class="w-full py-3 bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-secondary-700">
        Continue Learning
      </button>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for online learning platforms, course marketplaces, and educational sites.',
    customizationTips: 'Add instructor info, include certificate badge, show completion percentage, add enrollment count.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },


  // Card 24: File Upload Card
  {
    id: 'file-upload-card-24',
    name: 'File Upload Card',
    description: 'Drag and drop file upload card with file type indicators and progress display',
    category: 'cards',
    tags: ['upload', 'file', 'drag-drop', 'form'],
    thumbnail: '/images/card-upload-24.png',
    featured: false,
    popular: false,
    isNew: true,
    htmlCode: `<div class="bg-white dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 hover:border-primary-400 dark:hover:border-primary-600 transition-colors cursor-pointer">
  <div class="text-center">
    <div class="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
      <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
      </svg>
    </div>
    <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Drop files to upload</h3>
    <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
      or <button class="text-primary-600 dark:text-primary-400 font-medium hover:underline">browse</button> to choose files
    </p>
    <div class="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-500">
      <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PDF</span>
      <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PNG</span>
      <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">JPG</span>
      <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">DOC</span>
    </div>
    <p class="text-xs text-gray-500 dark:text-gray-500 mt-3">Maximum file size: 10MB</p>
  </div>
</div>`,
    reactCode: `export default function FileUploadCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 hover:border-primary-400 dark:hover:border-primary-600 transition-colors cursor-pointer">
      <div className="text-center">
        <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
          <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Drop files to upload</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          or <button className="text-primary-600 dark:text-primary-400 font-medium hover:underline">browse</button> to choose files
        </p>
        <div className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-500">
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PDF</span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PNG</span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">JPG</span>
          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">DOC</span>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-500 mt-3">Maximum file size: 10MB</p>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="bg-white dark:bg-gray-900 rounded-xl border-2 border-dashed border-gray-300 dark:border-gray-700 p-8 hover:border-primary-400 dark:hover:border-primary-600 transition-colors cursor-pointer">
    <div class="text-center">
      <div class="w-16 h-16 mx-auto mb-4 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
        <svg class="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"/>
        </svg>
      </div>
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">Drop files to upload</h3>
      <p class="text-sm text-gray-600 dark:text-gray-400 mb-4">
        or <button class="text-primary-600 dark:text-primary-400 font-medium hover:underline">browse</button> to choose files
      </p>
      <div class="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-500">
        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PDF</span>
        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">PNG</span>
        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">JPG</span>
        <span class="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">DOC</span>
      </div>
      <p class="text-xs text-gray-500 dark:text-gray-500 mt-3">Maximum file size: 10MB</p>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for forms, document uploads, and file management interfaces.',
    customizationTips: 'Add drag and drop handlers, show upload progress, display file previews, add validation feedback.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },

  // Card 25: Reward/Loyalty Card
  {
    id: 'reward-loyalty-card-25',
    name: 'Reward Loyalty Card',
    description: 'Digital loyalty card with points balance, tier status, and rewards progress',
    category: 'cards',
    tags: ['loyalty', 'rewards', 'points', 'membership'],
    thumbnail: '/images/card-loyalty-25.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<div class="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl p-6 overflow-hidden text-white">
  <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
  <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
  <div class="relative">
    <div class="flex items-start justify-between mb-6">
      <div>
        <p class="text-amber-100 text-sm mb-1">Member Since 2024</p>
        <h3 class="text-2xl font-bold">Gold Member</h3>
      </div>
      <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      </div>
    </div>
    <div class="mb-6">
      <div class="flex items-baseline gap-2 mb-1">
        <span class="text-4xl font-bold">2,450</span>
        <span class="text-amber-100">points</span>
      </div>
      <div class="flex items-center justify-between text-sm text-amber-100 mb-2">
        <span>550 points to Platinum</span>
        <span class="font-semibold">82%</span>
      </div>
      <div class="h-2 bg-white/20 rounded-full overflow-hidden">
        <div class="h-full w-[82%] bg-white rounded-full"></div>
      </div>
    </div>
    <div class="flex items-center justify-between pt-4 border-t border-white/20">
      <button class="text-sm font-semibold hover:text-amber-100 transition-colors">View Rewards</button>
      <button class="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-lg hover:bg-white/30 transition-colors">
        Redeem Points
      </button>
    </div>
  </div>
</div>`,
    reactCode: `export default function RewardLoyaltyCard() {
  return (
    <div className="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl p-6 overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
      <div className="relative">
        <div className="flex items-start justify-between mb-6">
          <div>
            <p className="text-amber-100 text-sm mb-1">Member Since 2024</p>
            <h3 className="text-2xl font-bold">Gold Member</h3>
          </div>
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          </div>
        </div>
        <div className="mb-6">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-4xl font-bold">2,450</span>
            <span className="text-amber-100">points</span>
          </div>
          <div className="flex items-center justify-between text-sm text-amber-100 mb-2">
            <span>550 points to Platinum</span>
            <span className="font-semibold">82%</span>
          </div>
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full w-[82%] bg-white rounded-full"></div>
          </div>
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-white/20">
          <button className="text-sm font-semibold hover:text-amber-100 transition-colors">View Rewards</button>
          <button className="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-lg hover:bg-white/30 transition-colors">
            Redeem Points
          </button>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="relative bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl p-6 overflow-hidden text-white">
    <div class="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20"></div>
    <div class="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16"></div>
    <div class="relative">
      <div class="flex items-start justify-between mb-6">
        <div>
          <p class="text-amber-100 text-sm mb-1">Member Since 2024</p>
          <h3 class="text-2xl font-bold">Gold Member</h3>
        </div>
        <div class="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
          </svg>
        </div>
      </div>
      <div class="mb-6">
        <div class="flex items-baseline gap-2 mb-1">
          <span class="text-4xl font-bold">2,450</span>
          <span class="text-amber-100">points</span>
        </div>
        <div class="flex items-center justify-between text-sm text-amber-100 mb-2">
          <span>550 points to Platinum</span>
          <span class="font-semibold">82%</span>
        </div>
        <div class="h-2 bg-white/20 rounded-full overflow-hidden">
          <div class="h-full w-[82%] bg-white rounded-full"></div>
        </div>
      </div>
      <div class="flex items-center justify-between pt-4 border-t border-white/20">
        <button class="text-sm font-semibold hover:text-amber-100 transition-colors">View Rewards</button>
        <button class="px-4 py-2 bg-white/20 backdrop-blur-sm text-sm font-semibold rounded-lg hover:bg-white/30 transition-colors">
          Redeem Points
        </button>
      </div>
    </div>
  </div>
</template>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for loyalty programs, membership apps, and customer reward systems.',
    customizationTips: 'Add member ID/barcode, include tier benefits, show recent transactions, add QR code for in-store scanning.',
    createdAt: '2024-12-24',
    updatedAt: '2024-12-24',
    views: 0,
    likes: 0,
  },
];
