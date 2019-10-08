import React, { Component } from "react";
import moment from "moment";
import "./Login.style.scss";
import UserBox from "../../Components/UserBox/UserBox";
import MovieList from "../../Components/MovieList/MovieList";
//import DiffModal from "../../Components/DiffModal/DiffModal";
import MovieDescription from "../../Components/MoveDescription/MovieDescription";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Axios from "axios";

export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			acctStart: null,
			acctEnd: null,
			movieList: [],
			movieItem: [],
			difficultyFlag: false,
			difficulty: "",
			currentMovie: {},
			trailerID: ""
		};

		this.getID = this.getID.bind(this);
		this.myModalFunc = this.myModalFunc.bind(this);
	}

	async componentDidMount() {
		let getStart = moment().format("LL");
		this.setState({ acctStart: getStart });

		const getMovies = await Axios.get("http://localhost:8290/api/movies").then(
			response => {
				this.setState({ movieList: response.data });
			}
		);
	}

	async getID(movieData) {
		const { omdbID, youtubeID } = movieData;

		const showMovie = await Axios.get(
			`http://www.omdbapi.com/?apikey=4c3ee338&i=${omdbID}&plot=full`
		).then(response => {
			this.setState({ currentMovie: response.data, trailerID: youtubeID });
		});
	}

	myModalFunc(diff) {
		if (diff === "Easy") {
			this.setState({
				difficultyFlag: true,
				difficulty: diff,
				acctEnd: moment()
					.add(1, "year")
					.format("LL")
			});
		} else if (diff === "MurderMe") {
			this.setState({
				difficultyFlag: true,
				difficulty: diff,
				acctEnd: moment()
					.add(100, "day")
					.format("LL")
			});
		}
	}

	render() {
		// if (!this.state.difficultyFlag) {
		// 	return <DiffModal myModalFunc={this.myModalFunc} />;
		// } else {
		return (
			<div>
				<Header />
				<div className='dashboard'>
					<UserBox
						movieListLength={this.state.movieList.length}
						difficulty={this.state.difficulty}
						acctStart={this.state.acctStart}
						acctEnd={this.state.acctEnd}
					/>
					<MovieList getID={this.getID} movies={this.state.movieList} />
					<MovieDescription
						trailer={this.state.trailerID}
						movieData={this.state.currentMovie}
					/>
				</div>
				<Footer />
			</div>
		);
	}
	// }
}
