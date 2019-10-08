import React from "react";
import Header from "../Header/Header";
import { Link } from "react-scroll";
import "./Hero.style.scss";

class Hero extends React.Component {
	render() {
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
						<Link duration={600} smooth={true} to='toRules'>
							Read More
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
