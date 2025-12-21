'use client';

import { useState, useMemo } from 'react';
import { Monitor, Tablet, Smartphone, Moon, Sun } from 'lucide-react';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

interface ComponentPreviewProps {
  htmlCode: string;
  colors?: {
    primary?: Record<string, string>;
    secondary?: Record<string, string>;
  };
}

export default function ComponentPreview({ htmlCode, colors }: ComponentPreviewProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [darkMode, setDarkMode] = useState(false);

  const viewModeWidths: Record<ViewMode, string> = {
    desktop: '100%',
    tablet: '768px',
    mobile: '425px',
  };

  /**
   * Build iframe HTML
   * Desktop → real browser behavior (no centering)
   * Tablet/Mobile → centered device preview
   */
  const iframeContent = useMemo(() => {
    const shouldCenter = viewMode !== 'desktop';

    // Generate CSS variables from component colors
    const generateColorVars = (colorObj: Record<string, string> | undefined, prefix: string) => {
      if (!colorObj) return '';
      return Object.entries(colorObj)
        .map(([shade, value]) => {
          // Convert hex to RGB
          const hex = value.replace('#', '');
          const r = parseInt(hex.substring(0, 2), 16);
          const g = parseInt(hex.substring(2, 4), 16);
          const b = parseInt(hex.substring(4, 6), 16);
          return `--color-${prefix}-${shade}: ${r} ${g} ${b};`;
        })
        .join('\n              ');
    };

    const primaryVars = generateColorVars(colors?.primary, 'primary');
    const secondaryVars = generateColorVars(colors?.secondary, 'secondary');

    return `
      <!DOCTYPE html>
      <html${darkMode ? ' class="dark"' : ''}>
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="https://cdn.tailwindcss.com"><\/script>

          <script>
            tailwind.config = {
              darkMode: 'class',
              theme: {
                extend: {
                  colors: {
                    primary: {
                      50: 'rgb(var(--color-primary-50) / <alpha-value>)',
                      100: 'rgb(var(--color-primary-100) / <alpha-value>)',
                      200: 'rgb(var(--color-primary-200) / <alpha-value>)',
                      300: 'rgb(var(--color-primary-300) / <alpha-value>)',
                      400: 'rgb(var(--color-primary-400) / <alpha-value>)',
                      500: 'rgb(var(--color-primary-500) / <alpha-value>)',
                      600: 'rgb(var(--color-primary-600) / <alpha-value>)',
                      700: 'rgb(var(--color-primary-700) / <alpha-value>)',
                      800: 'rgb(var(--color-primary-800) / <alpha-value>)',
                      900: 'rgb(var(--color-primary-900) / <alpha-value>)',
                    },
                    secondary: {
                      50: 'rgb(var(--color-secondary-50) / <alpha-value>)',
                      100: 'rgb(var(--color-secondary-100) / <alpha-value>)',
                      200: 'rgb(var(--color-secondary-200) / <alpha-value>)',
                      300: 'rgb(var(--color-secondary-300) / <alpha-value>)',
                      400: 'rgb(var(--color-secondary-400) / <alpha-value>)',
                      500: 'rgb(var(--color-secondary-500) / <alpha-value>)',
                      600: 'rgb(var(--color-secondary-600) / <alpha-value>)',
                      700: 'rgb(var(--color-secondary-700) / <alpha-value>)',
                      800: 'rgb(var(--color-secondary-800) / <alpha-value>)',
                      900: 'rgb(var(--color-secondary-900) / <alpha-value>)',
                    },
                  },
                },
              },
            };
          </script>

          <style>
            :root {
              /* Component-specific colors only - no defaults */
              ${primaryVars}
              ${secondaryVars}
            }

            body {
              margin: 0;
              min-height: 100vh;
              background: ${darkMode ? '#1f2937' : '#ffffff'};
              ${shouldCenter ? `
                display: flex;
                align-items: center;
                justify-content: center;
              ` : `
                display: block;
              `}
            }
          </style>
        </head>
        <body>
          ${htmlCode}
        </body>
      </html>
    `;
  }, [htmlCode, darkMode, viewMode, colors]);

  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      {/* Top Controls */}
      <div className="flex items-center justify-between px-5 py-3 border-b bg-gray-50">
        {/* View Modes */}
        <div className="flex items-center gap-1 rounded-lg border bg-white p-1 shadow-sm">
          <button
            onClick={() => setViewMode('desktop')}
            className={`px-3 py-2 rounded-md transition ${
              viewMode === 'desktop'
                ? 'bg-primary-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="Desktop"
          >
            <Monitor className="h-4 w-4" />
          </button>

          <button
            onClick={() => setViewMode('tablet')}
            className={`px-3 py-2 rounded-md transition ${
              viewMode === 'tablet'
                ? 'bg-primary-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="Tablet"
          >
            <Tablet className="h-4 w-4" />
          </button>

          <button
            onClick={() => setViewMode('mobile')}
            className={`px-3 py-2 rounded-md transition ${
              viewMode === 'mobile'
                ? 'bg-primary-600 text-white shadow'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
            title="Mobile"
          >
            <Smartphone className="h-4 w-4" />
          </button>
        </div>

        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm transition ${
            darkMode
              ? 'bg-gray-800 text-white hover:bg-gray-700'
              : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
          }`}
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

      {/* Preview Canvas */}
      <div className="bg-gradient-to-br from-gray-50 to-gray-100 overflow-auto">
        <div
          className="relative mx-auto bg-white shadow-2xl transition-all duration-300"
          style={{
            width: viewModeWidths[viewMode],
            maxWidth: '100%',
          }}
        >
          <iframe
            title="Component Preview"
            srcDoc={iframeContent}
            className="w-full min-h-[500px] border-0"
            sandbox="allow-scripts"
          />
        </div>
      </div>

      {/* Info Footer */}
      <div className="flex items-center justify-between px-5 py-2 text-xs text-gray-500 border-t bg-gray-50">
        <span>
          Width:{' '}
          <strong className="text-gray-700">
            {viewMode === 'desktop'
              ? 'Auto'
              : viewModeWidths[viewMode]}
          </strong>
        </span>
        <span>Live preview</span>
      </div>
    </div>
  );
}
