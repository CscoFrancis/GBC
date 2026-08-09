import type { Metadata } from "next";

import { getPhotoGallery } from "@/lib/data";
import { GalleryHeader } from "@/components/sections/gallery/GalleryHeader";
import { StaggeredGrid } from "@/components/sections/gallery/StaggeredGrid";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Gallery | Grace Fellowship Church",
  description: "Photos of worship, fellowship, and mission at Grace Fellowship Church.",
};

export default function GalleryPage() {
  const photos = getPhotoGallery();

  return (
    <Section className="pt-32">
      <GalleryHeader />
      <div className="mt-10">
        <StaggeredGrid items={photos} />
      </div>
    </Section>
  );
}
