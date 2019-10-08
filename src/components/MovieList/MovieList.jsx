import React, { Component } from "react";
import "./MovieList.style.scss";
import MovieItem from "../MovieItem/MovieItem";
export default class MovieList extends Component {
	render() {
		const mappedMovies = this.props.movies.map(movie => {
			return (
				<MovieItem
					key={movie.id}
					id={movie.id}
					title={movie.title}
					myFunc={() => this.props.getID(movie.id)}
				/>
			);
		});

		return (
			<div className='movie-list'>
				<h2 className='movie-list-title'>Movies To Watch</h2>
				<input placeholder='Search Movies' />
				{mappedMovies}
			</div>
		);
	}
}
