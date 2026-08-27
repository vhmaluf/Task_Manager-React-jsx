import { useSearchParams, useNavigate } from "react-router";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();

  function onBackClick() {
    navigate(-1);
  }

  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={onBackClick}
            className="absolute left-0 bottom-0 top-1"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl font-bold text-center">Task Details</h1>
        </div>

        <div className="space-y-4 bg-gray-700 rounded-md shadow p-6 mt-2">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
