import React from "./node_modules/react";
import "./MovieItem.style.scss";
const MovieItem = props => {
	return (
		<div className='movie-item'>
			<a>{props.title}</a>
			<div className='icon-box'>
				<i className='fas fa-minus-circle delete-movie'></i>
			</div>
		</div>
	);
};

export default MovieItem;
