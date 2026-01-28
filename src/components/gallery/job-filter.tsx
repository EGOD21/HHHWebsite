import { JobCategory } from '@/config/jobs';

interface JobFilterProps {
  selectedCategory: JobCategory | 'all';
  onFilterChange: (category: JobCategory | 'all') => void;
}

export default function JobFilter({ selectedCategory, onFilterChange }: JobFilterProps) {
  const categories: (JobCategory | 'all')[] = ['all', 'General Repairs', 'Remodelling', 'Upscale Projects'];

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onFilterChange(category)}
          className={`px-6 py-2 rounded-full border transition-all ${
            selectedCategory === category
              ? 'bg-red-500 border-red-500 text-white'
              : 'border-white/20 text-white/70 hover:border-red-400'
          }`}
        >
          {category === 'all' ? 'All Projects' : category}
        </button>
      ))}
    </div>
  );
}
