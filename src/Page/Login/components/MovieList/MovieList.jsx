import React, { Component } from "react";
import "./MovieList.style.scss";

export default class MovieList extends Component {
	render() {
		return (
			<div className='movie-list'>
				<div className='header-logo'></div>
				<h2 className='movie-list-title'>Movies To Watch</h2>
				<input placeholder='Search Movies' />
			</div>
		);
	}
}
