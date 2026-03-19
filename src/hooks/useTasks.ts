import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/tasks";

export const useTasks = (patientId: string) => {
  return useQuery({
    queryKey: ["tasks", patientId],
    queryFn: () => fetchTasks(patientId),
    enabled: !!patientId,
    retry: 2,
  });
};