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

Content.defaultProps = {
	name: "not set yet",
};

Content.propTypes = {
	name: React.PropTypes.string,
};

export default Content;
