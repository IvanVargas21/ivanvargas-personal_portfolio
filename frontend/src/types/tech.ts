export interface TechItem {
  title: string;
  src: string;
  alt: string;
  category: 'main' | 'all';
}

export interface TechCategory {
  id: 'main' | 'all';
  label: string;
} 