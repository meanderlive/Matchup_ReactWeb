import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import FooterFour from "../component/layout/footerFour";
import SelectProduct from "../component/select/selectproduct";
import toast, { Toaster } from "react-hot-toast";

import loveRed from "../assets/images/icons/love_red.png";
import loveBlack from "../assets/images/icons/love_black.png";
import HeaderFour from "../../component/layout/HeaderFour";
import { useDispatch, useSelector } from "react-redux";
import { UserData } from "../../assets/DummyData/userData";
import { fetchUsersByGender } from "../../service/common-service/getuserbyGender";
import { use } from "react";

const MatchPage = () => {
  const [favoriteContentList, setFavoriteContentList] = useState([]);
  const [loveImageStatus, setLoveImageStatus] = useState({});
  const [userData, setUserData] = useState(UserData);
  const [favrorite, setFavorite] = useState(UserData.slice(0, 7));
  const [matches, setMatches] = useState(UserData.slice(8, 15));
  const [user , setuser]=useState([])
  const User = JSON.parse(localStorage.getItem("userData"))
  const userId = User?.data?.mode;
  const findUser = User?.data?.looking;
  console.log("findUser=>", findUser);
  const navigate = useNavigate()
  const isAuthenction = useSelector((state) => state.userCreate.isAuth);
  const dispatch = useDispatch()
  const handleClick = (id, userName, user) => {
    setLoveImageStatus((prevLoveImageStatus) => {
      const isLiked = prevLoveImageStatus[id] === loveRed;

      // Move the user from Matches to Favorites
      if (isLiked) {
        const updatedMatchesList = matches.filter((val) => val.id !== id);
        setMatches(updatedMatchesList);

        const updatedFavoritesList = [
          ...favrorite,
          { id: id, name: userName, ...user },
        ];
        setFavorite(updatedFavoritesList);

        toast.success(`You've added ${userName} to favorites! 💖`);
      } else {
        // Move the user from Favorites to Matches
        const updatedFavoritesList = favrorite.filter((val) => val.id !== id);
        setFavorite(updatedFavoritesList);

        const updatedMatchesList = [
          ...matches,
          { id: id, name: userName, ...user },
        ];
        setMatches(updatedMatchesList);

        toast.success(
          `You've removed ${userName} from favorites and added to matches. 😢`
        );
      }

      return {
        ...prevLoveImageStatus,
        [id]: isLiked ? loveBlack : loveRed,
      };
    });
  };

  const getLoveImage = (userId) => {
    const isMatches = favoriteContentList.some((val) => val.id === userId);
    return isMatches ? loveRed : loveBlack;
  };
  const getBlackImage = (userId) => {
    const isFavrites = favoriteContentList.some((val) => val.id === userId);
    return isFavrites ? loveBlack : loveRed;
  };

  useEffect(() => {
    const Mydata = async () => {
      try {
        const res = await dispatch(fetchUsersByGender({
          gender: findUser,
          userId: userId
        })).unwrap();
        setuser(res.data)
      } catch (error) {
        toast.error("Failed to fetch users: " + error.message);
      }
    }
    Mydata()
  }, [])

  console.log("=====",user);
  

  return (
    <>
      <HeaderFour />

      <div className="member member--style2 padding-top padding-bottom">
        <div className="container ">
          <div className="member__info mb-4">
            <div className="member__info--left">
              <div
                className="group__bottom--head"
                style={{
                  padding: 0,
                }}
              >
                <div className="left">
                  <form action="#">
                    <input
                      className="bg-white"
                      type="text"
                      name="search"
                      placeholder="search"
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
                <div className="default-btn">
                  <span>Order By:</span>
                </div>
                <div className="banner__inputlist">
                  <SelectProduct select={"Nearest"} />
                </div>
              </div>
            </div>
          </div>

          <div className="section__wrapper mb-5">
            <div className="row">
              <div className="col">
                <h2>Favorite list</h2>
              </div>
            </div>

            <div className="row g-0 justify-content-center mx-12-none  ">
              {favrorite.map((val, i) => (
                <div className="member__item " key={i}>
                  <div className="member__inner member__inner-sized-hover react-main">
                    <div className="react">
                      <img
                        src={getBlackImage(val.id)}
                        width="25"
                        alt=""
                        onClick={() => handleClick(val.id, val.name, val)}
                      />
                    </div>
                    <div className="member__thumb">
                      <img src={val.avatar} alt={`${val.imgAlt}`} />
                      <span className={val.className}></span>
                    </div>
                    <div className="member__content">
                      <Link to={`/dating/user-profile/${val.id}`}>
                        <h5>{val.name}</h5>
                      </Link>
                      <p>
                        <span>{val.profession}</span> || <span>{val.age}</span>
                      </p>
                      <p>{val.activity}</p>
                    </div>

                    <div className="row mt-2 match-icon-main">
                      <div className="col ">
                        <Link
                          className="fs-3 ms-4"
                          to={`/dating/user-profile/${val.id}`}
                        >
                          <i
                            class="fa fa-user"
                            aria-hidden="true"
                            title="Profile"
                          ></i>
                        </Link>
                      </div>

                      <div className="col">
                        <Link className="fs-3 ms-3" to="/dating/chat-page2">
                          <i
                            class="fa fa-comment"
                            aria-hidden="true"
                            title="Message"
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="section__wrapper my-5">
            <div className="row">
              <div className="col">
                <h2>Match list</h2>
              </div>
            </div>
            <div className="row g-0 justify-content-center mx-12-none">
              {user.slice(0,10).map((val, i) => (
                <div className="member__item" key={i}>
                  <div className="member__inner member__inner-sized-hover react-main">
                    <div className="react">
                      <img
                        src={getLoveImage(val.id)}
                        width="25"
                        alt=""
                        onClick={() => handleClick(val.id, val.name, val)}
                      />
                    </div>
                    <div className="member__thumb">
                      <img style={{width:"100%",height:"100%"}} src={`https://datingapi.meander.software/assets/images/${val.avatars[0]}`} alt={`${val.imgAlt}`} />
                      <span className={val.className}></span>
                    </div>
                    <div className="member__content">
                      <Link to={`/dating/user-profile/${val.id}`}>
                        <h5>{val.name}</h5>
                      </Link>
                      <div>
                        <p>
                          <span>{val.profession}</span> ||{" "}
                          <span>{val.age ?? 29}</span>
                        </p>
                        <div>
                          <p>
                            <i
                              class="fa fa-map-marker"
                              style={{ color: "#f24570" }}
                              aria-hidden="true"
                            ></i>{" "}
                            {val.address}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row mt-2 match-icon-main">
                      <div className="col ">
                        <Link
                          className="fs-3 ms-4"
                          to={`/dating/user-profile/${val._id}`}
                        >
                          <i
                            class="fa fa-user"
                            aria-hidden="true"
                            title="Profile"
                          ></i>
                        </Link>
                      </div>

                      <div className="col">
                        <Link className="fs-3 ms-3" to="/dating/chat-page2">
                          <i
                            class="fa fa-comment"
                            aria-hidden="true"
                            title="Meassage"
                          ></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="member__pagination mt-4">
              <div className="member__pagination--left">
                <p>Viewing 1 - 20 of 12,345 Members</p>
              </div>
              <div className="member__pagination--right">
                {/* <Pagination /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterFour />
    </>
  );
};

export default MatchPage;
