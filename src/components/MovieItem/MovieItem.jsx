import React from "react";
import "./MovieItem.style.scss";
const MovieItem = props => {
	return (
		<div className='movie-item'>
			<a onClick={props.myFunc}>{props.title}</a>
			<div className='icon-box'>
				<i className='fas fa-minus-circle delete-movie'></i>
			</div>
		</div>
	);
};

export default MovieItem;
