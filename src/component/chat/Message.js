import React from "react";

const Message = ({ text, user, isCurrentUser, avatar }) => {
  const messageClass = isCurrentUser ? "current-user" : "other-user";

  return (
    <div className="custm-img-settng d-flex">
      {/* <img
        src={avatar}
        alt={`${user} Avatar`}
        className="user-avatar"
        style={{
          width: "35px",
          height: "35px",
          borderRadius: "50%",
        }}
      /> */}
      <div className={`message ${messageClass}`}>
        <div className="message-content">
          <div className="custom-message-text">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
