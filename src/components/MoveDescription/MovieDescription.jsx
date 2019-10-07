import React, { Component } from "react";
import "./MovieDescription.style.scss";
import axios from "axios";

import VideoModal from "../VideoModal/VideoModal";

export default class MovieDescription extends Component {
	constructor() {
		super();
		this.state = {
			movie: {},
			youtube: []
		};
	}

	//4c3ee338
	componentDidMount() {
		axios
			.get("http://www.omdbapi.com/?apikey=4c3ee338&i=tt0075005&plot=full")
			.then(response => this.setState({ movie: response.data }));

		axios
			.get(
				"https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyC-SL7LVSFJ19W8DuJzJKtwJWtvj_nxi7o'"
			)
			.then(response => console.log(response));
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
				<VideoModal />
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
