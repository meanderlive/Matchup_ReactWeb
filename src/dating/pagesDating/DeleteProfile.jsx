
import React from 'react'
import { Modal, Button } from "react-bootstrap";

const DeleteProfile = ({ showModal, hideModal}) => {
  const message = "Are you sure want to Delete this user"
    return (
        <Modal show={showModal} onHide={hideModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Delete Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
        <Modal.Footer>
          <Button variant="default" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="danger"  onClick={hideModal}>
          Delete
          </Button>
        </Modal.Footer>
      </Modal>
    )
}

export default DeleteProfile;