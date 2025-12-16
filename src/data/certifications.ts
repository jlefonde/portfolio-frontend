import type { Certification } from '../types'
import { categories } from './categories'

export const certifications: Certification[] = [
  {
    name: 'Terraform Associate 003',
    issuer: 'HaschiCorp',
    logo: {
      path: '/certifications/hashicorp-terraform-associate-003.png',
      alt: 'HashiCorp Certified: Terraform Associate (003) badge',
    },
    issued: 'Oct 2025',
    expires: 'Oct 2027',
    verifyLink: 'https://www.credly.com/badges/7e953b86-4e48-426d-a313-249c1e6ef4bb/public_url',
    tags: [categories.iac!, categories.cloud!, { name: 'Terraform', icon: 'devicon:terraform' }],
  },
]
