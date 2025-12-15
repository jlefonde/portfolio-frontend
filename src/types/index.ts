export interface Contact {
  icon: string;
  href: string;
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

export interface About {
  location: string;
  status: string;
  lookingFor: string;
  currently: string;
  description: string;
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
  label?: string;
  percentage: number;
  mediumThreshold?: number;
  highThreshold?: number;
}

export interface Category extends Tag {}

export interface Stack extends Tag {
  iconList?: string;
  icon?: string;
  categories: Category[];
}

export interface Skill {
  stack: Stack;
  percentage: number;
  featured: boolean;
}

export interface Project {
  name: string;
  highlight: string;
  tags: Tag[];
  featured: boolean;
}
