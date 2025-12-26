# 📝 Task Tracker

A high-performance, responsive task management dashboard built with **React 18** and **Tailwind CSS**. This project demonstrates advanced state management, performance optimization, and persistent data architecture.

---

## 🚀 Features

- **Data Persistence:** Integrated with `LocalStorage` to ensure tasks remain saved even after a full browser refresh (Simulated Mock API).
- **Advanced Filtering:** Instant filtering by status (All, Pending, Done).
- **Smart Sorting:** Sort tasks dynamically by **Due Date** or **Task Name**.
- **Performance Optimized Search:** Implemented **Debounce Search** (300ms) to reduce unnecessary re-renders during user input.
- **Full CRUD Support:** Seamlessly add, edit, and delete tasks through a modern modal interface.
- **Mobile-First Design:** Fully responsive layout designed with Tailwind CSS, ensuring a premium experience on mobile, tablet, and desktop.

---

## 🛠️ Technical Stack

- **Framework:** React.js (Functional Components & Hooks)
- **Styling:** Tailwind CSS (Utility-first CSS)
- **Icons:** Lucide-React
- **Persistence:** Browser LocalStorage API
- **Optimization:** Custom Hooks (`useDebounce`) and Memoization (`useMemo`)

---

## 🏗️ Architecture & Design Decisions

### 1. Persistence
- To solve the common issue of data loss on page refresh
const [tasks, setTasks] = useState(() => mockApi.getTasks());
This ensures the state is populated from local storage before the initial render, preventing the application from accidentally overwriting data with an empty array.
### 2. Performance: Debouncing & Memoization
- Debouncing: I implemented a custom useDebounce hook for the search bar. This prevents the filtering logic from firing on every single keystroke, saving CPU cycles.
- useMemo: The filtering and sorting logic is wrapped in useMemo so that the list is only recalculated when the underlying data or search parameters change.
### 3. Modular Component Design
The logic is divided into:
- **App.jsx:** State Orchestrator.
- **Filters.jsx:** Pure UI for search and sort controls.
- **TaskList.jsx:** Handles conditional rendering and list logic.
- **TaskModal.jsx:** Controlled form logic for data entry.
### 📦 Installation & Setup
Clone the repository:
- code: git clone https://github.com/jprincy12/task-tracker.git
### Navigate to the directory:
- code: cd task-tracker
Install dependencies: npm install
### Start the development server:
code: npm run dev
### 📷 UI Preview
- **Header:** Clean typography with a clear Call to Action (CTA).
- **Filter Bar:** Glassmorphism style with responsive grid layout.
- **Task Cards:** Soft shadows, hover animations, and intuitive status indicators.
- **Modal:** Backdrop blur with smooth transitions for a native-app feel.
👤 Author
- **[PRINCY JAISWAL]**
- Date: December 2025
- Goal: Built as a technical assessment to showcase clean code,and performance optimization.