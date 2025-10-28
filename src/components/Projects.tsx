import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "Multi-Cloud Kubernetes Deployment & CI/CD Automation",
    description:
      "Standardized K8s infrastructure across AWS, Azure, GCP using Terraform + Helm; deployment efficiency ↑40%. GitHub Actions + ArgoCD pipelines reduced release cycle by 35%.",
    tech: ["Terraform", "Kubernetes", "ArgoCD", "AWS", "Azure", "GCP", "Helm"],
    color: "from-crimson to-magenta",
  },
  {
    title: "Cloud Infrastructure Security & Compliance Automation",
    description:
      "Built secure VPC & IAM policies on AWS/GCP with Vault, Trivy, Snyk, Falco. Automated security checks & Terraform audits → risk reduction.",
    tech: ["Vault", "Trivy", "Snyk", "Falco", "Terraform", "AWS", "GCP"],
    color: "from-magenta to-crimson",
  },
  {
    title: "Automated Cloud Resource Scaling & Cost Optimization",
    description:
      "Auto-scaling EKS/AKS/GKE clusters cut cloud cost 20%. Python + Bash scripts trigger scaling from Prometheus metrics.",
    tech: ["Python", "Bash", "Prometheus", "Kubernetes", "AWS", "Azure", "GCP"],
    color: "from-crimson via-magenta to-crimson",
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-crimson rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-magenta rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="projects-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="!w-[90%] md:!w-[600px] pb-12">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_40px_hsl(348_78%_48%/0.3)] transition-all duration-300"
                >
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center">
                      <ExternalLink className="w-16 h-16 text-white/80" />
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground">{project.title}</h3>
                    <p className="text-foreground/70 mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-gradient-to-r from-crimson/10 to-magenta/10 border border-crimson/30 text-foreground hover:shadow-[0_0_15px_hsl(340_82%_52%/0.3)]"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      <style>{`
        .projects-swiper .swiper-button-next,
        .projects-swiper .swiper-button-prev {
          color: hsl(348 78% 48%);
        }
        .projects-swiper .swiper-pagination-bullet-active {
          background: hsl(348 78% 48%);
        }
      `}</style>
    </section>
  );
};
