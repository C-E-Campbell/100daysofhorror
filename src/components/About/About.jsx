import React from "react";
import "./About.style.scss";
const About = () => {
	return (
		<div className='about'>
			<h2>Challenge Rules</h2>
			<div className='about-container'>
				<div>Two difficulties: Easy and MurderMe</div>
				<div>Depending on the difficulty, you will have a set time line.</div>
				<div>
					If you can complete the challenge you will receive an exclusive svg to
					display anywhere.
				</div>
			</div>
		</div>
	);
};

export default About;
