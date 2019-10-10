import React from "react";
import "./Footer.style.scss";

const Footer = () => {
	return (
		<div className='footer' id='footer'>
			<div className='footer-container'>
				<a
					href='https://charlescampbell.dev'
					target='_blank'
					rel='noopener noreferrer'
				>
					View My Portfolio
				</a>
				<a target='_blank' href='http://instagram.com' className='header-li'>
					<i className='fab fa-instagram'></i>
				</a>
				<a target='_blank' href='http://facebook.com' className='header-li'>
					<i className='fab fa-facebook-square'></i>
				</a>
				<a
					target='_blank'
					href='https://twitter.com/DaysHorror'
					className='header-li'
				>
					<i className='fab fa-twitter-square'></i>
				</a>
			</div>
		</div>
	);
};

export default Footer;
