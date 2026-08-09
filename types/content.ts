export interface SiteSettings {
  churchName: string;
  churchSub: string;
  address: string;
  phone: string;
  email: string;
  serviceTime1: string;
  serviceTime2: string;
  topbar: string;
  statFounded: string;
  statMembers: string;
  statMinistries: string;
  statElders: string;
  badgeYears: string;
  badgeLabel: string;
  aboutLabel: string;
  aboutTitle: string;
  aboutBody: string;
  aboutBody2: string;
  verseText: string;
  verseRef: string;
  homeGalTitle: string;
  footerCopy: string;
}

export interface HeroSlide {
  image: string;
  tag: string;
  /** May contain <br> and <em> tags, rendered via a small trusted HTML renderer */
  title: string;
  subtitle: string;
}

export interface GalleryItem {
  image: string;
  caption?: string;
}

export interface Elder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface TimelineItem {
  year: string;
  event: string;
}

export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}
