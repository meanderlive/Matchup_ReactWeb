import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import moment from "moment";
import { updateUserProfileAsync } from "../../../dating/store/slice/profileSlice";
import { USER_ID_LOGGEDIN } from "../../../utils";

const ManageProfileEduAndCareerInput = ({ userData, onUpdateProfile }) => {
  const dispatch = useDispatch();

  const userId = USER_ID_LOGGEDIN;

  const formik = useFormik({
    initialValues: {
      occupation: userData?.occupation,
      CompanyName: userData?.CompanyName,
      salary: userData?.salary,
      HighestQualification: userData?.HighestQualification,
      education: userData?.education,
      CollageName: userData?.CollageName,
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
                    Education & Career
                  </h4>

                  <div className="form-group">
                    <label>Profession*</label>
                    <input
                      type="text"
                      name="occupation"
                      className={`my-form-control ${
                        formik.touched.occupation && formik.errors.occupation ? "error" : ""
                      }`}
                      placeholder="Enter Your Profession"
                      value={formik.values.occupation}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.occupation && formik.errors.occupation ? (
                      <div className="error-message">{formik.errors.occupation}</div>
                    ) : null}
                  </div>

                  {/* <div className="form-group">
                    <label>Company Name*</label>
                    <input
                      type="text"
                      name="CompanyName"
                      className={`my-form-control ${
                        formik.touched.CompanyName && formik.errors.CompanyName
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Company Name"
                      value={formik.values.CompanyName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.CompanyName && formik.errors.CompanyName ? (
                      <div className="error-message">
                        {formik.errors.CompanyName}
                      </div>
                    ) : null}
                  </div> */}

                  <div className="form-group">
                    <label>Annual Income*</label>
                    <input
                      type="text"
                      name="salary"
                      className={`my-form-control ${
                        formik.touched.salary &&
                        formik.errors.salary
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Annual Income"
                      value={formik.values.salary}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.salary &&
                    formik.errors.salary ? (
                      <div className="error-message">
                        {formik.errors.salary}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Highest Qualification*</label>
                    <input
                      type="text"
                      name="HighestQualification"
                      className={`my-form-control ${
                        formik.touched.HighestQualification &&
                        formik.errors.HighestQualification
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Highest Qualification"
                      value={formik.values.HighestQualification}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.HighestQualification &&
                    formik.errors.HighestQualification ? (
                      <div className="error-message">
                        {formik.errors.HighestQualification}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Education*</label>
                    <input
                      type="text"
                      name="education"
                      className={`my-form-control ${
                        formik.touched.education && formik.errors.education
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Education"
                      value={formik.values.education}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.education && formik.errors.education ? (
                      <div className="error-message">
                        {formik.errors.education}
                      </div>
                    ) : null}
                  </div>

                  {/* <div className="form-group">
                    <label>University*</label>
                    <input
                      type="text"
                      name="CollageName"
                      className={`my-form-control ${
                        formik.touched.CollageName && formik.errors.CollageName
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your University"
                      value={formik.values.CollageName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.CollageName && formik.errors.CollageName ? (
                      <div className="error-message">
                        {formik.errors.CollageName}
                      </div>
                    ) : null}
                  </div> */}

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

export default ManageProfileEduAndCareerInput;
