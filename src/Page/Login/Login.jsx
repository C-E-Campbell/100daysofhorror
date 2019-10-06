import React, { Component } from "react";
import moment from "moment";
import "./Login.style.scss";
//import curatedMovies from "../../assetsAndApi/assets/myAPI.json";
import UserBox from "./components/UserBox/UserBox";
import MovieList from "./components/MovieList/MovieList";
import MovieDescription from "./components/MoveDescription/MovieDescription";
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
			<div className='dashboard'>
				<UserBox
					acctStart={this.state.acctStart}
					acctEnd={this.state.acctEnd}
				/>
				<MovieList movies={mappedMovies()} />
				<MovieDescription />
			</div>
		);
	}
}
