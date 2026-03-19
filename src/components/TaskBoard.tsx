import { usePatients } from "../hooks/usePatients";
import { PatientRow } from "./PatientRow";

export const TaskBoard = () => {
  const { data: patients = [], isLoading } = usePatients();

  if (isLoading) return <p>Loading patients...</p>;

  return (
    <div>
      {patients.map((patient) => (
        <PatientRow key={patient.id} patient={patient} />
      ))}
    </div>
  );
};