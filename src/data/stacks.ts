import type { Stack } from '../types'
import { categories } from './categories'
import IDeviconAnsible from '~icons/devicon/ansible'
import IDeviconArgocd from '~icons/devicon/argocd'
import IDeviconAmazonwebservices from '~icons/devicon/amazonwebservices'
import ISkillIconsAwsDark from '~icons/skill-icons/aws-dark'
import IDeviconAzure from '~icons/devicon/azure'
import ISkillIconsAzureDark from '~icons/skill-icons/azure-dark'
import IDeviconAzuredevops from '~icons/devicon/azuredevops'
import IDeviconPlainBash from '~icons/devicon-plain/bash'
import ISkillIconsBashDark from '~icons/skill-icons/bash-dark'
import IDeviconCplusplus from '~icons/devicon/cplusplus'
import ISkillIconsCpp from '~icons/skill-icons/cpp'
import IDeviconCsharp from '~icons/devicon/csharp'
import ISkillIconsCs from '~icons/skill-icons/cs'
import IDeviconCss3 from '~icons/devicon/css3'
import ISkillIconsCss from '~icons/skill-icons/css'
import IDeviconPlainDjango from '~icons/devicon-plain/django'
import ISkillIconsDjango from '~icons/skill-icons/django'
import IDeviconDocker from '~icons/devicon/docker'
import ISkillIconsDocker from '~icons/skill-icons/docker'
import ILogosDotnet from '~icons/logos/dotnet'
import ISkillIconsDotnet from '~icons/skill-icons/dotnet'
import IDeviconElasticsearch from '~icons/devicon/elasticsearch'
import ISkillIconsElasticsearchDark from '~icons/skill-icons/elasticsearch-dark'
import IDeviconGithubactions from '~icons/devicon/githubactions'
import ISkillIconsGithubactionsDark from '~icons/skill-icons/githubactions-dark'
import IDeviconGo from '~icons/devicon/go'
import ISkillIconsGolang from '~icons/skill-icons/golang'
import IDeviconGrafana from '~icons/devicon/grafana'
import ISkillIconsGrafanaDark from '~icons/skill-icons/grafana-dark'
import IDeviconHelm from '~icons/devicon/helm'
import IDeviconHtml5 from '~icons/devicon/html5'
import ISkillIconsHtml from '~icons/skill-icons/html'
import IDeviconJavascript from '~icons/devicon/javascript'
import ISkillIconsJavascript from '~icons/skill-icons/javascript'
import IDeviconK3s from '~icons/devicon/k3s'
import IDeviconKubernetes from '~icons/devicon/kubernetes'
import ISkillIconsKubernetes from '~icons/skill-icons/kubernetes'
import IDeviconMariadb from '~icons/devicon/mariadb'
import IDeviconMysql from '~icons/devicon/mysql'
import ISkillIconsMysqlDark from '~icons/skill-icons/mysql-dark'
import ILogosNginx from '~icons/logos/nginx'
import ISkillIconsNginx from '~icons/skill-icons/nginx'
import IDeviconPostgresql from '~icons/devicon/postgresql'
import ISkillIconsPostgresqlDark from '~icons/skill-icons/postgresql-dark'
import IDeviconPrometheus from '~icons/devicon/prometheus'
import ISkillIconsPrometheus from '~icons/skill-icons/prometheus'
import IDeviconPython from '~icons/devicon/python'
import ISkillIconsPythonDark from '~icons/skill-icons/python-dark'
import IDeviconTailwindcss from '~icons/devicon/tailwindcss'
import ISkillIconsTailwindcssDark from '~icons/skill-icons/tailwindcss-dark'
import IDeviconTerraform from '~icons/devicon/terraform'
import ISkillIconsTerraformDark from '~icons/skill-icons/terraform-dark'
import IDeviconTypescript from '~icons/devicon/typescript'
import ISkillIconsTypescript from '~icons/skill-icons/typescript'
import IDeviconUnity from '~icons/devicon/unity'
import IDeviconVagrant from '~icons/devicon/vagrant'
import IDeviconVuejs from '~icons/devicon/vuejs'
import ISkillIconsVuejsDark from '~icons/skill-icons/vuejs-dark'

export const stacks: Record<string, Stack> = {
  ansible: {
    name: 'Ansible',
    icon: IDeviconAnsible,
    iconList: IDeviconAnsible,
    categories: [categories.iac!, categories.cloud!],
  },
  argocd: {
    name: 'ArgoCD',
    icon: IDeviconArgocd,
    iconList: IDeviconArgocd,
    categories: [categories.cicd!],
  },
  aws: {
    name: 'AWS',
    icon: IDeviconAmazonwebservices,
    iconList: ISkillIconsAwsDark,
    categories: [categories.cloud!],
  },
  azure: {
    name: 'Azure',
    icon: IDeviconAzure,
    iconList: ISkillIconsAzureDark,
    categories: [categories.cloud!],
  },
  azuredevops: {
    name: 'Azure DevOps',
    icon: IDeviconAzuredevops,
    iconList: IDeviconAzuredevops,
    categories: [categories.cicd!],
  },
  bash: {
    name: 'Bash',
    icon: IDeviconPlainBash,
    iconList: ISkillIconsBashDark,
    categories: [categories.programming!],
  },
  cplusplus: {
    name: 'C++',
    icon: IDeviconCplusplus,
    iconList: ISkillIconsCpp,
    categories: [categories.programming!],
  },
  csharp: {
    name: 'C#',
    icon: IDeviconCsharp,
    iconList: ISkillIconsCs,
    categories: [categories.programming!],
  },
  css: {
    name: 'CSS',
    icon: IDeviconCss3,
    iconList: ISkillIconsCss,
    categories: [categories.frontend!],
  },
  django: {
    name: 'Django',
    icon: IDeviconPlainDjango,
    iconList: ISkillIconsDjango,
    categories: [categories.backend!],
  },
  docker: {
    name: 'Docker',
    icon: IDeviconDocker,
    iconList: ISkillIconsDocker,
    categories: [categories.containerization!],
  },
  dotnet: {
    name: '.NET',
    icon: ILogosDotnet,
    iconList: ISkillIconsDotnet,
    categories: [categories.backend!],
  },
  elk: {
    name: 'ELK',
    icon: IDeviconElasticsearch,
    iconList: ISkillIconsElasticsearchDark,
    categories: [categories.monitoring!],
  },
  githubactions: {
    name: 'Github Actions',
    icon: IDeviconGithubactions,
    iconList: ISkillIconsGithubactionsDark,
    categories: [categories.cicd!],
  },
  go: {
    name: 'Go',
    icon: IDeviconGo,
    iconList: ISkillIconsGolang,
    categories: [categories.programming!],
  },
  grafana: {
    name: 'Grafana',
    icon: IDeviconGrafana,
    iconList: ISkillIconsGrafanaDark,
    categories: [categories.monitoring!],
  },
  helm: {
    name: 'Helm',
    icon: IDeviconHelm,
    iconList: IDeviconHelm,
    categories: [categories.containerization!],
  },
  html: {
    name: 'HTML',
    icon: IDeviconHtml5,
    iconList: ISkillIconsHtml,
    categories: [categories.frontend!],
  },
  javascript: {
    name: 'JavaScript',
    icon: IDeviconJavascript,
    iconList: ISkillIconsJavascript,
    categories: [categories.frontend!, categories.programming!],
  },
  k3s: {
    name: 'K3s',
    icon: IDeviconK3s,
    iconList: IDeviconK3s,
    categories: [categories.containerization!],
  },
  kubernetes: {
    name: 'Kubernetes',
    icon: IDeviconKubernetes,
    iconList: ISkillIconsKubernetes,
    categories: [categories.containerization!],
  },
  mariadb: {
    name: 'MariaDB',
    icon: IDeviconMariadb,
    iconList: IDeviconMariadb,
    categories: [categories.database!, categories.backend!],
  },
  mysql: {
    name: 'MySQL',
    icon: IDeviconMysql,
    iconList: ISkillIconsMysqlDark,
    categories: [categories.database!, categories.backend!],
  },
  nginx: {
    name: 'Nginx',
    icon: ILogosNginx,
    iconList: ISkillIconsNginx,
    categories: [categories.backend!],
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: IDeviconPostgresql,
    iconList: ISkillIconsPostgresqlDark,
    categories: [categories.database!, categories.backend!],
  },
  prometheus: {
    name: 'Prometheus',
    icon: IDeviconPrometheus,
    iconList: ISkillIconsPrometheus,
    categories: [categories.monitoring!],
  },
  python: {
    name: 'Python',
    icon: IDeviconPython,
    iconList: ISkillIconsPythonDark,
    categories: [categories.programming!],
  },
  tailwindcss: {
    name: 'TailwindCSS',
    icon: IDeviconTailwindcss,
    iconList: ISkillIconsTailwindcssDark,
    categories: [categories.frontend!],
  },
  terraform: {
    name: 'Terraform',
    icon: IDeviconTerraform,
    iconList: ISkillIconsTerraformDark,
    categories: [categories.iac!, categories.cloud!],
  },
  typescript: {
    name: 'TypeScript',
    icon: IDeviconTypescript,
    iconList: ISkillIconsTypescript,
    categories: [categories.frontend!, categories.programming!],
  },
  unity: {
    name: 'Unity',
    icon: IDeviconUnity,
    iconList: IDeviconUnity,
    categories: [categories.programming!],
  },
  vagrant: {
    name: 'Vagrant',
    icon: IDeviconVagrant,
    iconList: IDeviconVagrant,
    categories: [categories.virtualization!, categories.iac!],
  },
  vuejs: {
    name: 'VueJS',
    icon: IDeviconVuejs,
    iconList: ISkillIconsVuejsDark,
    categories: [categories.frontend!],
  },
}
