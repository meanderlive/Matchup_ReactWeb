import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import SelectMarid from "../component/select/selectmarid";
import logo from "../assets/images/logoMatchup.png";
import WhoseProfileModal from "../../metrimoniul/component/popUps/WhoseProfileModal";

const title = "Welcome to Matchup";
const desc =
  "Let's create your profile! Just fill in the fields below, and we’ll get a new account.";
const accTitle = "Account Details";

const SignUp = () => {
  const [regName, setRegName] = useState("");
  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const [regConPassword, setRegConPassword] = useState("");
  const [showDiv1, setShowDiv1] = useState(true);
  const [SelectProfile, setSelectProfile] = useState(false);
  const navigate = useNavigate();

  const handleInterestPage = () => {
    navigate("/interest");
  };

  const toggleDivs = () => {
    setShowDiv1((prevShowDiv1) => !prevShowDiv1);
  };

  return (
    <section className="log-reg">
      <div className="top-menu-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-7">
              <div className="logo">
                <Link to="/">
                  <img
                    src={logo}
                    alt="logo"
                    style={{
                      width: "100px",
                      height: "40px",
                    }}
                  />
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-5">
              <Link to="/" className="backto-home">
                <i className="fas fa-chevron-left"></i> Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="image"></div>
          <div className="col-lg-7">
            <div className="log-reg-inner">
              <div className="section-header">
                <h2 className="title">{title} </h2>
                <p>{desc} </p>
              </div>
              <div className="main-content">
                <form action="#">
                  {showDiv1 && (
                    <div className="custom-show-cls">
                      <h4 className="content-title">{accTitle}</h4>
                      <div className="form-group">
                        <label>Username*</label>
                        <input
                          type="text"
                          name="name"
                          id="item01"
                          value={regName}
                          onChange={(e) => setRegName(e.target.value)}
                          placeholder="Enter Your Username *"
                          className="my-form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Email Address*</label>
                        <input
                          type="email"
                          name="email"
                          id="item02"
                          value={regEmail}
                          onChange={(e) => setRegEmail(e.target.value)}
                          placeholder="Enter Your Email *"
                          className="my-form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Password*</label>
                        <input
                          type="password"
                          name="password"
                          id="item03"
                          value={regPassword}
                          onChange={(e) => setRegPassword(e.target.value)}
                          placeholder="Enter Your Password *"
                          className="my-form-control"
                        />
                      </div>
                      <div className="form-group">
                        <label>Confirm Password*</label>
                        <input
                          type="password"
                          name="password"
                          id="item04"
                          value={regConPassword}
                          onChange={(e) => setRegConPassword(e.target.value)}
                          placeholder="Enter Your Password *"
                          className="my-form-control"
                        />
                      </div>

                      <button
                        className="default-btn reverse"
                        onClick={toggleDivs}
                      >
                        <span>Next</span>
                      </button>
                    </div>
                  )}
                  {!showDiv1 && (
                    <div className="custom-normalhide">
                      <h4 className="content-title mt-5">Profile Details</h4>
                      <div className="form-group">
                        <label>Name*</label>
                        <input
                          type="text"
                          className="my-form-control"
                          placeholder="Enter Your Full Name"
                        />
                      </div>
                      <div className="form-group">
                        <label>Birthday*</label>
                        <input type="date" className="my-form-control" />
                      </div>
                      <div className="form-group">
                        <label>I am a*</label>
                        <div className="banner__inputlist">
                          <div className="s-input me-3">
                            <input type="radio" name="gender1" id="males1" />
                            <label htmlFor="males1">Man</label>
                          </div>
                          <div className="s-input">
                            <input type="radio" name="gender1" id="females1" />
                            <label htmlFor="females1">Woman</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Looking for a*</label>
                        <div className="banner__inputlist">
                          <div className="s-input me-3">
                            <input type="radio" name="gender2" id="males" />
                            <label htmlFor="males">Man</label>
                          </div>
                          <div className="s-input">
                            <input type="radio" name="gender2" id="females" />
                            <label htmlFor="females">Woman</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label>Marial status*</label>
                        <div className="banner__inputlist">
                          <SelectMarid select={"Marid"} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label>City*</label>
                        <input
                          type="text"
                          className="my-form-control"
                          placeholder="Enter Your City"
                        />
                      </div>
                      <button
                        className="default-btn reverse"
                        onClick={handleInterestPage}
                      >
                        <span>Create your account</span>
                      </button>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WhoseProfileModal
        showModal={SelectProfile}
        hideModal={() => setSelectProfile(false)}
        selectedUser={selectedUser}
      />
    </section>
  );
};

export default SignUp;
