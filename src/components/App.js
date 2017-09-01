import React from "react";
import Header from "./Header";
import Content from "./Content";

class App extends React.Component {
	alertMethod() {
		let alertText = "alert fired";
		
		alert(alertText);
	};

	render() {
		return (
			<div>
				<button onClick={this.alertMethod}>alert</button>
				<Header name="header starts from here"/>
				<Content />
			</div>
		);
	};
}

export default App;
