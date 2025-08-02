import React from "react";
import { Modal, Button } from "react-bootstrap";

const VenuePopup = ({ selectedVenue, onClose }) => (
  <Modal show={true} onHide={onClose} centered>
    <Modal.Header closeButton>
      <Modal.Title>Selected Venue</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <p>
        <i className="fa-solid fa-location-dot fa-xl" style={{ color: "#B197FC" }}></i>{" "}
        {selectedVenue.address}
      </p>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={onClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
);

export default VenuePopup;
