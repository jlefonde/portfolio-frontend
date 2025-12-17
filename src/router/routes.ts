import type { RouteRecordRaw } from 'vue-router'
import type { Component } from 'vue'
import AboutView from '../views/About.vue'
import SkillsView from '../views/Skills.vue'
import ExperiencesView from '../views/Experiences.vue'
import ProjectsView from '../views/Projects.vue'
import CertificationsView from '../views/Certifications.vue'
import ILucideUser from '~icons/lucide/user'
import ILucideCode from '~icons/lucide/code'
import ILucideClipboardClock from '~icons/lucide/clipboard-clock'
import ILucideFolderCode from '~icons/lucide/folder-code'
import ILucideTrophy from '~icons/lucide/trophy'

interface RouteMetadata {
  icon?: Component
  primaryColor?: string
  secondaryColor?: string
  addToNav?: boolean
}

type Route = RouteRecordRaw & RouteMetadata

export const routes: Route[] = [
  {
    path: '/',
    redirect: '/about',
  } as Route,
  {
    name: 'About',
    path: '/about',
    component: AboutView,
    icon: ILucideUser,
    primaryColor: 'purple-light',
    secondaryColor: 'purple-dark',
    addToNav: true,
  },
  {
    name: 'Skills',
    path: '/skills',
    component: SkillsView,
    icon: ILucideCode,
    primaryColor: 'orange-light',
    secondaryColor: 'orange-dark',
    addToNav: true,
  },
  {
    name: 'Experiences',
    path: '/experiences',
    component: ExperiencesView,
    icon: ILucideClipboardClock,
    primaryColor: 'red-light',
    secondaryColor: 'red-dark',
    addToNav: true,
  },
  {
    name: 'Projects',
    path: '/projects',
    component: ProjectsView,
    icon: ILucideFolderCode,
    primaryColor: 'green-light',
    secondaryColor: 'green-dark',
    addToNav: true,
  },
  {
    name: 'Certifications',
    path: '/certifications',
    component: CertificationsView,
    icon: ILucideTrophy,
    primaryColor: 'blue-light',
    secondaryColor: 'blue-dark',
    addToNav: true,
  },
]
