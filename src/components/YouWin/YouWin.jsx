import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
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
