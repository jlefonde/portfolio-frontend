export function getColorHex(color: string) {
  if (typeof window !== "undefined") {
    return getComputedStyle(document.documentElement).getPropertyValue(`--color-${color}`).trim();
  }

  return;
}
