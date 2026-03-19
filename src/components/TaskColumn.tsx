import { TaskCard } from "./TaskCard";
import type { Task } from "../types";

type Props = {
  title: string;
  tasks: Task[];
  onUpdate: (id: string, data: Partial<Task>) => void;
};

export const TaskColumn = ({ title, tasks, onUpdate }: Props) => {
  return (
    <div style={{ width: "30%" }}>
      <h3>{title}</h3>

      {tasks.length === 0 ? (
        <p style={{ color: "#888" }}>No tasks</p>
      ) : (
        tasks.map((task) => (
          <TaskCard key={task.id} task={task} onUpdate={onUpdate} />
        ))
      )}
    </div>
  );
};