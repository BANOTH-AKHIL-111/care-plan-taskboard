import { api } from "./client";
import type { Task } from "../types";

export const fetchTasks = async (patientId: string): Promise<Task[]> => {
  const res = await api.get(`/patients/${patientId}/tasks`);
  return res.data;
};

export const createTask = async (
  patientId: string,
  data: Partial<Task>
): Promise<Task> => {
  const res = await api.post(`/patients/${patientId}/tasks`, data);
  return res.data;
};

export const updateTask = async (
  taskId: string,
  data: Partial<Task>
): Promise<Task> => {
  const res = await api.patch(`/tasks/${taskId}`, data);
  return res.data;
};