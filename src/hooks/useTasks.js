import { useState, useEffect, useMemo } from 'react';
import { mockApi } from '../api/mockApi';
import { useDebounce } from './useDebounce';

export function useTasks() {
  const [tasks, setTasks] = useState(() => mockApi.getTasks());
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('date');

  const debouncedSearch = useDebounce(searchTerm, 300);

  useEffect(() => {
    mockApi.saveTasks(tasks);
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    return tasks
      .filter(task => {
        const matchesSearch = task.title
          .toLowerCase()
          .includes(debouncedSearch.toLowerCase());

        const matchesFilter =
          filterStatus === 'All' || task.status === filterStatus;

        return matchesSearch && matchesFilter;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.title.localeCompare(b.title);
        return new Date(a.dueDate) - new Date(b.dueDate);
      });
  }, [tasks, debouncedSearch, filterStatus, sortBy]);

  const addTask = (task) => {
    setTasks(prev => [...prev, { ...task, id: Date.now() }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(prev =>
      prev.map(t => (t.id === updatedTask.id ? updatedTask : t))
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return {
    tasks: filteredTasks,
    searchTerm,
    setSearchTerm,
    filterStatus,
    setFilterStatus,
    sortBy,
    setSortBy,
    addTask,
    updateTask,
    deleteTask
  };
}
