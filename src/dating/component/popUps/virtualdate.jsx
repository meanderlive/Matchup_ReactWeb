import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";





const virtualDate = ({ showModal, hideModal,}) => {
   
  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <div
        className="main-calander"
        style={{ position: "relative", padding: "20px" }}
      >
        <span
          onClick={hideModal}
          style={{ position: "absolute", right: "10px", top: "5px" }}
        >
          <i className="fa fa-times fs-3" aria-hidden="true"></i>
        </span>

        <div className="Data-1">
          <h5 className="fs-4 text-muted fw-700">
            Schedule Your Virtual Date for Meaningful Connections!
          </h5>
          <div className="settime">
            <input className="time" type="" placeholder="Choose Time" />
          <span className="clock-icon">&#128339;</span>
            
          </div>
          <div className="setdate">
            <input className="date" type="" placeholder="Choose Date"  onClick={calenderDate} />
              <span className="calander-icon" onClick={handleCalendarClick}>📅</span>
              
          </div>
        </div>
      </div>
      <div className="btn">
        <button className="date-btn">
          <p className="date-content">Schedule Date</p>
        </button>
      </div>
     
    </Modal>
  );
};

export default virtualDate;

