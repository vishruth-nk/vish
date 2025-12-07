import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-primary-foreground/70"
          >
            © {currentYear} {personal.name}. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-primary-foreground/70 flex items-center gap-1"
          >
            Made with <Heart size={14} className="text-accent fill-accent" /> in India
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
