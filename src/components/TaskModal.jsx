import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TaskModal = ({ isOpen, onClose, onSave, editTask }) => {
  const [formData, setFormData] = useState({ title: '', dueDate: '', status: 'Pending' });

  useEffect(() => {
    if (editTask) setFormData(editTask);
    else setFormData({ title: '', dueDate: '', status: 'Pending' });
  }, [editTask, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
  <div className="bg-slate-900 rounded-2xl w-full max-w-md shadow-2xl border border-slate-800">
    <div className="flex justify-between items-center p-6 border-b border-slate-800">
      <h2 className="text-xl font-bold text-white">
        {editTask ? 'Edit Task' : 'New Task'}
      </h2>
      <button onClick={onClose} className="text-slate-400 hover:text-white">
        <X />
      </button>
    </div>

    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <input
        className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="Task title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
      />

      <input
        type="date"
        placeholder='Due Date'
        className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={formData.dueDate}
        onChange={(e) => setFormData({ ...formData, dueDate: e.target.value })}
      />

      <select
        className="w-full bg-slate-800 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500"
        value={formData.status}
        onChange={(e) => setFormData({ ...formData, status: e.target.value })}
      >
        <option>Pending</option>
        <option>Done</option>
      </select>

      <button className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-bold">
        {editTask ? 'Update Task' : 'Create Task'}
      </button>
    </form>
  </div>
</div>

  );
};

export default TaskModal;