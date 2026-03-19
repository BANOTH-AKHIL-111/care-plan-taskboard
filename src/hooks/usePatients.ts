import { useQuery } from "@tanstack/react-query";
import { fetchPatients } from "../api/patients";

export const usePatients = () => {
  return useQuery({
    queryKey: ["patients"],
    queryFn: fetchPatients,
    retry: 2, // retry on failure (important)
  });
};