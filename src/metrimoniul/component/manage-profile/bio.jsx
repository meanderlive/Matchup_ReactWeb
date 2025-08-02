import React from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { updateUserProfileAsync } from "../../../dating/store/slice/profileSlice";
import { USER_ID_LOGGEDIN } from "../../../utils";
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ManageProfileBio = ({ userData, onUpdateProfile, editMode }) => {
  const dispatch = useDispatch();
  const userId = USER_ID_LOGGEDIN;

  const validationSchema = Yup.object({
    description: Yup.string().required('Bio is required'),
  });

  const formik = useFormik({
    initialValues: {
      description: userData?.description || '',
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        const updatedUserData = {
          description: values.description,
        };

        const loadingToast = toast.loading('Profile is updating...');

        await dispatch(updateUserProfileAsync({ updatedUserData, userId }));
        onUpdateProfile();
        toast.dismiss(loadingToast);
        setTimeout(() => {
          toast.success('Profile successfully updated');
        }, 500);
      } catch (error) {
        console.error('Error updating profile:', error);
        setTimeout(() => {
          toast.error('Failed to update profile');
        }, 500);
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
                    Bio
                  </h4>

                  <div className="form-group w-100">
                   
                    <textarea
                      rows="8"
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Enter Bio"
                      value={formik.values.description}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="my-form-control"
                    ></textarea>
                    {formik.touched.description && formik.errors.description ? (
                      <div className="error-message">{formik.errors.description}</div>
                    ) : null}
                  </div>
                  <button type="submit" className="default-btn reverse">
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

export default ManageProfileBio;
