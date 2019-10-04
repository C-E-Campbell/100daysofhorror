import React from "react";
import Header from "../Header/Header";
import "./Hero.style.scss";

const Hero = () => {
	return (
		<div className='hero'>
			<Header />
			<div className='hero-text-container'>
				<div className='hero-cta-box'>
					<h1>Can you live through the challenge?</h1>
					<p>
						<span className='red'>Tempt Fate. </span>Take the 100 day horror
						movie challenge.
					</p>
					<a href='#'>Read More</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
