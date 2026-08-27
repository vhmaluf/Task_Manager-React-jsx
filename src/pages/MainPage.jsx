import { useState, useEffect } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";

function MainPage() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || [],
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
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

export default MainPage;
