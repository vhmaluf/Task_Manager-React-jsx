import { useState } from "react";
import Task from "./assets/components/Task";
import AddTask from "./assets/components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Task 3",
      description: "This is task 3",
      isCompleted: false,
    },
  ]);

  function onTaskClick(taskId) {
    const updatedTasks = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  function onDeleteTaskClick(taskId) {
    const updatedTasks = tasks.filter((task) => task.id != taskId);
    setTasks(updatedTasks);
  }

  function onAddTaskClick(title, description) {
    const addTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      isCompleted: false,
    };
    setTasks([...tasks, addTask]);
  }

  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl font-bold text-center">Task Manager</h1>
        <AddTask onAddTaskClick={onAddTaskClick} />
        <Task
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
