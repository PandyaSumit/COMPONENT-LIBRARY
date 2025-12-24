'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Search, Code2, Sparkles, Github } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Components', href: '/components' },
    { name: 'Categories', href: '#categories' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-neutral-200/60">
      <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Refined */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition-opacity duration-300" />
              <div className="relative w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Code2 className="h-4.5 w-4.5 text-white" strokeWidth={2.5} />
              </div>
            </div>
            <span className="text-lg font-bold bg-gradient-to-r from-neutral-900 to-neutral-700 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
              ComponentLib
            </span>
          </Link>

          {/* Desktop Navigation - Refined */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-2/3 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </div>

          {/* Right Side - Refined */}
          <div className="hidden md:flex items-center gap-2">
            {/* Search Bar - Optimized */}
            <div className="relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 group-hover:text-neutral-600 transition-colors pointer-events-none" />
              <input
                type="text"
                placeholder="Search..."
                className="w-48 pl-9 pr-3 py-2 bg-neutral-50 border border-neutral-200/60 rounded-lg text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white focus:w-56 transition-all duration-300"
              />
            </div>

            {/* GitHub Button - Refined */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-neutral-100 hover:bg-neutral-200 transition-colors group"
              aria-label="GitHub"
            >
              <Github className="h-4 w-4 text-neutral-700 group-hover:text-neutral-900 transition-colors" />
            </a>

            {/* CTA Button - Refined */}
            <Link
              href="/components"
              className="group relative inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-900 text-white rounded-lg text-sm font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neutral-900/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Sparkles className="relative z-10 h-3.5 w-3.5" />
              <span className="relative z-10">Browse All</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - Refined */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-6 py-4 bg-white/95 backdrop-blur-xl border-t border-neutral-200/60">
          <div className="space-y-1 mb-3">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 transition-all"
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400 pointer-events-none" />
            <input
              type="text"
              placeholder="Search components..."
              className="w-full pl-9 pr-3 py-2.5 bg-neutral-50 border border-neutral-200/60 rounded-lg text-sm text-neutral-700 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all"
            />
          </div>

          {/* Mobile CTA */}
          <Link
            href="/components"
            className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg text-sm font-semibold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Sparkles className="h-4 w-4" />
            <span>Browse All Components</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
