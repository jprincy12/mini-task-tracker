import React from 'react';
import TaskItem from './TaskItem';
import { Search } from 'lucide-react';

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-24 bg-slate-900 rounded-3xl border border-dashed border-slate-700">
  <Search size={40} className="mx-auto text-slate-600 mb-4" />
  <p className="text-slate-400 text-xl font-semibold">No tasks found</p>
</div>

    );
  }

  return (
    <div className="grid gap-4">
      {tasks.map(task => (
        <TaskItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default TaskList;