import { Link, useNavigate } from "react-router-dom";
import SelectProduct from "../component/select/selectproduct";
import { LOCAL_USER_GENDER_METRI, MODE_METRI } from "../../utils";
import { useEffect, useState } from "react";
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
import like from "../assets/images/icons/like.png";
import superlike from "../assets/images/icons/superlike.png";
import cancel from "../assets/images/icons/cancel.png";
import astro from "../assets/images/icons/Astro.png";
import FooterFour from "../component/layout/footerFour";
import { fetchUsersByGender } from "../../service/common-service/getuserbyGender";
import { BASE_URL } from "../../base";

const MembersPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const Store = useSelector((state) => state);

  const [members, setMembers] = useState([]);
  const [filterModal, setFilterModal] = useState(false);
  const [filter, setFilter] = useState("");
  const [loading, setLoading] = useState(true);

  const datingId = localStorage.getItem("userData");
  const user_Data = datingId ? JSON.parse(datingId) : null;
  const userByMode = LOCAL_USER_GENDER_METRI();

  const isUserApproved = (user) => {
    if (!user) return false;
    const normalize = (v) =>
      typeof v === "string" ? v.trim().toLowerCase() : v;

    const status = normalize(user.status);
    const accountStatus = normalize(user.accountStatus);
    const approvalStatus = normalize(user.approvalStatus);

    return (
      user.isVerified ||
      user.verified ||
      user.emailVerified ||
      user.isEmailVerified ||
      user.isApproved ||
      user.approved ||
      user.adminApproved ||
      approvalStatus === "approved" ||
      ["approved", "active", "verified"].includes(status) ||
      ["approved", "active", "verified"].includes(accountStatus)
    );
  };

  const handleAstroClick = () => navigate("/astro");

  const handleLike = async (_id) => {
    let toastId;
    try {
      toastId = toast.loading("Sending like...");
      await dispatch(
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
      setMembers((prev) => prev.filter((m) => m._id !== _id));
      toast.success("You liked this user");
    } catch {
      toast.error("Failed to send like.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleSuperLike = async (_id) => {
    let toastId;
    try {
      toastId = toast.loading("Sending Superlike...");
      await dispatch(
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
      setMembers((prev) => prev.filter((m) => m._id !== _id));
      toast.success("You Superliked this user");
    } catch {
      toast.error("Failed to send superlike.");
    } finally {
      toast.dismiss(toastId);
    }
  };

  const handleCancel = (_id) => {
    setMembers((prev) => prev.filter((m) => m._id !== _id));
  };

  const loadMembers = async () => {
    try {
      setLoading(true);

      // Load activities first
      await dispatch(
        getBySenderUserIds({
          modeid: MODE_METRI,
          id: user_Data?.data?._id,
        })
      );

      let list = Store?.getAllUser?.users || [];

      if (!Array.isArray(list) || list.length === 0) {
        if (user_Data?.data?.looking) {
          const resp = await dispatch(
            fetchUsersByGender({
              gender: user_Data.data.looking,
              userId: user_Data.data.mode ?? MODE_METRI,
            })
          ).unwrap();
          list = resp?.data || [];
        } else {
          const resp = await dispatch(metriGetAllUsersAsync()).unwrap();
          list = Array.isArray(resp) ? resp : resp?.data || [];
        }
      }

      // Apply approval filter
      const approvedList = list.filter(isUserApproved);

      // Apply gender filter
      const showByGender = approvedList.filter((m) => m.iAm !== userByMode);

      // Remove favourites
      const favUserIds =
        (Store?.activies?.Activity?.data || []).map(
          (x) => x?.receiverUserId?._id
        ) || [];
      const finalList = showByGender.filter((m) => !favUserIds.includes(m._id));

      setMembers(finalList);
    } catch (err) {
      console.error("Error loading members", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadMembers();
  }, []);

  return (
    <>
      <HeaderFour />
      {loading ? (
        <Lodder />
      ) : (
        <div className="member member--style3 padding-top padding-bottom">
          <div className="container">
            {/* Filter UI */}
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
                    <form onSubmit={(e) => e.preventDefault()}>
                      <input
                        type="text"
                        name="name"
                        placeholder="search..."
                        value={filter}
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

            {/* Members List */}
            <div className="section__wrapper">
              <div className="row g-0 mx-12-none justify-content-center">
                {members.map((val, i) => (
                  <div className="member__item" key={i}>
                    <div className="member__inner">
                      <div className="member__thumb member-atsro-main">
                        <img
                          src={
                            val.mainAvatar
                              ? `${BASE_URL}/assets/images/${val.mainAvatar}`
                              : val.avatars?.[0]
                              ? `${BASE_URL}/assets/images/${val.avatars[0]}`
                              : userMale
                          }
                          alt="dating thumb"
                        />
                      </div>
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
                      <div className="member__content">
                        <Link to={`/metrimonial/user-profile/${val._id}`}>
                          <h5>{val.name || ""}</h5>
                        </Link>
                        <p>
                          <small style={{ color: "#f24570" }}>
                            <i className="me-2 fa fa-graduation-cap"></i>
                          </small>
                          <small>{val.occupation || ""}</small>
                        </p>
                        <p>
                          <small style={{ color: "#f24570" }}>
                            <i className="me-2 fa fa-map-marker"></i>
                          </small>
                          <small>{val.dob || ""}</small> ||{" "}
                          <small>{`${val.Height}ft` || ""}</small>
                        </p>
                        <div className="row col-12">
                          <div className="col-4 mx-auto">
                            <img
                              src={cancel}
                              alt=""
                              className="pointer"
                              title="Cancel"
                              onClick={() => handleCancel(val._id)}
                            />
                          </div>
                          <div className="col-4 mx-auto">
                            <img
                              src={superlike}
                              alt=""
                              className="pointer"
                              title="SuperLike"
                              onClick={() => handleSuperLike(val._id)}
                            />
                          </div>
                          <div className="col-4 mx-auto">
                            <img
                              src={like}
                              alt=""
                              className="pointer"
                              title="Like"
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
