import { ChevronRightIcon, TrashIcon } from "lucide-react";
import { useNavigate } from "react-router";

function Task(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    navigate(`/task?${query.toString()}`);
  }

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
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="p-2 rounded-md bg-gray-800"
          >
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
