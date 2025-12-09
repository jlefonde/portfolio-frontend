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

export type Availability = {
  location: string;
  currently: string;
  lookingFor: string;
  openTo: string;
  available: string;
};

export type Timeline = {
  name: string;
  location: string;
  from: string;
  to: string;
  description?: string;
  highlights?: string[];
  tags?: Tag[];
};

export type LogLevel = {
  name: "DEBUG" | "INFO" | "WARNING" | "ERROR";
  color: string;
};

export type Log = {
  timestamp: string;
  logLevel?: LogLevel;
  message: string;
};

export type Bar = {
  label: string;
  percentage: number;
  mediumThreshold?: number;
  highThreshold?: number;
};

export type Category = {
  name: "CI/CD" | "Cloud" | "Containerization" | "Monitoring" | "Infrastructure as Code" | "Programming";
};

export type Skill = {
  name: string;
  percentage: number;
  categories: Category[];
};
