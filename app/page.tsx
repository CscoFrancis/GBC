import {
  getSiteSettings,
  getHeroSlides,
  getHomeGallery,
  getElders,
  getTimeline,
  getCoreValues
} from "@/lib/data";

import { HeroCarousel } from "@/components/sections/home/HeroCarousel";
import { StatsBar } from "@/components/sections/home/StatsBar";
import { AboutSplit } from "@/components/sections/home/AboutSplit";
import { HomeGalleryPreview } from "@/components/sections/home/HomeGalleryPreview";
import { EldersGrid } from "@/components/sections/home/EldersGrid";
import { ContactSection } from "@/components/sections/home/ContactSection";
import { Section } from "@/components/ui/Section";
import { Timeline } from "@/components/sections/about/Timeline";
import { ValuesGrid } from "@/components/sections/about/ValuesGrid";

export default function HomePage() {
  const settings = getSiteSettings();
  const heroSlides = getHeroSlides();
  const homeGallery = getHomeGallery();
    const values = getCoreValues();
  const elders = getElders();
    const timeline = getTimeline();

  return (
    <>
      <HeroCarousel slides={heroSlides} />
      <StatsBar settings={settings} />

      <Section>
        <AboutSplit settings={settings} />
      </Section>

      <Section alt>
        <Timeline items={timeline} />
      </Section>


      <Section >
        <HomeGalleryPreview title={settings.homeGalTitle} items={homeGallery} />
      </Section>


      <Section alt>
        <EldersGrid elders={elders} />
      </Section>

      <Section>
        <ValuesGrid values={values} />
      </Section>

      <Section id="contactSection" alt>
        <ContactSection settings={settings} />
      </Section>
    </>
  );
}
