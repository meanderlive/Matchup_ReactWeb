import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserData } from "../../assets/DummyData/userData";
import EventNotificationSchedule from "../component/popUps/eventNotificationSchedule ";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersByGender } from "../../service/common-service/getuserbyGender";
import toast from "react-hot-toast";

const Memberpop = ({ showModal, hideModal, calenderScheduleDAte, userInfoDate, setSelectedData  }) => {

const [user, setuser] = useState([])
  // const [favoriteContentList] = useState(UserData.slice(0, 18));
  const dispatch = useDispatch();
const UserData = JSON.parse(localStorage.getItem("userData"));



// Get users from Redux store
const { users, loading, error } = useSelector((state) => state.datingApi);


  // Fetch users based on gender and userId (can be from props)
  useEffect(() => {
    const Mydata = async () => {
      try {
        const res = await dispatch(fetchUsersByGender({
          gender: UserData.data.looking,
          userId: UserData.data.mode
        })).unwrap();
        setuser(res.data)
      } catch (error) {
        toast.error("Failed to fetch users: " + error.message);
      }
    }
    Mydata()
  }, [])
//  console.log("userInfoDate===>",userInfoDate);
 

  return (
    <Modal size="xl" show={showModal} onHide={hideModal} centered>
      <span
        onClick={hideModal}
        style={{ position: "absolute", right: "20px", top: "8px", color: "#213366", cursor: "pointer" }}
      >
        <i className="fa fa-times fs-3 modal-cls" aria-hidden="true"></i>
      </span>
      <div className="section__wrapper mb-5">
        <div className="row">
          <div className="col p-3 mx-2">
            <h4>Here's Your Matches,Schedule Your Event's</h4>
          </div>
        </div>

        <div className="row g-0 justify-content-center mx-12-none">
          {user.map((val, i) => (
            <div className="member__item" key={i}>
              <div className="member__inner member__inner-sized-hover react-main" onClick={ ()=>{
                    setSelectedData(val)
                    calenderScheduleDAte()} }>
                <div className="react">
                  {/* Add your logic here */}
                  {/* <img width="25" alt="" /> */}
                </div>
                <div className="member__thumb">
                < img src={`https://datingapi.meander.software/assets/images/${val.avatars[0] || "/default-avatar.png"} `} alt={val.imgAlt || "user"} style={{width: "100%", height: "200px"}}  />
                  <span className={val.className}></span>
                </div>
                <div className="member__content">
                  {/* <Link to={`/dating/user-profile?userID=${val.id}`}>
                  </Link> */}
                    <Link>
                    <h5 >{val.name}</h5>
                  </Link>
                  <p>
                    <span>{val.profession}</span> || <span>{val.age}</span>
                  </p>
                  <p>{val.activity}</p>
                </div>

                <div className="row mt-2 match-icon-main">
                  <div className="col">
                    <Link className="fs-3 ms-4" to={`/dating/user-profile?userID=${val.id}`}>
                      <i className="fa fa-user" aria-hidden="true" title="Profile"></i>
                    </Link>
                  </div>

                  <div className="col">
                    <Link className="fs-3 ms-3" to="/dating/chat-page2">
                      <i className="fa fa-comment" aria-hidden="true" title="Message"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default Memberpop;

