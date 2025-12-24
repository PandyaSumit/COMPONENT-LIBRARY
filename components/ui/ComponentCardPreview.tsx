'use client';

import { useEffect, useRef, useState } from 'react';

interface ComponentCardPreviewProps {
  htmlCode: string;
  cssCode?: string;
}

export default function ComponentCardPreview({ htmlCode, cssCode }: ComponentCardPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!iframeRef.current) return;

    const iframe = iframeRef.current;
    const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;

    if (!iframeDoc) return;

    // Create the preview HTML with Tailwind CSS
    const previewHTML = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <script src="https://cdn.tailwindcss.com"></script>
          <style>
            body {
              margin: 0;
              padding: 20px;
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              background: linear-gradient(to bottom right, #f9fafb, #ffffff, #f3f4f6);
            }
            ${cssCode || ''}
            /* Disable pointer events for preview */
            * {
              pointer-events: none !important;
            }
          </style>
        </head>
        <body>
          <div class="flex items-center justify-center gap-4 flex-wrap">
            ${htmlCode}
          </div>
        </body>
      </html>
    `;

    iframeDoc.open();
    iframeDoc.write(previewHTML);
    iframeDoc.close();

    setIsLoaded(true);
  }, [htmlCode, cssCode]);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-neutral-50 via-white to-neutral-50">
      <iframe
        ref={iframeRef}
        className={`w-full h-full border-0 transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        title="Component Preview"
        sandbox="allow-scripts"
        style={{
          transform: 'scale(0.85)',
          transformOrigin: 'center center',
        }}
      />
      {!isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-2 border-4 border-primary-200 border-t-primary-600 rounded-full animate-spin" />
            <p className="text-xs text-neutral-400 font-medium">Loading preview...</p>
          </div>
        </div>
      )}
    </div>
  );
}
