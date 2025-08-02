import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const IncomingCallModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} centered className="incoming-call-modal">
            <Modal.Header closeButton>
                <Modal.Title>Incoming Call</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="call-info">
                    <p><strong>John Doe</strong> is calling...</p>
                    <p>Incoming Call - Audio</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => console.log('Answer call')}>
                    Answer
                </Button>
                <Button variant="danger" onClick={onHide}>
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default IncomingCallModal;
