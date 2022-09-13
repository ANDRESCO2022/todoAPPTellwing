import { Task } from "./Task";

export const ListTask = ({ tasks, setNewTask,delTasks }) => {
	return (
		<div className="md:w-1/2 lg:w-2/5 mx-5 md:h-screen  overflow-y-auto">
			{tasks && tasks.length ? (
				<>
					<h2 className="font-black text-center text-3xl mb-10">
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
				<h2 className="font-black text-center text-3xl mt-10">
					No hay tareas pendintes
				</h2>
			)}
		</div>
	);
};
