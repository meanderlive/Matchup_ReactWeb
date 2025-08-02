import { Fragment, useState } from "react";
import FooterFour from "../../component/layout/footerFour";
import SettingNotification from "../component/settins/setting-notification";
import SettingSound from "../component/settins/setting-sound";
import SettingPrivacy from "../component/settins/setting-privacy";
import Account from "../component/settins/account-settings";
import HeaderFour from "../../component/layout/HeaderFour";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("notification");

  const handleActiveTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Fragment>
      <HeaderFour />
      <div></div>
      <div className="group group--single padding-bottom">
        <div className="">
          <div className="container-xl ">
            <h3 className="pb-3">Settings</h3>
            <div className="row g-4 ">
              <div className="col-xl-3 col-md-4 order-xl-1 ms-xl-5">
                {/*Account Seeting  */}
                <div className="group__bottom--left  mb-4 group__bottom--left-manage-profile">
                  <div
                    className={`info" ${activeTab === "account"
                        ? "basic-info-manage-ptofile "
                        : ""
                      }`}
                    onClick={() => {
                      handleActiveTab("account");
                    }}
                  >
                    <div className="info-card ">
                      <div className="info-card-title py-4">
                        <h6>
                          <i class="fa fa-cog me-3 " aria-hidden="true"></i>
                          Account Setting
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group__bottom--left  mb-4 group__bottom--left-manage-profile">
                  <div
                    className={`info" ${activeTab === "notification1"
                        ? "basic-info-manage-ptofile "
                        : ""
                      }`}
                    onClick={() => {
                      handleActiveTab("notification1");
                    }}
                  >
                    <div className="info-card ">
                      <div className="info-card-title py-4">
                        <h6>
                          <i class="fa fa-bell me-3 " aria-hidden="true"></i>
                          Notification
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group__bottom--left mb-4 group__bottom--left-manage-profile">
                  <div
                    className={`info pointer" ${activeTab === "sound"
                        ? "basic-info-manage-ptofile"
                        : ""
                      }`}
                    onClick={() => handleActiveTab("sound")}
                  >
                    <div className="info-card">
                      <div className="info-card-title py-4">
                        <h6>
                          <i
                            class="fa fa-volume-up me-3"
                            aria-hidden="true"
                          ></i>
                          Sound
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="group__bottom--left mb-4 group__bottom--left-manage-profile">
                  <div
                    className={`info pointer" ${activeTab === "privacy"
                        ? "basic-info-manage-ptofile"
                        : ""
                      }`}
                    onClick={() => handleActiveTab("privacy")}
                  >
                    <div className="info-card">
                      <div className="info-card-title py-4">
                        <h6>
                          <i
                            class="fa fa-user-secret me-3"
                            aria-hidden="true"
                          ></i>
                          Privacy
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>

              
              </div>
              <div className="col-xl-8 col-md-7 order-xl-1 ms-md-1 setting-page">
                <div className="group__bottom--right">
                  {activeTab === "notification" && (
                    <SettingNotification />
                  )}
                </div>
                <div className="group__bottom--right">
                  {activeTab === "account" && <Account />}
                </div>
                <div className="group__bottom--right">
                  {activeTab === "notification1" && <SettingNotification />}
                </div>
                <div className="group__bottom--right">
                  {activeTab === "sound" && <SettingSound />}
                </div>
                <div className="group__bottom--right">
                  {activeTab === "privacy" && <SettingPrivacy />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterFour />
    </Fragment>
  );
};

export default Settings;
