import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const SettingPrivacy = ({ userData, onUpdateProfile }) => {
  const [everyoneSwitch, setEveryoneSwitch] = useState(false);
  const [onlyForSwipedSwitch, setOnlyForSwipedSwitch] = useState(true);
  const [noOneSwitch, setNoOneSwitch] = useState(false);
  const [location, setLocation] = useState(true);
  const [name, setName] = useState(false);
  const [age, setAge] = useState(false);
  const [job, setJob] = useState(false);
  const [education, setEducation] = useState(false);
  const [ageRes, setAgeRes] = useState(false);
  const [distanceRes, setDistanceRes] = useState(true);
  const [onlyForSwipedSwitchs, setOnlyForSwipedSwitchs] = useState(true);

  const handleSwitchToggle = (type) => {
    switch (type) {
      case "everyone":
        setEveryoneSwitch(!everyoneSwitch);
        setOnlyForSwipedSwitch(false);
        setNoOneSwitch(false);
        break;
      case "onlyForSwiped":
        setEveryoneSwitch(false);
        setOnlyForSwipedSwitch(!onlyForSwipedSwitch);
        setNoOneSwitch(false);
        break;
      case "noOne":
        setEveryoneSwitch(false);
        setOnlyForSwipedSwitch(false);
        setNoOneSwitch(!noOneSwitch);
        break;
      case "location":
        setLocation(!location);
        break;
      case "name":
        setName(!name);
        break;
      case "age":
        setAge(!age);
        break;
      case "job":
        setJob(!job);
        break;
      case "education":
        setEducation(!education);
        break;
      case "ageRes":
        setAgeRes(!ageRes);
        setAgeRes(false);
        setOnlyForSwipedSwitchs(!onlyForSwipedSwitchs);
        break;

      case "distanceRes":
        setDistanceRes(!distanceRes);
        setAgeRes(false);
        setOnlyForSwipedSwitchs(!onlyForSwipedSwitchs);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setTimeout(() => {
        toast.success("Privacy settings successfully updated");
      }, 500);
    } catch (error) {
      console.error("Error updating privacy settings:", error);
      toast.error("Failed to update privacy settings");
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
                    Profile Visibility
                  </h4>

                  <div className="form-check">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i className="fa fa-globe me-3" aria-hidden="true"></i>
                        Everyone
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="radio"
                          role="switch"
                          id="everyoneSwitch"
                          checked={everyoneSwitch}
                          onChange={() => handleSwitchToggle("everyone")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="everyoneSwitch"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="form-check">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i className="fa fa-users me-2" aria-hidden="true"></i>
                        Only for swiped
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="radio"
                          role="switch"
                          id="onlyForSwipedSwitch"
                          checked={onlyForSwipedSwitch}
                          onChange={() => handleSwitchToggle("onlyForSwiped")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="onlyForSwipedSwitch"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="form-check">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i className="fa fa-ban me-3" aria-hidden="true"></i>
                        No one
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="radio"
                          role="switch"
                          id="noOneSwitch"
                          checked={noOneSwitch}
                          onChange={() => handleSwitchToggle("noOne")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="noOneSwitch"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <hr className="hr" />

                  <h4 className="content-title manage-profile-input-top-title mt-5">
                    Location
                  </h4>

                  <div className="form-check form-switch">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i class="fa fa-map-marker me-3" aria-hidden="true"></i>
                        Location Saving
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="checkbox"
                          role="switch"
                          id="location"
                          checked={location}
                          onChange={() => handleSwitchToggle("location")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="location"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <hr className="hr" />

                  <h4 className="content-title manage-profile-input-top-title mt-5">
                    Profile Information
                  </h4>

                  <div className="form-check form-switch">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i class="fa fa-user me-3" aria-hidden="true "></i>
                        Real Name
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="checkbox"
                          role="switch"
                          id="name"
                          checked={name}
                          onChange={() => handleSwitchToggle("name")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="name"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-switch">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i
                          class="fa fa-calendar-times-o me-3"
                          aria-hidden="true"
                        ></i>
                        Age
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="checkbox"
                          role="switch"
                          id="age"
                          checked={age}
                          onChange={() => handleSwitchToggle("age")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="age"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-switch">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i class="fa fa-briefcase me-3" aria-hidden="true"></i>
                        Job
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="checkbox"
                          role="switch"
                          id="job"
                          checked={job}
                          onChange={() => handleSwitchToggle("job")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="job"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <div className="form-check form-switch">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i class="fa fa-university me-3" aria-hidden="true"></i>
                        Education
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="checkbox"
                          role="switch"
                          id="education"
                          checked={education}
                          onChange={() => handleSwitchToggle("education")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="education"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <hr className="hr" />
                  {/* <h4 className="content-title manage-profile-input-top-title mt-5">
                    Restriction
                  </h4>

                  <div className="form-check">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i
                          className="fa fa-calendar-times-o me-3"
                          aria-hidden="true"
                        ></i>
                        Age
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="radio"
                          role="switch"
                          id="ageRes"
                          checked={ageRes}
                          onChange={() => handleSwitchToggle("age")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="ageRes"
                        ></label>
                      </div>
                    </div>
                  </div>

                  <div className="form-check">
                    <div className="d-flex justify-content-between">
                      <p className="fs-5">
                        <i className="fa fa-road me-3" aria-hidden="true"></i>
                        Distance
                      </p>
                      <div>
                        <input
                          className="form-check-input fs-4 text-last custom-switch"
                          type="radio"
                          role="switch"
                          id="distanceSwitch"
                          checked={distanceRes}
                          onChange={() => handleSwitchToggle("distanceRes")}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="distanceSwitch"
                        ></label>
                      </div>
                    </div>
                  </div>
                  <hr className="hr" /> */}

                  <button type="submit" className="default-btn mt-5 reverse">
                    <span>Update Privacy</span>
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

export default SettingPrivacy;
