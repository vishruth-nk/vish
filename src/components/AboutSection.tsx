import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Sparkles, Languages } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { objective, personal, strengths, hobbies } = portfolioData;

  return (
    <section id="about" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, goals, and what drives me forward.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Objective Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 card-glass-hover p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30" />
                <div className="relative w-12 h-12 rounded-xl bg-card flex items-center justify-center">
                  <Target className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Career Objective
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {objective}
            </p>
          </motion.div>

          {/* Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="card-glass-hover p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30" />
                <div className="relative w-12 h-12 rounded-xl bg-card flex items-center justify-center">
                  <Languages className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Languages
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {personal.languages.map((lang) => (
                <span key={lang} className="skill-badge">
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Strengths Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2 card-glass-hover p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30" />
                <div className="relative w-12 h-12 rounded-xl bg-card flex items-center justify-center">
                  <Sparkles className="text-primary" size={24} />
                </div>
              </div>
              <h3 className="font-semibold text-xl text-foreground">
                Professional Strengths
              </h3>
            </div>
            <ul className="grid sm:grid-cols-2 gap-3">
              {strengths.map((strength, index) => (
                <motion.li
                  key={strength}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-start gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                  {strength}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Hobbies Card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="card-glass-hover p-8"
          >
            <h3 className="font-semibold text-xl text-foreground mb-4">
              Hobbies & Interests
            </h3>
            <ul className="space-y-3">
              {hobbies.map((hobby) => (
                <li key={hobby} className="flex items-center gap-3 text-muted-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                  {hobby}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
