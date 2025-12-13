import type { Contact, Availability } from "../types";

export const CONTACTS = {
  email: {
    title: "Email",
    icon: "lucide:at-sign",
    color: "orange-light",
    href: "mailto:contact@jorislefondeur.com",
    linkText: "contact@jorislefondeur.com",
  },
  github: {
    title: "Github",
    icon: "octicon:mark-github-24",
    color: "purple-light",
    href: "https://github.com/jlefonde",
    linkText: "github.com/jlefonde",
  },
  linkedin: {
    title: "LinkedIn",
    icon: "devicon-plain:linkedin",
    color: "blue-light",
    href: "https://linkedin.com/in/jorislefondeur-aa784237b",
    linkText: "linkedin.com/in/jorislefondeur",
  },
} as const satisfies Record<string, Contact>;

export const availability: Availability = {
  location: "Thionville, France",
  currently: "Student at 42 Luxembourg",
  lookingFor: "Junior Devops Position",
  openTo: "Hybrid",
  available: "Immediately",
};
