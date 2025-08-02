import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from "react-redux";
import { getAllInterest } from "../../service/MANAGE_SLICE/interest-SLICE";
import { MODE_METRI, Mode, USER_ID_LOGGEDIN } from "../../utils";
import { updateUserById } from "../../dating/store/slice/AuthSlice";
import Lodder from "../component/layout/Lodder";

const SelectInterest = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const interests = useSelector((state) => state?.intersetSlice?.interset?.data);
  const interestsLoading = useSelector((state) => state?.intersetSlice?.loading);

  const userId = USER_ID_LOGGEDIN;

  const userData = {
    _id: userId,
    interest: selectedInterests,
  };

  useEffect(() => {
    dispatch(getAllInterest(MODE_METRI));
      setLoading(false)
  }, [dispatch, loading]);

  const handleInterestToggle = (interest) => {
    const updatedInterests = selectedInterests.includes(interest?._id)
      ? selectedInterests.filter((item) => item !== interest?._id)
      : [...selectedInterests, interest?._id];

    setSelectedInterests(updatedInterests);
  };

  const handleNavigateHome = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 100));
      await toast.promise(
        dispatch(updateUserById(userData)),
        {
          loading: 'Updating your interests 😍...',
          success: <b>Interests updated! Redirecting...</b>,
          error: <b>Could not update interests. Please try again.</b>,
        }
      );
      if (interestsLoading !== true) {
        navigate('/metrimonial/add-photos');
      }
    }
    catch (error) {
      toast.error("Error updating interests. Please try again.");
    }
  };

  return (
    <> {loading ? (
      <Lodder />
    ) : (
      <div className="container padding-top padding-bottom">
        <div className="row text-center">
          <h2 className="mb-4">Select Your Interests</h2>
          <div className="col">
            {interests && interests.map((interest, index) => (
              <Link
                key={index}
                style={{
                  border: `1px solid ${selectedInterests.includes(interest._id) ? "#d63384" : "lightgray"}`,
                  margin: "10px 10px 10px 10px",
                  padding: "5px 12px",
                  borderRadius: "25px",
                  cursor: "pointer",
                }}
                className={`interest-item flex-nowrap ${selectedInterests.includes(interest._id) ? "selected" : ""}`}
                onClick={() => handleInterestToggle(interest)}
              >
                {interest?.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="col-4 mt-4">
          {selectedInterests.length > 0 ? (
            <button className="default-btn reverse" onClick={handleNavigateHome}>
              <span>Submit your interests</span>
            </button>
          ) : (
            <button className="default-btn reverse" onClick={() => navigate('/metrimonial')}>
              <span>Skip</span>
            </button>
          )}
        </div>
      </div>
    )}
    </>
  );
};

export default SelectInterest;
