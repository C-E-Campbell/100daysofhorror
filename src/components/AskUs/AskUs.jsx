import React from "react";
import { Link } from "react-scroll";
import "./AskUs.style.scss";

const AskUs = () => {
	return (
		<section className='ask-us' id='askus'>
			<section className='ask-us-container'>
				<div>
					<h2 data-aos='fade-up' data-aos-delay='200'>
						Would you like to see a movie added to the list? <br />
						Send us a note!
					</h2>
					<form>
						<input type='text' placeholder='Add this movie!' />
						<button>Send</button>
					</form>
				</div>
			</section>
			<Link id='pulse2' duration={400} smooth={true} to='header'>
				<i id='pulse2' class='fas fa-arrow-alt-circle-up fa-2x'></i>
			</Link>
		</section>
	);
};

export default AskUs;
