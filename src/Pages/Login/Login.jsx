import React, { Component } from "react";
import moment from "moment";
import "./Login.style.scss";
//import curatedMovies from "../../assetsAndApi/assets/myAPI.json";
import UserBox from "../../Components/UserBox/UserBox";
import MovieList from "../../Components/MovieList/MovieList";
import MovieDescription from "../../Components/MoveDescription/MovieDescription";
import Axios from "axios";
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			youtubeTrailer: {},
			acctStart: null,
			acctEnd: null,
			movieList: [],
			movieFlag: false
		};
		this.getID = this.getID.bind(this);
	}

	componentDidMount() {
		let getStart = moment().format("LL");
		let getEnd = moment()
			.add(1, "year")
			.format("LL");
		this.setState({ acctStart: getStart, acctEnd: getEnd });
		Axios.get("http://localhost:8290/api/movies").then(response =>
			this.setState({ movieList: response.data })
		);
	}

	getID(id) {
		console.log(id);
	}

	render() {
		return (
			<div className='dashboard'>
				<UserBox
					acctStart={this.state.acctStart}
					acctEnd={this.state.acctEnd}
				/>
				<MovieList getID={this.getID} movies={this.state.movieList} />
				<MovieDescription />
			</div>
		);
	}
}
