import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // MSW will intercept this
  timeout: 5000,
});