import React from "./node_modules/react";
import { Modal } from "./node_modules/semantic-ui-react";
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
				height='300px;'
				width='100%'
				src={props.src}
			></iframe>
		</Modal.Content>
	</Modal>
);

export default ModalBasicExample;
