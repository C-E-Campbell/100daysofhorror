import React from "./node_modules/react";
import Header from "../Header/Header";
import "./YouWin.style.scss";
const YouWin = () => {
	return (
		<div>
			<Header />
			<div className='youwin'></div>
			<h2>Thanks For Playing!</h2>
		</div>
	);
};

export default YouWin;
