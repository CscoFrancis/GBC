import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function GalleryHeader() {
  return (
    <Container className="pb-4 text-center">
      <SectionLabel>Gallery</SectionLabel>
      <h1 className="font-display text-3xl font-semibold text-text md:text-4xl">
        Life at Grace Fellowship
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-sm text-muted">
        Moments of worship, fellowship, and mission from across our
        congregation.
      </p>
    </Container>
  );
}
