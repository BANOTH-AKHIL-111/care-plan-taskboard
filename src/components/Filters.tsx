import type { Role, TimeFilter } from "../types";

type Props = {
  role: Role | "all";
  time: TimeFilter | "all";
  setRole: (r: Role | "all") => void;
  setTime: (t: TimeFilter | "all") => void;
};

export const Filters = ({ role, time, setRole, setTime }: Props) => {
  return (
    <div style={{ marginBottom: "20px", display: "flex", gap: "10px" }}>
      <select value={role} onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
  setRole(e.target.value as Role | "all")
}>
        <option value="all">All Roles</option>
        <option value="nurse">Nurse</option>
        <option value="dietician">Dietician</option>
        <option value="social_worker">Social Worker</option>
      </select>

      <select value={time} onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
  setTime(e.target.value as TimeFilter | "all")
}>
        <option value="all">All Time</option>
        <option value="overdue">Overdue</option>
        <option value="today">Today</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
};