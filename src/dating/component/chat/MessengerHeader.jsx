import React from "react";
import phoneIcon from "../../assets/chat/telephone.png";

const MessengerHeader = ({ text, user, isCurrentUser, avatar, userName }) => {
  return (
    <div className="messenger-header">
      <div className="user-info">
        <div className="d-flex">
          <img
            src={userName?.img}
            alt={`${userName?.userName} `}
            className="user-avatar"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
            }}
          />
          <h5 className="custom-username" style={{ marginLeft: "15px" }}>
            {userName?.userName}
          </h5>

          <div
            className="phone-call-icons"
            style={{ width: "30px", height: "30px" }}
          >
            <img src={phoneIcon} alt="Phone Call Icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessengerHeader;
