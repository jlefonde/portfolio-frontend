import type { Category } from '../types'

export const categories: Record<string, Category> = {
  cicd: {
    name: 'CI/CD',
    icon: 'lucide:git-branch',
  },
  cloud: {
    name: 'Cloud',
    icon: 'lucide:cloud',
  },
  containerization: {
    name: 'Containerization',
    icon: 'lucide:container',
  },
  monitoring: {
    name: 'Monitoring',
    icon: 'lucide:monitor-cloud',
  },
  iac: {
    name: 'IaC',
    icon: 'lucide:server-cog',
  },
  programming: {
    name: 'Programming',
    icon: 'lucide:code-xml',
  },
  frontend: {
    name: 'Frontend',
    icon: 'lucide:layout-template',
  },
  backend: {
    name: 'Backend',
    icon: 'lucide:server',
  },
  database: {
    name: 'Database',
    icon: 'lucide:database',
  },
  virtualization: {
    name: 'Database',
    icon: 'lucide:cpu',
  },
}
