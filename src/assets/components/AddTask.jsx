function AddTask(props) {
  return (
    <div className="bg-gray-700 rounded-md shadow p-6 space-y-4 flex flex-col">
      <input
        type="text"
        placeholder="Digite uma nova tarefa"
        className="w-full outline-slate-400 px-4 py-2"
        name="title"
      ></input>
      <input
        type="text"
        placeholder="Digite a descrição da tarefa"
        className="w-full outline-slate-400 px-4 py-2"
        name="description"
      ></input>
      <button
        className="bg-gray-800 rounded-md px-4 py-2 font-medium"
        onClick={() =>
          props.onAddTaskClick({
            title: document.querySelector('input[name="title"]').value,
            description: document.querySelector('input[name="description"]')
              .value,
          })
        }
      >
        Adicionar Tarefa
      </button>
    </div>
  );
}

export default AddTask;
