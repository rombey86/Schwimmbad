import { Metadata } from 'next';
import PressPageClient from './PressPageClient';
import fs from 'fs';
import path from 'path';
import { PressArticle } from '@/data/press';

export const metadata: Metadata = {
  title: 'Presse - Rettet das Freibad Niederkrüchten',
  description: 'Aktuelle Presseberichte und Medienecho zum Freibad Niederkrüchten. Verfolgen Sie die Berichterstattung über unser Projekt.',
};

// Diese Funktion wird auf dem Server ausgeführt, um die Artikel zu laden
async function getPressArticles(): Promise<PressArticle[]> {
  const pressDirectory = path.join(process.cwd(), 'public', 'press');
  
  try {
    const filenames = fs.readdirSync(pressDirectory);
    
    const articles = filenames
      .map((filename, index) => {
        // Filtere Dateien, die nicht dem erwarteten Muster entsprechen oder keine Bilder sind
        if (!/\.(png|jpe?g)$/i.test(filename)) {
          return null;
        }
        
        // Extrahiere Datum und Quelle aus dem Dateinamen
        // Format: YYYY_MM_DD__SOURCE.png oder YYYY_MM_DD__SOURCE_weitere_infos.png
        const match = filename.match(/^(\d{4})_(\d{2})_(\d{2})__([^_]+)/);
        
        let date = '';
        let source = 'Unbekannt';
        let title = filename;

        if (match) {
          date = `${match[1]}-${match[2]}-${match[3]}`;
          source = match[4].replace(/_/g, ' '); // Ersetze Unterstriche im Quellnamen
          title = `${source} - ${match[3]}.${match[2]}.${match[1]}`;
        } else {
          // Fallback für andere Dateinamen wie "LokalKlick_2022_03_09.png"
          const alternativeMatch = filename.match(/^([a-zA-Z-]+)_(\d{4})_(\d{2})_(\d{2})\./);
          if (alternativeMatch) {
            source = alternativeMatch[1];
            date = `${alternativeMatch[2]}-${alternativeMatch[3]}-${alternativeMatch[4]}`;
            title = `${source} - ${alternativeMatch[4]}.${alternativeMatch[3]}.${alternativeMatch[2]}`;
          }
        }

        return {
          id: index + 1,
          title: title,
          date: date,
          source: source,
          filename: filename,
          description: `Presseartikel vom ${date}`,
        };
      })
      .filter((article): article is PressArticle => article !== null);

    // Sortiere Artikel nach Datum (neueste zuerst)
    return articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  } catch (error) {
    console.error("Fehler beim Lesen des Presse-Verzeichnisses:", error);
    return []; // Gebe ein leeres Array zurück, wenn der Ordner nicht existiert oder ein Fehler auftritt
  }
}


export default async function PressePage() {
  const articles = await getPressArticles();
  return <PressPageClient articles={articles} />;
}