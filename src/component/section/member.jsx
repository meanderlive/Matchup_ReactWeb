import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loveRed from "../../assets/images/icons/love_red.png";
import loveBlack from "../../assets/images/icons/love_black.png";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
// import LoginModal from "../../dating/component/popUps/LoginPls";
import { UserData } from "../../assets/DummyData/userData";


const title = "Locals' Picks: Where Connections Bloom!";
const desc =
  "Discover hidden gems in your area! Get recommendations from locals to spark meaningful connections and memorable dates.";
const btnText = "See More Nearest";



const MemberSection = () => {
  const [loveImageStatus, setLoveImageStatus] = useState({});
  const [selectedUser, setSelectedUser] = useState(null);
  const isAuthenction = useSelector((state) => state.userCreate.isAuth)
  const navigate = useNavigate();
  // const [isLoginModalOpen, setLoginModalOpen] = useState(false);


  const toastLove = () => {
    if (isAuthenction) {
      return toast.success("You've got a new admirer! 💖");
    } else {
      navigate('/login')
    }
  };

  const toastStar = () => {
    if (isAuthenction) {
      return toast.success("Congratulations, you just received a Super Like! 🌟");
    } else {
      navigate('/login')
    }
  };

  const toastCross = () => {
    if (isAuthenction) {
      return toast.success(
        "Not a match this time, but plenty more connections await! 🚫"
      );
    } else {
      navigate('/login')
    }
  };

  const handleClick = (userId, userName) => {
    if (!isAuthenction) {

      window.location.href = "/login";
      return;
    }
    const newLoveImageStatus = {
      ...loveImageStatus,
      [userId]: loveImageStatus[userId] === loveRed ? loveBlack : loveRed,
    };

    setLoveImageStatus(newLoveImageStatus);

    const isLiked = newLoveImageStatus[userId] === loveRed;

    if (isLiked) {
      toast.success(`You've added ${userName} to favorites! 💖`);
    } else {
      toast.success(`You've removed ${userName} from favorites. 😢`);
    }
  };

  return (
    <div className="member padding-top padding-bottom overflow-hidden">
      {/* {isLoginModalOpen && (
        <LoginModal showModal={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
      )} */}
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
          <div className="member member--style2">
            <div className="container">
              <div className="section__wrapper home-memb-wrapp">
                <div className="row g-0 justify-content-center mx-12-none memb-infoo">
                  {UserData.slice(0, 4).map((val, i) => (
                    <div className="member__item " key={i}>
                      <div className="member__inner member__inner-sized-hover react-main">
                        <div className="react">
                          {/* <img
                            src={loveImageStatus[val.title] || loveBlack}
                            width="25"
                            alt=""
                            onClick={() => handleClick(val.title, val.title, loveImageStatus, memberssetLoveImageStatus)}
                          /> */}
                        </div>
                        <div className="member__thumb">
                          <img src={val.avatar} alt={`${val.imgAlt}`} />
                          <span className={val.className}></span>
                        </div>


                        <div className="row mt-2 match-icon-main">
                          <div className="member__content">
                            <Link to={`/dating/user-profile/${val.id}`}>
                              <h5>{val.name || "name"}</h5>
                            </Link>
                            <div>
                              <p>
                                <span>{val.profession}</span> ||{" "}
                                <span>{val.age}</span>
                              </p>
                              <div>
                                <p>
                                  <i
                                    className="fa fa-map-marker"
                                    style={{ color: "#f24570" }}
                                    aria-hidden="true"
                                  ></i>{" "}
                                  {val.location || "address"}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="member__btns text-center">
                            <button className="icon_border_red" onClick={toastLove}>
                              <i
                                className="fa fa-heart icon_text_red"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <button
                              className="icon_border_yellow"
                              onClick={toastStar}
                            >
                              <i
                                className="fa fa-star icon_text_yellow"
                                aria-hidden="true"
                              ></i>
                            </button>
                            <button
                              className="icon_border_blue"
                              onClick={toastCross}
                            >
                              <i
                                className="fa fa-times icon_text_blue"
                                aria-hidden="true"
                              ></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            
              <Link to= {isAuthenction ? "/dating/members" : "/login" } className="default-btn">
                <span>{btnText}</span>
              </Link>
         

          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberSection;
