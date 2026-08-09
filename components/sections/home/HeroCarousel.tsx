"use client";

import Image from "next/image";

import type { HeroSlide } from "@/types/content";
import { useCarousel } from "@/hooks/useCarousel";
import { ButtonLink } from "@/components/ui/Button";

export function HeroCarousel({ slides }: { slides: HeroSlide[] }) {
  const { active, goTo, next, prev } = useCarousel(slides.length);

  return (
    <div className="relative h-[92vh] min-h-[560px] w-full overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.tag}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-black/10" />

          <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center text-white">
            <span className="mb-4 rounded-full border border-white/40 px-4 py-1.5 text-[0.7rem] tracking-[0.2em] uppercase">
              {slide.tag}
            </span>
            <h1
              className="font-display max-w-3xl text-5xl font-semibold leading-[1.1] md:text-7xl [&_em]:font-normal [&_em]:not-italic [&_em]:text-green-lt"
              dangerouslySetInnerHTML={{ __html: slide.title }}
            />
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              {slide.subtitle}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonLink href="/#contactSection" variant="solid">
                Plan Your Visit
              </ButtonLink>
              <ButtonLink href="/about" variant="white">
                Our Story
              </ButtonLink>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 text-4xl text-white/70 transition-colors hover:text-white md:left-8"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-4xl text-white/70 transition-colors hover:text-white md:right-8"
      >
        ›
      </button>

      <div className="absolute inset-x-0 bottom-8 flex justify-center gap-2.5">
        {slides.map((slide, i) => (
          <button
            key={slide.image}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 rounded-full transition-all ${
              i === active ? "w-7 bg-white" : "w-2.5 bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
