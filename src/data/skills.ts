import type { Skill } from "../types";

export const skills: Skill[] = [
  {
    name: "Docker",
    percentage: 70,
    categories: [{ name: "Containerization" }],
  },
  {
    name: "Kubernetes",
    percentage: 32,
    categories: [{ name: "Containerization" }],
  },
  {
    name: "AWS",
    percentage: 70,
    categories: [{ name: "Cloud" }],
  },
  {
    name: "Terraform",
    percentage: 90,
    categories: [{ name: "Infrastructure as Code" }, { name: "Cloud" }],
  },
  {
    name: "Ansible",
    percentage: 70,
    categories: [{ name: "Infrastructure as Code" }, { name: "Cloud" }],
  },
  {
    name: "Github Actions",
    percentage: 85,
    categories: [{ name: "CI/CD" }],
  },
  {
    name: "ArgoCD",
    percentage: 55,
    categories: [{ name: "CI/CD" }],
  },
  {
    name: "Prometheus",
    percentage: 35,
    categories: [{ name: "Monitoring" }],
  },
  {
    name: "Grafana",
    percentage: 40,
    categories: [{ name: "Monitoring" }],
  },
  {
    name: "Bash",
    percentage: 70,
    categories: [{ name: "Programming" }],
  },
  {
    name: "Go",
    percentage: 75,
    categories: [{ name: "Programming" }],
  },
  {
    name: "Python",
    percentage: 75,
    categories: [{ name: "Programming" }],
  },
];
