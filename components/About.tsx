"use client";

import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { useLanguage } from "./LanguageProvider";
import SectionWrapper from "./SectionWrapper";

export default function About() {
  const { personal } = useContent();
  const { t } = useLanguage();
  
  const highlights = t("about.highlights") as unknown as string[];

  return (
    <SectionWrapper id="about" className="py-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("about.title")}</h2>
            <div className="w-20 h-1 bg-accent mb-8" />
          </div>

          <p className="text-lg text-secondary leading-relaxed">
            {personal.about}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-lg border border-secondary/20 hover:border-accent/50 transition-colors"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [1, 0.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
                <p className="text-foreground dark:text-white">{highlight}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

