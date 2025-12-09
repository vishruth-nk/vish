import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Download } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient"; // 👈 ADD THIS

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { personal } = portfolioData;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ⬇️ UPDATE THIS FUNCTION
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
        {/* …everything below stays the same… */}
        {/* (I left the rest of your JSX unchanged) */}
        {/* Contact Info + Form JSX exactly as you had it */}
        {/* make sure the form keeps: onSubmit={handleSubmit} */}
        {/* ... */}
      </div>
    </section>
  );
};
