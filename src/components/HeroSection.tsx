import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, ChevronDown, Sparkles } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.png";
import { portfolioData } from "@/data/portfolio-data";
export const HeroSection = () => {
  const {
    personal
  } = portfolioData;
  return <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="text-center lg:text-left order-2 lg:order-1">
            {/* Status Badge */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.3
          }} className="inline-block animate-float mb-6">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-30 group-hover:opacity-50 transition duration-1000" />
                <div className="relative px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border border-white/10">
                  <span className="gradient-text text-sm font-medium flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-indigo-400" />
                    Ready to Contribute
                  </span>
                </div>
              </div>
            </motion.div>
            
            {/* Main Title */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="space-y-2 mb-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
                <span className="relative inline-block">
                  <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-20" />
                  <span className="relative gradient-text-white bg-primary">
                    Hi, I'm
                  </span>
                </span>
                <br />
                <span className="relative inline-block mt-2">
                  <span className="absolute -inset-2 bg-gradient-to-r from-indigo-500 to-purple-500 blur-2xl opacity-20" />
                  <span className="relative gradient-text">
                    {personal.name}
                  </span>
                </span>
              </h1>
            </motion.div>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.5
          }} className="text-muted-foreground text-lg md:text-xl mb-2">
              {personal.title}
            </motion.p>
            
            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="text-muted-foreground/70 text-base md:text-lg mb-8 italic">
              "{personal.tagline}"
            </motion.p>

            {/* Contact Info Pills */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.7
          }} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
              <a href={`mailto:${personal.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-muted-foreground text-sm border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                <Mail size={16} className="text-primary" />
                {personal.email}
              </a>
              <a href={`tel:${personal.phone}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-muted-foreground text-sm border border-white/10 hover:bg-white/10 hover:border-primary/30 transition-all duration-300">
                <Phone size={16} className="text-primary" />
                {personal.phone}
              </a>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm text-muted-foreground text-sm border border-white/10">
                <MapPin size={16} className="text-primary" />
                {personal.location}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.8
          }} className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a href="#contact" className="btn-primary">
                Get in Touch
                <Mail size={18} />
              </a>
              <a href="/vishruth_Resume.pdf" download className="btn-ghost">
                Download Resume
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 blur-3xl opacity-30" />
              
              {/* Decorative Rings */}
              <motion.div className="absolute -inset-4 rounded-full border border-primary/20" animate={{
              rotate: 360
            }} transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }} />
              <motion.div className="absolute -inset-8 rounded-full border border-accent/10" animate={{
              rotate: -360
            }} transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }} />
              
              {/* Image Container */}
              <motion.div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl" animate={{
              y: [0, -10, 0]
            }} transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}>
                <img src={profilePhoto} alt={personal.name} className="w-full h-full object-cover object-top" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        delay: 1.2
      }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors" animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }}>
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ChevronDown size={20} />
          </motion.a>
        </motion.div>
      </div>
    </section>;
};