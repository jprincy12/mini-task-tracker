import React, { useState } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';
import { useTasks } from './hooks/useTasks';

function App() {
  const {
    tasks,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    addTask,
    updateTask,
    deleteTask
  } = useTasks();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const openAddModal = () => {
    setEditingTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (task) => {
    setEditingTask(task);
    setIsModalOpen(true);
  };

  const handleSave = (taskData) => {
    editingTask ? updateTask(taskData) : addTask(taskData);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black p-6 text-slate-100">
      <div className="max-w-4xl mx-auto">
        <Header onAddTask={openAddModal} />

        <Filters
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <TaskList
          tasks={tasks}
          onEdit={openEditModal}
          onDelete={deleteTask}
        />
      </div>

      <TaskModal
        isOpen={isModalOpen}
        editTask={editingTask}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSave}
      />
    </div>
  );
}

export default App;
