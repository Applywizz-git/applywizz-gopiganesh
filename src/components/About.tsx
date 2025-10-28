import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Briefcase, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects", value: 10, suffix: "+" },
  { icon: Award, label: "Years Experience", value: 5, suffix: "+" },
  { icon: Users, label: "Satisfaction", value: 100, suffix: "%" },
];

const highlights = [
  "Terraform",
  "Kubernetes",
  "Jenkins",
  "Grafana",
  "Python",
  "Ansible",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-foreground/80 leading-relaxed">
              I specialize in designing multi-cloud DevOps architectures using AWS, Azure, and GCP to deliver
              highly available, secure, and automated infrastructure. With expertise in Kubernetes orchestration,
              CI/CD automation, and Infrastructure as Code (Terraform, Ansible), I focus on reducing deployment
              friction and maximizing system reliability.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              My toolkit includes Python, Bash, Helm, Prometheus, Grafana, and ArgoCD — empowering enterprises
              to achieve faster delivery cycles, improved security posture, and efficient resource utilization.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-6 rounded-2xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(348_78%_48%/0.2)]"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-crimson" />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                    className="text-3xl font-bold bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent"
                  >
                    <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                  </motion.div>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <h3 className="text-2xl font-semibold mb-6 text-foreground/90">Core Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {highlights.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-crimson/10 to-magenta/10 border border-crimson/30 text-foreground font-medium hover:shadow-[0_0_20px_hsl(340_82%_52%/0.3)] transition-all cursor-default"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const CountUp = ({ end, duration, suffix }: { end: number; duration: number; suffix: string }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [end, duration]);

  return <>{count}{suffix}</>;
};

import { useState, useEffect } from "react";
