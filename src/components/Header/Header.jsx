import React from "react";
import "./Header.style.scss";

const Header = props => {
	return (
		<div className='header'>
			<div className='header-container'>
				<div className='header-logo'></div>
				<ul className='header-nav'>
					<li className='header-li'>Login</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
