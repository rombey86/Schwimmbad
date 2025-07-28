import { SiteConfig, HeroStats, ContactInfo, NavigationItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Freibad Schwimmbad',
  description: 'Unterstützen Sie unser Freibad - Für eine lebendige Gemeinde und Freibadkultur',
  url: 'https://freibad-schwimmbad.de',
  ogImage: '/images/freibad-hero.jpg',
  links: {
    petition: 'https://www.openpetition.de/petition/freibad-schwimmbad',
    donation: '#spenden',
    newsletter: '#newsletter'
  }
};

export const heroStats: HeroStats = {
  foerdersumme: '2,86 Mio €',
  abstimmungsergebnis: '63,7%',
  jaStimmen: 'Ja beim Bürgerentscheid'
};

export const contactInfo: ContactInfo = {
  email: 'info@freibad-schwimmbad.de',
  phone: '+49 123 456789',
  address: 'Musterstraße 1, 12345 Musterstadt',
  bankDetails: {
    iban: 'DE12 3456 7890 1234 5678 90',
    bic: 'GENODEF1ABC',
    bank: 'Volksbank Musterstadt',
    recipient: 'Förderverein Freibad Schwimmbad e.V.'
  }
};

export const navigation: NavigationItem[] = [
  {
    label: 'Startseite',
    href: '/'
  },
  {
    label: 'Bürgerentscheid',
    href: '/buergerentscheid'
  },
  {
    label: 'Petition',
    href: '/petition'
  },
  {
    label: 'Unterstützen',
    href: '/unterstuetzen'
  },
  {
    label: 'Unser Freibad',
    href: '/unser-freibad',
    children: [
      {
        label: 'Galerie',
        href: '/unser-freibad/galerie'
      },
      {
        label: 'Chronik',
        href: '/unser-freibad/chronik'
      },
      {
        label: 'Presse',
        href: '/unser-freibad/presse'
      },
      {
        label: 'Fakten & Zahlen',
        href: '/unser-freibad/fakten-zahlen'
      },
      {
        label: 'Freibadkultur',
        href: '/unser-freibad/freibadkultur'
      }
    ]
  }
];