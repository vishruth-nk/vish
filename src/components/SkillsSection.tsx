import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, Users } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

const categoryIcons = {
  Business: Briefcase,
  Technical: Code,
  "Soft Skills": Users,
};

const categoryColors = {
  Business: "from-blue-500 to-cyan-500",
  Technical: "from-purple-500 to-pink-500",
  "Soft Skills": "from-orange-500 to-yellow-500",
};

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { skills } = portfolioData;

  const groupedSkills = skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="section-padding bg-muted/30" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and professional capabilities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(groupedSkills).map(([category, categorySkills], categoryIndex) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || Briefcase;
            const gradientClass = categoryColors[category as keyof typeof categoryColors] || "from-accent to-accent";

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                className="card-glass p-6 md:p-8 group hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradientClass} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-foreground">
                    {category}
                  </h3>
                </div>

                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.4,
                        delay: categoryIndex * 0.15 + index * 0.08,
                      }}
                      className="group/skill"
                    >
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-accent/10 transition-colors duration-300">
                        <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
                        <span className="text-foreground/80 group-hover/skill:text-foreground transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
