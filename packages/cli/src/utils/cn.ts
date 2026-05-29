/**
 * cn() utility — class merging helper
 * This file gets installed into user's project
 */
export const cnUtilSource = `import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
`;

/**
 * Generate the cn utility file content
 */
export function generateCNUtil(): string {
  return cnUtilSource;
}
