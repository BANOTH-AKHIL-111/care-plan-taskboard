import { useTasks } from "../hooks/useTasks";
import { useUpdateTask } from "../hooks/useUpdateTask";
import { TaskColumn } from "./TaskColumn";
import type { Patient } from "../types";

type Props = {
  patient: Patient;
};

export const PatientRow = ({ patient }: Props) => {
  const { data: tasks = [], isLoading } = useTasks(patient.id);
  const { mutate } = useUpdateTask();

  if (isLoading) return <p>Loading tasks...</p>;

  const todo = tasks.filter((t) => t.status === "todo");
  const inProgress = tasks.filter((t) => t.status === "in_progress");
  const completed = tasks.filter((t) => t.status === "completed");

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>{patient.name}</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TaskColumn title="Todo" tasks={todo} onUpdate={(id, data) => mutate({ id, data })} />
        <TaskColumn title="In Progress" tasks={inProgress} onUpdate={(id, data) => mutate({ id, data })} />
        <TaskColumn title="Completed" tasks={completed} onUpdate={(id, data) => mutate({ id, data })} />
      </div>
    </div>
  );
};