import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Phone, Linkedin, Send } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const contactInfo = [
  {
    icon: MapPin,
    label: "Location",
    value: "Northlake, TX, USA",
  },
  {
    icon: Mail,
    label: "Email",
    value: "gopiganesh.gm4@gmail.com",
    link: "https://mail.google.com/mail/?view=cm&to=gopiganesh.gm4@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (940) 206-9529",
    link: "tel:+19402069529",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/gulapalyamathamgopiganesh",
    link: "https://linkedin.com/in/gulapalyamathamgopiganesh",
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#C0392B", "#D81B60"],
    });

    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-muted/30 relative overflow-hidden px-4 sm:px-6 lg:px-8"
      ref={ref}
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-5 sm:top-20 sm:right-10 w-64 sm:w-96 h-64 sm:h-96 bg-crimson rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-5 sm:bottom-20 sm:left-10 w-56 sm:w-72 h-56 sm:h-72 bg-magenta rounded-full blur-[90px]" />
      </div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-2"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Get In{" "}
            <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto mb-4" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Let's connect and discuss how I can help with your DevOps and cloud infrastructure needs.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-5 bg-card border border-border rounded-xl hover:border-primary transition-all duration-300"
                >
                  <div className="p-3 sm:p-4 bg-gradient-to-br from-crimson to-magenta rounded-lg shrink-0">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-muted-foreground truncate">{info.label}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-medium hover:text-crimson transition-colors break-words"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium break-words">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="w-full"
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-5 sm:space-y-6 bg-card/30 backdrop-blur-sm p-5 sm:p-8 rounded-2xl border border-border shadow-md"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="h-11 sm:h-12 border-border focus:border-crimson text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="h-11 sm:h-12 border-border focus:border-crimson text-sm sm:text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="border-border focus:border-crimson resize-none text-sm sm:text-base"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full text-sm sm:text-base bg-gradient-to-r from-crimson to-magenta hover:shadow-[0_0_25px_hsl(340_82%_52%/0.5)] transition-all duration-300"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
