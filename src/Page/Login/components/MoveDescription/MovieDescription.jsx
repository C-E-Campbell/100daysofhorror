import React, { Component } from "react";
import "./MovieDescription.style.scss";
import axios from "axios";
export default class MovieDescription extends Component {
	//4c3ee338
	componentDidMount() {
		axios
			.get("http://www.omdbapi.com/?apikey=4c3ee338&s=nightmare+on+elm+street")
			.then(response => console.log(response.data));
	}

	render() {
		return (
			<div className='movie-description-box'>
				<h1>Movie Description</h1>
				<input onChange={e => this.setState({ searchTerm: e.target.value })} />
			</div>
		);
	}
}
