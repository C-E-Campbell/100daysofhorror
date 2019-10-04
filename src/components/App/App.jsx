import React from "react";
import "./App.style.scss";
import Header from "../Header/Header";
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}

export default App;
