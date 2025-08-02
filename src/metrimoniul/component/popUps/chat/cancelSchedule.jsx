import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import {Link} from "react-router-dom";
import img1 from '../../assets/images/member/home2/project-pic-male/1.png';


const CancelSchedule = ({ showModal, hideModal,calenderScheduleDAte }) => {

  //   const user1 = {
  //     avatar:
  //       "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
  //     name: "Danny McChain",
  //     age: 23,
  //     address: "New York",
  //     content: "Lorem ipsum dolor sit.",
  //     timestamp: "Yesterday",
  //   };

  //   const user2 = {
  //     avatar:
  //       "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
  //     name: "Ben Smith",
  //     age: 25,
  //     address: "New York",
  //     content: "Lorem ipsum dolor sit.",
  //     timestamp: "Yesterday",
  //   };

  return (
    <Modal show={showModal} onHide={hideModal} centered >
      
        
        <div className="main " >
            <div className="icon" style={{float:"right", top:"5px"}}>
        <span onClick={hideModal}  >
          <i className="fa fa-times fs-3" aria-hidden="true"></i>
        </span>
        </div>
            <div className="text-center py-5">
            <h5 className="text-center">Are You Confirm To Cancel Your Schedule</h5>
            <div className="text-center">
            <Link onClick={hideModal}> 
           <button className="YES-msg-btn text-center">
              <p className="content">Confirm</p>
            </button></Link>

            <Link onClick={hideModal}> 
           <button className="YES-msg-btn text-center">
              <p className="content">Leave</p>
            </button></Link>
            </div>
        </div>
      </div>
    </Modal>
  );
};

export default CancelSchedule;
