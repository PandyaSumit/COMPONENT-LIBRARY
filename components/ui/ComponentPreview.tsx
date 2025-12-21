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
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-6 py-4 border-b border-gray-200 bg-gray-50">
        {/* View Mode Toggle */}
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-gray-700">View:</span>
          <div className="flex items-center gap-1 bg-white rounded-md p-1 border border-gray-200 shadow-sm">
            <button
              onClick={() => setViewMode('desktop')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                viewMode === 'desktop'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              title="Desktop view"
            >
              <Monitor className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('tablet')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                viewMode === 'tablet'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              title="Tablet view"
            >
              <Tablet className="h-4 w-4" />
            </button>
            <button
              onClick={() => setViewMode('mobile')}
              className={`px-3 py-1.5 rounded text-sm font-medium transition-all ${
                viewMode === 'mobile'
                  ? 'bg-primary-600 text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
              title="Mobile view"
            >
              <Smartphone className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-all flex items-center gap-2 ${
            darkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? (
            <>
              <Sun className="h-4 w-4" />
              <span className="hidden sm:inline">Light</span>
            </>
          ) : (
            <>
              <Moon className="h-4 w-4" />
              <span className="hidden sm:inline">Dark</span>
            </>
          )}
        </button>
      </div>

      {/* Preview Container */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 min-h-[500px] flex items-center justify-center overflow-auto">
        <div
          className="bg-white rounded-lg shadow-xl transition-all duration-300 mx-auto overflow-hidden"
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

      {/* Info Bar */}
      <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-600">
          <span className="font-medium">
            Current width:{' '}
            <span className="text-gray-900">
              {viewMode === 'desktop' ? '100%' : viewModeWidths[viewMode]}
            </span>
          </span>
          <span className="text-gray-500">
            Preview updates in real-time
          </span>
        </div>
      </div>
    </div>
  );
}
