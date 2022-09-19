export const ErrorComponent = ({ message }) => {
	return (
		<div className="p-3 mb-3 rounded md bg-red-600	 font-bold-400 upercase text-center text-white">
			<p>{message}</p>
		</div>
	);
};
