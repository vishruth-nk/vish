import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, ChevronDown } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { portfolioData } from "@/data/portfolio-data";

export const HeroSection = () => {
  const { personal } = portfolioData;

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }}>
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="section-container relative z-10 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left order-2 lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-accent font-medium text-sm md:text-base mb-4 tracking-wide uppercase"
            >
              Welcome to my portfolio
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4 leading-tight"
            >
              Hi, I'm{" "}
              <span className="block gradient-text">{personal.name}</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-primary-foreground/80 text-lg md:text-xl mb-2"
            >
              {personal.title}
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-primary-foreground/60 text-base md:text-lg mb-8 italic"
            >
              "{personal.tagline}"
            </motion.p>

            {/* Contact Info Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Mail size={16} />
                {personal.email}
              </a>
              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm hover:bg-primary-foreground/20 transition-colors"
              >
                <Phone size={16} />
                {personal.phone}
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 text-primary-foreground/90 text-sm">
                <MapPin size={16} />
                {personal.location}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="#contact" className="btn-accent">
                Get in Touch
                <Mail size={18} />
              </a>
              <a
                href="/vishruth_Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300"
              >
                Download Resume
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center order-1 lg:order-2"
          >
            <div className="relative">
              {/* Decorative Ring */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-accent/30"
                style={{ padding: "1rem" }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-2xl" />
              
              {/* Image Container */}
              <motion.div
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary-foreground/20 shadow-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src={profilePhoto}
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            className="flex flex-col items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
