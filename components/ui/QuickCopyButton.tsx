'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface QuickCopyButtonProps {
  code: string;
  label?: string;
  className?: string;
}

export default function QuickCopyButton({ 
  code, 
  label = 'Copy Code',
  className = '' 
}: QuickCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`
        relative inline-flex items-center gap-2 px-5 py-2.5 
        bg-primary-600 text-white rounded-lg font-semibold text-sm
        hover:bg-primary-700 active:scale-[0.98]
        transition-all duration-200 shadow-md hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      disabled={copied}
    >
      {copied ? (
        <>
          <Check className="h-4 w-4 animate-fadeInScale" />
          <span className="animate-fadeInScale">Copied!</span>
        </>
      ) : (
        <>
          <Copy className="h-4 w-4" />
          <span>{label}</span>
        </>
      )}
    </button>
  );
}
