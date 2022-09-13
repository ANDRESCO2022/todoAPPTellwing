import React from "react";

export const Task = ({ task, setNewTask, delTasks }) => {
	const handleDelete = () => {
		const questConfirmation = confirm(
			"Esta  seguro de eliminar la tarea.?"
		);
		if (questConfirmation) {
			delTasks(id);
		}
	};
	const { title, date, description, id } = task;
	return (
		<div className=" shadow-md px-5 py-10 rounded-lg mt-5 bg-slate-200">
			<p className="font-bold mb-3 text-gray-700 uppercase ml-2 ">
				titulo:{" "}
				<span className="font-normal normal-case ">{title}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase ">
				fecha:{" "}
				<span className="font-normal normal-case ml-2">{date}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				descripcion:{" "}
				<span className="font-normal normal-case ml-2">
					{description}
				</span>
			</p>
			<div className="flex space-x-4 ">
				<button
					className="bg-green-700 hover:bg-green-800 mt-5 p-2 px-5 px-5 rounded-md text-width font-bold"
					onClick={() => setNewTask(task)}
				>
					Actualizar
				</button>
				<button
					className=" bg-red-600 hover:bg-red-800 mt-5 p-2 px-5 px-5 rounded-md text-width font-bold"
					onClick={handleDelete}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};
