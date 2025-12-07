import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";

export const Footer = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-8 border-t border-border/30">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground"
          >
            © {currentYear} <span className="gradient-text font-medium">{personal.name}</span>. All rights reserved.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground flex items-center gap-1"
          >
            Made with <Heart size={14} className="text-primary fill-primary" /> in India
          </motion.p>
        </div>
      </div>
    </footer>
  );
};
