import React, { Component } from "react";
import "./Login.style.scss";

import UserBox from "./components/UserBox/UserBox";
import MovieList from "./components/MovieList/MovieList";
import MovieDescription from "./components/MoveDescription/MovieDescription";
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			youtubeTrailer: {}
		};
	}



	render() {
		return (
			<div className='dashboard'>
				<UserBox />
				<MovieList />
				<MovieDescription />
			</div>
		);
	}
}
