import Link from 'next/link';
import { Code2, Github, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Code2 className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-gray-900">ComponentLib</span>
            </Link>
            <p className="text-gray-600 mb-4 max-w-md">
              A comprehensive collection of production-ready UI components built with Tailwind CSS.
              Copy, paste, and customize for your projects.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Components */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Components</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/components" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Browse All
                </Link>
              </li>
              <li>
                <Link href="/category/hero" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Hero Sections
                </Link>
              </li>
              <li>
                <Link href="/category/navigation" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Navigation
                </Link>
              </li>
              <li>
                <Link href="/category/forms" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Forms
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-primary-600 transition-colors">
                  Tailwind CSS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} ComponentLib. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
