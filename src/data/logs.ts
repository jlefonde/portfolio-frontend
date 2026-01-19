import type { LogLevel, Log } from '../types'

export const logLevels: Record<string, LogLevel> = {
  INFO: {
    name: 'INFO',
    color: 'green-light',
  },
  DEBUG: {
    name: 'DEBUG',
    color: 'purple-light',
  },
  WARNING: {
    name: 'WARNING',
    color: 'orange-light',
  },
  ERROR: {
    name: 'ERROR',
    color: 'red-light',
  },
}

export const logs: Log[] = [
  {
    logLevel: logLevels.WARNING,
    timestamp: '2026-01-12',
    message: 'Project started: devops-vm',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2025-10-29',
    message: 'New certification: HashiCorp Terraform Associate',
  },
  {
    logLevel: logLevels.DEBUG,
    timestamp: '2025-10-10',
    message: 'Skill acquired: Terraform',
  },
  {
    logLevel: logLevels.DEBUG,
    timestamp: '2025-09-17',
    message: 'Skill acquired: Go',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2025-09-17',
    message: 'Project completed: taskmaster',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2025-08-19',
    message: 'Project completed: matt-daemon',
  },
  {
    logLevel: logLevels.DEBUG,
    timestamp: '2025-04-15',
    message: 'Skill acquired: Kubernetes',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2025-04-15',
    message: 'Project completed: inception-of-things',
  },
  {
    logLevel: logLevels.DEBUG,
    timestamp: '2025-03-18',
    message: 'Skill acquired: Ansible',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2025-03-18',
    message: 'Project completed: cloud-1',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2025-02-26',
    message: 'Project completed: transcendence',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2024-11-19',
    message: 'Project completed: webserv',
  },
  {
    logLevel: logLevels.INFO,
    timestamp: '2024-09-27',
    message: 'Project completed: 42-seconds',
  },
]
