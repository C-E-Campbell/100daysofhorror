import React from "react";

import "./JournalEntry.style.scss";

const JournalEntry = props => {
	return (
		<section className='entry'>
			<div>
				<p>{props.title}</p>
				<p>{props.answer}</p>
			</div>
			<div className='icon-box'>
				<i class='far fa-edit'></i>
				<i
					onClick={() => {
						props.deleteFunc(props.id);
					}}
					class='fas fa-minus-circle'
				></i>
			</div>
		</section>
	);
};

export default JournalEntry;
