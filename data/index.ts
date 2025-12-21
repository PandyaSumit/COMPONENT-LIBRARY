import { Component } from './components';
import { heroComponents } from './components/hero';

// Re-export types and categories
export * from './components';

// Combine all component categories
export const components: Component[] = [
  ...heroComponents,
  // Add other categories here as you create them:
  // ...navigationComponents,
  // ...buttonComponents,
  // etc.
];
