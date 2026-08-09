"use client";

import Image from "next/image";

import type { GalleryItem } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { Lightbox } from "@/components/shared/Lightbox";
import { useLightbox } from "@/hooks/useLightbox";

export function StaggeredGrid({ items }: { items: GalleryItem[] }) {
  const { index, open, close, next, prev } = useLightbox(items.length);

  return (
    <Container>
      <div className="columns-2 gap-4 sm:columns-3 [&>*]:mb-4 [&>*]:break-inside-avoid">
        {items.map((item, i) => (
          <button
            key={item.image}
            onClick={() => open(i)}
            className="group relative block w-full overflow-hidden rounded-xl"
          >
            <Image
              src={item.image}
              alt={item.caption ?? "Gallery photo"}
              width={800}
              height={1000}
              sizes="(max-width: 640px) 50vw, 33vw"
              className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </button>
        ))}
      </div>

      <Lightbox items={items} index={index} onClose={close} onNext={next} onPrev={prev} />
    </Container>
  );
}
