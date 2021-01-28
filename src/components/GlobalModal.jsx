import React from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';

class GlobalModal extends React.Component {
  state = {
    isOpen: false,
    title: null,
    body: null,
  };

  open = (title, body) => {
    this.setState({ isOpen: true, title: title, body: body });
  };

  close = () => {
    this.setState({ isOpen: false, title: null, body: null });
  };

  render() {
    return (
      <Modal
        isOpen={this.state.isOpen}
        onClose={this.close}
        size="6xl"
        scrollBehavior="inside"
      >
        <ModalOverlay />
        <ModalContent pb={8}>
          <ModalHeader>{this.state.title}</ModalHeader>
          <ModalCloseButton _active={{}} _focus={{}} />
          <ModalBody>{this.state.body}</ModalBody>
        </ModalContent>
      </Modal>
    );
  }
}

export default GlobalModal;
