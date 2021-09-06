const Button: React.FC = (props) => {
	return (
		<button
			type="button"
			className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-75 transition-transform"
		>
			{props.children}
		</button>
	);
};

export default Button;
