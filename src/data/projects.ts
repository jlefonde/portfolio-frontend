import type { Project } from '../types'
import { stacks } from './stacks'
import ILucideUsers from '~icons/lucide/users'
import ILucideMonitorCloud from '~icons/lucide/monitor-cloud'
import ILucideFileClock from '~icons/lucide/file-clock'
import ILucideShieldUser from '~icons/lucide/shield-user'
import ILucideContainer from '~icons/lucide/container'
import ILucideServerCog from '~icons/lucide/server-cog'
import ILucideCog from '~icons/lucide/cog'
import ILucideRefreshCw from '~icons/lucide/refresh-cw'
import ILucideTerminal from '~icons/lucide/terminal'
import ILucideZap from '~icons/lucide/zap'
import ILucideFileText from '~icons/lucide/file-text'
import ILucideUserCog from '~icons/lucide/user-cog'
import ILucideSignal from '~icons/lucide/signal'
import ILucideBoxes from '~icons/lucide/boxes'

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
    featured: true,
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
    name: 'taskmaster',
    highlight:
      'Process supervisor in Go, with automatic restart policies, hot-reload, privilege de-escalation, and interactive CLI',
    stacks: [stacks.go!],
    featured: true,
    features: [
      {
        name: 'Process Management',
        icon: ILucideCog,
        description: 'Start, stop, restart, and monitor multiple processes',
      },
      {
        name: 'Automatic Restart',
        icon: ILucideRefreshCw,
        description: 'Configurable restart policies (never, always, on-failure)',
      },
      {
        name: 'Interactive Shell',
        icon: ILucideTerminal,
        description: 'Built-in command-line interface with tab completion',
      },
      {
        name: 'Configuration Hot-Reload',
        icon: ILucideZap,
        description: 'Update configuration without stopping the supervisor',
      },
      {
        name: 'Logging',
        icon: ILucideFileText,
        description: 'Comprehensive logging with configurable levels and output destinations',
      },
      {
        name: 'User Management',
        icon: ILucideUserCog,
        description: 'Run processes as different users with proper privilege de-escalation',
      },
      {
        name: 'Signal Handling',
        icon: ILucideSignal,
        description: 'Graceful shutdown and configuration reloading via signals',
      },
      {
        name: 'Process Groups',
        icon: ILucideBoxes,
        description: 'Support for multiple instances of the same program',
      },
    ],
    cover: { path: '', alt: '' },
    githubLink: 'https://github.com/jlefonde/taskmaster',
  },
  {
    name: 'matt-daemon',
    highlight: 'Unix daemon in C++ with socket communication, signal handling, file locking and logging',
    stacks: [stacks.cplusplus!],
    featured: false,
    cover: { path: '', alt: '' },
  },
  {
    name: '42-seconds',
    highlight: '1st Prize winner Puzzle game developed in one week at LGX 2024 Game Jam',
    stacks: [stacks.csharp!, stacks.unity!],
    featured: false,
    cover: { path: '', alt: '' },
  },
]
