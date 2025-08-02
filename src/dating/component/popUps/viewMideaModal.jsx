
import React from 'react'
import { Modal, Button } from "react-bootstrap";

const BlockUserModal = ({ showModal, hideModal}) => {
  const message = "Are you sure want to block ABC"
    return (
        <Modal show={showModal} onHide={hideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Block Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger"  onClick={hideModal}>
            Block
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default BlockUserModal;