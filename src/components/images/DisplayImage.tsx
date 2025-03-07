'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface DisplayImageProps {
  src: string;
  alt: string;
}

export default function DisplayImage({ 
  src, 
  alt,
}: DisplayImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="relative w-full aspect-square">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain"
          priority
        />
      </div>

      {/* Fullscreen view */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black dark:bg-neutral-950 z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>
          <Image
            src={src}
            alt={alt}
            width={2000}
            height={2000}
            className="object-contain"
            style={{
              maxWidth: 'calc(100vw - 32px)',
              maxHeight: 'calc(100vh - 32px)'
            }}
            priority
          />
        </div>
      )}
    </>
  );
} 