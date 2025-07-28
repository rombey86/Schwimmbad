import { FreibadFact } from '@/types';

export const freibadFacts: FreibadFact[] = [
  // Allgemeine Daten
  {
    label: 'Eröffnung',
    value: '1972',
    category: 'general',
    description: 'Jahr der ersten Eröffnung unseres Freibads'
  },
  {
    label: 'Gesamtfläche',
    value: 12500,
    unit: 'm²',
    category: 'general',
    description: 'Gesamte Fläche der Freibadanlage'
  },
  {
    label: 'Wasserfläche',
    value: 2500,
    unit: 'm²',
    category: 'technical',
    description: 'Gesamte Wasserfläche aller Becken'
  },
  {
    label: 'Sprungturmhöhe',
    value: 5,
    unit: 'm',
    category: 'technical',
    description: 'Höhe des Sprungturms'
  },

  // Technische Daten
  {
    label: 'Schwimmerbecken',
    value: '50 x 25',
    unit: 'm',
    category: 'technical',
    description: 'Maße des Hauptschwimmerbeckens'
  },
  {
    label: 'Nichtschwimmerbecken',
    value: '25 x 12,5',
    unit: 'm',
    category: 'technical',
    description: 'Maße des Nichtschwimmerbeckens'
  },
  {
    label: 'Kinderbecken',
    value: '10 x 8',
    unit: 'm',
    category: 'technical',
    description: 'Maße des Kinderbeckens'
  },
  {
    label: 'Wassertemperatur',
    value: '22-26',
    unit: '°C',
    category: 'technical',
    description: 'Durchschnittliche Wassertemperatur in der Saison'
  },
  {
    label: 'Filteranlage',
    value: 450,
    unit: 'm³/h',
    category: 'technical',
    description: 'Leistung der Wasseraufbereitungsanlage'
  },

  // Besucherdaten
  {
    label: 'Besucher pro Jahr',
    value: 15000,
    category: 'visitor',
    description: 'Durchschnittliche jährliche Besucherzahl'
  },
  {
    label: 'Spitzentag',
    value: 850,
    category: 'visitor',
    description: 'Höchste Besucherzahl an einem Tag'
  },
  {
    label: 'Saisonlänge',
    value: 120,
    unit: 'Tage',
    category: 'visitor',
    description: 'Durchschnittliche Anzahl Öffnungstage pro Saison'
  },

  // Finanzielle Daten
  {
    label: 'Modernisierungskosten',
    value: '3,26 Mio',
    unit: '€',
    category: 'financial',
    description: 'Gesamtkosten der geplanten Modernisierung'
  },
  {
    label: 'Fördermittel',
    value: '2,86 Mio',
    unit: '€',
    category: 'financial',
    description: 'Bewilligte Fördermittel für die Modernisierung'
  },
  {
    label: 'Eigenanteil Gemeinde',
    value: '400.000',
    unit: '€',
    category: 'financial',
    description: 'Eigenanteil der Gemeinde an den Modernisierungskosten'
  },
  {
    label: 'Jährliche Betriebskosten',
    value: '180.000',
    unit: '€',
    category: 'financial',
    description: 'Durchschnittliche jährliche Betriebskosten'
  },
  {
    label: 'Energiekosten',
    value: '45.000',
    unit: '€/Jahr',
    category: 'financial',
    description: 'Jährliche Energiekosten für Heizung und Technik'
  },

  // Weitere technische Details
  {
    label: 'Umkleidekabinen',
    value: 48,
    category: 'technical',
    description: 'Anzahl der Einzelumkleidekabinen'
  },
  {
    label: 'Parkplätze',
    value: 85,
    category: 'general',
    description: 'Anzahl der verfügbaren Parkplätze'
  },
  {
    label: 'Liegewiese',
    value: 8000,
    unit: 'm²',
    category: 'general',
    description: 'Fläche der Liegewiese'
  }
];

export const getFreibadFactsByCategory = (category: FreibadFact['category']) => {
  return freibadFacts.filter(fact => fact.category === category);
};

export const getAllCategories = (): FreibadFact['category'][] => {
  return ['general', 'technical', 'visitor', 'financial'];
};

export const getCategoryLabel = (category: FreibadFact['category']): string => {
  const labels = {
    general: 'Allgemeine Daten',
    technical: 'Technische Daten',
    visitor: 'Besucherdaten',
    financial: 'Finanzielle Daten'
  };
  return labels[category];
};

export const getCategoryColor = (category: FreibadFact['category']): string => {
  const colors = {
    general: 'blue',
    technical: 'green',
    visitor: 'purple',
    financial: 'orange'
  };
  return colors[category];
};