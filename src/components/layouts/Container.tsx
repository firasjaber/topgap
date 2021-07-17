const Container: React.FunctionComponent = (props) => {
	return (
		<div>
			this is ur container
			{props.children}
		</div>
	);
};

export default Container;
