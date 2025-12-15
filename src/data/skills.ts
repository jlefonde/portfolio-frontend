import type { Skill } from "../types";
import { stacks } from "./stacks";

export const skills: Skill[] = [
  {
    stack: stacks.docker!,
    percentage: 70,
    featured: true,
  },
  {
    stack: stacks.kubernetes!,
    percentage: 32,
    featured: true,
  },
  {
    stack: stacks.aws!,
    percentage: 70,
    featured: true,
  },
  {
    stack: stacks.terraform!,
    percentage: 90,
    featured: true,
  },
  {
    stack: stacks.ansible!,
    percentage: 70,
    featured: true,
  },
  {
    stack: stacks.githubactions!,
    percentage: 85,
    featured: true,
  },
  {
    stack: stacks.argocd!,
    percentage: 55,
    featured: true,
  },
  {
    stack: stacks.prometheus!,
    percentage: 35,
    featured: true,
  },
  {
    stack: stacks.grafana!,
    percentage: 40,
    featured: true,
  },
  {
    stack: stacks.elk!,
    percentage: 33,
    featured: true,
  },
  {
    stack: stacks.bash!,
    percentage: 70,
    featured: true,
  },
  {
    stack: stacks.go!,
    percentage: 75,
    featured: true,
  },
  {
    stack: stacks.python!,
    percentage: 75,
    featured: true,
  },
];
