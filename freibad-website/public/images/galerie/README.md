# Anleitung für die Bildergalerie

Dieses Verzeichnis enthält alle Bilder, die auf der Galerie-Seite der Website angezeigt werden.

Der Prozess ist vollständig automatisiert. Um ein neues Bild hinzuzufügen, müssen Sie nur die folgenden Schritte ausführen:

## 1. Bild hier hochladen

Laden Sie die gewünschte Bilddatei (JPG, PNG, WEBP) in dieses Verzeichnis (`/public/images/galerie/`) hoch.

## 2. Dateinamen korrekt formatieren

Der Dateiname **muss** einem bestimmten Schema folgen, damit die Website automatisch das Datum, die Kategorie und den Titel des Bildes erkennen kann.

**Schema:**
`JJJJ-MM-TT__KATEGORIE__eine-kurze-beschreibung-des-bildes.jpg`

---

### Bestandteile des Dateinamens:

1.  **Datum (JJJJ-MM-TT):**
    *   Das Datum, an dem das Foto aufgenommen wurde.
    *   Beispiel: `2023-08-15`

2.  **Trennzeichen (`__`):**
    *   Zwei Unterstriche trennen die einzelnen Teile des Namens.

3.  **Kategorie:**
    *   Wählen Sie eine der folgenden vier Kategorien in Kleinbuchstaben:
        *   `allgemein` (für allgemeine Impressionen)
        *   `bauphase` (für Bilder vom Bau oder von Renovierungen)
        *   `aktionstag` (für Feste, Kurse oder besondere Veranstaltungen)
        *   `flyer` (für Plakate, Flyer oder andere Werbematerialien)
    *   Beispiel: `allgemein`

4.  **Beschreibung:**
    *   Eine kurze, aussagekräftige Beschreibung des Bildinhalts.
    *   **Regeln:** Nur Kleinbuchstaben, keine Umlaute (ae, oe, ue statt ä, ö, ü), und Wörter werden mit Bindestrichen (`-`) getrennt.
    *   Beispiel: `kinder-lachen-im-schwimmbecken`

---

### Beispiele für korrekte Dateinamen:

*   `1972-05-01__aktionstag__grosse-eroeffnungsfeier-mit-vielen-besuchern.jpg`
*   `2023-07-22__allgemein__blick-auf-das-schwimmerbecken.png`
*   `1985-06-10__bauphase__der-neue-sprungturm-wird-gebaut.jpg`

Sobald die Datei mit dem korrekten Namen in diesem Ordner ist, wird sie beim nächsten Build der Website automatisch und korrekt auf der Galerie-Seite angezeigt.
