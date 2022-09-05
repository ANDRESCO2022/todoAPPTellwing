import { Form } from "./Components/Form";
import { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { ListTask } from "./Components/ListTask";

function App() {
	const [task, setTask] = useState([]);
	const [newTask, setNewTask] = useState({});
	useEffect(() => {
	const getLocalTask = () => {
		const localTask = 
		JSON.parse(localStorage.getItem("task")) ?? [];
		setTask(localTask);
	};
	getLocalTask();

		},[])

	useEffect(() => {
		localStorage.setItem("task", JSON.stringify(task));
	}, [task]);
	const delTasks = (id) => {
		const tempTask = task.filter((res) => res.id !== id);
		setTask(tempTask);
	};
	return (
		<div className="container mx-auto mt-20">
			<Header />
			<div className="mt-12 md:flex">
				<Form
					setTask={setTask}
					task={task}
					newTask={newTask}
					setNewTask={setNewTask}
				/>
				<ListTask
					tasks={task}
					setNewTask={setNewTask}
					delTasks={delTasks}
				/>
			</div>
		</div>
	);
}

export default App;
