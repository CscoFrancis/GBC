"use client";

import Image from "next/image";

import type { GalleryItem } from "@/types/content";

interface LightboxProps {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export function Lightbox({ items, index, onClose, onNext, onPrev }: LightboxProps) {
  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/85 p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-6 top-6 text-3xl leading-none text-white/80 hover:text-white"
      >
        ×
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Previous image"
        className="absolute left-4 text-4xl text-white/70 hover:text-white md:left-8"
      >
        ‹
      </button>

      <div
        className="relative h-[80vh] w-full max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={item.image}
          alt={item.caption ?? "Gallery photo"}
          fill
          sizes="(max-width: 768px) 100vw, 768px"
          className="object-contain"
        />
        {item.caption && (
          <p className="absolute -bottom-10 left-0 right-0 text-center text-sm text-white/80">
            {item.caption}
          </p>
        )}
      </div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Next image"
        className="absolute right-4 text-4xl text-white/70 hover:text-white md:right-8"
      >
        ›
      </button>
    </div>
  );
}
