import { api } from "./client";
import type { Patient } from "../types";

export const fetchPatients = async (): Promise<Patient[]> => {
  const res = await api.get("/patients");
  return res.data;
};