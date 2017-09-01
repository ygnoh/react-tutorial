import React from "react";

class Header extends React.Component {
	render() {
		return(
			<div>
				<p>{this.props.name}</p>
				<h4>Header loaded successfully</h4>
			</div>
		);
	};
}

export default Header;
