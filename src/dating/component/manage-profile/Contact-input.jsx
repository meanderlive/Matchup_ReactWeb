import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserProfileAsync } from "../../store/slice/profileSlice";

const ManageProfileContactInput = ({ userData, onUpdateProfile, editMode }) => {
  const [userDataEdit, setUserDataEdit] = useState({
    email: userData?.email || "",
    phone: userData?.phoneNumber || "",
  });

  const [buttonClass, setButtonClass] = useState("default-btn reverse");
  const dispatch = useDispatch();
  const userDatas = localStorage.getItem("userData");
  const userDataObj = JSON.parse(userDatas);

  const userId = userDataObj?.data?.data?._id || null;

  useEffect(() => {
    // Update userDataEdit when editMode is true
    if (editMode) {
      setUserDataEdit({
        email: userData?.email || "",
        phoneNumber: userData?.phoneNumber || "",
      });
    }
  }, [editMode, userData]);
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
      toast.success("Contact info successfully updated");
      setButtonClass("default-btn reverse");
    } catch (error) {
      console.error("Error updating Contact profile:", error);
      toast.error("Failed to update Contact info");
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
                      Contact Details
                    </h4>
                    <div className="form-group">
                      <label>Email*</label>
                      <input
                        type="email"
                        name="email"
                        className="my-form-control"
                        placeholder="Enter Your Email here"
                        value={userDataEdit.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone*</label>
                      <input
                        type="text"
                        name="phoneNumber"
                        placeholder="Enter Your PhoneNumber here"
                        value={userDataEdit.phoneNumber}
                        onChange={handleChange}
                        className="my-form-control"
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

export default ManageProfileContactInput;
