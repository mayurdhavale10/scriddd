// src/lib/utils/text-utils.ts

/**
 * Capitalizes the first letter of a word or sentence.
 */
export function capitalize(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Converts string to lowercase with dashes (useful for slugs).
 */
export function toSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Truncates a string after a given number of characters.
 */
export function truncate(text: string, length: number): string {
  return text.length > length ? text.slice(0, length) + "…" : text;
}
