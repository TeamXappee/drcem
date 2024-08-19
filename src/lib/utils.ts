import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function monthsSince(year: string, month: string) {
  const today = new Date();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth() + 1;
  const monthsDifference =
    (currentYear - Number(year)) * 12 + (currentMonth - Number(month));
  return monthsDifference;
}
