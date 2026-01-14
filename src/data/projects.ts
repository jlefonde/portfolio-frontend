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
import ILucideUserCog from '~icons/lucide/user-cog'
import ILucideSignal from '~icons/lucide/signal'
import ILucideShield from '~icons/lucide/shield'
import ILucideLock from '~icons/lucide/lock'
import ILucideServer from '~icons/lucide/server'
import ILucideArchive from '~icons/lucide/archive'
import ILucideGitBranch from '~icons/lucide/git-branch'
import ILucideNetwork from '~icons/lucide/network'
import ILucideGitlab from '~icons/lucide/gitlab'
import ILucideDatabase from '~icons/lucide/database'
import ILucideActivity from '~icons/lucide/activity'
import ILucideFileCode from '~icons/lucide/file-code'
import ILucideUpload from '~icons/lucide/upload'
import ILucideZap from '~icons/lucide/zap'

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
    cover: { path: '/projects/transcendence/ranked.png', alt: '' },
    screenshots: [
      { path: '/projects/transcendence/ranked.png', alt: '' },
      { path: '/projects/transcendence/rumble.png', alt: '' },
      { path: '/projects/transcendence/play.png', alt: '' },
      { path: '/projects/transcendence/tournament.png', alt: '' },
      { path: '/projects/transcendence/achievements.png', alt: '' },
      { path: '/projects/transcendence/customize.png', alt: '' },
      { path: '/projects/transcendence/profile.png', alt: '' },
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
    cover: { path: '', alt: '' },
  },
  {
    name: 'webserv',
    highlight: 'Web server in C++, handling HTTP requests, static content, uploads, and CGI',
    stacks: [stacks.cplusplus!, stacks.nginx!],
    featured: false,
    features: [
      {
        name: 'Non-Blocking I/O',
        icon: ILucideActivity,
        description: 'Single event loop using poll/epoll/kqueue for high concurrency',
      },
      {
        name: 'NGINX-like Configuration',
        icon: ILucideFileCode,
        description: 'Custom config format for multiple servers and route rules',
      },
      {
        name: 'CGI Support',
        icon: ILucideTerminal,
        description: 'Execute dynamic scripts (PHP, Python) with environment management',
      },
      {
        name: 'File Management',
        icon: ILucideUpload,
        description: 'Static file serving, directory listing, and client uploads',
      },
    ],
    cover: { path: '', alt: '' },
    githubLink: 'https://github.com/jlefonde/webserv',
  },
  {
    name: 'cloud-1',
    highlight: 'Automated WordPress deployment on cloud infrastructure using Ansible and Docker containers',
    stacks: [stacks.ansible!, stacks.docker!, stacks.mariadb!, stacks.nginx!, stacks.aws!, stacks.azure!],
    featured: false,
    features: [
      {
        name: 'Infrastructure as Code',
        icon: ILucideServerCog,
        description: 'Zero-touch Ansible automation from fresh instance to production',
      },
      {
        name: 'Container Orchestration',
        icon: ILucideContainer,
        description: 'Docker Compose managing Nginx, WordPress, MariaDB, and phpMyAdmin',
      },
      {
        name: 'Security First',
        icon: ILucideShield,
        description: 'Ansible Vault encryption, privilege separation, and TLS/SSL',
      },
      {
        name: 'Data Persistence',
        icon: ILucideDatabase,
        description: 'Docker volumes ensure data survives container restarts',
      },
    ],
    cover: { path: '', alt: '' },
    githubLink: 'https://github.com/jlefonde/cloud-1',
  },
  {
    name: 'inception-of-things',
    highlight: 'Kubernetes cluster setup with K3s/K3d, Vagrant VMs, and ArgoCD',
    stacks: [stacks.kubernetes!, stacks.k3s!, stacks.vagrant!, stacks.argocd!, stacks.ansible!, stacks.helm!],
    featured: true,
    features: [
      {
        name: 'Multi-Node Clusters',
        icon: ILucideNetwork,
        description: 'Controller-Agent architecture with master and worker nodes',
      },
      {
        name: 'Vagrant VM Provisioning',
        icon: ILucideServer,
        description: 'Automated multi-VM setup with static networking and K3s installation',
      },
      {
        name: 'K3d Lightweight K8s',
        icon: ILucideContainer,
        description: 'Docker-based Kubernetes for rapid development and testing',
      },
      {
        name: 'GitOps Continuous Delivery',
        icon: ILucideGitBranch,
        description: 'Automated deployments with Argo CD syncing cluster state',
      },
      {
        name: 'Self-Hosted GitLab',
        icon: ILucideGitlab,
        description: 'Complete GitLab instance deployed via Helm charts',
      },
    ],
    cover: { path: '', alt: '' },
    githubLink: 'https://github.com/jlefonde/inception-of-things',
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
        name: 'User Management',
        icon: ILucideUserCog,
        description: 'Run processes as different users with proper privilege de-escalation',
      },
      {
        name: 'Signal Handling',
        icon: ILucideSignal,
        description: 'Graceful shutdown and configuration reloading via signals',
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
    features: [
      {
        name: 'Daemonization',
        icon: ILucideShield,
        description: 'Double-fork mechanism to detach process from terminal',
      },
      {
        name: 'Singleton Enforcement',
        icon: ILucideLock,
        description: 'Lock file system prevents multiple daemon instances',
      },
      {
        name: 'Network Server',
        icon: ILucideServer,
        description: 'Non-blocking socket server for client connections',
      },
      {
        name: 'Log Rotation',
        icon: ILucideArchive,
        description: 'Automatic rotation based on time intervals or file size',
      },
      {
        name: 'Signal Handling',
        icon: ILucideSignal,
        description: 'Graceful shutdown with proper resource cleanup',
      },
    ],
    cover: { path: '', alt: '' },
    githubLink: 'https://github.com/jlefonde/matt-daemon',
  },
  {
    name: '42-seconds',
    highlight: '1st Prize-winning fast-paced puzzle game built in one week at LGX 2024 Game Jam',
    stacks: [stacks.csharp!, stacks.unity!],
    featured: false,
    cover: { path: '/projects/42-seconds/main-screen.png', alt: '42 Seconds game main menu screen' },
    screenshots: [
      { path: '/projects/42-seconds/main-screen.png', alt: '42 Seconds game main menu screen' },
      { path: '/projects/42-seconds/tutorial.png', alt: '42 Seconds tutorial level showing game mechanics' },
      { path: '/projects/42-seconds/level-7.png', alt: '42 Seconds level 7 in-progress' },
      { path: '/projects/42-seconds/level-7-uv.png', alt: '42 Seconds level 7 completion screen' },
      { path: '/projects/42-seconds/level-9.png', alt: '42 Seconds level 9 in-progress' },
      { path: '/projects/42-seconds/level-9-completed.png', alt: '42 Seconds level 9 completion screen' },
      { path: '/projects/42-seconds/level-12.png', alt: '42 Seconds level 12 in-progress' },
      { path: '/projects/42-seconds/credits.png', alt: '42 Seconds game credits screen' },
    ],
    description: '42-seconds is a fast-paced puzzle game that challenges players to solve increasingly complex stages under pressure, each level must be completed in exactly 42 seconds. Developed in just one week during the LGX 2024 Game Jam, it won 1st Prize',
    liveLink: 'https://ejacquem.itch.io/42seconds',
  },
]
