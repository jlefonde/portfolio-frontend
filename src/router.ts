import { createWebHistory, createRouter } from "vue-router";

import AboutView from "./views/About.vue";
import SkillsView from "./views/Skills.vue";
import ExperiencesView from "./views/Experiences.vue";
import EducationView from "./views/Education.vue";
import ProjectsView from "./views/Projects.vue";
import CertificationsView from "./views/Certifications.vue";
import ContactView from "./views/Contact.vue";
import type { Component } from "vue";
import {
  UserIcon,
  CodeIcon,
  BriefcaseIcon,
  GraduationCapIcon,
  FolderCodeIcon,
  TrophyIcon,
  MailIcon,
} from "lucide-vue-next";
import type { LucideIcon } from "lucide-vue-next";

interface Route {
  name: string;
  path: string;
  component: Component;
  icon: LucideIcon;
  selectedColor: string;
  addToNav?: boolean;
}

export const routes: Route[] = [
  {
    name: "About",
    path: "/",
    component: AboutView,
    icon: UserIcon,
    selectedColor: "red-light",
  },
  {
    name: "About",
    path: "/about",
    component: AboutView,
    icon: UserIcon,
    selectedColor: "red-light",
    addToNav: true,
  },
  {
    name: "Skills",
    path: "/skills",
    component: SkillsView,
    icon: CodeIcon,
    selectedColor: "orange-light",
    addToNav: true,
  },
  {
    name: "Experiences",
    path: "/experiences",
    component: ExperiencesView,
    icon: BriefcaseIcon,
    selectedColor: "yellow-light",
    addToNav: true,
  },
  {
    name: "Education",
    path: "/education",
    component: EducationView,
    icon: GraduationCapIcon,
    selectedColor: "green-light",
    addToNav: true,
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectsView,
    icon: FolderCodeIcon,
    selectedColor: "cyan-light",
  },
  {
    name: "Certifications",
    path: "/certifications",
    component: CertificationsView,
    icon: TrophyIcon,
    selectedColor: "blue-light",
    addToNav: true,
  },
  {
    name: "Contact",
    path: "/contact",
    component: ContactView,
    icon: MailIcon,
    selectedColor: "purple-light",
    addToNav: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
