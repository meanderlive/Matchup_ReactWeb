import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useModal } from './ModalContext';

const ShowMatchModal = () => {
  const { showModal, hideModal } = useModal();
  const message = "Are you sure you want to block ABC";

  const handleBlock = () => {
    // Add your block logic here
    hideModal();
  };

  return (
    <Modal
     show={showModal} 
     onHide={hideModal} 
     centered
    
     >
      <Modal.Header closeButton>
        <Modal.Title>Block Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="alert alert-danger">{message}</div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleBlock}>
          Block
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShowMatchModal;
