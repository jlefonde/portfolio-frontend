import type { Category } from '../types'
import ILucideGitBranch from '~icons/lucide/git-branch'
import ILucideCloud from '~icons/lucide/cloud'
import ILucideContainer from '~icons/lucide/container'
import ILucideMonitorCloud from '~icons/lucide/monitor-cloud'
import ILucideServerCog from '~icons/lucide/server-cog'
import ILucideCodeXml from '~icons/lucide/code-xml'
import ILucideLayoutTemplate from '~icons/lucide/layout-template'
import ILucideServer from '~icons/lucide/server'
import ILucideDatabase from '~icons/lucide/database'
import ILucideCpu from '~icons/lucide/cpu'

export const categories: Record<string, Category> = {
  cicd: {
    name: 'CI/CD',
    icon: ILucideGitBranch,
  },
  cloud: {
    name: 'Cloud',
    icon: ILucideCloud,
  },
  containerization: {
    name: 'Containerization',
    icon: ILucideContainer,
  },
  monitoring: {
    name: 'Monitoring',
    icon: ILucideMonitorCloud,
  },
  iac: {
    name: 'IaC',
    icon: ILucideServerCog,
  },
  programming: {
    name: 'Programming',
    icon: ILucideCodeXml,
  },
  frontend: {
    name: 'Frontend',
    icon: ILucideLayoutTemplate,
  },
  backend: {
    name: 'Backend',
    icon: ILucideServer,
  },
  database: {
    name: 'Database',
    icon: ILucideDatabase,
  },
  virtualization: {
    name: 'Database',
    icon: ILucideCpu,
  },
}
