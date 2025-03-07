'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Heart, Eye, Share, X } from 'lucide-react';

interface ImageWithControlsProps {
  src: string;
  alt: string;
}

export default function ImageWithControls({ src, alt }: ImageWithControlsProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shareOptions, setShareOptions] = useState([
    { name: 'Facebook', url: '#' },
    { name: 'X', url: '#' },
    { name: 'Email', url: '#' }
  ]);

  useEffect(() => {
    const currentUrl = window.location.href;
    setShareOptions([
      { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}` },
      { name: 'X', url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}` },
      { name: 'Email', url: `mailto:?body=${encodeURIComponent(currentUrl)}` }
    ]);

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Main image container */}
      <div className="flex-1 flex items-center justify-center p-16">
        <div className="relative" style={{ maxWidth: '90%', maxHeight: '90%' }}>
          <Image
            src={src}
            alt={alt}
            width={2000}
            height={2000}
            style={{
              width: 'auto',
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '80vh'
            }}
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Controls - Fixed at bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-center gap-8">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="flex items-center gap-2 text-neutral-900 hover:text-black"
          >
            <Heart className={`w-[18px] h-[18px] ${isLiked ? 'fill-current text-red-500' : ''}`} />
            <span className="text-sm">Save</span>
          </button>

          <button
            onClick={() => setIsFullscreen(true)}
            className="flex items-center gap-2 text-neutral-900 hover:text-black"
          >
            <Eye className="w-[18px] h-[18px]" />
            <span className="text-sm">View in room</span>
          </button>

          <div className="relative">
            <button
              onClick={() => setIsShareOpen(!isShareOpen)}
              className="flex items-center gap-2 text-neutral-900 hover:text-black"
            >
              <Share className="w-[18px] h-[18px]" />
              <span className="text-sm">Share</span>
            </button>

            {isShareOpen && (
              <div className="absolute bottom-full right-0 mb-2 bg-white rounded-lg shadow-xl p-2 min-w-[150px]">
                {shareOptions.map((option) => (
                  <a
                    key={option.name}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                    onClick={(e) => {
                      if (option.name === 'Email') return;
                      e.preventDefault();
                      window.open(option.url, '_blank', 'width=600,height=400');
                    }}
                  >
                    {option.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fullscreen view */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <button
            onClick={() => setIsFullscreen(false)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>
          <Image
            src={src}
            alt={alt}
            width={2000}
            height={2000}
            className="object-contain m-4"
            style={{
              maxWidth: 'calc(100vw - 32px)',
              maxHeight: 'calc(100vh - 32px)'
            }}
            priority
          />
        </div>
      )}
    </div>
  );
} 