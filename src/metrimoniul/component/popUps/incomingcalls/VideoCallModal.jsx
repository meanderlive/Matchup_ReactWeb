import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const VideoCallModal = ({ show, onHide }) => {
    return (
        <Modal show={show} onHide={onHide} centered className="video-call-modal">
            <Modal.Header closeButton>
                <Modal.Title>Video Call</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="video-call-container">
                    <div className="video-feed">
                        <p>Your video feed will appear here</p>
                        {/* Replace with actual video feed */}
                    </div>
                    <div className="video-feed">
                        <p>John Doe's video feed will appear here</p>
                        {/* Replace with actual video feed */}
                    </div>
                </div>
                <div className="call-info">
                    <p><strong>John Doe</strong> is calling...</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="success" onClick={() => console.log('Start Video Call')}>
                    Start Video Call
                </Button>
                <Button variant="danger" onClick={onHide}>
                    Decline
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default VideoCallModal;
