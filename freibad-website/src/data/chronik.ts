import { ChronikEvent } from '@/types';

export const chronikEvents: ChronikEvent[] = [
  {
    id: '1',
    date: '1970-03-15',
    title: 'Planungsbeginn',
    description: 'Der Gemeinderat beschließt den Bau eines öffentlichen Freibads. Erste Planungen und Standortsuche beginnen.',
    category: 'milestone'
  },
  {
    id: '2',
    date: '1971-06-20',
    title: 'Baubeginn',
    description: 'Nach Abschluss der Planungsphase beginnen die Bauarbeiten. Aushub der Schwimmbecken und Fundamentarbeiten starten.',
    category: 'construction'
  },
  {
    id: '3',
    date: '1972-05-01',
    title: 'Eröffnung des Freibads',
    description: 'Feierliche Eröffnung des Freibads mit großem Fest. Über 2.000 Besucher feiern die Eröffnung der neuen Freizeiteinrichtung.',
    category: 'milestone'
  },
  {
    id: '4',
    date: '1975-08-12',
    title: 'Rekord-Besuchertag',
    description: 'Mit 1.200 Besuchern an einem Tag wird ein neuer Besucherrekord aufgestellt. Das Freibad etabliert sich als beliebtes Ausflugsziel.',
    category: 'event'
  },
  {
    id: '5',
    date: '1980-04-10',
    title: 'Erste große Renovierung',
    description: 'Umfassende Sanierung der Becken und Erneuerung der Filteranlage. Investition von 250.000 DM.',
    category: 'construction'
  },
  {
    id: '6',
    date: '1985-07-15',
    title: 'Bau des Sprungturms',
    description: 'Installation des 5-Meter-Sprungturms. Eine lang ersehnte Attraktion für mutige Schwimmer wird Realität.',
    category: 'construction'
  },
  {
    id: '7',
    date: '1990-06-01',
    title: '25.000ster Besucher',
    description: 'Erstmals wird die Marke von 25.000 Besuchern in einer Saison überschritten. Das Freibad wird immer beliebter.',
    category: 'event'
  },
  {
    id: '8',
    date: '1995-09-30',
    title: 'Modernisierung der Umkleiden',
    description: 'Komplette Erneuerung der Umkleidekabinen und Sanitäranlagen. Verbesserung des Komforts für die Besucher.',
    category: 'construction'
  },
  {
    id: '9',
    date: '2000-05-20',
    title: 'Neugestaltung der Außenanlagen',
    description: 'Die Liegewiesen werden neu angelegt und ein Kinderspielplatz wird errichtet. Mehr Komfort für Familien.',
    category: 'construction'
  },
  {
    id: '10',
    date: '2005-08-15',
    title: '30-jähriges Jubiläum',
    description: 'Großes Jubiläumsfest mit über 1.500 Besuchern. Rückblick auf drei erfolgreiche Jahrzehnte Freibadgeschichte.',
    category: 'event'
  },
  {
    id: '11',
    date: '2010-04-01',
    title: 'Energetische Sanierung',
    description: 'Installation einer Solaranlage zur Wassererwärmung und LED-Beleuchtung. Erste Schritte in Richtung Nachhaltigkeit.',
    category: 'construction'
  },
  {
    id: '12',
    date: '2015-07-10',
    title: 'Digitalisierung',
    description: 'Einführung eines elektronischen Kassensystems und WLAN für Besucher. Das Freibad wird digital.',
    category: 'milestone'
  },
  {
    id: '13',
    date: '2018-03-01',
    title: 'Erste Sanierungspläne',
    description: 'Gutachten zeigt dringenden Sanierungsbedarf auf. Erste Überlegungen für eine umfassende Modernisierung beginnen.',
    category: 'decision'
  },
  {
    id: '14',
    date: '2020-03-15',
    title: 'Corona-Pandemie',
    description: 'Das Freibad muss aufgrund der Pandemie geschlossen bleiben. Erste Saison ohne Badebetrieb seit der Eröffnung.',
    category: 'event'
  },
  {
    id: '15',
    date: '2021-06-01',
    title: 'Wiedereröffnung nach Corona',
    description: 'Unter strengen Hygienemaßnahmen kann das Freibad wieder öffnen. Begrenzte Besucherzahl, aber große Freude.',
    category: 'event'
  },
  {
    id: '16',
    date: '2022-09-10',
    title: 'Gründung Förderverein',
    description: 'Engagierte Bürger gründen den Förderverein "Rettet unser Freibad e.V." zur Unterstützung der Sanierungspläne.',
    category: 'milestone'
  },
  {
    id: '17',
    date: '2023-01-15',
    title: 'Start der Petition',
    description: 'Online-Petition "Rettet unser Freibad" wird gestartet. Ziel: 5.000 Unterschriften für die Sanierung sammeln.',
    category: 'milestone'
  },
  {
    id: '18',
    date: '2023-08-20',
    title: 'Petition erreicht 5.000 Unterschriften',
    description: 'Meilenstein erreicht: Die Petition überschreitet die Marke von 5.000 Unterschriften. Starkes Signal der Unterstützung.',
    category: 'event'
  },
  {
    id: '19',
    date: '2024-02-28',
    title: 'Fördermittel bewilligt',
    description: 'Durchbruch: 2,86 Millionen Euro Fördermittel für die Modernisierung werden offiziell bewilligt.',
    category: 'milestone',
    link: '/blog/foerdermittel-bewilligt'
  },
  {
    id: '20',
    date: '2024-03-15',
    title: 'Bürgerentscheid erfolgreich',
    description: 'Historischer Tag: 63,7% der Bürger stimmen für die Rettung und Modernisierung des Freibads.',
    category: 'decision',
    link: '/blog/buergerentscheid-erfolgreich'
  },
  {
    id: '21',
    date: '2024-06-01',
    title: 'Planungsphase beginnt',
    description: 'Detailplanung für die Modernisierung startet. Architekten und Ingenieure arbeiten an den konkreten Bauplänen.',
    category: 'construction'
  },
  {
    id: '22',
    date: '2025-03-01',
    title: 'Baubeginn Modernisierung',
    description: 'Start der umfassenden Modernisierungsarbeiten. Ein neues Kapitel in der Geschichte unseres Freibads beginnt.',
    category: 'construction'
  },
  {
    id: '23',
    date: '2026-05-01',
    title: 'Wiedereröffnung modernisiertes Freibad',
    description: 'Feierliche Wiedereröffnung nach der Modernisierung. Das Freibad erstrahlt in neuem Glanz für die nächsten Jahrzehnte.',
    category: 'milestone'
  }
];

export const getEventsByCategory = (category: ChronikEvent['category']) => {
  return chronikEvents.filter(event => event.category === category);
};

export const getEventsByYear = (year: number) => {
  return chronikEvents.filter(event => new Date(event.date).getFullYear() === year);
};

export const getEventsByDateRange = (startDate: string, endDate: string) => {
  return chronikEvents.filter(event => 
    event.date >= startDate && event.date <= endDate
  );
};

export const getCategoryLabel = (category: ChronikEvent['category']): string => {
  switch (category) {
    case 'milestone':
      return 'Meilenstein';
    case 'decision':
      return 'Entscheidung';
    case 'construction':
      return 'Baumaßnahme';
    case 'event':
      return 'Ereignis';
    default:
      return 'Unbekannt';
  }
};

export const getCategoryColor = (category: ChronikEvent['category']): string => {
  switch (category) {
    case 'milestone':
      return 'blue';
    case 'decision':
      return 'green';
    case 'construction':
      return 'orange';
    case 'event':
      return 'purple';
    default:
      return 'gray';
  }
};