import type { Contact } from "../types";

export const CONTACTS = {
  email: {
    icon: "lucide:mail",
    href: "mailto:contact@jorislefondeur.com",
  },
  linkedin: {
    icon: "devicon-plain:linkedin",
    href: "https://linkedin.com/in/jorislefondeur",
  },
  github: {
    icon: "octicon:mark-github-24",
    href: "https://github.com/jlefonde",
  },
} as const satisfies Record<string, Contact>;
