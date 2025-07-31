# Presse-Ordner

Dieser Ordner enthält PNG-Dateien von Zeitungsartikeln für die Presse-Seite.

## Anleitung zum Hinzufügen neuer Artikel:

1. **Bilder hinzufügen**: PNG-Dateien von Zeitungsartikeln in diesen Ordner (`/public/press/`) hochladen
   - Empfohlenes Format: PNG
   - Dateibenennung: verwenden Sie aussagekräftige Namen wie `rp-buergerentscheid-2024.png`

2. **Metadaten bearbeiten**: Die Datei `/src/data/press.ts` bearbeiten und einen neuen Eintrag hinzufügen:
   ```typescript
   {
     id: 4, // Nächste verfügbare ID
     title: 'Titel des Zeitungsartikels',
     date: '2024-02-01', // Datum im Format YYYY-MM-DD
     source: 'Name der Zeitung',
     filename: 'dateiname.png', // Exakter Dateiname
     description: 'Kurze Beschreibung des Artikels (optional)'
   }
   ```

3. **Testen**: Nach dem Speichern sollte der neue Artikel automatisch auf der Presse-Seite erscheinen.

## Beispiel-Struktur:
```
/public/press/
├── rp-buergerentscheid-erfolgreich.png
├── wz-foerdermittel-bewilligt.png
├── lokalzeitung-petition-5000.png
└── README.md (diese Datei)
```

## Hinweise:
- Die Bilder werden automatisch skaliert und optimiert
- Bei fehlenden Bildern wird ein Platzhalter angezeigt
- Artikel werden automatisch nach Datum sortiert (neueste zuerst)
