# Portfolio Website

A modern, minimalist portfolio website built with Next.js, React, TypeScript, TailwindCSS, and Framer Motion.  
The site supports **light/dark mode**, **Swedish/English language toggle**, and **JSON‑driven content**.

## 🚀 Features

- **Next.js App Router (Next 14)** – Modern routing and server‑side rendering
- **React 18 + TypeScript** – Type‑safe, modern React setup
- **TailwindCSS 3** – Utility‑first styling with a custom design system
- **Framer Motion** – Smooth animations and micro‑interactions
- **Light/Dark mode** – Theme toggle with animated transitions
- **Swedish/English support** – Language toggle powered by a custom `LanguageProvider`
- **Responsive design** – Looks great on desktop, tablet, and mobile
- **JSON‑based, localized content** – All text content is managed via JSON files
- **Smooth scrolling** – Buttons in the hero section smoothly scroll to key sections

## 📁 Project structure

```text
portfolio-v3/
├── app/
│   ├── globals.css           # Global styles
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Main page
├── components/
│   ├── About.tsx             # About section
│   ├── Contact.tsx           # Contact/footer section
│   ├── Experience.tsx        # Experience / timeline section
│   ├── Hero.tsx              # Hero section
│   ├── Projects.tsx          # Projects grid
│   ├── SectionWrapper.tsx    # Shared wrapper for sections with IDs
│   ├── ThemeProvider.tsx     # Theme (light/dark) context provider
│   ├── LanguageProvider.tsx  # Language (sv/en) context provider & translations
│   ├── TopControls.tsx       # Floating theme + language toggle buttons
│   └── HtmlLangUpdater.tsx   # Syncs document <html lang="...">
├── data/
│   ├── experience.json       # Experience data (sv/en)
│   ├── personal.json         # Personal info (sv/en)
│   └── projects.json         # Project data (sv/en)
└── public/
    ├── profile.jpg           # Profile image
    └── projects/             # Project images
```

## 🛠️ Getting started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Run the development server**

   ```bash
   npm run dev
   ```

3. **Open the app in your browser**

   Go to `http://localhost:3000`

> Recommended: use **Node 18+** (Next.js 14 requirement).

## 📝 Editing content

All user‑facing content is controlled via JSON files in the `data/` folder.  
Each file is **localized**, with separate entries for Swedish (`sv`) and English (`en`).

### Personal information (`data/personal.json`)

Shape (simplified):

```json
{
  "sv": {
    "name": "Your Name",
    "titles": ["Frontendutvecklare", "Webbutvecklare"],
    "about": "Short bio in Swedish...",
    "profileImage": "/profile.jpg",
    "email": "you@example.com",
    "socials": [
      {
        "name": "GitHub",
        "url": "https://github.com/your-username",
        "icon": "github"
      }
    ]
  },
  "en": {
    "name": "Your Name",
    "titles": ["Frontend Developer", "Web Developer"],
    "about": "Short bio in English...",
    "profileImage": "/profile.jpg",
    "email": "you@example.com",
    "socials": [
      {
        "name": "GitHub",
        "url": "https://github.com/your-username",
        "icon": "github"
      }
    ]
  }
}
```
Update the fields under both `sv` and `en` to keep the two languages in sync.
Use the same principal for both Projects (`data/projects.json`) and Experience (`data/experience.json`)

## 🔧 Tech stack

- **Next.js 14** – React framework (App Router)
- **React 18** – UI library
- **TypeScript** – Type‑safe code
- **TailwindCSS 3** – Styling
- **Framer Motion** – Animations and transitions
- **ESLint** – Code linting
- **Prettier** – Code formatting

---

Built with ❤️ using Next.js and Framer Motion.
