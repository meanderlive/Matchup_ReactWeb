
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import TravelModeModal from "../popUps/setting/travelMode";
import LanguageChange from "../popUps/setting/LanguageChange";
import Rateus from "../popUps/setting/rateus";
import DeleteProfile from "../popUps/setting/DeleteProfile";
import BlockedProfilesModal from "../popUps/setting/BlockedProfilesModal"; // Import the new modal

const Account = ({ userData, onUpdateProfile }) => {
    // const [matchesSwitch, setMatchesSwitch] = useState(true);
    // const [messagesSwitch, setMessagesSwitch] = useState(true);
    // const [callSwitch, setcallSwitch] = useState(false);
    // const [promotionalSwitch, setPromotionalSwitch] = useState(false);
    const [travelMode, setTravelMode] = useState(false);
    const [openRate, setRate] = useState(false);
    const [deleteProf, setDltPro] = useState(false);
    const [language, setLanguage] = useState(false);
    const [showBlockedModal, setShowBlockedModal] = useState(false); // State for the blocked profiles modal
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setTimeout(() => {
                toast.success('Logout');
            }, 500);
        } catch (error) {
            console.error("Error updating notification settings:", error);
            toast.error('Failed to update notification settings');
        }
    };

    const handleManageSet = () => {
        navigate("/metrimonial/manage-profile");
    };

    const HANDLElOGOUT = () => {
        localStorage.removeItem("userData");
        navigate(`/metrimonial/`);
    };

    return (
        <section className="log-reg log-reg-manage-profile">
            <div className="container">
                <div className="row manage-profile-input-bg">
                    <div className="col-lg-12 ps-lg-5">
                        <div className="log-reg-inner input-height-basic">
                            <div className="main-content">
                                <form onSubmit={handleSubmit}>
                                    <h4 className="content-title manage-profile-input-top-title">
                                        Account  Settings
                                    </h4>

                                    <div
                                        className="form-check form-switch pointer"
                                        onClick={handleManageSet}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                                <i class="fa fa-user me-3" aria-hidden="true"></i>
                                                Manage Profile
                                            </p>
                                            <div>
                                                <i class="fa fa-arrow-right me-3" aria-hidden="true"></i>
                                            </div>
                                        </div>
                                        <hr style={{ margin: '0px !important' }} className="hr" />
                                    </div>
                                    <TravelModeModal showModal={travelMode} hideModal={() => setTravelMode(false)} />
                                    <div className="form-check form-switch" style={{ cursor: "pointer" }}
                                        onClick={() => setTravelMode(true)}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                            <i class="fa fa-plane me-3" aria-hidden="true"></i>
                                                Travel Mode</p>
                                                <div>
                                                <i class="fa fa-arrow-right me-3" aria-hidden="true"></i>

                                            </div>
                                        </div>
                                        
                                        <hr style={{ margin: '0px !important' }} className="hr" />
                                    </div>

                                   
                                    <LanguageChange showModal={language} hideModal={()=>setLanguage(false)}/>
                                    <div className="form-check form-switch" onClick={() => setLanguage(true)} style={{ cursor: "pointer" }}>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                                <i class="fa fa-language me-3" aria-hidden="true"></i>
                                                Lanuage</p>
                                                <div style={{float:"right"}}>
                                                <span className="me-3 fs-5 text-primary" >English</span>
                                                <i class="fa fa-arrow-right me-3" aria-hidden="true"></i>
                                            </div>
                                          
                                        </div>
                                       
                                        {/* <div style={{border:"1px solid lightgray"}}></div> */}
                                        <hr style={{ margin: '0px !important' }} className="hr" />
                                    </div>
                                   
                                    <Rateus showModal={openRate} hideModal={() => setRate(false)} />

                                    <DeleteProfile showModal={deleteProf} hideModal={() => setDltPro(false)} />
                                    <div className="form-check form-switch"
                                        onClick={() => setDltPro(true)} style={{ cursor: "pointer" }}
                                    >
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                                <i class="fa fa-star me-3" aria-hidden="true"></i>
                                                Hide /Delete Profile</p>
                                            <div>
                                                <i class="fa fa-arrow-right me-3" aria-hidden="true"></i>

                                            </div>
                                        </div>

                                        <hr className="hr" />
                                    </div>

                                        
                                    <div className="form-check form-switch" onClick={() => setShowBlockedModal(true)} style={{ cursor: "pointer" }}>
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                                <i className="fa fa-ban me-3"></i>
                                                Blocked Profiles
                                            </p>
                                            <div>
                                                <i className="fa fa-arrow-right me-3"></i>
                                            </div>
                                        </div>
                                        <hr className="hr" />
                                    </div>


                                    <button type="submit" className="default-btn mt-5 reverse" onClick={HANDLElOGOUT}>
                                        <span>LogOut</span>
                                    </button>
                                </form>

                                <TravelModeModal showModal={travelMode} hideModal={() => setTravelMode(false)} />
    <LanguageChange showModal={language} hideModal={() => setLanguage(false)} />
    <Rateus showModal={openRate} hideModal={() => setRate(false)} />
    <DeleteProfile showModal={deleteProf} hideModal={() => setDltPro(false)} />
    <BlockedProfilesModal showModal={showBlockedModal} hideModal={() => setShowBlockedModal(false)} /> {/* Add the BlockedProfilesModal */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    ); 
};

export default Account;
