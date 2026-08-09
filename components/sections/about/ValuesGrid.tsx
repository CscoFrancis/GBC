import type { CoreValue } from "@/types/content";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Card } from "@/components/ui/Card";

export function ValuesGrid({ values }: { values: CoreValue[] }) {
  return (
    <Container>
      <div className="mb-12 text-center">
        <SectionLabel>What We Believe</SectionLabel>
        <h2 className="font-display text-3xl font-semibold text-text md:text-4xl">
          Our Core Values
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {values.map((value) => (
          <Card key={value.title} className="text-center">
            <div className="mb-4 text-3xl">{value.icon}</div>
            <h3 className="font-display text-lg font-semibold text-text">
              {value.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              {value.description}
            </p>
          </Card>
        ))}
      </div>
    </Container>
  );
}
