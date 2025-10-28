import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export const Education = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education{" "}
            <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
              Background
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-[0_0_40px_hsl(348_78%_48%/0.2)]">
            <div className="flex items-start gap-6">
              <div className="p-4 bg-gradient-to-br from-crimson to-magenta rounded-2xl">
                <GraduationCap className="w-12 h-12 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Masters in Information Science
                </h3>
                <p className="text-xl text-crimson font-semibold mb-4">
                  University of North Texas
                </p>

                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Aug 2022 - Jun 2024
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Denton, TX
                  </span>
                </div>

                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="mt-6 h-2 bg-gradient-to-r from-crimson to-magenta rounded-full"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
