"use client";

import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { useLanguage } from "./LanguageProvider";
import SectionWrapper from "./SectionWrapper";

export default function Experience() {
  const { experience } = useContent();
  const { t } = useLanguage();
  return (
    <SectionWrapper id="experience" className="py-section">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t("experience.title")}</h2>
          <div className="w-20 h-1 bg-accent mb-8" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-secondary/20 dark:bg-secondary/30" />

          <div className="space-y-12">
            {experience.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-24"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-6 w-4 h-4 rounded-full bg-accent border-4 border-background dark:border-background-dark z-10"
                  whileHover={{ scale: 1.5 }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                />

                <div className="space-y-2">
                  <motion.div
                    className="text-sm font-medium text-accent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {item.year}
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {item.title}
                  </motion.h3>
                  <motion.div
                    className="text-lg text-accent font-medium"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4 }}
                  >
                    {item.company}
                  </motion.div>
                  <motion.p
                    className="text-secondary leading-relaxed pt-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {item.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

