"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useContent } from "@/hooks/useContent";
import { useLanguage } from "./LanguageProvider";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
  const { personal } = useContent();
  const { t } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <SectionWrapper id="hero" className="flex items-center justify-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={itemVariants} className="space-y-8">
          <motion.div
            variants={itemVariants}
            className="space-y-4"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {t("hero.greeting")}{" "}
              <span className="text-accent">{personal.name}</span>
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-secondary"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {personal.title}
            </motion.p>
          </motion.div>

          <motion.p
            className="text-lg text-secondary leading-relaxed max-w-xl"
            variants={itemVariants}
          >
            {personal.about}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4"
          >
            <motion.button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-4 bg-accent text-background font-medium rounded-full hover:bg-accent/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.viewProjects")}
            </motion.button>
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-4 border-2 border-foreground dark:border-white font-medium rounded-full hover:bg-foreground hover:text-background transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("hero.contactMe")}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative w-full aspect-square max-w-md mx-auto"
        >
          <motion.div
            className="absolute inset-0 bg-accent/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-accent bg-accent/10 flex items-center justify-center"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {personal.profileImage ? (
              <Image
                src={personal.profileImage}
                alt={personal.name}
                fill
                className="object-cover"
                priority
                unoptimized
              />
            ) : (
              <div className="text-6xl font-bold text-accent">
                {personal.name.charAt(0)}
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
}

