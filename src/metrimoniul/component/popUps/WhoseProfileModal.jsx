
import React, { useEffect, useState } from 'react'
import { Modal, Button } from "react-bootstrap";
import { forWhome } from '../../assets/Staticdata/for-whome';

const WhoseProfileModal = ({ showModal, hideModal, onSelectProfile }) => {
    const [selectProfile, setSelectProfile] = useState(forWhome[0]);


    useEffect(() => {
        setSelectProfile(forWhome[0]);
    }, [])

    const handleNext = () => {
        onSelectProfile(selectProfile.forWhome);
        hideModal();
    }
    return (
        <Modal show={showModal} onHide={hideModal} fullscreen centered >
            <Modal.Body>
                <div className="travel-modal-title mb-4">
                    <h3 className=' text-center'>Create Profile For</h3>
                </div>

                <div className="travel-modal-content  container">
                    <div className="row mx-auto col-8">
                        {
                            forWhome.map((item, i) => (
                                <div className={`row m-3 whomeProfile-div whomeProfile-div-card ${selectProfile === item ? 'selected' : ''
                                    }`}
                                    onClick={() => setSelectProfile(item)}
                                >
                                    <div className="col-12">
                                        <img
                                            src={item?.picture}
                                            alt=""
                                            width={70}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <p className='text-muted'>{item.forWhome}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="travel-modal-btn my-5 ">
                    <div className="col-3 mx-auto text-center">
                        <button
                            type="submit"
                            className="default-btn reverse d-block w-75"
                            style={{ margin: "auto" }}
                            onClick={handleNext}
                        >
                            <span>Next</span>
                        </button>
                    </div>
                </div>

                <style jsx>{`
                         .whomeProfile-div-card.selected {
                             border: 1px solid #dc3545;
                             transform: scale(1.05);
                          }
               `}</style>


            </Modal.Body>



        </Modal>
    )
}

export default WhoseProfileModal;