# Freibad Schwimmbad Website

Eine vollständig statisch generierte Website (SSG) mit Next.js für das Freibad-Rettungsprojekt.

## 🚀 Features

### 📱 Vollständig Responsive
- Mobile-First Design mit Tailwind CSS
- Optimiert für alle Bildschirmgrößen
- Touch-freundliche Navigation

### 🎯 Hauptfunktionen
- **Hero-Section** mit zentralen Fakten und CTAs
- **Blog/News-System** mit Markdown-Unterstützung
- **Interaktive Galerie** mit Modal-Funktion und Kategoriefilter
- **Chronik-Zeitstrahl** mit wichtigen Meilensteinen
- **Fakten & Zahlen Dashboard** mit kategorisierten Daten
- **Petition & Unterstützung** mit Spendenformularen
- **DSGVO-konformer Cookie-Hinweis**

### 🔧 Technische Features
- **Static Site Generation (SSG)** für optimale Performance
- **TypeScript** für Typsicherheit
- **Tailwind CSS** für modernes Design
- **Markdown-Support** für einfache Inhaltspflege
- **SEO-optimiert** mit strukturierten Metadaten
- **Barrierefreiheit** (a11y) berücksichtigt

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Sprache:** TypeScript
- **Styling:** Tailwind CSS
- **Markdown:** gray-matter, remark, remark-html
- **Icons:** Heroicons (SVG)
- **Deployment:** Vercel-ready

## 📁 Projektstruktur

```
freibad-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── blog/              # Blog-System
│   │   ├── unser-freibad/     # Freibad-Unterseiten
│   │   ├── buergerentscheid/  # Bürgerentscheid
│   │   ├── petition/          # Petition
│   │   ├── unterstuetzen/     # Unterstützung
│   │   ├── datenschutz/       # DSGVO
│   │   └── impressum/         # Impressum
│   ├── components/            # React-Komponenten
│   │   ├── Navigation.tsx     # Hauptnavigation
│   │   ├── Footer.tsx         # Footer
│   │   ├── Hero.tsx           # Hero-Section
│   │   ├── NewsSection.tsx    # News-Bereich
│   │   └── CookieBanner.tsx   # Cookie-Hinweis
│   ├── data/                  # Datenstrukturen
│   │   ├── posts/             # Markdown-Blog-Posts
│   │   ├── config.ts          # Site-Konfiguration
│   │   ├── freibad-facts.ts   # Fakten & Zahlen
│   │   ├── chronik.ts         # Chronik-Events
│   │   └── gallery.ts         # Galerie-Bilder
│   ├── hooks/                 # Custom React Hooks
│   ├── lib/                   # Utility-Funktionen
│   └── types/                 # TypeScript-Typen
├── public/                    # Statische Assets
│   └── images/               # Bilder
└── README.md
```

## 🚀 Installation & Entwicklung

### Voraussetzungen
- Node.js 18+ 
- npm oder yarn

### Setup
```bash
# Repository klonen
git clone <repository-url>
cd freibad-website

# Dependencies installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:3000` erreichbar.

### Verfügbare Scripts
```bash
npm run dev          # Entwicklungsserver
npm run build        # Produktions-Build
npm run start        # Produktionsserver
npm run lint         # ESLint
npm run type-check   # TypeScript-Prüfung
```

## 📝 Content Management

### Blog-Posts hinzufügen
1. Neue `.md`-Datei in `src/data/posts/` erstellen
2. Frontmatter mit Metadaten hinzufügen:
```markdown
---
title: "Titel des Beitrags"
date: "2024-01-15"
excerpt: "Kurze Beschreibung"
author: "Autor"
tags: ["tag1", "tag2"]
---

# Inhalt des Beitrags
```

### Chronik-Events hinzufügen
Events in `src/data/chronik.ts` ergänzen:
```typescript
{
  id: 'unique-id',
  date: '2024-01-15',
  title: 'Event-Titel',
  description: 'Beschreibung',
  category: 'milestone' | 'decision' | 'construction' | 'event'
}
```

### Galerie-Bilder hinzufügen
Bilder in `src/data/gallery.ts` und entsprechende Dateien in `public/images/gallery/`:
```typescript
{
  id: 'unique-id',
  src: '/images/gallery/bild.jpg',
  alt: 'Alt-Text',
  title: 'Titel',
  category: 'allgemein' | 'bauphase' | 'aktionstag' | 'flyer'
}
```

## 🎨 Design System

### Farben
- **Primary:** Blue (600, 700)
- **Secondary:** Green (600, 700)
- **Accent:** Orange (600, 700), Purple (600, 700)
- **Neutral:** Gray (50-900)

### Komponenten
- Konsistente Hover-Effekte
- Smooth Transitions (200ms)
- Rounded Corners (lg, xl)
- Shadow System (md, lg)

## 🔒 DSGVO & Datenschutz

- **Cookie-Banner** mit granularen Einstellungen
- **Datenschutzerklärung** vollständig implementiert
- **Impressum** rechtlich korrekt
- **Opt-in für Analytics/Marketing**

## 📊 SEO & Performance

### SEO-Features
- Strukturierte Metadaten
- Open Graph Tags
- Twitter Cards
- Sitemap-ready
- Semantic HTML

### Performance
- Static Site Generation
- Optimierte Bilder (Next.js Image)
- Code Splitting
- Lazy Loading

## 🚀 Deployment

### Vercel (Empfohlen)
```bash
# Vercel CLI installieren
npm i -g vercel

# Deployen
vercel
```

### Andere Plattformen
```bash
# Build erstellen
npm run build

# Static Export (optional)
npm run export
```

## 🤝 Beitragen

1. Fork des Repositories
2. Feature Branch erstellen (`git checkout -b feature/AmazingFeature`)
3. Änderungen committen (`git commit -m 'Add some AmazingFeature'`)
4. Branch pushen (`git push origin feature/AmazingFeature`)
5. Pull Request erstellen

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe `LICENSE` für Details.

## 📞 Kontakt

**Förderverein Freibad Schwimmbad e.V.**
- E-Mail: info@freibad-schwimmbad.de
- Website: www.freibad-schwimmbad.de

---

**Entwickelt mit ❤️ für unser Freibad**



Responsive Design und Barrierefreiheit optimieren
