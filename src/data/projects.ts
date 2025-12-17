import type { Project } from '../types'
import { stacks } from './stacks'
import ILucideUsers from '~icons/lucide/users'
import ILucideMonitorCloud from '~icons/lucide/monitor-cloud'
import ILucideFileClock from '~icons/lucide/file-clock'
import ILucideShieldUser from '~icons/lucide/shield-user'
import ILucideContainer from '~icons/lucide/container'
import ILucideServerCog from '~icons/lucide/server-cog'

export const projects: Project[] = [
  {
    name: 'transcendence',
    highlight: 'Multiplayer Pong web application with Docker, ELK log management, and Prometheus/Grafana monitoring',
    stacks: [
      stacks.elk!,
      stacks.grafana!,
      stacks.prometheus!,
      stacks.docker!,
      stacks.ansible!,
      stacks.django!,
      stacks.python!,
      stacks.nginx!,
      stacks.postgresql!,
      stacks.html!,
      stacks.css!,
      stacks.javascript!,
    ],
    featured: true,
    features: [
      {
        name: 'Real Time Multiplayer',
        icon: ILucideUsers,
        description: 'WebSocket-based multiplayer with low latency',
      },
      {
        name: 'Comprehensive Monitoring',
        icon: ILucideMonitorCloud,
        description: 'Prometheus metrics with Grafana dashboards',
      },
      {
        name: 'Centralized Logging',
        icon: ILucideFileClock,
        description: 'ELK stack for log aggregation and analysis',
      },
      {
        name: 'User Authentication',
        icon: ILucideShieldUser,
        description: 'JWT-based authentication with OAuth2 and 2FA integrations',
      },
      {
        name: 'Containerized',
        icon: ILucideContainer,
        description: 'Fully dockerized with docker-compose orchestration',
      },
      {
        name: 'Automated Deployment',
        icon: ILucideServerCog,
        description: 'Ansible playbooks for infrastructure configuration',
      },
    ],
    cover: { path: '/projects/transcendence/image.png', alt: '' },
    screenshots: [
      { path: '/projects/transcendence/image.png', alt: '' },
      { path: '/projects/transcendence/image2.png', alt: '' },
      { path: '/projects/transcendence/image3.png', alt: '' },
    ],
    githubLink: 'https://github.com/pluieciel/transcendence',
    liveLink: 'https://42pong.com',
  },
  {
    name: 'portfolio',
    highlight: 'Serverless web application deployed on AWS using Terraform, with a Go backend and VueJS frontend',
    stacks: [
      stacks.aws!,
      stacks.terraform!,
      stacks.githubactions!,
      stacks.go!,
      stacks.vuejs!,
      stacks.typescript!,
      stacks.tailwindcss!,
    ],
    featured: false,
    cover: { path: '/projects/transcendence/image3.png', alt: '' },
  },
  {
    name: 'webserv',
    highlight: 'Web server in C++, handling HTTP requests, static content, uploads, and CGI',
    stacks: [stacks.cplusplus!, stacks.nginx!],
    featured: false,
    cover: { path: '', alt: '' },
  },
  {
    name: 'taskmaster',
    highlight:
      'Process supervisor in Go, with automatic restart policies, hot-reload, privilege de-escalation, and interactive CLI',
    stacks: [stacks.go!],
    featured: true,
    cover: { path: '', alt: '' },
  },
  {
    name: 'cloud-1',
    highlight: 'Automated WordPress deployment on cloud infrastructure using Ansible and Docker containers',
    stacks: [stacks.ansible!, stacks.docker!, stacks.mariadb!, stacks.nginx!, stacks.aws!, stacks.azure!],
    featured: false,
    cover: { path: '', alt: '' },
  },
  {
    name: 'inception-of-things',
    highlight: 'Kubernetes cluster setup with K3s/K3d, Vagrant VMs, and ArgoCD',
    stacks: [stacks.kubernetes!, stacks.k3s!, stacks.vagrant!, stacks.argocd!, stacks.ansible!, stacks.helm!],
    featured: true,
    cover: { path: '', alt: '' },
  },
  {
    name: 'matt-daemon',
    highlight: 'Unix daemon in C++ with socket communication, signal handling, file locking and logging',
    stacks: [stacks.cplusplus!],
    featured: false,
    cover: { path: '', alt: '' },
  },
  {
    name: '42 Seconds',
    highlight: '1st Prize winner Puzzle game developed in one week at LGX 2024 Game Jam',
    stacks: [stacks.csharp!, stacks.unity!],
    featured: false,
    cover: { path: '', alt: '' },
  },
]
