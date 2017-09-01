import React from 'react';

class App extends React.Component {
	alertMethod() {
		let alertText = "alert fired";
		
		alert(alertText);
	};

	render() {
		return (
			<div>
				<h1>Hello React Skeleton</h1>
				<button onClick={this.alertMethod}>alert</button>
			</div>
		);
	};
}

export default App;
