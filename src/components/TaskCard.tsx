import type { Task } from "../types";

type Props = {
  task: Task;
  onUpdate: (id: string, data: Partial<Task>) => void;
};

export const TaskCard = ({ task, onUpdate }: Props) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "8px", marginBottom: "8px" }}>
      <h4>{task.title}</h4>
      <p>{task.role}</p>
      <p>Status: {task.status}</p>

      <button onClick={() => onUpdate(task.id, { status: "in_progress" })}>
        Start
      </button>

      <button onClick={() => onUpdate(task.id, { status: "completed" })}>
        Complete
      </button>
    </div>
  );
};