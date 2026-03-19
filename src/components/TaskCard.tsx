import type { Task } from "../types";

type Props = {
  task: Task;
  onUpdate: (id: string, data: Partial<Task>) => void;
};

export const TaskCard = ({ task, onUpdate }: Props) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "12px",
        marginBottom: "10px",
        background: "#fff",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
      }}
    >
      <h4 style={{ margin: "0 0 5px" }}>{task.title}</h4>
      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        Role: <b>{task.role}</b>
      </p>
      <p style={{ margin: "4px 0", fontSize: "14px" }}>
        Status: <b>{task.status}</b>
      </p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => onUpdate(task.id, { status: "in_progress" })}>
          Start
        </button>
        <button
          style={{ marginLeft: "8px" }}
          onClick={() => onUpdate(task.id, { status: "completed" })}
        >
          Complete
        </button>
      </div>
    </div>
  );
};