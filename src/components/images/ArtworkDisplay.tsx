'use client';

import { useState } from 'react';
import DisplayImage from './DisplayImage';
import ImageControls from '../ui/ImageControls';

interface ArtworkDisplayProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ArtworkDisplay({ 
  src, 
  alt,
}: ArtworkDisplayProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div className="relative w-full h-full">
      <DisplayImage
        src={src}
        alt={alt}
      />
      <ImageControls
        onViewInRoom={() => setIsFullscreen(!isFullscreen)}
      />
    </div>
  );
} 