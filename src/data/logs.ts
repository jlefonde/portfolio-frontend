import type { LogLevel, Log } from "../types";

export const logLevels: Record<string, LogLevel> = {
  INFO: {
    name: "INFO",
    color: "green-light",
  },
  DEBUG: {
    name: "DEBUG",
    color: "purple-light",
  },
  WARNING: {
    name: "WARNING",
    color: "orange-light",
  },
  ERROR: {
    name: "ERROR",
    color: "red-light",
  },
};

export const logs: Log[] = [
  {
    logLevel: logLevels.INFO,
    timestamp: "2025-01-15 09:23:45",
    message: "New certification: HashiCorp Terraform Associate",
  },
];
