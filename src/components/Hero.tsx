import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import heroBackground from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal/90 via-charcoal/80 to-crimson/30" />

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-4 text-white"
            >
              Gopi Ganesh
              <br />
              <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
                Gulapalyamatham
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold mb-6 text-silver"
            >
              <TypeAnimation
                sequence={[
                  "DevOps Engineer",
                  2000,
                  "Cloud Architect",
                  2000,
                  "Automation Expert",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <div className="text-xl font-medium text-crimson mb-4">
                <TypeAnimation
                  sequence={[
                    "Building Scalable Cloud Infrastructure",
                    1500,
                    "AWS | Azure | GCP",
                    1500,
                    "Kubernetes Orchestration",
                    1500,
                    "Terraform Automation",
                    1500,
                  ]}
                  wrapper="div"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <p className="text-lg text-silver/90 leading-relaxed">
                Results-driven DevOps Engineer with 5+ years architecting, deploying, and managing scalable
                cloud-native infrastructure across multi-cloud environments. Passionate about automation,
                observability, and performance optimization.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="projects" spy={true} smooth={true} offset={-80} duration={500}>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-crimson to-magenta hover:shadow-[0_0_30px_hsl(340_82%_52%/0.5)] transition-all duration-300"
                >
                  View Projects
                  <ArrowDown className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <a href="/assets/resume.pdf" download>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-silver text-white hover:bg-silver/10 hover:border-crimson"
                >
                  Download Resume
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Profile Image Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-crimson/20 to-magenta/20 backdrop-blur-sm border-2 border-silver/30 shadow-[0_0_40px_hsl(340_82%_52%/0.3)] overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 rounded-full bg-gradient-to-br from-crimson to-magenta flex items-center justify-center text-8xl font-bold text-white">
                      GG
                    </div>
                    <p className="text-silver/60 text-sm">Profile Photo</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-24 h-24 bg-crimson/20 rounded-full blur-xl"
              />
              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-magenta/20 rounded-full blur-xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-silver/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-crimson rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
