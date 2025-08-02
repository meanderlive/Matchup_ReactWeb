
import React from 'react'
import { Modal, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const BlockUserModal = ({ showModal, hideModal, selectedUser }) => {
  const navigate = useNavigate();

  const handleBlockUserFromChat = () => {
   hideModal();
   window.location.reload();
  }

  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>Block Confirmation</Modal.Title>
      </Modal.Header>
      <Modal.Body><div className="alert alert-danger">Are you sure want to block <span className='fs-5'>{selectedUser ? selectedUser.name : null}</span></div></Modal.Body>
      <Modal.Footer>
        <Button variant="default" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleBlockUserFromChat}>
          Block
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BlockUserModal;