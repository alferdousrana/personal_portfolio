const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

const BACKEND_BASE_URL = API_BASE_URL.replace("/api", "");

export const getMediaUrl = (path) => {
  if (!path) return "";

  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  if (path.startsWith("/images/")) {
    return path;
  }

  if (path.startsWith("/media/")) {
    return `${BACKEND_BASE_URL}${path}`;
  }

  return `${BACKEND_BASE_URL}/media/${path}`;
};