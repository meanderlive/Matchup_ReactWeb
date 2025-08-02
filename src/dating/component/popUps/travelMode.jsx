
import React, { useState } from 'react'
import { Modal, Button } from "react-bootstrap";


const TravelModeModal = ({ showModal, hideModal }) => {
    const [Subscribe, setSubscribe] = useState(false)

    const message = "Are you sure want to block ABC"
    return (
        <Modal show={showModal} onHide={hideModal} centered >
            <span onClick={hideModal}><i class="fa fa-times fs-3" aria-hidden="true" style={{
                cursor: "pointer",
                float: 'right',
                padding: '15px 25px 0 0',
            }}></i>
            </span>

            <Modal.Body>
                {!Subscribe ?
                    <>
                        <div className="travel-suit-case text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 61 61" fill="none">
                                <g clip-path="url(#clip0_2128_7231)">
                                    <path d="M15.4188 12.5296H44.1962H45.5862C47.13 12.5296 48.5299 13.1601 49.5476 14.1777C50.5653 15.1954 51.1957 16.5953 51.1957 18.1392V52.402C51.1957 53.9459 50.5653 55.3458 49.5476 56.3634C48.5399 57.3662 47.1598 57.9967 45.6358 58.0066V59.0044C45.6358 60.1064 44.7373 61.005 43.6353 61.005C42.5332 61.005 41.6347 60.1064 41.6347 59.0044V58.0116H19.3752V59.0044C19.3752 60.1064 18.4767 61.005 17.3747 61.005C16.2726 61.005 15.3741 60.1064 15.3741 59.0044V58.0066C13.8501 57.9917 12.4651 57.3662 11.4623 56.3634C10.4447 55.3408 9.81421 53.9409 9.81421 52.3971V18.1342C9.81421 16.5903 10.4447 15.1904 11.4623 14.1728C12.475 13.1601 13.8799 12.5296 15.4188 12.5296ZM18.5661 0H42.6126C42.8906 0 43.119 0.228353 43.119 0.506348V3.76286C43.119 4.04085 42.8906 4.26921 42.6126 4.26921H39.0037V10.9212H36.879V4.26424H24.533V10.9212H22.4084V4.26424H18.5661C18.2881 4.26424 18.0597 4.03589 18.0597 3.75789V0.506348C18.0647 0.228353 18.293 0 18.5661 0ZM34.4267 22.7856V25.3223C34.4267 25.5656 34.3274 25.789 34.1685 25.9478C34.0047 26.1067 33.7863 26.2109 33.543 26.2109H28.0328C27.7896 26.2109 27.5662 26.1117 27.4073 25.9528C27.2485 25.7939 27.1492 25.5706 27.1492 25.3273V22.7856H22.5623C21.2964 22.7856 20.2837 22.2942 19.4944 21.5049C18.6306 20.6411 18.0597 19.4249 17.7172 18.1392L16.6995 14.282H15.4188C14.3614 14.282 13.3984 14.7139 12.6984 15.4138C11.9985 16.1138 11.5666 17.0768 11.5666 18.1342V52.3971C11.5666 53.4544 11.9985 54.4175 12.6984 55.1174C13.3984 55.8174 14.3614 56.2493 15.4188 56.2493H45.5862C46.6436 56.2493 47.6066 55.8174 48.3066 55.1174C49.0065 54.4175 49.4384 53.4544 49.4384 52.3971V18.1342C49.4384 17.0768 49.0065 16.1138 48.3066 15.4138C47.6066 14.7139 46.6436 14.282 45.5862 14.282H44.9061L44.092 18.0994C43.814 19.4001 43.2431 20.6163 42.3793 21.4801C41.5701 22.2892 40.5227 22.7906 39.2419 22.7906H34.4267V22.7856ZM18.9185 49.8455C18.437 49.8455 18.0448 49.4533 18.0448 48.9718C18.0448 48.4902 18.437 48.0981 18.9185 48.0981H42.2205C42.702 48.0981 43.0942 48.4902 43.0942 48.9718C43.0942 49.4533 42.702 49.8455 42.2205 49.8455H18.9185ZM18.9185 41.3865C18.437 41.3865 18.0448 40.9943 18.0448 40.5128C18.0448 40.0312 18.437 39.6391 18.9185 39.6391H42.2205C42.702 39.6391 43.0942 40.0312 43.0942 40.5128C43.0942 40.9943 42.702 41.3865 42.2205 41.3865H18.9185ZM18.9185 32.9275C18.437 32.9275 18.0448 32.5353 18.0448 32.0538C18.0448 31.5723 18.437 31.1801 18.9185 31.1801H42.2205C42.702 31.1801 43.0942 31.5723 43.0942 32.0538C43.0942 32.5353 42.702 32.9275 42.2205 32.9275H18.9185ZM18.5115 14.282L19.41 17.6924C19.6781 18.7051 20.105 19.6383 20.7354 20.2638C21.207 20.7354 21.8127 21.0333 22.5623 21.0333H39.2469C40.0213 21.0333 40.6567 20.7255 41.1482 20.234C41.7638 19.6185 42.1807 18.715 42.3892 17.7321L43.1239 14.277H18.5115V14.282Z" fill="#E654A0" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_2128_7231">
                                        <rect width="61" height="61" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="travel-modal-title mt-3">
                            <h3 className=' text-center'>Get Travel- ready</h3>
                        </div>
                        <div className="travel-modal-para mt-3 px-3">
                            <p className='text-center text-muted'>Use Travel mode to change your location to wherever you’re going, as often as you like</p>
                        </div>
                        <div className="travel-modal-btn my-5 ">
                            <div className="col text-center">
                                <button
                                    type="submit"
                                    className="default-btn reverse d-block w-75"
                                    style={{ margin: "auto" }}
                                    onClick={() => setSubscribe(true)}
                                >
                                    <span>Next</span>
                                </button>
                            </div>
                        </div>
                    </>
                    :
                    <>
                        <div className="travel-suit-case text-center">
                            <div className="travel-suit-plan-icon text-center" style={{
                                width: "90px",
                                height: "90px",
                                borderRadius: "50%",
                                margin: "auto",
                                backgroundColor: "#dc3545"
                            }}>
                                <svg className='mt-3' xmlns="http://www.w3.org/2000/svg" width="61" height="61" viewBox="0 0 39 39" fill="none">
                                    <g clip-path="url(#clip0_1782_471)">
                                        <path d="M10.199 8.38154H28.301H29.1753C30.1464 8.38154 31.027 8.77811 31.6672 9.41825C32.3073 10.0584 32.7039 10.939 32.7039 11.9101V33.4626C32.7039 34.4337 32.3073 35.3143 31.6672 35.9544C31.0333 36.5852 30.1652 36.9818 29.2065 36.988V37.6157C29.2065 38.3089 28.6413 38.8741 27.9481 38.8741C27.2549 38.8741 26.6897 38.3089 26.6897 37.6157V36.9911H12.6878V37.6157C12.6878 38.3089 12.1226 38.8741 11.4294 38.8741C10.7361 38.8741 10.1709 38.3089 10.1709 37.6157V36.988C9.21229 36.9786 8.34107 36.5852 7.7103 35.9544C7.07016 35.3112 6.67358 34.4306 6.67358 33.4594V11.907C6.67358 10.9359 7.07016 10.0553 7.7103 9.41513C8.34732 8.77811 9.23102 8.38154 10.199 8.38154ZM12.1788 0.5H27.3048C27.4797 0.5 27.6234 0.643641 27.6234 0.818509V2.86696C27.6234 3.04183 27.4797 3.18547 27.3048 3.18547H25.0347V7.3698H23.6982V3.18235H15.9322V7.3698H14.5957V3.18235H12.1788C12.0039 3.18235 11.8603 3.0387 11.8603 2.86384V0.818509C11.8634 0.643641 12.007 0.5 12.1788 0.5ZM22.1556 14.8329V16.4286C22.1556 16.5816 22.0932 16.7221 21.9932 16.822C21.8902 16.9219 21.7528 16.9875 21.5998 16.9875H18.1337C17.9807 16.9875 17.8401 16.9251 17.7402 16.8251C17.6403 16.7252 17.5778 16.5847 17.5778 16.4317V14.8329H14.6925C13.8962 14.8329 13.2592 14.5238 12.7627 14.0273C12.2194 13.4839 11.8603 12.7189 11.6448 11.9101L11.0047 9.48383H10.199C9.53392 9.48383 8.92813 9.7555 8.48784 10.1958C8.04754 10.6361 7.77587 11.2419 7.77587 11.907V33.4594C7.77587 34.1246 8.04754 34.7304 8.48784 35.1706C8.92813 35.6109 9.53392 35.8826 10.199 35.8826H29.1753C29.8404 35.8826 30.4462 35.6109 30.8865 35.1706C31.3268 34.7304 31.5985 34.1246 31.5985 33.4594V11.907C31.5985 11.2419 31.3268 10.6361 30.8865 10.1958C30.4462 9.7555 29.8404 9.48383 29.1753 9.48383H28.7475L28.2354 11.8851C28.0605 12.7033 27.7014 13.4683 27.1581 14.0117C26.6491 14.5206 25.9902 14.836 25.1846 14.836H22.1556V14.8329ZM12.4005 31.8544C12.0976 31.8544 11.8509 31.6077 11.8509 31.3048C11.8509 31.0019 12.0976 30.7552 12.4005 30.7552H27.0582C27.3611 30.7552 27.6077 31.0019 27.6077 31.3048C27.6077 31.6077 27.3611 31.8544 27.0582 31.8544H12.4005ZM12.4005 26.5334C12.0976 26.5334 11.8509 26.2867 11.8509 25.9838C11.8509 25.6809 12.0976 25.4343 12.4005 25.4343H27.0582C27.3611 25.4343 27.6077 25.6809 27.6077 25.9838C27.6077 26.2867 27.3611 26.5334 27.0582 26.5334H12.4005ZM12.4005 21.2125C12.0976 21.2125 11.8509 20.9658 11.8509 20.6629C11.8509 20.36 12.0976 20.1133 12.4005 20.1133H27.0582C27.3611 20.1133 27.6077 20.36 27.6077 20.6629C27.6077 20.9658 27.3611 21.2125 27.0582 21.2125H12.4005ZM12.1444 9.48383L12.7096 11.6291C12.8783 12.2661 13.1468 12.8532 13.5434 13.2466C13.84 13.5433 14.221 13.7306 14.6925 13.7306H25.1877C25.6748 13.7306 26.0745 13.537 26.3837 13.2279C26.7709 12.8407 27.0332 12.2723 27.1643 11.6541L27.6265 9.48071H12.1444V9.48383Z" fill="white" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1782_471">
                                            <rect width="38.371" height="38.371" fill="white" transform="translate(0.5 0.5)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                        <div className="travel-modal-title mt-3">
                            <h3 className=' text-center'>Get Travel- ready</h3>
                        </div>
                        <div className="travel-modal-para mt-3 px-3">
                            <p className='text-center text-muted'>Use Travel mode to change your location to wherever you’re going, as often as you like</p>
                        </div>

                        <div className="travel-modal-content ms-4">
                            <div className="row">
                                <div className="row col-6  m-2 travel-modal-card">
                                    <div className="col-12" style={{ width: "100px", height: "auto" }}>
                                        <img src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-flying-gold-coin-png-png-image_8447452.png" alt="" />
                                    </div>
                                    <div className="col-12">
                                        <h5>5 coins</h5>
                                        <p className='text-muted'>$8.99</p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <span
                                            className='px-4 py-1 text-light rounded-3'
                                            style={{
                                                backgroundColor: "#f24570"
                                            }}>Save-45%</span>
                                    </div>
                                </div>
                                <div className="row col-6  m-2 travel-modal-card">
                                    <div className="col-12" style={{ width: "100px", height: "auto" }}>
                                        <img src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-flying-gold-coin-png-png-image_8447452.png" alt="" />
                                    </div>
                                    <div className="col-12">
                                        <h5>30 coins</h5>
                                        <p className='text-muted'>$37.99</p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <span
                                            className='px-4 py-1 text-light rounded-3'
                                            style={{
                                                backgroundColor: "#f24570"
                                            }}>Best Value</span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                            <div className="row col-6  m-2 travel-modal-card">
                                    <div className="col-12" style={{ width: "100px", height: "auto" }}>
                                        <img src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-flying-gold-coin-png-png-image_8447452.png" alt="" />
                                    </div>
                                    <div className="col-12">
                                        <h5>15 coins</h5>
                                        <p  className='text-muted'>$22.99</p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <span
                                            className='px-4 py-1 text-light rounded-3'
                                            style={{
                                                backgroundColor: "#f24570"
                                            }}>Save-48%</span>
                                    </div>
                                </div>
                                <div className="row col-6  m-2 travel-modal-card">
                                    <div className="col-12" style={{ width: "100px", height: "auto" }}>
                                        <img src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-flying-gold-coin-png-png-image_8447452.png" alt="" />
                                    </div>
                                    <div className="col-12">
                                        <h5>1 coins</h5>
                                        <p className='text-muted'>$2.99</p>
                                    </div>
                                    <div className="col-12 mb-2">
                                        <span
                                            className='px-4 py-1 text-light rounded-3'
                                            style={{
                                                backgroundColor: "#f24570",
                                                visibility:"hidden"
                                            }}>Save-48%</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="travel-modal-btn my-5 ">
                            <div className="col text-center">
                                <button
                                    type="submit"
                                    className="default-btn reverse d-block w-75"
                                    style={{ margin: "auto" }}
                                    onClick={() => setSubscribe(true)}
                                >
                                    <span>Submit</span>
                                </button>
                            </div>
                        </div>
                    </>


                }
            </Modal.Body>



        </Modal>
    )
}

export default TravelModeModal;