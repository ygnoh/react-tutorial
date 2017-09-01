import React from "react";
import Header from "./Header";
import Content from "./Content";

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			value: 0,
		};

		this.updateValue = this.updateValue.bind(this);
	};

	alertMethod() {
		let alertText = "alert fired";
		
		alert(alertText);
	};

	updateValue(randomValue) {
		this.setState({
			value: randomValue,
		});
	};

	render() {
		return (
			<div>
				<button onClick={this.alertMethod}>alert</button>
				<Header name="header starts from here"/>
				<Content onUpdate={this.updateValue}
						value={this.state.value}
				/>
			</div>
		);
	};
}

export default App;
