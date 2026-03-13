'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Job } from '@/config/jobs';
import ImageLightbox from './image-lightbox';

export default function JobCard({ job }: { job: Job }) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 hover:border-red-400/50 transition-all">
        {/* Image */}
        <div
          className="relative aspect-video w-full overflow-hidden cursor-pointer"
          onClick={() => openLightbox(0)}
        >
          <Image
            src={job.images[0]}
            alt={job.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform group-hover:scale-105"
          />
          {/* Badge for multiple images */}
          {job.images.length > 1 && (
            <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-3 py-1 text-xs text-white backdrop-blur-sm">
              {job.images.length} photos
            </div>
          )}
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

          {/* Thumbnail gallery for additional images */}
          {job.images.length > 1 && (
            <div className="mt-4 flex gap-2">
              {job.images.slice(1, 4).map((image, index) => (
                <button
                  key={index}
                  onClick={() => openLightbox(index + 1)}
                  className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 transition hover:border-red-400/50"
                >
                  <Image
                    src={image}
                    alt={`${job.title} - Image ${index + 2}`}
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
              {job.images.length > 4 && (
                <button
                  onClick={() => openLightbox(4)}
                  className="relative h-16 w-16 overflow-hidden rounded-lg border border-white/10 bg-black/60 transition hover:border-red-400/50"
                >
                  <div className="flex h-full items-center justify-center text-xs text-white">
                    +{job.images.length - 4}
                  </div>
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <ImageLightbox
        images={job.images}
        initialIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
