import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserProfileAsync } from "../../../dating/store/slice/profileSlice";
import { USER_ID_LOGGEDIN } from "../../../utils";
import { useFormik } from "formik";
import * as Yup from "yup";

const PersonalDetalsInput = ({ userData, onUpdateProfile }) => {
  const dispatch = useDispatch();
  const userId = USER_ID_LOGGEDIN;
  const validationSchema = Yup.object({
    Religion: Yup.string().required("Religion is required"),
    Caste: Yup.string().required("Caste is required"),
    birthPlace: Yup.string().required("Birth Place is required"),
    Height: Yup.string().required("Height is required"),
    DietPreferences: Yup.string().required("Diet is required"),
  });

  const formik = useFormik({
    initialValues: {
      Religion: userData?.Religion || "",
      Caste: userData?.Caste || "",
      birthPlace: userData?.birthPlace || "",
      Height: userData?.Height || "",
      DietPreferences: userData?.DietPreferences || "",
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
                    Personal Details
                  </h4>
                  <div className="form-group">
                    <label>Religion*</label>
                    <input
                      type="text"
                      name="Religion"
                      className={`my-form-control ${
                        formik.touched.Religion && formik.errors.Religion
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Religion"
                      value={formik.values.Religion}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.Religion && formik.errors.Religion ? (
                      <div className="error-message">
                        {formik.errors.Religion}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Caste*</label>
                    <input
                      type="text"
                      name="Caste"
                      className={`my-form-control ${
                        formik.touched.Caste && formik.errors.Caste
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Caste"
                      value={formik.values.Caste}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Caste && formik.errors.Caste ? (
                      <div className="error-message">{formik.errors.Caste}</div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Birth Place*</label>
                    <select
                      name="birthPlace"
                      className={`my-form-control ${
                        formik.touched.birthPlace && formik.errors.birthPlace
                          ? "error"
                          : ""
                      }`}
                      value={formik.values.birthPlace}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="" label="Select Birth Place" />
                      <option value="City1" label="City 1" />
                      <option value="City2" label="City 2" />
                      <option value="City3" label="City 3" />
                      {/* Add more birthplace options as needed */}
                    </select>

                    {formik.touched.birthPlace && formik.errors.birthPlace ? (
                      <div className="error-message">
                        {formik.errors.birthPlace}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Height*</label>
                    <input
                      type="text"
                      name="Height"
                      className={`my-form-control ${
                        formik.touched.Height && formik.errors.Height
                          ? "error"
                          : ""
                      }`}
                      placeholder="Enter Your Height"
                      value={formik.values.Height}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />

                    {formik.touched.Height && formik.errors.Height ? (
                      <div className="error-message">
                        {formik.errors.Height}
                      </div>
                    ) : null}
                  </div>

                  <div className="form-group">
                    <label>Diet*</label>
                    <select
                      name="DietPreferences"
                      className={`my-form-control ${
                        formik.touched.DietPreferences &&
                        formik.errors.DietPreferences
                          ? "error"
                          : ""
                      }`}
                      value={formik.values.DietPreferences}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    >
                      <option value="" label="Select Diet Preference" />
                      <option value="Vegetarian" label="Vegetarian" />
                      <option value="Non-Vegetarian" label="Non-Vegetarian" />
                      <option
                        value="Both Veg and Non-Veg"
                        label="Both Veg and Non-Veg"
                      />
                      <option value="Vegan" label="Vegan" />
                      {/* Add more diet options as needed */}
                    </select>

                    {formik.touched.DietPreferences &&
                    formik.errors.DietPreferences ? (
                      <div className="error-message">
                        {formik.errors.DietPreferences}
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

export default PersonalDetalsInput;
