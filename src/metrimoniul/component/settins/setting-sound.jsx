import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const SettingSound = ({ userData, onUpdateProfile }) => {
  const [saoundSwitch, setSoundSwitch] = useState(true);

  const handleSwitchToggle = (type) => {
    switch (type) {
      case "sound":
        setSoundSwitch(!saoundSwitch);
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setTimeout(() => {
        toast.success("Sound settings successfully updated");
      }, 500);
    } catch (error) {
      console.error("Error updating notification settings:", error);
      toast.error("Failed to update notification settings");
    }
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
                    Sound Settings
                  </h4>
                  <div className="form-check form-switch">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i class="fa fa-volume-up me-3" aria-hidden="true"></i>
                        Default{" (Bongo)"}
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="checkbox"
                          role="switch"
                          id="soundSwitch"
                          checked={saoundSwitch}
                          onChange={() => handleSwitchToggle("sound")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="soundSwitch"
                        ></label>
                      </div>
                    </div>
                    <hr className="hr" />
                  </div>
                  <button type="submit" className="default-btn mt-5 reverse">
                    <span>Update Sound</span>
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

export default SettingSound;
