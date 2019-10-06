import React, { Component } from "react";
import "./MovieList.style.scss";
import MovieItem from "../MovieItem/MovieItem";
export default class MovieList extends Component {
	render() {
		const mappedMovies = () => {
			if (this.state.movieList.length === 0) {
				return "";
			} else {
				return this.state.movieList.map(movie => {
					return <a>{movie.title}</a>;
				});
			}
		};
		return (
			<div className='movie-list'>
				<div className='header-logo'></div>
				<h2 className='movie-list-title'>Movies To Watch</h2>
				<input placeholder='Search Movies' />
				{this.props.movies}
			</div>
		);
	}
}
