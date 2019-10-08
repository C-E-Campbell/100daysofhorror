import React from "react";
import { Button, Modal } from "semantic-ui-react";
import "./VideoModal.style.scss";
const ModalBasicExample = props => (
	<Modal
		src={props.src}
		trigger={<button id='modalBtn'>Watch Movie Trailer Here!</button>}
		basic
		size='small'
	>
		<Modal.Content src={props.src}>
			<iframe
				title='movie trailer'
				height='600px;'
				width='800px'
				src={props.src}
			></iframe>
		</Modal.Content>
	</Modal>
);

export default ModalBasicExample;
