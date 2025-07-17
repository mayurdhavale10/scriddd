// src/lib/utils/logger.ts

const isDev = process.env.NODE_ENV === "development";

export function logEvent(message: string, data?: any) {
  if (isDev) {
    console.log(`[LOG] ${message}`, data || "");
  }
}

export function logError(message: string, error?: any) {
  if (isDev) {
    console.error(`[ERROR] ${message}`, error || "");
  }
}

export function logWarn(message: string, data?: any) {
  if (isDev) {
    console.warn(`[WARN] ${message}`, data || "");
  }
}
