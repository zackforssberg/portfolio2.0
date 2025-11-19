# Portfolio Website v3

En modern, minimalistisk portfolio-webbplats byggd med Next.js, React, TypeScript, TailwindCSS och Framer Motion.

## 🚀 Funktioner

- **Next.js App Router** - Modern routing och server-side rendering
- **TypeScript** - Typsäker kod
- **TailwindCSS** - Utility-first CSS med custom theme
- **Framer Motion** - Smooth animationer och micro-interactions
- **Dark/Light Mode** - Mjuka övergångar mellan teman
- **Responsiv Design** - Fungerar på alla enheter
- **JSON-baserat innehåll** - Allt innehåll styrs via JSON-filer
- **Smooth Scroll Navigation** - Navigation till vänster (desktop) och botten (mobil) som länkar till sektioner

## 📁 Projektstruktur

```
portfolio-v3/
├── app/
│   ├── globals.css          # Globala styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Huvudsida
├── components/
│   ├── About.tsx            # Om mig-sektion
│   ├── Contact.tsx          # Kontakt och footer
│   ├── Experience.tsx       # Erfarenhet/timeline
│   ├── Hero.tsx             # Hero-sektion
│   ├── Projects.tsx         # Projekt-grid
│   ├── SectionWrapper.tsx   # Wrapper för sektioner
│   ├── SidebarNavigation.tsx # Vänstersidig navigation (desktop)
│   ├── MobileNavigation.tsx  # Bottennavigation (mobil)
│   └── ThemeProvider.tsx    # Theme context provider
├── data/
│   ├── experience.json      # Erfarenhetsdata
│   ├── personal.json        # Personlig information
│   └── projects.json        # Projektdata
└── public/
    ├── profile.jpg          # Profilbild
    └── projects/            # Projektbilder
```

## 🛠️ Installation

1. **Installera dependencies:**
   ```bash
   npm install
   ```

2. **Kör utvecklingsservern:**
   ```bash
   npm run dev
   ```

3. **Öppna i webbläsaren:**
   Navigera till [http://localhost:3000](http://localhost:3000)

## 📝 Redigera innehåll

Allt innehåll styrs via JSON-filer i `data/`-mappen. Inget behöver ändras i komponenterna.

### Personal Information (`data/personal.json`)

Redigera din personliga information:

```json
{
  "name": "Ditt Namn",
  "title": "Din Titel",
  "about": "Din beskrivning...",
  "profileImage": "/profile.jpg",
  "email": "ditt.email@example.com",
  "socials": [
    {
      "name": "GitHub",
      "url": "https://github.com/dittanvändarnamn",
      "icon": "github"
    }
  ]
}
```

### Projekt (`data/projects.json`)

Lägg till eller redigera projekt:

```json
[
  {
    "title": "Projektnamn",
    "description": "Beskrivning av projektet...",
    "image": "/projects/projektbild.jpg",
    "tags": ["Next.js", "React", "TypeScript"],
    "url": "https://projekt-url.com",
    "github": "https://github.com/username/repo"
  }
]
```

### Erfarenhet (`data/experience.json`)

Uppdatera din arbetslivserfarenhet:

```json
[
  {
    "year": "2024 - Nu",
    "title": "Jobbtitel",
    "company": "Företagsnamn",
    "description": "Beskrivning av rollen..."
  }
]
```

## 🎨 Anpassa design

### Färger

Färger kan ändras i `tailwind.config.ts`:

```typescript
colors: {
  accent: {
    DEFAULT: "#dee041",  // Ändra accentfärg här
  },
  // ... andra färger
}
```

### Navigation

Navigation-items kan ändras i `components/SidebarNavigation.tsx`:

```typescript
const navItems = [
  { name: "Hem", href: "#hero" },
  { name: "Om mig", href: "#about" },
  // Lägg till fler items här
];
```

## 🚢 Deployment på Vercel

1. **Pusha koden till GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Deploya på Vercel:**
   - Gå till [vercel.com](https://vercel.com)
   - Klicka på "New Project"
   - Importera ditt GitHub-repo
   - Vercel kommer automatiskt att detektera Next.js och konfigurera projektet
   - Klicka på "Deploy"

3. **Lägg till bilder:**
   - Se till att alla bilder finns i `public/`-mappen
   - Använd rätt sökvägar i JSON-filerna (t.ex. `/profile.jpg`)
   - Om bilder saknas kommer komponenterna visa en fallback med initialer
   - Rekommenderade bildstorlekar:
     - Profilbild: 800x800px (kvadratisk)
     - Projektbilder: 1200x600px (landscape)

## 📦 Bygga för produktion

```bash
npm run build
npm start
```

## 🎯 Lägga till nya sektioner

1. **Skapa en ny komponent** i `components/` (t.ex. `Skills.tsx`)
2. **Lägg till sektionen** i `app/page.tsx`:
   ```tsx
   import Skills from "@/components/Skills";
   
   // I return:
   <Skills />
   ```
3. **Lägg till i navigationen** i `SidebarNavigation.tsx`:
   ```typescript
   { name: "Färdigheter", href: "#skills" }
   ```
4. **Använd SectionWrapper** i din nya komponent:
   ```tsx
   <SectionWrapper id="skills">
     {/* Ditt innehåll */}
   </SectionWrapper>
   ```

## 🔧 Teknisk stack

- **Next.js 14** - React framework
- **React 18** - UI library
- **TypeScript** - Type safety
- **TailwindCSS 3** - Styling
- **Framer Motion** - Animationer
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📄 Licens

Detta projekt är öppet för användning och modifiering.

## 🤝 Bidrag

Förslag och förbättringar är välkomna! Skapa en issue eller pull request.

---

Byggt med ❤️ med Next.js och Framer Motion

