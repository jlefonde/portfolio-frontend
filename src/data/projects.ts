import type { Project } from "../types";

export const projects: Project[] = [
  {
    name: "transcendence",
    highlight: "Multiplayer Pong web application with Docker, ELK log management, and Prometheus/Grafana monitoring",
    tags: [
      { name: "ELK", icon: "devicon:elasticsearch" },
      { name: "Grafana", icon: "devicon:grafana" },
      { name: "Prometheus", icon: "devicon:prometheus" },
      { name: "Docker", icon: "devicon:docker" },
      { name: "Ansible", icon: "devicon:ansible" },
      { name: "Django", icon: "devicon-plain:django" },
      { name: "Python", icon: "devicon:python" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "PostgreSQL", icon: "devicon:postgresql" },
      { name: "HTML", icon: "devicon:html5" },
      { name: "CSS", icon: "devicon:css3" },
      { name: "JavaScript", icon: "devicon:javascript" },
    ],
    featured: true,
    features: [
      {
        name: "Real Time Multiplayer",
        icon: "lucide:users",
        description: "WebSocket-based multiplayer with low latency",
      },
      {
        name: "Comprehensive Monitoring",
        icon: "lucide:monitor-cloud",
        description: "Prometheus metrics with Grafana dashboards",
      },
      {
        name: "Centralized Logging",
        icon: "lucide:file-clock",
        description: "ELK stack for log aggregation and analysis",
      },
      {
        name: "User Authentication",
        icon: "lucide:shield-user",
        description: "JWT-based authentication with OAuth2 and 2FA integrations",
      },
      {
        name: "Containerized",
        icon: "lucide:container",
        description: "Fully dockerized with docker-compose orchestration",
      },
      {
        name: "Automated Deployment",
        icon: "lucide:server-cog",
        description: "Ansible playbooks for infrastructure configuration",
      },
    ],
    screenshots: [
      { path: "/projects/transcendence/image.png", alt: "" },
      { path: "/projects/transcendence/image2.png", alt: "" },
      { path: "/projects/transcendence/image3.png", alt: "" },
    ],
    githubLink: "https://github.com/pluieciel/transcendence",
    liveLink: "42pong.com"
  },
  {
    name: "portfolio",
    highlight: "Serverless web application deployed on AWS using Terraform, with a Go backend and VueJS frontend",
    tags: [
      { name: "AWS", icon: "devicon:amazonwebservices" },
      { name: "Terraform", icon: "devicon:terraform" },
      { name: "Github Actions", icon: "devicon:githubactions" },
      { name: "Go", icon: "devicon:go" },
      { name: "VueJS", icon: "devicon:vuejs" },
      { name: "TypeScript", icon: "devicon:typescript" },
      { name: "TailwindCSS", icon: "devicon:tailwindcss" },
    ],
    featured: false,
  },
  {
    name: "webserv",
    highlight: "Web server in C++, handling HTTP requests, static content, uploads, and CGI",
    tags: [
      { name: "C++", icon: "devicon:cplusplus" },
      { name: "Nginx", icon: "logos:nginx" },
    ],
    featured: false,
  },
  {
    name: "taskmaster",
    highlight:
      "Process supervisor in Go, with automatic restart policies, privilege de-escalation, and interactive CLI",
    tags: [{ name: "Go", icon: "devicon:go" }],
    featured: true,
  },
  {
    name: "cloud-1",
    highlight: "Automated WordPress deployment on cloud infrastructure using Ansible and Docker containers",
    tags: [
      { name: "Ansible", icon: "devicon:ansible" },
      { name: "Docker", icon: "devicon:docker" },
      { name: "MariaDB", icon: "devicon:mariadb" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "AWS", icon: "devicon:amazonwebservices" },
      { name: "Azure", icon: "devicon:azure" },
    ],
    featured: false,
  },
  {
    name: "inception-of-things",
    highlight: "Kubernetes cluster setup with K3s/K3d, Vagrant VMs, and ArgoCD",
    tags: [
      { name: "Kubernetes", icon: "devicon:kubernetes" },
      { name: "K3s", icon: "devicon:k3s" },
      { name: "Vagrant", icon: "devicon:vagrant" },
      { name: "ArgoCD", icon: "devicon:argocd" },
      { name: "Ansible", icon: "devicon:ansible" },
      { name: "Gitlab", icon: "devicon:gitlab" },
      { name: "Helm", icon: "devicon:helm" },
    ],
    featured: true,
  },
  {
    name: "matt-daemon",
    highlight: "Unix daemon in C++ with socket communication, signal handling, file locking and logging",
    tags: [{ name: "C++", icon: "devicon:cplusplus" }],
    featured: false,
  },
  {
    name: "42 Seconds",
    highlight: "1st Prize winner Puzzle game developed in one week at LGX 2024 Game Jam",
    tags: [
      { name: "C#", icon: "devicon:csharp" },
      { name: "Unity", icon: "devicon:unity" },
    ],
    featured: false,
  },
];
