import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const SettingNotification = ({ userData, onUpdateProfile }) => {
    const [matchesSwitch, setMatchesSwitch] = useState(true);
    const [messagesSwitch, setMessagesSwitch] = useState(true);
    const [callSwitch, setcallSwitch] = useState(false);
    const [promotionalSwitch, setPromotionalSwitch] = useState(false);

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
                toast.success('Notification settings successfully updated');
            }, 500);
        } catch (error) {
            console.error("Error updating notification settings:", error);
            toast.error('Failed to update notification settings');
        }
    };

    return (
        <section className="log-reg log-reg-manage-profile">
            <div className="container">
                <div className="row manage-profile-input-bg  ">
                    <div className="col-lg-12 ps-lg-5 ">
                        <div className="log-reg-inner input-height-basic ">
                            <div className="main-content">
                                <form onSubmit={handleSubmit}>
                                    <h4 className="content-title manage-profile-input-top-title">
                                        Notification Settings
                                    </h4>

                                    <div className="form-check form-switch">
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                            <i class="fa fa-users me-3" aria-hidden="true"></i>
                                                Matches</p>
                                            <div>
                                                <input
                                                    className="form-check-input fs-4 text-last custom-switch"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="matchesSwitch"
                                                    checked={matchesSwitch}
                                                    onChange={() => handleSwitchToggle("matches")}
                                                />
                                                <label className="form-check-label" htmlFor="matchesSwitch"></label>
                                            </div>
                                        </div>
                                        <hr className="hr" />
                                    </div>

                                    <div className="form-check form-switch">
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                            <i class="fa fa-comments me-3" aria-hidden="true"></i>
                                                Messages</p>
                                            <div>
                                                <input
                                                    className="form-check-input fs-4 text-last custom-switch"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="messagesSwitch"
                                                    checked={messagesSwitch}
                                                    onChange={() => handleSwitchToggle("messages")}
                                                />
                                                <label className="form-check-label" htmlFor="messagesSwitch"></label>
                                            </div>
                                        </div>
                                        <hr className="hr" />
                                    </div>

                                    <div className="form-check form-switch">
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                            <i class="fa fa-phone me-3" aria-hidden="true"></i>
Calls</p>
                                            <div>
                                                <input
                                                    className="form-check-input fs-4 text-last custom-switch"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="messagesSwitch"
                                                    checked={callSwitch}
                                                    onChange={() => handleSwitchToggle("calls")}
                                                />
                                                <label className="form-check-label" htmlFor="messagesSwitch"></label>
                                            </div>
                                        </div>
                                        <hr className="hr" />
                                    </div>

                                    <div className="form-check form-switch">
                                        <div className="d-flex justify-content-between">
                                            <p className="fs-5">
                                            <i class="fa fa-shopping-bag me-3" aria-hidden="true"></i>
                                                Promotional</p>
                                            <div>
                                                <input
                                                    className="form-check-input fs-4 text-last custom-switch"
                                                    type="checkbox"
                                                    role="switch"
                                                    id="promotionalSwitch"
                                                    checked={promotionalSwitch}
                                                    onChange={() => handleSwitchToggle("promotional")}
                                                />
                                                <label className="form-check-label" htmlFor="promotionalSwitch"></label>
                                            </div>
                                        </div>
                                        <hr className="hr" />
                                    </div>

                                    <button type="submit" className="default-btn mt-5 reverse">
                                        <span>Update Notifications</span>
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

export default SettingNotification;
