import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


const AstroModal = ({ showModal, hideModal }) => {
  return (
    <>
    <Modal className='me-2 modal-left-fade' side='right' show={showModal} onHide={hideModal}  size='lg'>
     <h1>hello</h1>
    </Modal>
   

</>
  );
};

export default AstroModal;
