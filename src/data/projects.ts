import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "transcendence",
    highlight: "Multiplayer Pong web application with Docker, ELK log management, and Prometheus/Grafana monitoring",
    teamSize: 4,
    tags: [
      { name: "ELK" },
      { name: "Grafana" },
      { name: "Prometheus" },
      { name: "Docker" },
      { name: "Ansible" },
      { name: "Django" },
      { name: "Python" },
      { name: "Nginx" },
      { name: "PostgreSQL" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "JS" },
    ],
    featured: true,
  },
  {
    name: "portfolio",
    highlight: "Serverless web application deployed on AWS using Terraform, with a Go backend and VueJS frontend",
    teamSize: 1,
    tags: [
      { name: "AWS" },
      { name: "Terraform" },
      { name: "Github Actions" },
      { name: "Go" },
      { name: "VueJS" },
      { name: "TypeScript" },
      { name: "TailwindCSS" },
    ],
    featured: false,
  },
  {
    name: "webserv",
    highlight: "Web server in C++, handling HTTP requests, static content, uploads, and CGI",
    teamSize: 2,
    tags: [
      { name: "C++" },
      { name: "Nginx" },
      { name: "HTTP" },
      { name: "CGI" },
    ],
    featured: false,
  },
  {
    name: "taskmaster",
    highlight:
      "Process supervisor in Go, with automatic restart policies, privilege de-escalation, and interactive CLI",
    teamSize: 1,
    tags: [
      { name: "Go" },
      { name: "Syslog" },
      { name: "Supervisor" },
      { name: "YAML" },
    ],
    featured: true,
  },
  {
    name: "cloud-1",
    highlight: "Automated WordPress deployment on cloud infrastructure using Ansible and Docker containers",
    teamSize: 1,
    tags: [
      { name: "Ansible" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Azure" },
    ],
    featured: false,
  },
  {
    name: "inception-of-things",
    highlight: "Kubernetes cluster setup with K3s/K3d, Vagrant VMs, and ArgoCD",
    teamSize: 1,
    tags: [
      { name: "Kubernetes" },
      { name: "K3d" },
      { name: "K3s" },
      { name: "Vagrant" },
      { name: "ArgoCD" },
      { name: "Ansible" },
    ],
    featured: true,
  },
  {
    name: "matt-daemon",
    highlight: "Unix daemon in C++ with socket communication, signal handling, file locking and logging",
    teamSize: 1,
    tags: [
      { name: "C++" },
      { name: "Daemon" }
    ],
    featured: false,
  },
  {
    name: "42 Seconds",
    highlight: "1st Prize winner Puzzle game developed in one week at LGX 2024 Game Jam",
    teamSize: 6,
    tags: [
      { name: "C#" },
      { name: "Unity" },
    ],
    featured: false,
  },
];
