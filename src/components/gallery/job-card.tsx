import Image from 'next/image';
import { Job } from '@/config/jobs';

export default function JobCard({ job }: { job: Job }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 hover:border-red-400/50 transition-all">
      {/* Image */}
      <div className="relative aspect-video w-full overflow-hidden">
        <Image
          src={job.images[0]}
          alt={job.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <span className="text-xs uppercase tracking-wider text-red-400">{job.category}</span>
        <h3 className="mt-2 text-xl font-semibold">{job.title}</h3>
        <p className="mt-2 text-sm text-white/60">{job.description}</p>
        <time className="mt-4 block text-xs text-white/40">
          {new Date(job.completedDate).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
          })}
        </time>
      </div>
    </div>
  );
}
