import React from "react";
import "./App.style.scss";
import Hero from "../Hero/Hero";
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Hero />
			</div>
		);
	}
}

export default App;
