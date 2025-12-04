import { AtSignIcon } from "lucide-vue-next";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import type { Contact } from "../types";

export const CONTACTS = {
  email: {
    title: "Email",
    icon: AtSignIcon,
    color: "orange-light",
    href: "mailto:contact@jorislefondeur.com",
    linkText: "contact@jorislefondeur.com",
  },
  github: {
    title: "Github",
    icon: faGithub,
    color: "purple-light",
    href: "https://github.com/jlefonde",
    linkText: "github.com/jlefonde",
  },
  linkedin: {
    title: "LinkedIn",
    icon: faLinkedin,
    color: "blue-light",
    href: "https://linkedin.com/in/jorislefondeur-aa784237b",
    linkText: "linkedin.com/in/jorislefondeur",
  },
} as const satisfies Record<string, Contact>;
