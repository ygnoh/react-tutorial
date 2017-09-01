import React from "react";

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counts: 0,
		};
	};

	incrCounts() {
		this.setState((prevState) => {
			return {
				counts: prevState.counts + 1,
			};
		});
	};

	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>Counts: {this.state.counts}</p>
				<button onClick={this.incrCounts.bind(this)}>Update</button>
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
