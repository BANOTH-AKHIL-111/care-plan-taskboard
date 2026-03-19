export type Role = "nurse" | "dietician" | "social_worker";

export type TaskStatus = "todo" | "in_progress" | "completed";
export type TimeFilter = "overdue" | "today" | "upcoming";
export interface Patient {
  id: string;
  name: string;
  age?: number; // optional (backend may not send it)
}

export interface Task {
  id: string;
  patientId: string;

  title: string;
  description?: string;

  role: Role;
  status: TaskStatus;

  dueDate: string;     // ISO string
  createdAt: string;   // ISO string
}