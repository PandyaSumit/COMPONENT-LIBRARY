'use client';

import { useState, useMemo } from 'react';
import { Monitor, Tablet, Smartphone, Moon, Sun } from 'lucide-react';

type ViewMode = 'desktop' | 'tablet' | 'mobile';

interface ComponentPreviewProps {
  htmlCode: string;
  category?: string;
  colors?: {
    primary?: Record<string, string>;
    secondary?: Record<string, string>;
  };
}

export default function ComponentPreview({ htmlCode, category, colors }: ComponentPreviewProps) {
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

    // Default colors matching the site theme (from globals.css)
    const defaultPrimary = {
      '50': '#f0f9ff',
      '100': '#e0f2fe',
      '200': '#bae6fd',
      '300': '#7dd3fc',
      '400': '#38bdf8',
      '500': '#0ea5e9',
      '600': '#0284c7',
      '700': '#0369a1',
      '800': '#075985',
      '900': '#0c4a6e',
    };

    const defaultSecondary = {
      '50': '#faf5ff',
      '100': '#f3e8ff',
      '200': '#e9d5ff',
      '300': '#d8b4fe',
      '400': '#c084fc',
      '500': '#a855f7',
      '600': '#9333ea',
      '700': '#7e22ce',
      '800': '#6b21a8',
      '900': '#581c87',
    };

    // Generate CSS variables from component colors
    const generateColorVars = (colorObj: Record<string, string> | undefined, prefix: string, defaults: Record<string, string>) => {
      const finalColors = colorObj || defaults;
      return Object.entries(finalColors)
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

    const primaryVars = generateColorVars(colors?.primary, 'primary', defaultPrimary);
    const secondaryVars = generateColorVars(colors?.secondary, 'secondary', defaultSecondary);

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
              /* Component colors with defaults matching site theme */
              ${primaryVars}
              ${secondaryVars}
            }

            * {
              box-sizing: border-box;
            }

            body {
              margin: 0;
              padding: ${category === 'navigation' ? '0' : '2rem'};
              min-height: 100vh;
              background: ${darkMode ? '#1f2937' : '#ffffff'};
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              display: ${category === 'navigation' ? 'block' : 'flex'};
              ${category === 'navigation' ? '' : 'align-items: center;'}
              ${category === 'navigation' ? '' : 'justify-content: center;'}
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
