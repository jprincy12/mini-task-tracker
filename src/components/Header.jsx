import React from 'react';
import { Plus } from 'lucide-react';

const Header = ({ onAddTask }) => (
  <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
    <div className="text-center md:text-left">
      <h1 className="text-4xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
        Task Tracker
      </h1>
      <p className="text-slate-400 mt-2">Organize your work efficiently</p>
    </div>

    <button
      onClick={onAddTask}
      className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-blue-600/30 transition-all active:scale-95"
    >
      <Plus size={22} /> Add Task
    </button>
  </div>
);


export default Header;