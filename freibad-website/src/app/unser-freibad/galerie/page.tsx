import { Metadata } from 'next';
import GaleriePageClient from './GaleriePageClient';
import fs from 'fs';
import path from 'path';
import { GalleryImage } from '@/types';

export const metadata: Metadata = {
  title: 'Galerie - Rettet das Freibad Niederkrüchten',
  description: 'Bilder aus verschiedenen Epochen unseres Freibads - von der Bauphase bis zu den schönsten Sommermomenten.',
};

// Diese Funktion wird auf dem Server ausgeführt, um die Galeriebilder zu laden
async function getGalleryImages(): Promise<GalleryImage[]> {
  const galleryDirectory = path.join(process.cwd(), 'public', 'images', 'galerie');

  try {
    const filenames = fs.readdirSync(galleryDirectory);
    
    const images = filenames
      .map((filename, index) => {
        // Filtere Dateien, die keine Bilder sind oder die README-Datei
        if (!/\.(png|jpe?g|webp)$/i.test(filename) || filename === 'README.md') {
          return null;
        }
        
        // Extrahiere Metadaten aus dem Dateinamen
        // Format: JJJJ-MM-TT__KATEGORIE__eine-kurze-beschreibung.jpg
        const match = filename.match(/^(\d{4}-\d{2}-\d{2})__([a-z]+)__(.+)\.\w+$/);
        
        if (!match) {
          console.warn(`Datei im Galerie-Ordner hat ein ungültiges Format und wird ignoriert: ${filename}`);
          return null;
        }

        const [, date, category, slug] = match;
        
        // Erstelle einen lesbaren Titel aus dem Slug
        const title = slug
          .replace(/-/g, ' ') // Ersetze Bindestriche durch Leerzeichen
          .replace(/\b\w/g, l => l.toUpperCase()); // Mache den ersten Buchstaben jedes Wortes groß

        return {
          id: `${index}`,
          src: `/images/galerie/${filename}`,
          alt: title,
          title: title,
          description: `Ein Bild aus der Kategorie "${category}" vom ${new Date(date).toLocaleDateString('de-DE')}.`,
          category: category as GalleryImage['category'],
          date: date,
        } as GalleryImage;
      })
      .filter((image): image is GalleryImage => image !== null);

    // Sortiere Bilder nach Datum (neueste zuerst)
    return images.sort((a, b) => {
      if (!a.date || !b.date) return 0;
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    });

  } catch (error) {
    console.error("Fehler beim Lesen des Galerie-Verzeichnisses:", error);
    return []; // Gebe ein leeres Array zurück, wenn der Ordner nicht existiert oder ein Fehler auftritt
  }
}

export default async function GaleriePage() {
  const images = await getGalleryImages();
  return <GaleriePageClient images={images} />;
}
