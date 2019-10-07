import React, { Component } from "react";
import "./UserBox.style.scss";
export default class UserBox extends Component {
	render() {
		return (
			<div className='user-box'>
				<div className='user-box-data'>
					<h1>Charles Campbell</h1>
					<div>
						<h5>{`Challenge Started: ${this.props.acctStart}`}</h5>
						<h5>{`Fate Determined: ${this.props.acctEnd}`}</h5>
						<h5>{`Difficulty: ${this.props.difficulty}`}</h5>
					</div>
				</div>
				<div data-aos='fade-left' className='user-box-percentage'>
					<p>Percent Completed</p>
					<p className='orange'>0%</p>
				</div>
			</div>
		);
	}
}
