import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ModalBasicExample = props => (
	<Modal
		src={props.src}
		trigger={<Button>Watch movie trailer here</Button>}
		basic
		size='medium'
	>
		<Modal.Content src={props.src}>
			<iframe height='600px' width='800px' src={props.src}></iframe>
		</Modal.Content>
	</Modal>
);

export default ModalBasicExample;
