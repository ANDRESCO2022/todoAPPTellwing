import React from "react";

export const Task = ({ task, setNewTask, delTasks }) => {
	const handleDelete = () => {
		const questConfirmation = confirm(
			"Esta  seguro de eliminar la tarea?"
		);
		if (questConfirmation) {
			delTasks(id);
		}
	};
	const { title, date, description, id } = task;
	return (
		<div className="bg-white shadow-md px-5 py-10 rounded-lg mt-5">
			<p className="font-bold mb-3 text-gray-700 uppercase ">
				titulo:{" "}
				<span className="font-normal normal-case ">{title}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase ">
				fecha: <span className="font-normal normal-case">{date}</span>
			</p>
			<p className="font-bold mb-3 text-gray-700 uppercase">
				descripcion:{" "}
				<span className="font-normal normal-case">{description}</span>
			</p>
			<div className="flex-justify-around">
				<button
					className="bg-green-300 hover:bg-green-800 mt-5 p-2 px-5 px-5 rounded-md text-width font-bold"
					onClick={() => setNewTask(task)}
				>
					Actualizar
				</button>
				<button
					className=" bg-red-300 hover:bg-red-800 mt-5 p-2 px-5 px-5 rounded-md text-width font-bold"
					onClick={handleDelete}
				>
					Eliminar
				</button>
			</div>
		</div>
	);
};
