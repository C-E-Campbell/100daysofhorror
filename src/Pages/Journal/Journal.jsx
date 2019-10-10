import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import "./Journal.style.scss";
export default class Journal extends Component {
	constructor() {
		super();
		this.state = {
			journalData: []
		};
	}

	componentDidMount() {
		axios
			.get("/api/journal_entries")
			.then(response => this.setState({ journalData: response.data }))
			.catch(err =>
				console.log(`problem with request coming from journal.jsx. ${err}`)
			);
	}

	render() {
		const mappedData = this.state.journalData.map(entry => {
			return (
				<section key={entry.id}>
					<p>{entry.title}</p>
					<p>{entry.answer}</p>
				</section>
			);
		});
		return (
			<div>
				<Header />
				<section className='journal'>
					<div>{mappedData}</div>
				</section>

				<Footer />
			</div>
		);
	}
}
