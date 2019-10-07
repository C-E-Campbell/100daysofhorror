import React from "react";
import { Route, Link } from "react-router-dom";
import "./Header.style.scss";

const Header = props => {
	return (
		<div className='header'>
			<div className='header-container'>
				<div className='header-logo'></div>
				<ul className='header-nav'>
					<Link to='/login' className='header-li'>
						Login
					</Link>
				</ul>
			</div>
		</div>
	);
};

export default Header;
