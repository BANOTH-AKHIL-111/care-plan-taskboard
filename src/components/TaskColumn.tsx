import type { Task } from "../types";
import { TaskCard } from "./TaskCard";

type Props = {
  title: string;
  tasks: Task[];
  onUpdate: (id: string, data: Partial<Task>) => void;
};

export const TaskColumn = ({ title, tasks, onUpdate }: Props) => {
  return (
    <div style={{ width: "30%", padding: "10px" }}>
      <h3>{title}</h3>
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onUpdate={onUpdate} />
      ))}
    </div>
  );
};