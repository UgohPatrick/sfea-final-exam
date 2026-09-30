import { useState, useEffect } from 'react';

function Question25({ task, onToggle, onDelete }) {
  return (
    <div className={`flex justify-between p-3 mb-2 rounded ${task.completed? 'bg-green-100 line-through' : 'bg-gray-100'}`}>
      <span>{task.title}</span>
      <div>
        <input type="checkbox" checked={task.completed} onChange={() => onToggle(task.id)} />
        <button onClick={() => onDelete(task.id)} className="ml-2 text-red-500">Delete</button>
      </div>
    </div>
  );
}

function TaskList({ tasks, onToggle, onDelete }) {
  return tasks.map(task => <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />);
}

export default function Question25() {
  // 25a. Initial Data - 4 tasks with unique ID, title, completion status
  const [tasks, setTasks] = useState([
    { id: 1, title: "Complete JavaScript assignment", completed: false },
    { id: 2, title: "Read React documentation", completed: true },
    { id: 3, title: "Build Student Task Manager", completed: false },
    { id: 4, title: "Submit final project", completed: false },
  ]);
  const [newTask, setNewTask] = useState("");

  // Update document title with completed count
  useEffect(() => {
    const completed = tasks.filter(t => t.completed).length;
    document.title = `Tasks: ${completed}/${tasks.length} completed`;
  }, [tasks]);

  const addTask = () => {
    if(!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id? {...t, completed:!t.completed} : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id!== id));
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-4">Student Task Manager</h1>

      {/* Conditional Rendering */}
      <div className="mb-4">
        {tasks.length === 0? "No activities completed" : `Activities completed: ${tasks.filter(t=>t.completed).length}`}
      </div>

      <div className="flex mb-4">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} placeholder="New task" className="border p-2 flex-1" />
        <button onClick={addTask} className="bg-blue-500 text-white px-4 ml-2 rounded">Add</button>
      </div>

      <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};