import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Download, ChevronDown, Sparkles, Instagram, Facebook, Linkedin, Twitter, MessageCircle, Github } from "lucide-react";
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
                <span className="text-muted-foreground">
                  Hi, I'm
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
              <a href="/vish/public/vishruth_Resume.pdf" download className="btn-ghost">
                Download Resume
                <Download size={18} />
              </a>
            </motion.div>

            {/* Social Icons */}
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.9
          }} className="flex justify-center lg:justify-start gap-4 mt-6">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="https://wa.me/918088748133" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-white/10 transition-all duration-300">
                <Github size={18} />
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
