import { useState, useEffect } from "react";
import { ErrorComponent } from "./ErrorComponent";

export const Form = ({ task, setTask, newTask, setNewTask }) => {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [description, setDescription] = useState("");
	const [error, setError] = useState(false);
	useEffect(() => {
		if (Object.keys(newTask).length > 0) {
			setTitle(newTask.title);
			setDate(newTask.date);
			setDescription(newTask.description);
		}
	}, [newTask]);
	const generarId = () => {
		const id = Math.random().toString(10).substr(2);
		return id;
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if ([title, date, description].includes("")) {
			setError(true);
			return;
		}
		setError(false);
		const dataTask = {
			title,
			date,
			description,
		};

		if (newTask.id) {
			dataTask.id = newTask.id;
			const updateTask = task.map((taskRes) =>
				taskRes.id === newTask.id ? dataTask : taskRes
			);
			setTask(updateTask);
			setNewTask({});
		} else {
			(dataTask.id = generarId()), setTask([...task, dataTask]);
		}
		setTitle("");
		setDescription("");
		setDate("");
	};
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5">
			<h2 className="font-black text-center text-3xl mt-5 mb-3">
				Crear Tareas
			</h2>

			<form
				onSubmit={handleSubmit}
				className="bg-white shadow-md rounded-lg"
			>
				{error && (
					<ErrorComponent message="debe diligenciar los campos" />
				)}
				<div className="md-5">
					<label
						htmlFor="titulo"
						className="block text-gray-700 font-bold ml-2 "
					>
						Titulo:
					</label>

					<input
						id="titulo"
						className="border-b-2 w-full p-2 mt-2 rounded-md placeholder-grey-700 focus:outline-none"
						type="text"
						placeholder="titulo de  la tarea"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					/>
				</div>
				<div className="md-5">
					<label
						htmlFor="fecha"
						className="block text-gray-700 font-bold ml-2"
					>
						Fecha:
					</label>
					<input
						id="fecha"
						className="border-b-2 w-full p-2 mt-2 rounded-md placeholder-grey-700 focus:outline-none"
						type="date"
						placeholder="fecha de tarea"
						value={date}
						onChange={(e) => setDate(e.target.value)}
					/>
				</div>
				<div>
					<label
						htmlFor="descripcion"
						className="block text-gray-700 font-bold ml-2"
					>
						Descripcion:
					</label>
					<textarea
						id="titulo"
						className="border-b-2 w-full p-2 mt-2 rounded-md placeholder-grey-700 mb-2 focus:outline-none"
						type="text"
						placeholder="Descripcion"
						value={description}
						onChange={(e) => setDescription(e.target.value)}
					/>
				</div>
				{!newTask.id ? (
					<input
						type="submit"
						className="bg-blue-700 w-full text-white text-xl font-bold rounded-lg cursor-pointer h-full"
						value="crear tarea"
					/>
				) : (
					<input
						type="submit"
						className="bg-green-700 w-full text-white font-bold rounded-lg cursor-pointer h-full"
						value="Actualizar Tarea"
					/>
				)}
			</form>
		</div>
	);
};
