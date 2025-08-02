import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const ShowPhotoViewerModal = ({ showModal, hideModal, selectedImage }) => {
  return (
    <Modal
      dialogClassName="modal-md"
      show={showModal}
      onHide={hideModal}
      centered
      aria-labelledby="example-custom-modal-styling-title"
    >
     
      <div className='thumb-modal' style={{position:"relative"}}>
      <span onClick={hideModal}>
        <i
          className="fa fa-times fs-5"
          aria-hidden="true"
          style={{
            position:"absolute",
            cursor: 'pointer',
            right: '10px',
            top: "10px",
            backgroundColor:"white",
            borderRadius:"50%",
            padding: '5px 9px',
          }}
        ></i>
      </span>
        {selectedImage && (
          <img
            src={selectedImage.imgUrl}
            alt={selectedImage.imgAlt}
            style={{ width: '100%', height: 'auto', borderRadius: '30px' }}
          />
        )}
      </div>
    </Modal>
  );
};

export default ShowPhotoViewerModal;
