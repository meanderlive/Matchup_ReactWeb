// LoginModal.js
import React, { useEffect } from "react";
import { Modal, Button } from 'react-bootstrap';

const LoginModal = ({ showModal, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => clearTimeout(timer);
  }, [onClose]);    

  return (
    <Modal show={showModal} onHide={onClose} top>
      <Modal.Header closButton>
        <Modal.Title>
          <i className="fas fa-sign-in-alt mr-2"></i> Login Please
        </Modal.Title>
      </Modal.Header>
      
    </Modal>
  );
};

export default LoginModal;
