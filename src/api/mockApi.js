const STORAGE_KEY = 'tasks_data';

export const mockApi = {
  getTasks: () => {
    const data = localStorage.getItem(STORAGE_KEY);
    try {
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return []; 
    }
  },

  saveTasks: (tasks) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }
};