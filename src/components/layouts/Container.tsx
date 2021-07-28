const Container: React.FunctionComponent = (props) => {
	return <div className="container md:mx-auto lg:max-w-4xl">{props.children}</div>;
};

export default Container;
