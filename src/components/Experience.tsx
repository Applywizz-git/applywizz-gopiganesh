import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "DevOps Engineer",
    company: "Rafay Systems",
    location: "California, CA, USA",
    period: "Aug 2023 - Present",
    achievements: [
      "Deployed containerized apps across AWS, Azure, and OCI Kubernetes clusters using Terraform and Helm → deployment efficiency +40%",
      "Automated CI/CD with GitHub Actions + ArgoCD → release cycles −35%",
      "Monitoring via Prometheus + Grafana → downtime −30%",
      "Automated MLOps templates with Python → efficiency +70%",
      "Integrated Jira + ServiceNow in pipelines → faster change management",
      "Designed secure AWS/GCP architectures (VPCs, IAM, firewalls) → improved security",
      "Managed AKS microservices with RBAC and auto-scaling → cost −20%",
      "Enhanced multi-cloud template validation → failure rate −45%",
    ],
  },
  {
    title: "Cloud Engineer",
    company: "Tata Consultancy Services",
    location: "Hyderabad, TS, India",
    period: "Jul 2019 - Jul 2022",
    achievements: [
      "Orchestrated 200+ Docker containers in Kubernetes clusters → efficiency +30%",
      "Optimized AKS clusters → scalability +25%, cost −15%",
      "Implemented CI/CD via Azure DevOps & Jenkins → release time −50%",
      "Automated infra with Terraform & Ansible → zero config drift",
      "Monitoring via Prometheus + Grafana → uptime +20%",
      "Led defect triage & release coordination → on-time delivery",
      "Secured cloud ops (IAM, firewalls, logging) → audit-ready compliance",
    ],
  },
];

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-crimson to-magenta" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`relative mb-12 ${
                index % 2 === 0 ? "md:pr-[50%] md:pl-0" : "md:pl-[50%] md:pr-0"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-crimson rounded-full border-4 border-background transform -translate-x-1/2 z-10 shadow-[0_0_20px_hsl(348_78%_48%/0.6)]" />

              <div className="ml-16 md:ml-0">
                <div
                  className={`bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(348_78%_48%/0.2)] ${
                    index % 2 === 0 ? "" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-gradient-to-br from-crimson/20 to-magenta/20 rounded-xl">
                      <Briefcase className="w-6 h-6 text-crimson" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-foreground mb-1">{exp.title}</h3>
                      <p className="text-lg font-semibold text-crimson mb-2">{exp.company}</p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                        <span>📍 {exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.4, delay: index * 0.3 + i * 0.1 }}
                        className="flex items-start gap-3 text-foreground/80"
                      >
                        <span className="text-crimson mt-1">▸</span>
                        <span>{achievement}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
