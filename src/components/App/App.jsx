import React from "react";
import "./App.style.scss";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Header />
				<Hero />
			</div>
		);
	}
}

export default App;
