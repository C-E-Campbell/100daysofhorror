import React, { Component } from "react";
import "./MovieList.style.scss";
export default class MovieList extends Component {
	render() {
		return (
			<div className='movie-list'>
				<div className='movie-item'>Movie 1</div>
				<div className='movie-item'>Movie 2</div>
				<div className='movie-item'>Movie 3</div>
				<div className='movie-item'>Movie 4</div>
			</div>
		);
	}
}
