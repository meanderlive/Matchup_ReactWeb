import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import user from "../../assets/avatar/add-photos.png";
import {
  getUserProfileAsync,
  uploadProfilePictureAsync,
} from "../../dating/store/slice/profileSlice";

const AddPhotos = () => {
  const dispatch = useDispatch();
  const [selectedImages, setSelectedImages] = useState([
    user,
    user,
    user,
    user,
  ]);

  useEffect(() => {
    // Fetch user profile data when the component mounts
    dispatch(getUserProfileAsync());
  }, [dispatch]);

  const navigate = useNavigate();

  const handleImageClick = async (index) => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";

    fileInput.addEventListener("change", async (event) => {
      const file = event.target.files[0];
      if (file) {
        const newImages = [...selectedImages];
        newImages[index] = URL.createObjectURL(file);
        setSelectedImages(newImages);

        // Dispatch the thunk to upload the profile picture
        try {
          await dispatch(uploadProfilePictureAsync(file));
          console.log("Profile picture uploaded successfully");
        } catch (error) {
          console.error("Error uploading profile picture:", error);
        }
      }
    });

    fileInput.click();
  };

  const submitImages = () => {
    console.log("check1");
    if (selectedImages.length >= 2) {
      toast.success("Images uploaded successfully!");
      navigate("/");
    } else {
      toast.error("Please select at least 2 images first.");
    }
    console.log("check3");
  };

  const title = "Add Images";
  const desc =
    "Make your dating profile stand out! Add images to showcase your personality and interests. Let others see the real you—upload your best photos now!";
  const btnText = "See More Popular";

  return (
    <div>
      <div className="member padding-top padding-bottom overflow-hidden">
        <div className="container">
          <div
            className="section__header style-2 text-center wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div
            className="section__wrapper wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="member__grid d-flex flex-wrap justify-content-center mx-12-none">
              {selectedImages.map((image, index) => (
                <div key={index} className="member__item male pointer px-3">
                  <div
                    className="member__inner"
                    onClick={() => handleImageClick(index)}
                    style={{ width: "260px", height: "300px" }}
                  >
                    <img
                      src={image}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      alt={`Selected Member ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                className="default-btn reverse mt-5"
                onClick={submitImages}
              >
                <span>Submit images</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPhotos;
