import React, { Component } from "react";
import moment from "moment";
import "./Login.style.scss";

import UserBox from "./components/UserBox/UserBox";
import MovieList from "./components/MovieList/MovieList";
import MovieDescription from "./components/MoveDescription/MovieDescription";
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			youtubeTrailer: {},
			acctStart: null,
			acctEnd: null
		};
	}

	componentDidMount() {
		let getStart = moment().format("LL");
		let getEnd = moment()
			.add(1, "year")
			.format("LL");
		this.setState({ acctStart: getStart, acctEnd: getEnd });
	}

	render() {
		return (
			<div className='dashboard'>
				<UserBox
					acctStart={this.state.acctStart}
					acctEnd={this.state.acctEnd}
				/>
				<MovieList />
				<MovieDescription />
			</div>
		);
	}
}
