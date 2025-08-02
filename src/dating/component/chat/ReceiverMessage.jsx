// ReceiverMessage.js
import React from "react";

const ReceiverMessage = ({ text }) => {
  return (
    <div className="message receiver-message">
      <div className="message-content">
        <div className="custom-message-text">{text}</div>
      </div>
    </div>
  );
};

export default ReceiverMessage;
