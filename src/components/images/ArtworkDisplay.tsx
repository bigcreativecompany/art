'use client';

import { useState } from 'react';
import DisplayImage from './DisplayImage';
import ImageControls from '../ui/ImageControls';

interface ArtworkDisplayProps {
  src: string;
  alt: string;
  priority?: boolean;
  className?: string;
}

export default function ArtworkDisplay({ src, alt, priority, className = '' }: ArtworkDisplayProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-white dark:bg-neutral-900">
      <div className="w-full">
        <DisplayImage
          src={src}
          alt={alt}
          priority={priority}
        />
      </div>
      <ImageControls onViewInRoom={() => setIsFullscreen(true)} />
    </div>
  );
} 