import React from "react";
import Header from "../Header/Header";
import { Link } from "react-scroll";
import "./Hero.style.scss";

class Hero extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<div className='hero'>
					<div className='hero-text-container'>
						<div className='hero-cta-box' data-aos='fade' data-aos-delay='50'>
							<h1>Can you live through the challenge?</h1>
							<p>
								<span className='red'>Tempt Fate. </span>Take the 100 day horror
								movie challenge.
							</p>
							<Link id='bigBtn' duration={600} smooth={true} to='toRules'>
								The Rules
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Hero;
