import { useLanguage } from "@/components/LanguageProvider";
import personalData from "@/data/personal.json";
import projectsData from "@/data/projects.json";
import experienceData from "@/data/experience.json";

export function useContent() {
  const { language } = useLanguage();

  const personal = personalData[language as keyof typeof personalData];
  const projects = projectsData[language as keyof typeof projectsData];
  const experience = experienceData[language as keyof typeof experienceData];

  return {
    personal,
    projects,
    experience,
  };
}
