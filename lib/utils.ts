import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// cn merges Tailwind class strings with conflict resolution.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
