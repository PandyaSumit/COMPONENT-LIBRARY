import { Component } from './components';
import { heroComponents } from './components/hero';
import { navigationComponents } from './components/navigation';
import { buttonComponents } from './components/buttons';

// Re-export types and categories
export * from './components';

// Combine all component categories
export const components: Component[] = [
  ...heroComponents,
  ...navigationComponents,
  ...buttonComponents,
  // Add other categories here as you create them:
  // ...cardComponents,
  // ...formComponents,
  // etc.
];
