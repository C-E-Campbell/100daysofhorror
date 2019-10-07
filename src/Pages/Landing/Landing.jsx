import React from "react";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import Footer from "../../Components/Footer/Footer";
class Landing extends React.Component {
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

export default Landing;
