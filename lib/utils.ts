import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function dateCalc(date: Date): string {
  const now = new Date();
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const diffMonths =
    now.getMonth() -
    date.getMonth() +
    12 * (now.getFullYear() - date.getFullYear());
  const diffYears = now.getFullYear() - date.getFullYear();
  if (diffYears > 1) {
    return `${diffYears} years ago`;
  } else if (diffYears === 1) {
    return `Last year`;
  } else if (diffMonths > 1) {
    return `${diffMonths} months ago`;
  } else if (diffMonths === 1) {
    return "Last month";
  } else if (diffDays > 1) {
    return `${diffDays} days ago`;
  } else if (diffDays === 1) {
    return "Yesterday";
  } else {
    return "Today";
  }
}
