import { Link } from "react-router-dom";
import SelectProduct from "../component/select/selectproduct";
import {
  LOCAL_USER_GENDER,
  LOCAL_USER_GENDER_METRI,
  MODE_METRI,
} from "../../utils";
import { useCallback, useEffect, useState } from "react";
import userMale from "../../dating/assets/images/myCollection/user-male.jpg";
import { metriGetAllUsersAsync } from "../../service/MANAGE_SLICE/find-user-SLICE";
import {
  createActivities,
  getBySenderUserIds,
} from "../../dating/store/slice/ActivitiesSlice";
import { useDispatch, useSelector } from "react-redux";
import HeaderFour from "../component/layout/HeaderFour";
import MetriSearchFilterModal from "../component/popUps/FilterUsers";
import toast from "react-hot-toast";
import Lodder from "../component/layout/Lodder";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
//images
import like from "../assets/images/icons/like.png";
import superlike from "../assets/images/icons/superlike.png";
import cancel from "../assets/images/icons/cancel.png";
import astro from "../assets/images/icons/Astro.png";
import FooterFour from "../component/layout/footerFour";

const MembersPage = () => {
  const datingId = localStorage.getItem("userData");
  const user_Data = JSON.parse(datingId);
  const Store = useSelector((state) => state);
  let favUserList = Store?.activies?.Activity?.data || [];
  const [members, setMembers] = useState([]);
  const [filterModal, setFilterModal] = useState(false);
  const ALL_USER_METRIMONIAL = useSelector((state) => state.getAllUser.users);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const userByMode = LOCAL_USER_GENDER_METRI();

  const navigate = useNavigate(); // Hook to navigate

  const handleAstroClick = () => {
    navigate("/astro"); // Navigate to the AstroPage route
  };

  const handleLike = async (_id) => {
    let loadingToastId;
    try {
      loadingToastId = toast.loading("Sending like...");

      // Check if the user has already been liked

      // If not, dispatch the like activity
      dispatch(
        createActivities({
          senderUserId: user_Data.data._id,
          receiverUserId: _id,
          action_logs: "likes",
          description: "likes",
          note: "likes",
          mode: MODE_METRI,
          activityType: "like",
        })
      );
      setMembers((prevMembers) =>
        prevMembers.filter((member) => member._id !== _id)
      );

      toast.success(`You liked this user`);

      toast.dismiss(loadingToastId);
    } catch (error) {
      console.error("Error in handleLike:", error);
      toast.dismiss(loadingToastId);
      toast.error("Failed to send like. Please try again.");
    }
  };

  const handleSuperLike = async (_id) => {
    let loadingToastId;
    try {
      loadingToastId = toast.loading("Sending Superlike...");
      dispatch(
        createActivities({
          senderUserId: user_Data.data._id,
          receiverUserId: _id,
          action_logs: "superlikes",
          description: "Superlike",
          note: "Superlike",
          mode: MODE_METRI,
          activityType: "superlike",
        })
      );
      setMembers((prevMembers) =>
        prevMembers.filter((member) => member._id !== _id)
      );

      toast.success(`You Superliked this user`);

      toast.dismiss(loadingToastId);
    } catch (error) {
      console.error("Error in handleLike:", error);
      toast.dismiss(loadingToastId);
      toast.error("Failed to send like. Please try again.");
    }
  };

  const handleCancel = async (_id) => {
    let loadingToastId;
  };

  useEffect(() => {
    dispatch(metriGetAllUsersAsync());
    setLoading(false);
  }, []);

  const ac = async () => {
    await dispatch(
      getBySenderUserIds({
        modeid: MODE_METRI,
        id: user_Data.data._id,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      await ac(); // Wait for ac function to complete
      setMembers([]);
      const showuserByGender = ALL_USER_METRIMONIAL.filter(
        (member) => member.iAm !== userByMode
      );

      showuserByGender.forEach((data1Item) => {
        let matchFound = false;
        favUserList.forEach((data2Item) => {
          if (data2Item?.receiverUserId._id === data1Item?._id) {
            matchFound = true;
          }
        });
        if (!matchFound) {
          setMembers((prevMembers) => [...prevMembers, data1Item]);
        }
      });
    };

    fetchData();
  }, [ALL_USER_METRIMONIAL]);

  return (
    <>
      <HeaderFour />
      {loading ? (
        <Lodder />
      ) : (
        <div className="member member--style3 padding-top padding-bottom">
          <div className="container">
            <div className="member__info mb-4">
              <div className="member__info--left">
                <div className="member__info--filter">
                  <div
                    className="default-btn"
                    style={{ backgroundColor: "#f24570" }}
                  >
                    <span onClick={() => setFilterModal(true)}>
                      Filter Your Search <i className="fa-solid fa-sliders"></i>
                    </span>
                  </div>
                </div>
                <div className="group__bottom--head">
                  <div className="left">
                    <form>
                      <input
                        type="text"
                        name="name"
                        placeholder="search..."
                        value={filter.name}
                        onChange={(e) => setFilter(e.target.value)}
                      />
                      <button type="submit">
                        <i className="fa-solid fa-magnifying-glass"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>

              <div className="member__info--right">
                <div className="member__info--customselect right w-100">
                  <div
                    className="default-btn text"
                    style={{ backgroundColor: "#f24570", color: "white" }}
                  >
                    <span className="text-light">Order By:</span>
                  </div>
                  <div className="banner__inputlist">
                    <SelectProduct select={"Newest"} />
                  </div>
                </div>
              </div>
            </div>

            <div className="section__wrapper">
              <div
                className="row g-0 mx-12-none justify-content-center wow fadeInUp"
                data-wow-duration="1.5s"
              >
                {members.map((val, i) => (
                  <div className="member__item" key={i}>
                    <div className="member__inner">
                      <div className="member__thumb member-atsro-main">
                        <img
                          src={
                            val.mainAvatar
                              ? `https://datingapi.meander.software/assets/images/${val.mainAvatar}`
                              : userMale
                          }
                          alt="dating thumb"
                        />
                      </div>
                      {/* <Link to="/astro"> */}
                      <div
                        className="member-atsro"
                        onClick={handleAstroClick}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={astro} alt="" className="member-atsro-imgs" />
                        <small className="text-light float-end pe-2 pt-1">
                          Astro
                        </small>
                      </div>
                      {/* </Link> */}
                      <div className="member__content">
                        <Link to={`/metrimonial/user-profile/${val._id}`}>
                          <h5>{val.name || ""}</h5>
                        </Link>
                        <p>
                          {" "}
                          <small style={{ color: "#f24570" }}>
                            <i
                              class="me-2 fa fa-graduation-cap"
                              aria-hidden="true"
                            ></i>
                          </small>
                          <small>{val.occupation || ""}</small>
                        </p>
                        <p>
                          {" "}
                          <small style={{ color: "#f24570" }}>
                            <i
                              class="me-2 fa fa-map-marker"
                              aria-hidden="true"
                            ></i>
                          </small>
                          <small>{val.dob || ""}</small> ||{" "}
                          <small>{`${val.Height}ft` || ""}</small>
                        </p>
                        <div className="row col-12">
                          <div className="col-4 mx-auto ">
                            <img
                              src={cancel}
                              alt=""
                              className="pointer"
                              title="Cancel"
                              onClick={() => handleCancel(val._id)}
                            />
                          </div>
                          <div className="col-4 mx-auto ">
                            <img
                              src={superlike}
                              alt=""
                              className="pointer"
                              title="Like"
                              onClick={() => handleSuperLike(val._id)}
                            />
                          </div>
                          <div className="col-4 mx-auto ">
                            <img
                              src={like}
                              alt=""
                              className="pointer"
                              title="SuperLike"
                              onClick={() => handleLike(val._id)}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <MetriSearchFilterModal
                showModal={filterModal}
                hideModal={() => setFilterModal(false)}
              />
            </div>
          </div>
          <FooterFour />
        </div>
      )}
    </>
  );
};

export default MembersPage;
