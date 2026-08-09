import type { TimelineItem } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <Container className="max-w-3xl">
      <div className="mb-12 text-center">
        <SectionLabel>Our History</SectionLabel>
        <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
          Four Decades of Grace
        </h2>
      </div>

      <ol className="relative border-l border-border pl-8">
        {items.map((item) => (
          <li key={item.year} className="mb-10 last:mb-0">
            <span className="absolute -left-[7px] mt-1.5 h-3.5 w-3.5 rounded-full bg-green" />
            <div className="font-display text-xl font-semibold text-green">
              {item.year}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-muted">{item.event}</p>
          </li>
        ))}
      </ol>
    </Container>
  );
}
