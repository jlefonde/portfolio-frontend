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
  color?: string;
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
    color: "red-light",
    addToNav: true,
  },
  {
    name: "Skills",
    path: "/skills",
    component: SkillsView,
    icon: CodeIcon,
    color: "orange-light",
    addToNav: true,
  },
  {
    name: "Experiences",
    path: "/experiences",
    component: ExperiencesView,
    icon: BriefcaseIcon,
    color: "yellow-light",
    addToNav: true,
  },
  {
    name: "Education",
    path: "/education",
    component: EducationView,
    icon: GraduationCapIcon,
    color: "green-light",
    addToNav: true,
  },
  {
    name: "Projects",
    path: "/projects",
    component: ProjectsView,
    icon: FolderCodeIcon,
    color: "cyan-light",
    addToNav: true,
  },
  {
    name: "Certifications",
    path: "/certifications",
    component: CertificationsView,
    icon: TrophyIcon,
    color: "blue-light",
    addToNav: true,
  },
  {
    name: "Contact",
    path: "/contact",
    component: ContactView,
    icon: MailIcon,
    color: "purple-light",
    addToNav: true,
  },
];
