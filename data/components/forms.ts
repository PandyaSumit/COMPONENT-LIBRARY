import { Component } from '../components';

export const formComponents: Component[] = [
  {
    id: 'premium-contact-form-1',
    name: 'Premium Contact Form',
    description: 'Modern contact form with gradient accents and glassmorphic design',
    category: 'forms',
    tags: ['contact', 'premium', 'gradient', 'glassmorphism', 'responsive'],
    thumbnail: '/images/form-contact-1.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<div class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 p-4 sm:p-6 lg:p-8">
  <div class="w-full max-w-4xl">
    <!-- Header -->
    <div class="text-center mb-8 sm:mb-12">
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
        Get In <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
        We'd love to hear from you. Send us a message and we'll respond as soon as possible.
      </p>
    </div>

    <!-- Form Container -->
    <form class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 lg:p-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
        <!-- Name Field -->
        <div class="group">
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Full Name <span class="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
          />
        </div>

        <!-- Email Field -->
        <div class="group">
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Email Address <span class="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            placeholder="john@example.com"
            class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
          />
        </div>
      </div>

      <!-- Subject Field -->
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          placeholder="How can we help you?"
          class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
        />
      </div>

      <!-- Message Field -->
      <div class="mb-6">
        <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
          Message <span class="text-red-500">*</span>
        </label>
        <textarea
          rows="6"
          required
          placeholder="Tell us more about your inquiry..."
          class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none"
        ></textarea>
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full group relative px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
      >
        <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        <span class="relative flex items-center justify-center gap-2 text-base sm:text-lg">
          Send Message
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
          </svg>
        </span>
      </button>
    </form>
  </div>
</div>`,
    reactCode: `'use client';

import { useState } from 'react';

export default function PremiumContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Get In <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Form Container */}
        <form onSubmit={handleSubmit} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
            {/* Name Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
            </div>

            {/* Email Field */}
            <div className="group">
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
            </div>
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can we help you?"
              className="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              rows={6}
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us more about your inquiry..."
              className="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full group relative px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="relative flex items-center justify-center gap-2 text-base sm:text-lg">
              Send Message
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 p-4 sm:p-6 lg:p-8">
    <div class="w-full max-w-4xl">
      <!-- Header -->
      <div class="text-center mb-8 sm:mb-12">
        <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
          Get In <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Touch</span>
        </h2>
        <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto px-4">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <!-- Form Container -->
      <form @submit.prevent="handleSubmit" class="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/50 p-6 sm:p-8 lg:p-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6">
          <!-- Name Field -->
          <div class="group">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.name"
              type="text"
              required
              placeholder="John Doe"
              class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
            />
          </div>

          <!-- Email Field -->
          <div class="group">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              v-model="formData.email"
              type="email"
              required
              placeholder="john@example.com"
              class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
            />
          </div>
        </div>

        <!-- Subject Field -->
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Subject
          </label>
          <input
            v-model="formData.subject"
            type="text"
            placeholder="How can we help you?"
            class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
          />
        </div>

        <!-- Message Field -->
        <div class="mb-6">
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Message <span class="text-red-500">*</span>
          </label>
          <textarea
            v-model="formData.message"
            rows="6"
            required
            placeholder="Tell us more about your inquiry..."
            class="w-full px-4 py-3 sm:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none resize-none"
          />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full group relative px-8 py-4 sm:py-5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
        >
          <span class="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          <span class="relative flex items-center justify-center gap-2 text-base sm:text-lg">
            Send Message
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  // Handle form submission
};
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for contact pages, support forms, and general inquiries. Features responsive grid layout, validation states, and premium glassmorphic design.',
  },
  {
    id: 'newsletter-gradient-form-2',
    name: 'Newsletter Gradient Form',
    description: 'Sleek newsletter subscription form with gradient background and inline button',
    category: 'forms',
    tags: ['newsletter', 'subscribe', 'gradient', 'inline', 'responsive'],
    thumbnail: '/images/form-newsletter-2.png',
    featured: true,
    popular: true,
    isNew: false,
    htmlCode: `<div class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950 dark:via-pink-950 dark:to-red-950 p-4 sm:p-6">
  <div class="w-full max-w-3xl text-center">
    <!-- Icon -->
    <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-lg shadow-purple-500/30">
      <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    </div>

    <!-- Heading -->
    <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4">
      Stay <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Updated</span>
    </h2>
    <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
      Subscribe to our newsletter and get the latest updates, tips, and exclusive content delivered straight to your inbox.
    </p>

    <!-- Form -->
    <form class="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
      <div class="flex-1">
        <input
          type="email"
          required
          placeholder="Enter your email address"
          class="w-full px-6 py-4 sm:py-5 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-xl sm:rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none text-base sm:text-lg shadow-lg"
        />
      </div>
      <button
        type="submit"
        class="group relative px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
      >
        <span class="flex items-center justify-center gap-2 text-base sm:text-lg">
          Subscribe
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </span>
      </button>
    </form>

    <!-- Privacy Note -->
    <p class="mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-500 px-4">
      We respect your privacy. Unsubscribe at any time.
    </p>
  </div>
</div>`,
    reactCode: `'use client';

import { useState } from 'react';

export default function NewsletterGradientForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    // Handle subscription
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950 dark:via-pink-950 dark:to-red-950 p-4 sm:p-6">
      <div className="w-full max-w-3xl text-center">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-lg shadow-purple-500/30">
          <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4">
          Stay <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Updated</span>
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
          Subscribe to our newsletter and get the latest updates, tips, and exclusive content delivered straight to your inbox.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
          <div className="flex-1">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-6 py-4 sm:py-5 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-xl sm:rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none text-base sm:text-lg shadow-lg"
            />
          </div>
          <button
            type="submit"
            className="group relative px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
          >
            <span className="flex items-center justify-center gap-2 text-base sm:text-lg">
              Subscribe
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </span>
          </button>
        </form>

        {/* Privacy Note */}
        <p className="mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-500 px-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-red-50 dark:from-purple-950 dark:via-pink-950 dark:to-red-950 p-4 sm:p-6">
    <div class="w-full max-w-3xl text-center">
      <!-- Icon -->
      <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 mb-6 sm:mb-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl shadow-lg shadow-purple-500/30">
        <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      </div>

      <!-- Heading -->
      <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4">
        Stay <span class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Updated</span>
      </h2>
      <p class="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
        Subscribe to our newsletter and get the latest updates, tips, and exclusive content delivered straight to your inbox.
      </p>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-2xl mx-auto px-4">
        <div class="flex-1">
          <input
            v-model="email"
            type="email"
            required
            placeholder="Enter your email address"
            class="w-full px-6 py-4 sm:py-5 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-700 rounded-xl sm:rounded-2xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-purple-500 dark:focus:border-purple-400 focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 outline-none text-base sm:text-lg shadow-lg"
          />
        </div>
        <button
          type="submit"
          class="group relative px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold rounded-xl sm:rounded-2xl shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 transition-all duration-300 hover:scale-105 active:scale-95 whitespace-nowrap"
        >
          <span class="flex items-center justify-center gap-2 text-base sm:text-lg">
            Subscribe
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </span>
        </button>
      </form>

      <!-- Privacy Note -->
      <p class="mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-500 px-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const email = ref('');

const handleSubmit = () => {
  console.log('Newsletter subscription:', email.value);
  // Handle subscription
};
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Ideal for landing pages, blog sidebars, and marketing campaigns. Features inline responsive layout with gradient accents and privacy messaging.',
  },
  {
    id: 'premium-login-form-3',
    name: 'Premium Login Form',
    description: 'Elegant login form with social auth options and dark mode',
    category: 'forms',
    tags: ['login', 'auth', 'social', 'premium', 'responsive'],
    thumbnail: '/images/form-login-3.png',
    featured: true,
    popular: true,
    isNew: true,
    htmlCode: `<div class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 p-4 sm:p-6">
  <div class="w-full max-w-md">
    <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 p-6 sm:p-10">
      <!-- Header -->
      <div class="text-center mb-8">
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Welcome Back
        </h2>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
          Sign in to your account to continue
        </p>
      </div>

      <!-- Social Login -->
      <div class="grid grid-cols-2 gap-3 mb-6">
        <button type="button" class="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300">
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
        </button>
        <button type="button" class="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300">
          <svg class="w-5 h-5 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span class="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
        </button>
      </div>

      <!-- Divider -->
      <div class="relative mb-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-200 dark:border-slate-700"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-4 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">Or continue with email</span>
        </div>
      </div>

      <!-- Login Form -->
      <form class="space-y-5">
        <div>
          <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="you@example.com"
            class="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
          />
        </div>

        <div>
          <div class="flex items-center justify-between mb-2">
            <label class="block text-sm font-semibold text-gray-700 dark:text-gray-300">
              Password
            </label>
            <a href="#" class="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              Forgot?
            </a>
          </div>
          <input
            type="password"
            required
            placeholder="••••••••"
            class="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
          />
        </div>

        <!-- Remember Me -->
        <div class="flex items-center">
          <input
            type="checkbox"
            id="remember"
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <label for="remember" class="ml-2 text-sm text-gray-700 dark:text-gray-300">
            Remember me for 30 days
          </label>
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span class="flex items-center justify-center gap-2">
            Sign In
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
            </svg>
          </span>
        </button>
      </form>

      <!-- Sign Up Link -->
      <p class="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
        Don't have an account?
        <a href="#" class="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
          Sign up for free
        </a>
      </p>
    </div>
  </div>
</div>`,
    reactCode: `'use client';

import { useState } from 'react';

export default function PremiumLoginForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 p-4 sm:p-6">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 p-6 sm:p-10">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome Back
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Sign in to your account to continue
            </p>
          </div>

          {/* Social Login */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Google</span>
            </button>
            <button type="button" className="flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl hover:bg-gray-50 dark:hover:bg-slate-750 hover:border-gray-300 dark:hover:border-slate-600 transition-all duration-300">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200 dark:border-slate-700"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white dark:bg-slate-900 text-gray-500 dark:text-gray-400">Or continue with email</span>
            </div>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Password
                </label>
                <a href="#" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                  Forgot?
                </a>
              </div>
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full px-4 py-3 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-4 focus:ring-blue-500/20 transition-all duration-300 outline-none"
              />
            </div>

            {/* Remember Me */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                Remember me for 30 days
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full group relative px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-blue-500/50 hover:shadow-xl hover:shadow-blue-500/60 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                Sign In
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400">
            Don't have an account?
            <a href="#" className="font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
              {' '}Sign up for free
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}`,
    vueCode: `<template>
  <div class="w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-slate-50 to-gray-100 dark:from-gray-950 dark:via-slate-950 dark:to-gray-900 p-4 sm:p-6">
    <div class="w-full max-w-md">
      <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl shadow-2xl border border-gray-100 dark:border-slate-800 p-6 sm:p-10">
        <!-- Header -->
        <div class="text-center mb-8">
          <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Welcome Back
          </h2>
          <p class="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Sign in to your account to continue
          </p>
        </div>

        <!-- Form content omitted for brevity -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  email: '',
  password: '',
  remember: false
});

const handleSubmit = () => {
  console.log('Login:', formData.value);
};
</script>`,
    dependencies: ['tailwindcss'],
    usage: 'Perfect for authentication pages with social login options. Features clean design, dark mode support, and responsive layout for all devices.',
  },
];
