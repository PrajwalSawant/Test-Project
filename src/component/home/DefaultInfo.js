import React from "react";

const Info = ({ text }) => {
	return <p> {text} </p>;
};

Info.defaultProps = {
	text:
		"This is a default text",
};

export default Info;
