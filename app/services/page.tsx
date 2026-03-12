"use client";

import { motion } from "framer-motion";
import { useContent } from "@/hooks/useContent";
import { useLanguage } from "@/components/LanguageProvider";
import TopControls from "@/components/TopControls";
import SectionWrapper from "@/components/SectionWrapper";

const iconMap = {
  code: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  bot: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  ),
  layers: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
    </svg>
  ),
};

const CheckIcon = () => (
  <svg className="w-5 h-5 text-accent shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default function Services() {
  const { services } = useContent();
  const { t } = useLanguage();

  if (!services) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <main className="relative min-h-screen bg-background">
      <TopControls />
      
      <div className="pt-24 pb-12">
        <SectionWrapper id="services-hero">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {services.title}
              </h1>
              <p className="text-xl md:text-2xl text-accent font-medium leading-relaxed">
                {services.subtitle}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-2 gap-8 text-left bg-accent/5 p-8 rounded-3xl border border-accent/10"
            >
              <p className="text-lg text-secondary leading-relaxed">
                {services.description}
              </p>
              <p className="text-lg text-secondary leading-relaxed font-light italic">
                {services.intro_ai}
              </p>
            </motion.div>
          </div>
        </SectionWrapper>

        <SectionWrapper id="services-list">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid lg:grid-cols-3 gap-8 mt-12"
          >
            {services.items.map((service: any) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group relative bg-white dark:bg-white/5 p-8 rounded-3xl border border-transparent hover:border-accent/30 transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 overflow-hidden"
              >
                {/* Background Decoration */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors" />
                
                <div className="relative space-y-6">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent group-hover:scale-110 transition-transform duration-300">
                    {iconMap[service.icon as keyof typeof iconMap]}
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-secondary leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-sm uppercase tracking-wider text-accent/80">
                      {t("services.featuresTitle")}
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature: string, idx: number) => (
                        <li key={idx} className="flex items-start gap-3 text-secondary">
                          <CheckIcon />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2 text-accent font-semibold group/btn"
                    onClick={() => {
                        const contact = document.getElementById('contact');
                        if (contact) contact.scrollIntoView({ behavior: 'smooth' });
                        else window.location.href = '/#contact';
                    }}
                  >
                    {t("services.cta")}
                    <ArrowRightIcon />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </SectionWrapper>
      </div>
    </main>
  );
}