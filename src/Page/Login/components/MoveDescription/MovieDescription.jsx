import React, { Component } from "react";
import "./MovieDescription.style.scss";
import axios from "axios";
export default class MovieDescription extends Component {
	constructor() {
		super();
		this.state = {
			movie: {}
		};
	}

	//4c3ee338
	componentDidMount() {
		axios
			.get("http://www.omdbapi.com/?apikey=4c3ee338&i=tt0087800&plot=full")
			.then(response => this.setState({ movie: response.data }));
	}

	render() {
		const {
			Actors,
			Poster,
			Director,
			Plot,
			Released,
			Runtime,
			Writer,
			Title
		} = this.state.movie;
		return (
			<div className='movie-description-box'>
				<h1>{Title}</h1>
				<img src={Poster} alt='movie poster' />
				<h3>{`Cast: ${Actors}`}</h3>
				<p>{`Plot: ${Plot}`}</p>
				<p>{`Director: ${Director}`}</p>
				<p>{`Writer: ${Writer}`}</p>
				<p>{`Released: ${Released}`}</p>
				<p>{`Runtime: ${Runtime}`}</p>
			</div>
		);
	}
}
