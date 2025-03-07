'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

interface DisplayImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function DisplayImage({ src, alt, priority = false, className = '' }: DisplayImageProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <>
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="relative w-full h-auto" onClick={() => setIsFullscreen(true)}>
          <Image
            src={src}
            alt={alt}
            width={1200}
            height={1200}
            priority={priority}
            className="w-full h-auto object-contain"
          />
        </div>
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