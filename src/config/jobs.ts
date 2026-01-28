export type JobCategory = 'General Repairs' | 'Remodelling' | 'Upscale Projects';

export interface Job {
  id: string;
  title: string;
  category: JobCategory;
  description: string;
  images: string[]; // Paths to images in /public/gallery/
  completedDate: string; // ISO date YYYY-MM-DD
  featured?: boolean;
  tags?: string[];
}

export const jobs: Job[] = [
  // Placeholder jobs - client will provide real job photos and details
  {
    id: 'job-001',
    title: 'Kitchen Remodel Example',
    category: 'Remodelling',
    description: 'Complete kitchen renovation with new cabinets and countertops.',
    images: ['/gallery/placeholder-1.svg'],
    completedDate: '2024-12-15',
    featured: true,
    tags: ['kitchen', 'cabinets', 'countertops'],
  },
  {
    id: 'job-002',
    title: 'Deck Construction',
    category: 'Upscale Projects',
    description: 'Custom deck build with composite materials.',
    images: ['/gallery/placeholder-2.svg'],
    completedDate: '2024-11-20',
    tags: ['deck', 'outdoor'],
  },
  {
    id: 'job-003',
    title: 'Drywall Repair',
    category: 'General Repairs',
    description: 'Patched and painted damaged drywall in living room.',
    images: ['/gallery/placeholder-3.svg'],
    completedDate: '2024-10-05',
    tags: ['drywall', 'paint'],
  },
  {
    id: 'job-004',
    title: 'Bathroom Renovation',
    category: 'Remodelling',
    description: 'Full bathroom remodel with new fixtures, tile work, and lighting.',
    images: ['/gallery/placeholder-4.svg'],
    completedDate: '2024-09-18',
    featured: true,
    tags: ['bathroom', 'tile', 'plumbing'],
  },
  {
    id: 'job-005',
    title: 'Door Installation',
    category: 'General Repairs',
    description: 'Replaced old entry door with new insulated door and hardware.',
    images: ['/gallery/placeholder-5.svg'],
    completedDate: '2024-08-30',
    tags: ['door', 'installation'],
  },
  {
    id: 'job-006',
    title: 'Outdoor Living Space',
    category: 'Upscale Projects',
    description: 'Custom outdoor patio with built-in seating and fire pit.',
    images: ['/gallery/placeholder-6.svg'],
    completedDate: '2024-07-12',
    featured: true,
    tags: ['patio', 'outdoor', 'custom'],
  },
];
