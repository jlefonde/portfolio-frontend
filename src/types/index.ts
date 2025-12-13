export interface Contact {
  title: string;
  icon: string;
  color: string;
  href: string;
  linkText: string;
}

export interface Tag {
  name: string;
  icon?: string;
  textColor?: string;
  bgColor?: string;
}

export interface Certification {
  name: string;
  issuer: string;
  logoSrc: string;
  issued: string;
  expires: string;
  verifyLink?: string;
  tags?: Tag[];
}

export interface Availability {
  location: string;
  currently: string;
  lookingFor: string;
  openTo: string;
  available: string;
}

export interface Timeline {
  name: string;
  organization: string;
  location: string;
  from: string;
  to: string;
  description?: string;
  highlights?: string[];
  logoSrc?: string;
  tags?: Tag[];
}

export interface LogLevel {
  name: "DEBUG" | "INFO" | "WARNING" | "ERROR";
  color: string;
}

export interface Log {
  timestamp: string;
  logLevel?: LogLevel;
  message: string;
}

export interface Bar {
  label: string;
  percentage: number;
  mediumThreshold?: number;
  highThreshold?: number;
}

export interface Category {
  name: "CI/CD" | "Cloud" | "Containerization" | "Monitoring" | "Infrastructure as Code" | "Programming";
}

export interface Skill {
  name: string;
  percentage: number;
  categories: Category[];
}

export interface Project {
  name: string;
  highlight: string;
  tags: Tag[];
  featured: boolean;
}
