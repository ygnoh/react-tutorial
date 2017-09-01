import React from "react";

class Content extends React.Component {
	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<h4>Content loaded successfully</h4>
			</div>
		);
	};
}

export default Content;
