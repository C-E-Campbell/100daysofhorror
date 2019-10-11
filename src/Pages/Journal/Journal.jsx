import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import axios from "axios";
import "./Journal.style.scss";
import JournalEntry from "../../Components/JournalEntry/JournalEntry";

export default class Journal extends Component {
	constructor() {
		super();
		this.state = {
			journalData: [],
			entryData: [],
			entryFlag: false
		};
		this.deleteComment = this.deleteComment.bind(this);
		this.getEditInfo = this.getEditInfo.bind(this);
	}

	componentDidMount() {
		this.getEntries();
	}

	// get all journal entries and puts them in state
	getEntries = () => {
		axios
			.get("/api/journal_entries")
			.then(response => this.setState({ journalData: response.data }))
			.catch(err =>
				console.log(
					`problem with request coming from get in journal.jsx. ${err}`
				)
			);
	};

	//delete an entry on icon click
	deleteComment(id) {
		axios
			.delete(`/api/journal_entries/${id}`)
			.then(response => {
				this.setState({ journalData: response.data });
			})
			.catch(err =>
				console.log(
					`problem with request coming from delete journal.jsx. ${err}`
				)
			);
	}

	// get single entry info on icon click - put it in state
	getEditInfo(id) {
		axios
			.get(`/api/journal_entries/${id}`)
			.then(response => {
				this.setState({ entryData: response.data, entryFlag: true });
			})
			.catch(err =>
				console.log(
					`problem with request coming from get(single) journal.jsx. ${err}`
				)
			);
	}

	render() {
		const mappedData = this.state.journalData.map(entry => {
			return (
				<JournalEntry
					deleteFunc={this.deleteComment}
					getInfo={this.getEditInfo}
					key={entry.id}
					title={entry.title}
					answer={entry.answer}
					id={entry.id}
				/>
			);
		});

		return (
			<div>
				<Header />
				<section className='journal'>
					<h2>Spill Your Guts</h2>
					<h4>Leave comments and opinions on the movies you watch!</h4>
					<p></p>
					<section className='journal-container'>
						{/* MappedData is a list of JournalEntry Components sourced from journalAPI.json */}
						<div>{mappedData}</div>
					</section>
				</section>

				<Footer />
			</div>
		);
	}
}
