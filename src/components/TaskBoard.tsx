import { usePatients } from "../hooks/usePatients";
import { PatientRow } from "./PatientRow";
import { Filters } from "./Filters";
import { useState } from "react";
import type { Role, TimeFilter } from "../types";

export const TaskBoard = () => {
  const { data: patients = [], isLoading } = usePatients();

  const [role, setRole] = useState<Role | "all">("all");
  const [time, setTime] = useState<TimeFilter | "all">("all");

  if (isLoading) return <p>Loading patients...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Care Plan Taskboard</h1>

      <Filters role={role} time={time} setRole={setRole} setTime={setTime} />

      {patients.map((patient) => (
        <PatientRow
          key={patient.id}
          patient={patient}
          roleFilter={role}
          timeFilter={time}
        />
      ))}
    </div>
  );
};