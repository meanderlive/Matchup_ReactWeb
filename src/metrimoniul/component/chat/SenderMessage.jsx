import React from "react";

const SenderMessage = ({ text }) => {
  return (
    <div className="message sender-message">
      <div className="message-content">
        <div className="custom-message-text">{text}</div>
      </div>
    </div>
  );
};

export default SenderMessage;
