import React from "react";

class Content extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			counts: 0,
		};

		this.getRandNumb = this.getRandNumb.bind(this);
	};

	incrCounts() {
		this.setState((prevState) => {
			return {
				counts: prevState.counts + 1,
			};
		});
	};

	getRandNumb() {
		let value = Math.round(Math.random() * 100);
		this.props.onUpdate(value);
	};

	render() {
		return (
			<div>
				<p>{this.props.name}</p>
				<p>Counts: {this.state.counts}</p>
				<button onClick={this.incrCounts.bind(this)}>Update</button>
				<p>Random number: {this.props.value}</p>
				<button onClick={this.getRandNumb}>Get Random Number</button>
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
