import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient"; // 👈 NEW

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // 👇 CHANGED: now async + inserts into Supabase
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const { error } = await supabase.from("contacts").insert([
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
      ]);

      if (error) {
        console.error(error);
        toast({
          title: "Something went wrong",
          description: "Your message could not be sent. Please try again.",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast({
        title: "Network error",
          description: "Unable to submit right now. Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: "Phone",
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      href: null,
    },
  ];

  return (
    <section id="contact" className="section-padding relative" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="font-semibold text-2xl text-foreground mb-8">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
              >
                {info.href ? (
                  <a
                    href={info.href}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-primary/20 transition-all group"
                  >
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                      <div className="relative w-12 h-12 rounded-xl bg-card flex items-center justify-center group-hover:scale-110 transition-transform">
                        <info.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-transparent">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-30" />
                      <div className="relative w-12 h-12 rounded-xl bg-card flex items-center justify-center">
                        <info.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}

            {/* Download Resume Button */}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              href="/vishruth_Resume.pdf"
              download
              className="btn-primary w-full mt-8"
            >
              <Download size={20} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="card-glass-hover p-8">
              <h3 className="font-semibold text-2xl text-foreground mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-muted-foreground mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-foreground placeholder:text-muted-foreground resize-none"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  className="btn-primary w-full"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send size={18} />
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
