import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import moment from "moment";
import { updateUserProfileAsync } from "../../../dating/store/slice/profileSlice";
import { USER_ID_LOGGEDIN } from "../../../utils";

const ManageProfileFamilyInput = ({ userData, onUpdateProfile }) => {
  const dispatch = useDispatch();

  const userId = USER_ID_LOGGEDIN;

  const formik = useFormik({
    initialValues: {
      familyStatus: userData?.familyStatus,
      FathersName: userData?.FathersName,
      FathersStatus: userData?.FathersStatus,
      MothersName: userData?.MothersName,
      MothersStatus: userData?.MothersStatus,
      NumberOfBrother: userData?.NumberOfBrother,
      NoOfMarriedBrother: userData?.NoOfMarriedBrother,
      NumberOfSister: userData?.NumberOfSister,
      NoOfMarriedSister: userData?.NoOfMarriedSister,
      
      
    },
    validationSchema: Yup.object({
     
    }),
    onSubmit: async (values) => {
      try {
        const updatedUserData = values;
        const promise = new Promise((resolve) => setTimeout(resolve, 1000));
        await toast.promise(promise, {
          loading: "Updating...",
          success: "Contact details successfully updated",
          error: "Failed to update contact details",
        });
        await dispatch(updateUserProfileAsync({ updatedUserData, userId }));
        onUpdateProfile();
      } catch (error) {
        console.error("Error updating user profile:", error);
        toast.error("Failed to update basic info");
      }
    },
  });

  return (
    <section className="log-reg ">
      <div className="container">
        <div className="row manage-profile-input-bg">
          <div className="col-lg-12 ps-lg-5">
            <div className="log-reg-inner input-height-basic">
              <div className="main-content">
                <form onSubmit={formik.handleSubmit}>
                <h4 className="content-title manage-profile-input-top-title">
                    Family Details
                  </h4>
                <div className="row">
                    <div className="col-lg-6">
                      <div className="custom-normalhide">
                        <div className="form-group">
                          <label>Family Status*</label>
                          <select
                            name="familyStatus"
                            value={formik.values.familyStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="" label="Select" disabled />
                            <option value="good" label="Good" />
                            <option value="better" label="Better" />
                            <option value="best" label="Best" />
                            {/* Add more DietPreferences options as needed */}
                          </select>
                          {formik.touched.familyStatus &&
                            formik.errors.familyStatus ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.familyStatus}
                            </div>
                          ) : null}
                        </div>


                        <div className="form-group">
                          <label>Father’s Name*</label>
                          <input
                            type="text"
                            name="FathersName"
                            value={formik.values.FathersName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                            placeholder="Enter Father's Name"
                          />
                          {formik.touched.FathersName && formik.errors.FathersName ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.FathersName}
                            </div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label>Father's Status*</label>
                          <select
                            name="FathersStatus"
                            value={formik.values.FathersStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="" label="Select" disabled />
                            <option value="good" label="Good" />
                            <option value="better" label="Better" />
                            <option value="best" label="Best" />
                          </select>
                          {formik.touched.FathersStatus && formik.errors.FathersStatus ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.FathersStatus}
                            </div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label>Mother's Name*</label>
                          <input
                            type="text"
                            name="MothersName"
                            value={formik.values.MothersName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                            placeholder="Enter Mother's Name"
                          />
                          {formik.touched.MothersName && formik.errors.MothersName ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.MothersName}
                            </div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label>Mother's Status*</label>
                          <select
                            name="MothersStatus"
                            value={formik.values.MothersStatus}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="" label="Select" disabled />
                            <option value="good" label="Good" />
                            <option value="better" label="Better" />
                            <option value="best" label="Best" />
                          </select>
                          {formik.touched.MothersStatus && formik.errors.MothersStatus ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.MothersStatus}
                            </div>
                          ) : null}
                        </div>




                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="custom-normalhide">
                        <div className="form-group">
                          <label>No of Brothers*</label>
                          <select
                            name="NumberOfBrother"
                            value={formik.values.NumberOfBrother}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="0" label="0" />
                            <option value="1" label="1" />
                            <option value="2" label="2" />
                            <option value="3" label="3" />
                            <option value="4" label="4" />
                            <option value="5" label="5" />
                          </select>
                          </div>
                          <div className="form-group">
                          <label>of which married*</label>
                          <select
                            name="NoOfMarriedBrother"
                            value={formik.values.NoOfMarriedBrother}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="0" label="0" />
                            <option value="1" label="1" />
                            <option value="2" label="2" />
                            <option value="3" label="3" />
                            <option value="4" label="4" />
                            <option value="5" label="5" />
                          </select>

                          {formik.touched.NumberOfBrother &&
                            formik.errors.NumberOfBrother ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.NumberOfBrother}
                            </div>
                          ) : null}
                        </div>

                        <div className="form-group">
                          <label>No of Sisters*</label>
                          <select
                            name="NumberOfSister"
                            value={formik.values.NumberOfSister}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="0" label="0" />
                            <option value="1" label="1" />
                            <option value="2" label="2" />
                            <option value="3" label="3" />
                            <option value="4" label="4" />
                            <option value="5" label="5" />
                          </select>
                        </div>
                          <div className="form-group">
                          <label>of which married*</label>
                          <select
                            name="NoOfMarriedSister"
                            value={formik.values.NoOfMarriedSister}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="my-form-control"
                          >
                            <option value="0" label="0" />
                            <option value="1" label="1" />
                            <option value="2" label="2" />
                            <option value="3" label="3" />
                            <option value="4" label="4" />
                            <option value="5" label="5" />
                          </select>

                          {formik.touched.NumberOfSister &&
                            formik.errors.NumberOfSister ? (
                            <div className="error-message" style={{ color: "red" }}>
                              {formik.errors.NumberOfSister}
                            </div>
                          ) : null}
                        </div>

                        

                      </div>
                    </div>
                    {/* <button
                      className="default-btn reverse mt-5 mx-auto w-25"
                      type="submit"
                    >
                      <span>Done</span>
                    </button> */}
                  </div>
                  <button
                    type="submit"
                    className="default-btn reverse"
                    disabled={formik.isSubmitting}
                  >
                    <span>Update profile</span>
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

export default ManageProfileFamilyInput;
