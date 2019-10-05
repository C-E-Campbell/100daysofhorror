import React, { Component } from "react";
import "./UserBox.style.scss";
export default class UserBox extends Component {
	render() {
		return (
			<div className='user-box'>
				<div className='user-box-data'>
					<h1>Charles Campbell</h1>
					<h5>Challenge Start Date PROP HERE</h5>
					<h5>Challenge End Date PROP HERE</h5>
				</div>
				<div className='user-box-percentage'>
					<p>Percent Completed</p>
					<p>56%</p>
				</div>
			</div>
		);
	}
}
