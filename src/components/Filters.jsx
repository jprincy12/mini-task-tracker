import React from 'react';
import { Search } from 'lucide-react';

const Filters = ({ searchTerm, setSearchTerm, filterStatus, setFilterStatus, sortBy, setSortBy }) => (
  <div className="bg-slate-900/70 backdrop-blur-xl p-6 rounded-3xl border border-slate-800 mb-10 flex flex-col md:flex-row gap-4">
  <div className="relative flex-grow">
    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
    <input
      className="w-full pl-12 pr-4 py-3 bg-slate-800 text-white rounded-xl focus:ring-2 focus:ring-blue-500 outline-none"
      placeholder="Search tasks..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  </div>

  <select
    className="bg-slate-800 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500"
    value={filterStatus}
    onChange={(e) => setFilterStatus(e.target.value)}
  >
    <option value="All">All</option>
    <option value="Pending">Pending</option>
    <option value="Done">Done</option>
  </select>

  <select
    className="bg-slate-800 text-white px-4 py-3 rounded-xl focus:ring-2 focus:ring-blue-500"
    value={sortBy}
    onChange={(e) => setSortBy(e.target.value)}
  >
    <option value="date">By Date</option>
    <option value="name">By Name</option>
  </select>
</div>

);

export default Filters;