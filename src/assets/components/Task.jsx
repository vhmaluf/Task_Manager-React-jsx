import { ChevronRightIcon, TrashIcon } from "lucide-react";

function Task(props) {
  return (
    <ul className="space-y-4 bg-gray-700 rounded-md shadow p-6 mt-2">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`p-2 rounded-md bg-gray-800 w-full text-left ${task.isCompleted && "line-through"}`}
          >
            {task.title}
          </button>
          <button className="p-2 rounded-md bg-gray-800">
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.onDeleteTaskClick(task.id)}
            className="p-2 rounded-md bg-gray-800"
          >
            <TrashIcon />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
