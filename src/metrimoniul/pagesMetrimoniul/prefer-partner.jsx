// ... (your existing imports)

import { useFormik } from "formik";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import HeaderFour from "../component/layout/HeaderFour";
import toast, { Toaster } from "react-hot-toast";

const PartnerPreference = (selectedProfile) => {
    const navigate = useNavigate();
    const fileInputRef = useRef(null);

    const saveSettings = async (selectedProfile) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    };
  
    const formik = useFormik({
      initialValues: {
        minAge: "",
        maxAge: "",
        minHeight: "",
        maxHeight: "",
        maritalStatus: "",
        religion: "",
        caste: "",
        MotherStatus: "",
        NoOfBrothers: 0,
        ofWhichMarriedBrothers: 0,
        NoOfSisters: 0,
        ofWhichMarriedSisters: 0,
        GovtIDProof: ""
      },
     
      onSubmit: async (values) => {
        try {
          // Simulate a delay using setTimeout
          await new Promise((resolve) => setTimeout(resolve, 100));
          await toast.promise(
            saveSettings(selectedProfile), // Assuming saveSettings is a function to save Partner preference
            {
              loading: 'Saving your Partner preference 😍...',
              success: <b>Partner preference saved! Redirecting...</b>,
              error: <b>Could not save. Please try again.</b>,
            }
          );
          navigate('/metrimonial/interest');
        } catch (error) {
          // Remove the following line to prevent the error toast
          // toast.error("Error submitting Family details. Please try again.");
        }
      },
    });
  
    const handleFileChange = (event) => {
      formik.setFieldValue("GovtIDProof", event.currentTarget.files[0]);
    };
  
    const handleImageClick = () => {
      fileInputRef.current.click();
    };
  
    return (
      <section className="log-regs">
        <HeaderFour />
        <div className="container padding-top">
          <div className="row">
            <div>
              <h2 className="text-center">Partner Preference</h2>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="image"></div>
            <div className="">
              <div className="log-reg-inner">
                <div className="main-content mt-5">
                  <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="custom-normalhide">
                          <div className="form-group">
                            <label>Min Age*</label>
                            <select
                              name="minAge"
                              value={formik.values.minAge}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="20" label="20" />
                              <option value="25" label="25" />
                              <option value="30" label="30" />
                            </select>
                            {formik.touched.minAge && formik.errors.minAge ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.minAge}
                              </div>
                            ) : null}
                          </div>
  
                          <div className="form-group">
                            <label>Max Age*</label>
                            <select
                              name="maxAge"
                              value={formik.values.maxAge}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="25" label="25" />
                              <option value="30" label="30" />
                              <option value="35" label="35" />
                            </select>
                            {formik.touched.maxAge && formik.errors.maxAge ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.maxAge}
                              </div>
                            ) : null}
                          </div>
  
                          <div className="form-group">
                            <label>Min Height*</label>
                            <select
                              name="minHeight"
                              value={formik.values.minHeight}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="5.1" label="5.1 ft" />
                              <option value="5.5" label="5.5 ft" />
                              <option value="6.1" label="6.1 ft" />
                            </select>
                            {formik.touched.minHeight && formik.errors.minHeight ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.minHeight}
                              </div>
                            ) : null}
                          </div>
  
                          <div className="form-group">
                            <label>Max Height*</label>
                            <select
                              name="maxHeight"
                              value={formik.values.maxHeight}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="5.5" label="5.5 ft" />
                              <option value="6.1" label="6.1 ft" />
                              <option value="6.5" label="6.5 ft" />
                            </select>
                            {formik.touched.maxHeight && formik.errors.maxHeight ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.maxHeight}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      </div>
  
                      <div className="col-lg-6">
                        <div className="custom-normalhide">
                          <div className="form-group">
                            <label>Marital Status*</label>
                            <select
                              name="maritalStatus"
                              value={formik.values.maritalStatus}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="NeverMarried" label="Never Married" />
                              <option value="AwaitingDivorce" label="Awaiting Divorce" />
                              <option value="Divorce" label="Divorced" />
                              <option value="Widowed" label="Widowed" />
                            </select>
                            {formik.touched.maritalStatus && formik.errors.maritalStatus ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.maritalStatus}
                              </div>
                            ) : null}
                          </div>
  
                          <div className="form-group">
                            <label>Religion*</label>
                            <select
                              name="religion"
                              value={formik.values.religion}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="Hindu" label="Hindu" />
                              <option value="Sikhism" label="Sikhism" />
                              <option value="Muslim" label="Muslim" />
                              <option value="Christian" label="Christian" />
                            </select>
                            {formik.touched.religion && formik.errors.religion ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.religion}
                              </div>
                            ) : null}
                          </div>
  
                          <div className="form-group">
                            <label>Caste*</label>
                            <select
                              name="caste"
                              value={formik.values.caste}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Select" disabled />
                              <option value="OBC" label="OBC" />
                              <option value="SC" label="SC" />
                              <option value="ST" label="ST" />
                              <option value="General" label="General" />
                            </select>
                            {formik.touched.caste && formik.errors.caste ? (
                              <div className="error-message" style={{ color: "red" }}>
                                {formik.errors.caste}
                              </div>
                            ) : null}
                          </div>
  
                          <div className="form-group">
                            <label>Professional Status*</label>
                            <select
                              name="professionDetail"
                              value={formik.values.professionDetail}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className="my-form-control"
                            >
                              <option value="" label="Doesn’t Matter" disabled />
                              <option value="1" label="1" />
                              <option value="2" label="2" />
                              <option value="3" label="3" />
                              <option value="4" label="4" />
                              <option value="5" label="5" />
                            </select>
                          </div>
                        </div>
                      </div>
  
                      <div className="col-lg-12">
                        <button
                          className="default-btn reverse mt-5 mx-auto w-25"
                          type="submit"
                        >
                          <span>Done</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default PartnerPreference;
  