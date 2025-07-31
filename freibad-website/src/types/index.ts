// Grundlegende Typen für die Freibad-Website


export interface ChronikEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  link?: string;
  category?: 'milestone' | 'decision' | 'construction' | 'event';
}

export interface FreibadFact {
  label: string;
  value: string | number;
  unit?: string;
  description?: string;
  category: 'general' | 'financial' | 'technical' | 'visitor';
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: 'bauphase' | 'aktionstag' | 'flyer' | 'allgemein';
  date?: string;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    petition: string;
    donation: string;
    newsletter: string;
  };
}

export interface HeroStats {
  foerdersumme: string;
  abstimmungsergebnis: string;
  jaStimmen: string;
}

export interface ContactInfo {
  email: string;
  phone?: string;
  address?: string;
  bankDetails: {
    iban: string;
    bic: string;
    bank: string;
    recipient: string;
    subject: string;
  };
}
