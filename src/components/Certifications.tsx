import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "LinkedIn Learning",
    icon: <Award className="w-8 h-8 text-crimson" />,
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "LinkedIn Learning",
    icon: <Award className="w-8 h-8 text-crimson" />,
  },
  {
    title: "Google Cloud Professional Cloud Architect",
    issuer: "Coursera",
    icon: <Award className="w-8 h-8 text-crimson" />,
  },
  {
    title: "Docker and Kubernetes: The Complete Guide",
    issuer: "LinkedIn Learning",
    icon: <Award className="w-8 h-8 text-crimson" />,
  },
  {
    title: "Terraform Associate Certification",
    issuer: "LinkedIn Learning",
    icon: <Award className="w-8 h-8 text-crimson" />,
  },
  {
    title: "DevOps Foundations: Lean and Agile",
    issuer: "LinkedIn Learning",
    icon: <Award className="w-8 h-8 text-crimson" />,
  },
];

export const Certifications = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [flipped, setFlipped] = useState<number[]>([]);

  const handleFlip = (index: number) => {
    setFlipped((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="certifications" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications{" "}
            <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
              & Achievements
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, rotateY: -90 }}
              animate={isInView ? { opacity: 1, rotateY: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => handleFlip(index)}
              className="cursor-pointer perspective-1000"
            >
              <motion.div
                animate={{ rotateY: flipped.includes(index) ? 180 : 0 }}
                transition={{ duration: 0.6 }}
                className="relative preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front */}
                <div
                  className={`bg-card border border-border rounded-2xl p-6 h-56 flex flex-col items-center justify-center text-center backface-hidden ${
                    flipped.includes(index) ? "hidden" : ""
                  } hover:border-primary hover:shadow-[0_0_30px_hsl(348_78%_48%/0.2)] transition-all duration-300`}
                >
                  <div className="text-6xl mb-4">{cert.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{cert.title}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  <div className="absolute bottom-4 right-4 text-crimson">
                    {/* <Award className="w-6 h-6 animate-glow-pulse" /> */}
                  </div>
                </div>

                {/* Back */}
                <div
                  className={`bg-gradient-to-br from-crimson to-magenta rounded-2xl p-6 h-56 flex flex-col items-center justify-center text-center backface-hidden absolute inset-0 ${
                    !flipped.includes(index) ? "hidden" : ""
                  }`}
                  style={{ transform: "rotateY(180deg)" }}
                >
                  {/* <ExternalLink className="w-12 h-12 text-white mb-4" /> */}
                  <h3 className="text-lg font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-white/80 mb-4">Verified Certification</p>
                  <p className="text-xs text-white/70">Click to flip back</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};
