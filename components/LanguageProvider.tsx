"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "sv" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// UI translations
const translations = {
  sv: {
    nav: {
      home: "Hem",
      about: "Om mig",
      projects: "Projekt",
      experience: "Erfarenhet",
      contact: "Kontakt",
    },
    hero: {
      greeting: "Hej, jag heter",
      viewProjects: "Se mina projekt",
      contactMe: "Kontakta mig",
    },
    about: {
      title: "Om mig",
      highlights: [
        "Modern webbutveckling med React & Next.js",
        "TypeScript för typsäker kod",
        "Responsiv design med TailwindCSS",
        "Användarcentrerad design",
      ],
    },
    projects: {
      title: "Projekt",
      description:
        "Här är några av de projekt jag har arbetat med.",
      visitProject: "Besök projekt",
    },
    experience: {
      title: "Erfarenhet",
      now: "Nu",
    },
    contact: {
      title: "Kontakt",
      description:
        "Har du ett projekt i åtanke eller vill bara säga hej? Hör gärna av dig!",
      sendMessage: "Skicka ett meddelande",
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      viewProjects: "View my projects",
      contactMe: "Contact me",
    },
    about: {
      title: "About me",
      highlights: [
        "Modern web development with React & Next.js",
        "TypeScript for type-safe code",
        "Responsive design with TailwindCSS",
        "User-centered design",
      ],
    },
    projects: {
      title: "Projects",
      description:
        "Here are some of the projects I've worked on.",
      visitProject: "Visit project",
    },
    experience: {
      title: "Experience",
      now: "Now",
    },
    contact: {
      title: "Contact",
      description:
        "Have a project in mind or just want to say hi? I'd love to hear from you!",
      sendMessage: "Send a message",
    },
  },
};

export default function LanguageProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [language, setLanguageState] = useState<Language>("sv");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Get saved language or detect from browser
    const savedLanguage = localStorage.getItem("language") as Language | null;
    if (savedLanguage && (savedLanguage === "sv" || savedLanguage === "en")) {
      setLanguageState(savedLanguage);
    } else {
      // Detect browser language
      const browserLang = navigator.language.split("-")[0];
      const detectedLang: Language =
        browserLang === "sv" || browserLang === "en" ? browserLang : "sv";
      setLanguageState(detectedLang);
      localStorage.setItem("language", detectedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  };

  const t = (key: string): string => {
    const keys = key.split(".");
    let value: any = translations[language];
    for (const k of keys) {
      value = value?.[k];
    }
    return value || key;
  };

  // Prevent hydration mismatch
  const currentLanguage = mounted ? language : "sv";

  return (
    <LanguageContext.Provider
      value={{ language: currentLanguage, setLanguage, t }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

