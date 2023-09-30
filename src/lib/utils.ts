import { clsx } from "clsx";
import type { ClassValue as ClassValueType } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValueType[]) {
  return twMerge(clsx(inputs));
}
