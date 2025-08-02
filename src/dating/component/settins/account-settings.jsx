
import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import TravelModeModal from "../popUps/travelMode";
import Rateus from "../popUps/rateus";
import DeleteProfile from "../../pagesDating/DeleteProfile";
import { useNavigate } from "react-router-dom";
import LanguageChange from "../popUps/LanguageChange";
// import LanguageChange from "../../pagesDating/LanguageChange";

const Account = ({ userData, onUpdateProfile }) => {
    const [matchesSwitch, setMatchesSwitch] = useState(true);
    const [messagesSwitch, setMessagesSwitch] = useState(true);
    const [callSwitch, setcallSwitch] = useState(false);
    const [promotionalSwitch, setPromotionalSwitch] = useState(false);
    const [travelMode, setTravelMode] = useState(false)
    const [openRate, setRate] = useState(false)
    const [deleteProf, setDltPro] = useState(false)
    const [language, setLanguage] = useState(false)
    const navigate = useNavigate();

    const handleSwitchToggle = (type) => {
        switch (type) {
            case "matches":
                setMatchesSwitch(!matchesSwitch);
                break;
            case "messages":
                setMessagesSwitch(!messagesSwitch);
                break;
            case "calls":
                setcallSwitch(!callSwitch);
                break;
            case "promotional":
                setPromotionalSwitch(!promotionalSwitch);
                break;
            default:
                break;
        }
    };

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
        navigate("/dating/manage-profile")
    }
    const HANDLElOGOUT = () => {
    localStorage.removeItem("userData");
        navigate("/")
    }

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


                                    <button type="submit" className="default-btn mt-5 reverse" onClick={HANDLElOGOUT}>
                                        <span>LogOut</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Account;
