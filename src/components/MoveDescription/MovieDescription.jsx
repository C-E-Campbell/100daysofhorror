import React, { Component } from "react";
import "./MovieDescription.style.scss";
import axios from "axios";

import VideoModal from "../VideoModal/VideoModal";

export default class MovieDescription extends Component {
	constructor(props) {
		super(props);
		this.state = {
			movie: {},
			youtube: [],
			videoID: "cCfO1aB8CIE"
		};
	}

	//4c3ee338
	componentDidMount() {
		axios
			.get(
				`http://www.omdbapi.com/?apikey=4c3ee338&i=${this.props.movieID}&plot=full`
			)
			.then(response => this.setState({ videoID: response.data }));
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

		let videoID = `https://www.youtube.com/embed/${this.props.youtube}`;

		return (
			<div className='movie-description-box'>
				<h1>{this.state.movie.title}</h1>
				<img src={Poster} alt='movie poster' />
				<VideoModal src={videoID} />
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
