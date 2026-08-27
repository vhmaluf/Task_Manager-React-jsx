import { useState } from "react";

function AddTask(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title, description);
  return (
    <div className="bg-gray-700 rounded-md shadow p-6 space-y-4 flex flex-col">
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        className="w-full outline-slate-400 px-4 py-2 bg-slate-500 rounded-md"
        id="title"
        onChange={(e) => setTitle(e.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="w-full outline-slate-400 px-4 py-2 bg-slate-500 rounded-md"
        id="description"
        onChange={(e) => setDescription(e.target.value)}
      ></input>
      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Por favor, preencha todos os campos");
          }
          props.onAddTaskClick(title, description);
          setTitle("");
          document.getElementById("title").value = "";
          setDescription("");
          document.getElementById("description").value = "";
        }}
        className="bg-gray-800 rounded-md px-4 py-2 font-medium"
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
