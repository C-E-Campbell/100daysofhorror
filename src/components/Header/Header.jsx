import React from "react";

import { Link } from "react-router-dom";
import "./Header.style.scss";

const Header = props => {
	return (
		<div className='header' id='header'>
			<div className='header-container'>
				<Link to='/' className='header-logo'></Link>
				<ul className='header-nav'>
					<Link to='/login' className='header-li'>
						Dashboard
					</Link>
					<Link to='/journal' className='header-li'>
						Journal
					</Link>
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
				</ul>
			</div>
		</div>
	);
};

export default Header;
