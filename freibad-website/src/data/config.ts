import { SiteConfig, HeroStats, ContactInfo, NavigationItem } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Freibad Niederkrüchten',
  description: 'Unterstützen Sie unser Freibad - Für eine lebendige Gemeinde und Freibadkultur in Niederkrüchten',
  url: 'https://rettet-das-freibad-niederkruechten.de',
  ogImage: '/images/Freibad_Niederkrüchten_Bahnen_2017-scaled.jpg',
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
  email: 'dirk.zilz@gmx.de',
  phone: '+49 2163 49400',
  address: 'Erkelenzer Str. 12, 41372 Niederkrüchten',
  bankDetails: {
    iban: 'DE95 3146 0290 2021 6270 14',
    bic: 'GENODED1VSN',
    bank: 'Volksbank Viersen e.G',
    recipient: 'Förderverein Niederkrüchtener Bäder e.V.',
    subject: 'Bürgerbegehren'
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
  label: 'Blog',
  href: '/blog'
  },
  {
    label: 'Presse',
    href: '/presse'
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
        label: 'Fakten & Zahlen',
        href: '/unser-freibad/fakten-zahlen'
      }
    ]
  }
];
