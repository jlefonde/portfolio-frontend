import type { LucideIcon } from "lucide-vue-next";
import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export type Contact = {
  title: string;
  icon: LucideIcon | IconDefinition;
  color: string;
  href: string;
  linkText: string;
};

export type Tag = {
  name: string;
  textColor?: string;
  bgColor?: string;
};

export type Certification = {
  name: string;
  issuer: string;
  logoSrc: string;
  issued: string;
  expires: string;
  verifyLink?: string;
  tags?: Tag[];
};
