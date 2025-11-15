import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function getParentRoute(location) {
  const segments = location.pathname.replace(/^\/+/, "").split("/");
  return segments.length > 0 ? `/${segments[0]}` : "/";
}

export function getChildRoute(location) {
  const segments = location.pathname.replace(/^\/+/, "").split("/");
  return segments.length > 1 ? segments[1] : null;
}

