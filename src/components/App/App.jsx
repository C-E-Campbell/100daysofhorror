import React from "react";
import "./App.style.scss";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Footer from "../Footer/Footer";
class App extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<div>
				<Hero />
				<About />
				<Footer />
			</div>
		);
	}
}

export default App;
