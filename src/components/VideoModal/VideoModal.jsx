import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ModalBasicExample = () => (
	<Modal trigger={<Button>Watch movie trailer here</Button>} basic size='small'>
		<Modal.Content>
			<iframe></iframe>
		</Modal.Content>
	</Modal>
);

export default ModalBasicExample;
