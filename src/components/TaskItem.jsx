import React from 'react';
import { Edit2, Trash2, Calendar, CheckCircle2, Circle } from 'lucide-react';

const TaskItem = ({ task, onEdit, onDelete }) => (
  <div className="bg-slate-900 p-6 rounded-3xl border border-slate-800 hover:border-blue-500 transition-all flex justify-between items-center">
  <div className="flex items-center gap-5">
    <div className={`p-3 rounded-full ${
      task.status === 'Done'
        ? 'bg-green-500/20 text-green-400'
        : 'bg-blue-500/20 text-blue-400'
    }`}>
      {task.status === 'Done' ? <CheckCircle2 /> : <Circle />}
    </div>

    <div>
      <h3 className={`text-lg font-bold ${
        task.status === 'Done'
          ? 'line-through text-slate-500'
          : 'text-white'
      }`}>
        {task.title}
      </h3>
      <p className="text-sm text-slate-400 flex items-center gap-1 mt-1">
        <Calendar size={14} />
        {new Date(task.dueDate).toDateString()}
      </p>
    </div>
  </div>

  <div className="flex gap-3">
    <button
      onClick={() => onEdit(task)}
      className="p-3 hover:bg-blue-500/20 text-blue-400 rounded-xl"
    >
      <Edit2 size={18} />
    </button>

    <button
      onClick={() => onDelete(task.id)}
      className="p-3 hover:bg-red-500/20 text-red-400 rounded-xl"
    >
      <Trash2 size={18} />
    </button>
  </div>
</div>

);

export default TaskItem;