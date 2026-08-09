"use client";

import Image from "next/image";

import type { GalleryItem } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ButtonLink } from "@/components/ui/Button";
import { Lightbox } from "@/components/shared/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";

export function HomeGalleryPreview({
  title,
  items,
}: {
  title: string;
  items: GalleryItem[];
}) {
  const { index, open, close, next, prev } = useLightbox(items.length);

  return (
    <Container>
      <div className="mb-10 text-center">
        <SectionLabel>Gallery</SectionLabel>
        <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
          {title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {items.map((item, i) => (
          <button
            key={item.image}
            onClick={() => open(i)}
            className="group relative aspect-square overflow-hidden rounded-xl"
          >
            <Image
              src={item.image}
              alt={item.caption ?? "Gallery photo"}
              fill
              sizes="(max-width: 768px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {item.caption && (
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-left text-xs text-white opacity-0 transition-opacity group-hover:opacity-100">
                {item.caption}
              </span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-10 text-center">
        <ButtonLink href="/gallery" variant="ghost">
          View Full Gallery
        </ButtonLink>
      </div>

      <Lightbox items={items} index={index} onClose={close} onNext={next} onPrev={prev} />
    </Container>
  );
}
