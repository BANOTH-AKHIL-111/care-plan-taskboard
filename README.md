# Care Plan Taskboard

A frontend system for managing patient care tasks in a dialysis center.
Built with React and TypeScript, the application allows staff to track, filter, and update tasks with robust handling of unreliable network conditions.

---

## 🚀 Features

* 📋 Patient-wise taskboard (Todo / In Progress / Completed)
* 👩‍⚕️ Role-based filtering (nurse, dietician, social worker)
* ⏱️ Time-based filtering (overdue, today, upcoming)
* ⚡ Optimistic UI updates for instant feedback
* 🔁 Retry mechanism for failed API calls
* 🛡️ Graceful handling of missing or partial backend data
* 📡 Simulated network delays and failures (MSW)

---

## 🧠 Architecture

The project follows a clean separation of concerns:

```bash
src/
 ├── api/          # API layer (axios calls)
 ├── hooks/        # React Query hooks (data + state)
 ├── components/   # UI components
 ├── mocks/        # MSW mock backend
 ├── types/        # Domain models
```

### Data Flow

UI → Hooks (React Query) → API Layer → Mock Backend (MSW)

---

## 🧩 Tech Stack

* React + TypeScript
* TanStack React Query
* Axios
* MSW (Mock Service Worker)
* Vite

---

## ⚙️ Setup Instructions

```bash
git clone https://github.com/BANOTH-AKHIL-111/care-plan-taskboard.git
cd care-plan-taskboard
npm install
npm run dev
```

App runs at:

```
http://localhost:5173
```

---

## 🧪 Failure Handling

To simulate real-world conditions:

* Random API failures (20% probability)
* Artificial network delay (500ms)
* Retry logic via React Query
* Optimistic updates with rollback on failure

### UI Behavior

* Loading states for patients and tasks
* Error message with retry button
* Empty state when no tasks match filters

---

## 🧾 Assumptions

* Each task belongs to one patient
* Each task is assigned to one role
* Task status is fixed (todo, in_progress, completed)
* Backend may return incomplete or missing fields

---

## ⚖️ Trade-offs

* Used mock backend instead of real API for simplicity
* Focused on logic and robustness over UI styling
* No authentication or role-based access control

---

## 🔮 Future Improvements

* Drag-and-drop task updates
* Real-time updates using WebSockets
* Role-based dashboards
* Task creation UI
* Authentication system

---


## ▶️ Demo Flow

1. View patients and their tasks
2. Filter tasks by role and time
3. Update task status (optimistic UI)
4. Experience simulated API failures
5. Retry failed requests

---

## 🤖 AI Usage

* Used AI tools for initial structure and debugging support
* Reviewed and modified all generated code manually
* Example: Adjusted optimistic update logic after identifying incorrect cache handling

---

## 📌 Key Highlights

* Clean architecture with separation of concerns
* Robust handling of network failures
* Type-safe data modeling with TypeScript
* Realistic simulation of backend behavior

---

## 📬 Submission

This project was developed as part of a SWE Internship Take-Home Assignment.

