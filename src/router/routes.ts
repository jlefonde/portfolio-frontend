import type { RouteRecordRaw } from "vue-router";
import AboutView from "../views/About.vue";
import SkillsView from "../views/Skills.vue";
import ExperiencesView from "../views/Experiences.vue";
import ProjectsView from "../views/Projects.vue";
import CertificationsView from "../views/Certifications.vue";

interface RouteMetadata {
  icon?: string;
  primaryColor?: string;
  secondaryColor?: string;
  addToNav?: boolean;
}

type Route = RouteRecordRaw & RouteMetadata;

export const routes: Route[] = [
  {
    path: "/",
    redirect: "/about",
  },
  {
    name: "About",
    path: "/about",
    component: AboutView,
    icon: "lucide:user",
    primaryColor: "purple-light",
    secondaryColor: "purple-dark",
    addToNav: true,
  },
  {
    name: "Skills",
    path: "/skills",
    component: SkillsView,
    icon: "lucide:code",
    primaryColor: "orange-light",
    secondaryColor: "orange-dark",
    addToNav: true,
  },
  {
    name: "Experiences",
    path: "/experiences",
    component: ExperiencesView,
    icon: "lucide:clipboard-clock",
    primaryColor: "red-light",
    secondaryColor: "red-dark",
    addToNav: true,
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectsView,
    icon: "lucide:folder-code",
    primaryColor: "green-light",
    secondaryColor: "green-dark",
    addToNav: true,
  },
  {
    name: "Certifications",
    path: "/certifications",
    component: CertificationsView,
    icon: "lucide:trophy",
    primaryColor: "blue-light",
    secondaryColor: "blue-dark",
    addToNav: true,
  },
];
