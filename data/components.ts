export interface Component {
  id: string;
  name: string;
  description: string;
  category: Category;
  tags: string[];
  thumbnail: string;
  featured: boolean;
  popular: boolean;
  isNew: boolean;
  htmlCode: string;
  reactCode: string;
  vueCode: string;
  cssCode?: string;
  dependencies: string[];
  usage: string;
  customizationTips: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  likes: number;
  colors?: {
    primary?: Record<string, string>;
    secondary?: Record<string, string>;
  };
}

export type Category =
  | 'hero'
  | 'navigation'
  | 'buttons'
  | 'cards'
  | 'forms'
  | 'cta'
  | 'features'
  | 'testimonials'
  | 'pricing'
  | 'footers'
  | 'other';

export const categories: { name: Category; label: string; description: string }[] = [
  { name: 'hero', label: 'Hero Sections', description: 'Eye-catching hero sections for landing pages' },
  { name: 'navigation', label: 'Navigation', description: 'Navigation bars, menus, and sidebars' },
  { name: 'buttons', label: 'Buttons', description: 'Call-to-action buttons and button groups' },
  { name: 'cards', label: 'Cards', description: 'Content cards for products, blog posts, and more' },
  { name: 'forms', label: 'Forms', description: 'Form layouts and input components' },
  { name: 'cta', label: 'Call-to-Action', description: 'CTA sections to drive conversions' },
  { name: 'features', label: 'Features', description: 'Feature showcases and highlights' },
  { name: 'testimonials', label: 'Testimonials', description: 'Customer testimonials and reviews' },
  { name: 'pricing', label: 'Pricing Tables', description: 'Pricing plans and comparison tables' },
  { name: 'footers', label: 'Footers', description: 'Website footers with links and information' },
  { name: 'other', label: 'Other Components', description: 'Modals, alerts, tabs, and more' },
];

// Sample components for initial testing
export const components: Component[] = [];
