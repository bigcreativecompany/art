'use client';

import { useState } from 'react';
import { Heart, Eye, Share } from 'lucide-react';

interface ImageControlsProps {
  onViewInRoom?: () => void;
  className?: string;
}

export default function ImageControls({ onViewInRoom, className = '' }: ImageControlsProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className={`w-full max-w-4xl mx-auto px-4 py-4 flex justify-center gap-8 ${className}`}>
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <Heart className={`w-5 h-5 ${isLiked ? 'fill-current text-red-500' : ''}`} />
        <span>Save</span>
      </button>

      {onViewInRoom && (
        <button
          onClick={onViewInRoom}
          className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
        >
          <Eye className="w-5 h-5" />
          <span>View in room</span>
        </button>
      )}

      <button
        className="flex items-center gap-2 text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100"
      >
        <Share className="w-5 h-5" />
        <span>Share</span>
      </button>
    </div>
  );
} 