import { z } from "zod";

import settingsJson from "@/data/settings.json";
import heroJson from "@/data/hero.json";
import homeGalleryJson from "@/data/homeGallery.json";
import photoGalleryJson from "@/data/photoGallery.json";
import eldersJson from "@/data/elders.json";
import timelineJson from "@/data/timeline.json";
import valuesJson from "@/data/values.json";
import navigationJson from "@/data/navigation.json";

import type {
  SiteSettings,
  HeroSlide,
  GalleryItem,
  Elder,
  TimelineItem,
  CoreValue,
  NavLink,
} from "@/types/content";

const siteSettingsSchema = z.object({
  churchName: z.string(),
  churchSub: z.string(),
  address: z.string(),
  phone: z.string(),
  email: z.string(),
  serviceTime1: z.string(),
  serviceTime2: z.string(),
  topbar: z.string(),
  statFounded: z.string(),
  statMembers: z.string(),
  statMinistries: z.string(),
  statElders: z.string(),
  badgeYears: z.string(),
  badgeLabel: z.string(),
  aboutLabel: z.string(),
  aboutTitle: z.string(),
  aboutBody: z.string(),
  aboutBody2: z.string(),
  verseText: z.string(),
  verseRef: z.string(),
  homeGalTitle: z.string(),
  footerCopy: z.string(),
});

const heroSlideSchema = z.object({
  image: z.string(),
  tag: z.string(),
  title: z.string(),
  subtitle: z.string(),
});

const galleryItemSchema = z.object({
  image: z.string(),
  caption: z.string().optional(),
});

const elderSchema = z.object({
  name: z.string(),
  role: z.string(),
  bio: z.string(),
  image: z.string(),
});

const timelineItemSchema = z.object({
  year: z.string(),
  event: z.string(),
});

const coreValueSchema = z.object({
  icon: z.string(),
  title: z.string(),
  description: z.string(),
});

const navLinkSchema = z.object({
  label: z.string(),
  href: z.string(),
});

/**
 * Phase 1: these loaders read validated local JSON and are synchronous.
 *
 * Phase 2 (Payload CMS) migration: make each function `async` and replace
 * its body with a Payload fetch, e.g.:
 *
 *   export async function getSiteSettings(): Promise<SiteSettings> {
 *     const res = await payload.findGlobal({ slug: "site-settings" });
 *     return siteSettingsSchema.parse(res);
 *   }
 *
 * No component that calls getSiteSettings() needs to change — only this
 * file, and adding `await` at each call site.
 */

export function getSiteSettings(): SiteSettings {
  return siteSettingsSchema.parse(settingsJson);
}

export function getHeroSlides(): HeroSlide[] {
  return z.array(heroSlideSchema).parse(heroJson);
}

export function getHomeGallery(): GalleryItem[] {
  return z.array(galleryItemSchema).parse(homeGalleryJson);
}

export function getPhotoGallery(): GalleryItem[] {
  return z.array(galleryItemSchema).parse(photoGalleryJson);
}

export function getElders(): Elder[] {
  return z.array(elderSchema).parse(eldersJson);
}

export function getTimeline(): TimelineItem[] {
  return z.array(timelineItemSchema).parse(timelineJson);
}

export function getCoreValues(): CoreValue[] {
  return z.array(coreValueSchema).parse(valuesJson);
}

export function getNavigation(): NavLink[] {
  return z.array(navLinkSchema).parse(navigationJson);
}
