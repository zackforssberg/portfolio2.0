"use client";

import { motion } from "framer-motion";
import testimonialsData from "@/data/testimonials.json";
import SectionWrapper from "./SectionWrapper";
import { useLanguage } from "./LanguageProvider";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  connection: string;
  date: string;
  testimonial: string;
}


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 32 32"
      aria-hidden="true"
    >
      <path d="M10 8C5.6 8 2 11.6 2 16v8h8v-8H6c0-2.2 1.8-4 4-4V8zm14 0c-4.4 0-8 3.6-8 16v8h8v-8h-4c0-2.2 1.8-4 4-4V8z" />
    </svg>
  );
}

const content = {
  sv: {
    heading: "Vad Andra Säger",
    subtext: "Vänliga ord från personer jag haft nöjet att jobba med.",
  },
  en: {
    heading: "What People Say",
    subtext: "Kind words from people I've had the pleasure of working with.",
  },
};

export default function Testimonials() {
  const { language } = useLanguage();
  const lang = language as keyof typeof testimonialsData;
  const testimonials: Testimonial[] = testimonialsData[lang] ?? [];
  const text = content[lang] ?? content.en;

  if (testimonials.length === 0) return null;

  return (
    <SectionWrapper id="testimonials" className="py-section">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {text.heading}
          </h2>
          <div className="w-20 h-1 bg-accent mb-8" />
          <p className="text-lg text-secondary max-w-2xl">
            {text.subtext}
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative group rounded-2xl border border-secondary/20 hover:border-accent/50 bg-background/50 backdrop-blur-sm p-8 flex flex-col gap-6 overflow-hidden transition-colors duration-300"
            >
              {/* Subtle gradient glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/10 to-transparent" />

              {/* Large decorative quote */}
              <QuoteIcon className="w-8 h-8 text-accent/40 shrink-0" />

              {/* Testimonial text */}
              <blockquote className="text-secondary leading-relaxed text-base md:text-lg flex-1 relative z-10">
                &ldquo;{item.testimonial}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 relative z-10">
                {/* Avatar initial */}
                <motion.div
                  className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent/40 flex items-center justify-center text-accent font-bold text-lg shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {item.name.charAt(0)}
                </motion.div>

                <div className="flex flex-col">
                  <span className="font-semibold text-foreground leading-tight">
                    {item.name}
                  </span>
                  <span className="text-sm text-secondary">
                    {item.role} &middot; {item.company}
                  </span>
                  <div className="flex justify-between items-start w-full">
                    <motion.span
                      className="text-xs text-accent font-medium mt-0.5 inline-block"
                      initial={{ opacity: 0.7 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.connection}
                    </motion.span>
                    <span className="text-[10px] text-secondary/60 font-medium uppercase tracking-wider mt-1">
                      {item.date}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
