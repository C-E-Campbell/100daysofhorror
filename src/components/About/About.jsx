import React from "react";
import "./About.style.scss";
const About = () => {
	return (
		<div id='toRules' className='about'>
			<h2>Challenge Rules</h2>
			<div className='about-container'>
				<div className='about-item'>Two difficulties: Easy and MurderMe.</div>
				<div className='about-item'>
					Depending on the difficulty, you will have a set timeline.
				</div>
				<div className='about-item'>
					If you can complete the challenge you will receive an SVG to display
					anywhere. Post it as a badge of honor! Or... a badge of gore.
				</div>
				<div className='about-item'>
					Note: For now, Completing this challenge is merely an integrity check.{" "}
					<span className='red'>I can't stalk ALL of you.</span>
				</div>
			</div>
		</div>
	);
};

export default About;
