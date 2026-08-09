import Image from "next/image";

import type { Elder } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";

export function EldersGrid({ elders }: { elders: Elder[] }) {
  return (
    <Container>
      <div className="mb-12 text-center">
        <SectionLabel>Leadership</SectionLabel>
        <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
          Meet Our Elders
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {elders.map((elder) => (
          <Card key={elder.name} className="text-center">
            <div className="relative mx-auto mb-4 h-24 w-24 overflow-hidden rounded-full">
              <Image
                src={elder.image}
                alt={elder.name}
                fill
                sizes="96px"
                className="object-cover"
              />
            </div>
            <h3 className="font-display text-lg font-semibold text-text">
              {elder.name}
            </h3>
            <p className="mt-1 text-xs tracking-wide text-green uppercase">
              {elder.role}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{elder.bio}</p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
