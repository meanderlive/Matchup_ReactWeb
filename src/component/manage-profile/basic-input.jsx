import React, { useState, useEffect } from "react";
import SelectMarid from "../select/selectmarid";

const ManageProfileBasicInput = ({ userData, updateUserData, editMode }) => {
    const [regName, setRegName] = useState(editMode ? userData.name : "");
    const [gender, setGender] = useState(editMode ? userData.gender : "");
    const [lookingFor, setLookingFor] = useState("");
    const [dob, setDob] = useState("");
  
    useEffect(() => {
      if (editMode) {
        setRegName(userData.name || "");
        setGender(userData.gender || "");
      } else {
        setRegName("");
        setGender("");
      }
    }, [editMode, userData]);
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      const newUserData = {
        ...userData,
        name: regName,
        gender: gender,
        lookingFor: lookingFor,
      };
  
      updateUserData(newUserData);
  
      setRegName("");
      setGender("");
      setLookingFor("");
      setDob("");
    };
  

  return (
    <section className="log-reg log-reg-manage-profile">
      <div className="container">
        <div className="row manage-profile-input-bg">
          <div className="col-lg-12 ps-lg-5">
            <div className="log-reg-inner  input-height-basic">
              <div className="main-content">
                <>
                <form onSubmit={handleSubmit}>
                  <h4 className="content-title manage-profile-input-top-title">
                    Basic info
                  </h4>
                  <div className="form-group">
                    <label>Name*</label>
                    <input
                      name="regname"
                      type="text"
                      className="my-form-control"
                      placeholder="Enter Your Full Name"
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Birthday*</label>
                    <input name="dob" type="date" className="my-form-control" />
                  </div>
                  <div className="form-group">
                    <label>I am a*</label>
                    <div className="banner__inputlist">
                      <div className="s-input me-3">
                        <input
                          type="radio"
                          name="gender"
                          id="male"
                          checked={gender === "Man"}
                          onChange={() => setGender("Man")}
                        />
                        <label htmlFor="male">Man</label>
                      </div>
                      <div className="s-input">
                        <input
                          type="radio"
                          name="gender"
                          id="female"
                          checked={gender === "Woman"}
                          onChange={() => setGender("Woman")}
                        />
                        <label htmlFor="female">Woman</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Looking for a*</label>
                    <div className="banner__inputlist">
                      <div className="s-input me-3">
                        <input
                          type="radio"
                          name="lookingFor"
                          id="lookingForMan"
                          checked={lookingFor === "Man"}
                          onChange={() => setLookingFor("Man")}
                        />
                        <label htmlFor="lookingForMan">Man</label>
                      </div>
                      <div className="s-input">
                        <input
                          type="radio"
                          name="lookingFor"
                          id="lookingForWoman"
                          checked={lookingFor === "Woman"}
                          onChange={() => setLookingFor("Woman")}
                        />
                        <label htmlFor="lookingForWoman">Woman</label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Marital status*</label>
                    <div className="banner__inputlist">
                      <SelectMarid select={userData.maritalStatus || "Marid"} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Address*</label>
                    <input
                      type="text"
                      className="my-form-control"
                      placeholder="Enter Your City"
                    />
                  </div>
                  <button type="submit" className="default-btn reverse">
                    <span>Update profile</span>
                  </button>
                </form>
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManageProfileBasicInput;
