import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserProfileAsync } from "../../store/slice/profileSlice";
import moment from "moment";

const ManageProfileBasicInput = ({ userData, onUpdateProfile }) => {
  const [userDataEdit, setUserDataEdit] = useState({
    name: userData?.name || "",
    dob: moment(userData?.dob).format("YYYY-MM-DD") || "",
    iAm: userData?.iAm || "",
    looking: userData?.looking || "",
    marital: userData?.marital || "",
    address: userData?.address || "",
    interests: userData?.interests || "",
  });

  const [buttonClass, setButtonClass] = useState("default-btn reverse");
  const dispatch = useDispatch();
  const userDatas = localStorage.getItem("userData");
  const userDataObj = JSON.parse(userDatas);
  const userId = userDataObj?.data?.data?._id || null;

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "radio") {
      setUserDataEdit((prevUserDataEdit) => ({
        ...prevUserDataEdit,
        [name]: value,
      }));
    } else {
      setUserDataEdit((prevUserDataEdit) => ({
        ...prevUserDataEdit,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUserData = userDataEdit;
      await dispatch(updateUserProfileAsync({ updatedUserData, userId }));

      onUpdateProfile();
      toast.success("Basic info successfully updated");
      setButtonClass("default-btn reverse");
    } catch (error) {
      console.error("Error updating user profile:", error);
      toast.error("Failed to update basic info");
    }
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
                        type="text"
                        name="name"
                        className="my-form-control"
                        placeholder="Enter Your Full Name"
                        value={userDataEdit.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Birthday*</label>
                      <input
                        type="date"
                        name="dob"
                        value={userDataEdit.dob}
                        onChange={handleChange}
                        className="my-form-control"
                      />
                    </div>
                    <div className="form-group">
                      <label>I am a*</label>
                      <div className="banner__inputlist">
                        <div className="s-input me-3">
                          <input
                            type="radio"
                            name="iAm"
                            id="iAmMale"
                            value="Male"
                            checked={userDataEdit.iAm === "Male"}
                            onChange={handleChange}
                          />
                          <label htmlFor="iAmMale">Man</label>
                        </div>
                        <div className="s-input">
                          <input
                            type="radio"
                            name="iAm"
                            id="iAmFemale"
                            value="Female"
                            checked={userDataEdit.iAm === "Female"}
                            onChange={handleChange}
                          />
                          <label htmlFor="iAmFemale">Woman</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Looking for a*</label>
                      <div className="banner__inputlist">
                        <div className="s-input me-3">
                          <input
                            type="radio"
                            name="looking"
                            id="lookingForMan"
                            value="Male"
                            checked={userDataEdit.looking === "Male"}
                            onChange={handleChange}
                          />
                          <label htmlFor="lookingForMan">Man</label>
                        </div>
                        <div className="s-input">
                          <input
                            type="radio"
                            name="looking"
                            id="lookingForWoman"
                            value="Female"
                            checked={userDataEdit.looking === "Female"}
                            onChange={handleChange}
                          />
                          <label htmlFor="lookingForWoman">Woman</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Marital status*</label>
                      <div className="banner__inputlist">
                        <div className="s-input me-3">
                          <input
                            className="pointer"
                            type="radio"
                            name="marital"
                            id="Single"
                            value="Single"
                            checked={userDataEdit.marital === "Single"}
                            onChange={handleChange}
                          />
                          <label className="pointer" htmlFor="Single">
                            Single
                          </label>
                        </div>
                        <div className="s-input me-3">
                          <input
                            className="pointer"
                            type="radio"
                            name="marital"
                            id="married"
                            value="Married"
                            checked={userDataEdit.marital === "Married"}
                            onChange={handleChange}
                          />
                          <label className="pointer" htmlFor="married">
                            Married
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <label>Address*</label>
                      <input
                        type="text"
                        className="my-form-control"
                        placeholder="Enter Your City"
                        name="address"
                        id="address"
                        value={userDataEdit.address}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className={buttonClass}
                      onClick={() =>
                        setButtonClass("info basic-info-manage-ptofile")
                      }
                    >
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
