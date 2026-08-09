import Image from "next/image";

import type { SiteSettings } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { VerseBlock } from "@/components/ui/VerseBlock";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";

export function AboutSplit({ settings }: { settings: SiteSettings }) {
  return (
    <Container className="grid items-center gap-16 md:grid-cols-2">
      <div className="relative">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
          <Image
            src="/images/about/About-Home.png"
            alt="Grace Fellowship congregation"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            className="object-cover"
          />
        </div>
        <div className="absolute -bottom-8 -right-6 md:-right-10">
          <Badge value={settings.badgeYears} label={settings.badgeLabel} />
        </div>
      </div>

      <div>
        <SectionLabel>{settings.aboutLabel}</SectionLabel>
        <h2 className="font-display text-3xl font-semibold leading-tight text-text md:text-4xl">
          {settings.aboutTitle}
        </h2>
        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted">
          {settings.aboutBody}
        </p>
        <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">
          {settings.aboutBody2}
        </p>

        <div className="mt-7">
          <VerseBlock text={settings.verseText} reference={settings.verseRef} />
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <ButtonLink href="/about" variant="solid">
            Learn Our Story
          </ButtonLink>
          <ButtonLink href="/#contactSection" variant="ghost">
            Get In Touch
          </ButtonLink>
        </div>
      </div>
    </Container>
  );
}
