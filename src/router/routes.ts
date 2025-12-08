import { type RouteRecordRaw } from "vue-router";
import AboutView from "../views/About.vue";
import SkillsView from "../views/Skills.vue";
import ExperiencesView from "../views/Experiences.vue";
import EducationView from "../views/Education.vue";
import ProjectsView from "../views/Projects.vue";
import CertificationsView from "../views/Certifications.vue";
import ContactView from "../views/Contact.vue";
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

interface RouteMetadata {
  icon?: LucideIcon;
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
    icon: UserIcon,
    primaryColor: "red-light",
    secondaryColor: "red-dark",
    addToNav: true,
  },
  {
    name: "Skills",
    path: "/skills",
    component: SkillsView,
    icon: CodeIcon,
    primaryColor: "orange-light",
    secondaryColor: "orange-dark",
    addToNav: true,
  },
  {
    name: "Experiences",
    path: "/experiences",
    component: ExperiencesView,
    icon: BriefcaseIcon,
    primaryColor: "yellow-light",
    secondaryColor: "yellow-dark",
    addToNav: true,
  },
  {
    name: "Education",
    path: "/education",
    component: EducationView,
    icon: GraduationCapIcon,
    primaryColor: "green-light",
    secondaryColor: "green-dark",
    addToNav: true,
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectsView,
    icon: FolderCodeIcon,
    primaryColor: "cyan-light",
    secondaryColor: "cyan-dark",
    addToNav: true,
  },
  {
    name: "Certifications",
    path: "/certifications",
    component: CertificationsView,
    icon: TrophyIcon,
    primaryColor: "blue-light",
    secondaryColor: "blue-dark",
    addToNav: true,
  },
  {
    name: "Contact",
    path: "/contact",
    component: ContactView,
    icon: MailIcon,
    primaryColor: "purple-light",
    secondaryColor: "purple-dark",
    addToNav: true,
  },
];
