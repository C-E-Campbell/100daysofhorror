import React, { Component } from "react";
import moment from "moment";
import "./Login.style.scss";
//import curatedMovies from "../../assetsAndApi/assets/myAPI.json";
import UserBox from "../../Components/UserBox/UserBox";
import MovieList from "../../Components/MovieList/MovieList";
import DiffModal from "../../Components/DiffModal/DiffModal";
import MovieDescription from "../../Components/MoveDescription/MovieDescription";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Axios from "axios";
export default class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			youtubeTrailer: {},
			acctStart: null,
			acctEnd: null,
			movieList: [],
			movieItem: [],
			difficultyFlag: false,
			difficulty: "",
			currentMovie: 2
		};

		this.getID = this.getID.bind(this);
		this.myModalFunc = this.myModalFunc.bind(this);
	}

	componentDidMount() {
		let getStart = moment().format("LL");
		this.setState({ acctStart: getStart });

		Axios.get("http://localhost:8290/api/movies").then(response => {
			this.setState({ movieList: response.data });
		});

		Axios.get(
			`http://localhost:8290/api/movies/${this.state.currentMovie}`
		).then(response => this.setState({ movieItem: response.data.imdb }));
	}

	getID(id) {
		this.setState({ currentMovie: id });
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
		if (!this.state.difficultyFlag) {
			return <DiffModal myModalFunc={this.myModalFunc} />;
		} else {
			return (
				<div>
					<Header />
					<div className='dashboard'>
						<UserBox
							difficulty={this.state.difficulty}
							acctStart={this.state.acctStart}
							acctEnd={this.state.acctEnd}
						/>
						<MovieList getID={this.getID} movies={this.state.movieList} />
						<MovieDescription />
					</div>
					<Footer />
				</div>
			);
		}
	}
}
