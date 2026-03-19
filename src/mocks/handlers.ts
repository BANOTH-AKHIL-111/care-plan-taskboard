import { http, HttpResponse } from "msw";
import type { Patient, Task } from "../types/index";

const patients: Patient[] = [
  { id: "1", name: "John Doe", age: 45 },
  { id: "2", name: "Jane Smith", age: 50 },
];

let tasks: Task[] = [
  {
    id: "t1",
    patientId: "1",
    title: "Monthly Lab",
    role: "nurse",
    status: "todo",
    dueDate: new Date().toISOString(),
    createdAt: new Date().toISOString(),
  },
];

export const handlers = [
  // GET patients
  http.get("/api/patients", async () => {
    await delay();
    maybeFail();
    return HttpResponse.json(patients);
  }),

  // GET tasks
  http.get("/api/patients/:id/tasks", async ({ params }) => {
    await delay();
    maybeFail();

    const filtered = tasks.filter(
      (t) => t.patientId === params.id
    );

    return HttpResponse.json(filtered);
  }),

  // POST task
  http.post("/api/patients/:id/tasks", async ({ request, params }) => {
    await delay();
    maybeFail();

    const body = (await request.json()) as Partial<Task>;

    const newTask: Task = {
      id: Math.random().toString(),
      patientId: params.id as string,
      title: body.title ?? "Untitled",
      role: body.role ?? "nurse",
      status: body.status ?? "todo",
      dueDate: body.dueDate ?? new Date().toISOString(),
      createdAt: new Date().toISOString(),
    };

    tasks.push(newTask);

    return HttpResponse.json(newTask);
  }),

  // PATCH task
  http.patch("/api/tasks/:id", async ({ request, params }) => {
    await delay();
    maybeFail();

    const body = (await request.json()) as Partial<Task>;

    tasks = tasks.map((t) =>
      t.id === params.id ? { ...t, ...body } : t
    );

    return HttpResponse.json({ success: true });
  }),
];

// helpers
async function delay() {
  return new Promise((res) => setTimeout(res, 500));
}

function maybeFail() {
  if (Math.random() < 0.2) {
    throw new Error("Random API failure");
  }
}