import React from "react";
import { Modal, Button } from "semantic-ui-react";
import "./CommentEditModal.style.scss";
class ModalModalExample extends React.Component {
	constructor() {
		super();
		this.state = { modalOpen: true, title: "", answer: "" };
	}

	handleClose = () => this.setState({ modalOpen: false });

	render() {
		return (
			<Modal
				open={this.state.modalOpen}
				onClose={this.handleClose}
				//basic
				size='tiny'
			>
				<Modal.Header>Edit Movie Comment</Modal.Header>
				<Modal.Content>
					<form
						onSubmit={e => {
							e.preventDefault();
						}}
					>
						<input
							onChange={e => {
								this.setState({ title: e.target.value });
							}}
							type='text'
							placeholder='Enter movie name'
						/>
						<textarea
							onChange={e => {
								this.setState({ answer: e.target.value });
							}}
							cols='30'
							rows='10'
							placeholder='Leave comment or review'
						></textarea>
						<Button
							color='black'
							onClick={this.handleClose}
							onClick={e => {
								this.props.returnInfo(this.state.title, this.state.answer);
							}}
						>
							Finished
						</Button>
					</form>
				</Modal.Content>
			</Modal>
		);
	}
}

export default ModalModalExample;
