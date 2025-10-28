import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { Button } from "./ui/button";
import { animateScroll as scroll } from "react-scroll";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com/in/gulapalyamathamgopiganesh",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:gopiganesh.gm4@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-charcoal to-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -5 }}
                  className="p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-gradient-to-r hover:from-crimson hover:to-magenta hover:border-transparent transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <Icon className="w-6 h-6 group-hover:text-white transition-colors" />
                </motion.a>
              );
            })}
          </div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center text-silver/80"
          >
            © {new Date().getFullYear()} Gopi Ganesh Gulapalyamatham — Crafted with React & Framer
            Motion ✨
          </motion.p>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-8 right-8 z-40"
      >
        <Button
          onClick={scrollToTop}
          size="icon"
          className="w-12 h-12 rounded-full bg-gradient-to-r from-crimson to-magenta hover:shadow-[0_0_30px_hsl(340_82%_52%/0.5)] transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      </motion.div>
    </footer>
  );
};
