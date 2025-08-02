import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserProfileAsync } from "../../../dating/store/slice/profileSlice";
import { USER_ID_LOGGEDIN } from "../../../utils";
import { useFormik } from "formik";
import * as Yup from "yup";

const ContactDetailsInput = ({ userData, onUpdateProfile }) => {
  const dispatch = useDispatch();
  const userId = USER_ID_LOGGEDIN;

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: userData?.email || "", // Pre-fill with the previous email
      phoneNumber: userData?.phoneNumber || "", // Pre-fill with the previous phone number
    },

    validationSchema,
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
    <section className="log-reg log-reg-manage-profile">
      <div className="container">
        <div className="row manage-profile-input-bg">
          <div className="col-lg-12 ps-lg-5">
            <div className="log-reg-inner input-height-basic">
              <div className="main-content">
                <form onSubmit={formik.handleSubmit}>
                  <h4 className="content-title manage-profile-input-top-title">
                    Contact Details
                  </h4>
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="text"
                      name="email"
                      className={`my-form-control ${
                        formik.touched.email && formik.errors.email
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error-message">{formik.errors.email}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Phone Number*</label>
                    <input
                      type="text"
                      name="phoneNumber"
                      className={`my-form-control ${
                        formik.touched.phoneNumber && formik.errors.phoneNumber
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Phone Number"
                      value={formik.values.phoneNumber}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      inputMode="numeric"
                      pattern="[0-9]*"
                    />

                    {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                      <div className="error-message">
                        {formik.errors.phoneNumber}
                      </div>
                    ) : null}
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

export default ContactDetailsInput;
