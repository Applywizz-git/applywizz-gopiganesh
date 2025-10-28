import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  Container,
  FileCode,
  GitBranch,
  Activity,
  Shield,
  Terminal,
  Database,
  Wrench,
} from "lucide-react";

const skillCategories = [
  {
    title: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "GCP"],
    color: "from-crimson to-magenta",
  },
  {
    title: "Containerization",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm", "Kustomize", "Kubeflow"],
    color: "from-magenta to-crimson",
  },
  {
    title: "IaC & Automation",
    icon: FileCode,
    skills: ["Terraform", "Ansible", "Pulumi", "Packer", "AWS CDK"],
    color: "from-crimson via-magenta to-crimson",
  },
  {
    title: "CI/CD",
    icon: GitBranch,
    skills: ["Jenkins", "GitHub Actions", "GitLab CI", "ArgoCD", "Spinnaker", "Tekton"],
    color: "from-magenta to-crimson",
  },
  {
    title: "Monitoring & Logging",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog", "CloudWatch"],
    color: "from-crimson to-magenta",
  },
  {
    title: "Security & DevSecOps",
    icon: Shield,
    skills: ["Vault", "Trivy", "Snyk", "Falco", "IAM Policies"],
    color: "from-magenta via-crimson to-magenta",
  },
  {
    title: "Scripting",
    icon: Terminal,
    skills: ["Python", "Bash", "Go", "JavaScript"],
    color: "from-crimson to-magenta",
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DynamoDB"],
    color: "from-magenta to-crimson",
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    skills: ["Jira", "ServiceNow", "Confluence", "Postman", "Swagger"],
    color: "from-crimson via-magenta to-crimson",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical{" "}
            <span className="bg-gradient-to-r from-crimson to-magenta bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-crimson to-magenta mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-[0_0_30px_hsl(348_78%_48%/0.2)]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 }}
                      className="px-3 py-1.5 bg-muted/50 rounded-lg text-sm text-foreground/80 font-medium hover:bg-gradient-to-r hover:from-crimson/10 hover:to-magenta/10 hover:text-foreground transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
