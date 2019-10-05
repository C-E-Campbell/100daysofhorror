import React, { Component } from "react";
import "./Login.style.scss";
import UserBox from "./components/UserBox/UserBox";
import MovieList from "./components/MovieList/MovieList";
export default class Login extends Component {
	render() {
		return (
			<div className='dashboard'>
				<UserBox />
				<MovieList />
			</div>
		);
	}
}
