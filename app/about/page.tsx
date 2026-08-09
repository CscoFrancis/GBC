import type { Metadata } from "next";

import { getSiteSettings, getTimeline, getCoreValues } from "@/lib/data";
import { PageHero } from "@/components/sections/about/PageHero";
import { HistoryContent } from "@/components/sections/about/HistoryContent";
import { Timeline } from "@/components/sections/about/Timeline";
import { ValuesGrid } from "@/components/sections/about/ValuesGrid";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About Us | Grace Fellowship Church",
  description:
    "Learn the story of Grace Fellowship Church, our history since 1982, and the core values that guide our congregation.",
};

export default function AboutPage() {
  const settings = getSiteSettings();
  const timeline = getTimeline();
  const values = getCoreValues();

  return (
    <>
      <PageHero
        image="/images/about/about-hero.jpg"
        eyebrow="About Us"
        title="Our Story"
      />

      <Section>
        <HistoryContent settings={settings} />
      </Section>

      <Section alt>
        <Timeline items={timeline} />
      </Section>

      <Section>
        <ValuesGrid values={values} />
      </Section>
    </>
  );
}
