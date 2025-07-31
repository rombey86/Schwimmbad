export interface PressArticle {
  id: number;
  title: string;
  date: string;
  source: string;
  filename: string;
  description?: string;
}

/**
 * Zeitungsartikel für die Presse-Seite
 * 
 * ANLEITUNG: 
 * 1. PNG-Dateien in den Ordner /public/press/ hochladen
 * 2. Hier die Metadaten für jeden Artikel hinzufügen
 * 3. Der filename sollte dem tatsächlichen Dateinamen entsprechen
 */
export const pressArticles: PressArticle[] = [
  // Beispiel-Artikel (entfernen Sie diese und fügen Sie echte Artikel hinzu)
  {
    id: 1,
    title: 'Bürgerentscheid erfolgreich - Freibad wird gerettet',
    date: '2024-01-15',
    source: 'Rheinische Post',
    filename: 'rp-buergerentscheid-erfolgreich.png',
    description: 'Der Bürgerentscheid war erfolgreich: 63,7% der Bürger stimmten für die Rettung des Freibads.'
  },
  {
    id: 2,
    title: 'Fördermittel bewilligt für Freibad-Sanierung',
    date: '2024-01-10',
    source: 'WZ - Westdeutsche Zeitung',
    filename: 'wz-foerdermittel-bewilligt.png',
    description: 'Die Bezirksregierung bewilligt 2,86 Millionen Euro für die Sanierung des Freibads Niederkrüchten.'
  },
  {
    id: 3,
    title: 'Petition erreicht Zielmarke von 5.000 Unterschriften',
    date: '2023-12-20',
    source: 'Lokalzeitung Niederkrüchten',
    filename: 'lokalzeitung-petition-5000.png',
    description: 'Die Online-Petition für das Freibad hat einen wichtigen Meilenstein erreicht.'
  }
  
  // Fügen Sie hier weitere Artikel hinzu:
  // {
  //   id: 4,
  //   title: 'Titel des Artikels',
  //   date: '2024-02-01',
  //   source: 'Name der Zeitung',
  //   filename: 'dateiname.png',
  //   description: 'Kurze Beschreibung des Artikels'
  // }
];

/**
 * Hilfsfunktionen für die Presse-Daten
 */

// Artikel nach Datum sortiert (neueste zuerst)
export function getArticlesSortedByDate(): PressArticle[] {
  return [...pressArticles].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Artikel nach Quelle filtern
export function getArticlesBySource(source: string): PressArticle[] {
  return pressArticles.filter(article => article.source === source);
}

// Alle verfügbaren Quellen
export function getAllSources(): string[] {
  return [...new Set(pressArticles.map(article => article.source))];
}

// Artikel nach ID finden
export function getArticleById(id: number): PressArticle | undefined {
  return pressArticles.find(article => article.id === id);
}
