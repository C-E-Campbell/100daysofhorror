import React from "react";
import "./AskUs.style.scss";
const AskUs = () => {
	return (
		<div className='ask-us'>
			<div className='ask-us-container'>
				<div>
					<h2 data-aos='fade-up'>
						Would you like to see a movie added to the list? Send us a note!
					</h2>
					<form>
						<input type='text' placeholder='Add this movie!' />
						<button>Send</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default AskUs;