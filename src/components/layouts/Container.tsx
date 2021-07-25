const Container: React.FunctionComponent = (props) => {
	return <div className="md:container md:mx-auto">{props.children}</div>;
};

export default Container;
