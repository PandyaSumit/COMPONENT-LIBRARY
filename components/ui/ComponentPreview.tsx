'use client';

import { useState, useRef, useEffect } from 'react';
import { Monitor, Tablet, Smartphone, Moon, Sun } from 'lucide-react';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

interface ComponentPreviewProps {
  htmlCode: string;
}

export default function ComponentPreview({ htmlCode }: ComponentPreviewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [darkMode, setDarkMode] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const viewModeWidths = {
    desktop: '100%',
    tablet: '768px',
    mobile: '375px',
  };

  useEffect(() => {
    if (iframeRef.current) {
      const iframe = iframeRef.current;
      const doc = iframe.contentDocument || iframe.contentWindow?.document;

      if (doc) {
        doc.open();
        doc.write(`
          <!DOCTYPE html>
          <html${darkMode ? ' class="dark"' : ''}>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <script src="https://cdn.tailwindcss.com"></script>
            <script>
              tailwind.config = {
                darkMode: 'class',
                theme: {
                  extend: {
                    colors: {
                      primary: {
                        50: '#eef2ff',
                        100: '#e0e7ff',
                        200: '#c7d2fe',
                        300: '#a5b4fc',
                        400: '#818cf8',
                        500: '#6366f1',
                        600: '#4f46e5',
                        700: '#4338ca',
                        800: '#3730a3',
                        900: '#312e81',
                        950: '#1e1b4b',
                      },
                      secondary: {
                        50: '#fdf4ff',
                        100: '#fae8ff',
                        200: '#f5d0fe',
                        300: '#f0abfc',
                        400: '#e879f9',
                        500: '#ec4899',
                        600: '#db2777',
                        700: '#be185d',
                        800: '#9d174d',
                        900: '#831843',
                        950: '#500724',
                      },
                    },
                  },
                },
              };
            </script>
            <style>
              body {
                margin: 0;
                padding: 0;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
              }
              ${darkMode ? 'body { background-color: #1f2937; }' : ''}
            </style>
          </head>
          <body>
            ${htmlCode}
          </body>
          </html>
        `);
        doc.close();
      }
    }
  }, [htmlCode, darkMode]);

  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      {/* Controls */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-gray-50">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-2 bg-white rounded-lg p-1 border border-gray-200">
          <button
            onClick={() => setViewMode('desktop')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'desktop'
                ? 'bg-primary-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="Desktop view"
          >
            <Monitor className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('tablet')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'tablet'
                ? 'bg-primary-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="Tablet view"
          >
            <Tablet className="h-4 w-4" />
          </button>
          <button
            onClick={() => setViewMode('mobile')}
            className={`p-2 rounded transition-colors ${
              viewMode === 'mobile'
                ? 'bg-primary-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="Mobile view"
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-lg bg-white border border-gray-200 text-gray-600 hover:bg-gray-100 transition-colors"
          title={darkMode ? 'Light mode' : 'Dark mode'}
        >
          {darkMode ? (
            <Sun className="h-4 w-4" />
          ) : (
            <Moon className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* Preview Container */}
      <div className="bg-gray-100 p-8 min-h-[500px] flex items-center justify-center overflow-auto">
        <div
          className="bg-white shadow-lg transition-all duration-300 mx-auto"
          style={{
            width: viewModeWidths[viewMode],
            maxWidth: '100%',
          }}
        >
          <iframe
            ref={iframeRef}
            className="w-full border-0 min-h-[400px]"
            title="Component Preview"
            sandbox="allow-scripts"
          />
        </div>
      </div>
    </div>
  );
}
