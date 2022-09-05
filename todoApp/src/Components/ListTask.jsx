import { Task } from "./Task";

export const ListTask = ({ tasks, setNewTask,delTasks }) => {
	return (
		<div className="md:w1/2 lg:w2/5 mx-5">
			{tasks && tasks.length ? (
				<>
					<h2 className="font-black text-center text 3xl mt-5">
						Tareas a realizar.
					</h2>
					{tasks.map((task) => {
						return (
							<Task
								key={task.id}
								task={task}
								setNewTask={setNewTask}
								delTasks={delTasks}
							/>
						);
					})}
				</>
			) : (
				<h2 className="font-green text-center text 3xl mt-10">
					No hay tareas pendintes
				</h2>
			)}
		</div>
	);
};
