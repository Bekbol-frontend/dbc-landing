import axios from "axios";
import i18n from "../config/i18n";

export const baseURL = import.meta.env.VITE_BASE_URL;

export const API = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

API.interceptors.request.use((config) => {
  config.headers["Accept-Language"] = i18n.language || "en";
  return config;
});
