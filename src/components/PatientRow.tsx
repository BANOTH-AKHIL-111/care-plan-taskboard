import { useTasks } from "../hooks/useTasks";
import { useUpdateTask } from "../hooks/useUpdateTask";
import { TaskColumn } from "./TaskColumn";
import type { Patient, Role, TimeFilter } from "../types";

type Props = {
  patient: Patient;
  roleFilter: Role | "all";
  timeFilter: TimeFilter | "all";
};

export const PatientRow = ({ patient, roleFilter, timeFilter }: Props) => {
  const { data: tasks = [], isLoading } = useTasks(patient.id);
  const { mutate } = useUpdateTask();

  if (isLoading) return <p>Loading tasks...</p>;

  const today = new Date();

  const filteredTasks = tasks.filter((t) => {
    // Role filter
    if (roleFilter !== "all" && t.role !== roleFilter) return false;

    const due = new Date(t.dueDate);

    // Time filter
    if (timeFilter === "overdue" && due >= today) return false;

    if (
      timeFilter === "today" &&
      due.toDateString() !== today.toDateString()
    )
      return false;

    if (timeFilter === "upcoming" && due <= today) return false;

    return true;
  });

  const todo = filteredTasks.filter((t) => t.status === "todo");
  const inProgress = filteredTasks.filter(
    (t) => t.status === "in_progress"
  );
  const completed = filteredTasks.filter(
    (t) => t.status === "completed"
  );

  return (
    <div style={{ marginBottom: "40px" }}>
      <h2>{patient.name}</h2>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <TaskColumn
          title="Todo"
          tasks={todo}
          onUpdate={(id, data) => mutate({ id, data })}
        />
        <TaskColumn
          title="In Progress"
          tasks={inProgress}
          onUpdate={(id, data) => mutate({ id, data })}
        />
        <TaskColumn
          title="Completed"
          tasks={completed}
          onUpdate={(id, data) => mutate({ id, data })}
        />
      </div>
    </div>
  );
};