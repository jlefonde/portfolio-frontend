import type { Link } from '../types'
import ILucideMail from '~icons/lucide/mail'
import IDeviconPlainLinkedin from '~icons/devicon-plain/linkedin'
import IOcticonMarkGithub24 from '~icons/octicon/mark-github-24'

export const CONTACTS = {
  email: {
    name: 'Email',
    icon: ILucideMail,
    href: 'mailto:contact@jorislefondeur.com',
  },
  linkedin: {
    name: 'LinkedIn',
    icon: IDeviconPlainLinkedin,
    href: 'https://linkedin.com/in/jorislefondeur',
  },
  github: {
    name: 'GitHub',
    icon: IOcticonMarkGithub24,
    href: 'https://github.com/jlefonde',
  },
} as const satisfies Record<string, Link>
