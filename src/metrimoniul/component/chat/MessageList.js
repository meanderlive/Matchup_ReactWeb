import React from "react";
import Message from "./Message";
import avt1 from "../../assets/avatar/1.png";
import avt2 from "../../assets/avatar/6.png";
import avt3 from "../../assets/avatar/4.png";
import avt4 from "../../assets/avatar/5.jpeg";
import avt5 from "../../assets/avatar/2.png";
import avt6 from "../../assets/avatar/7.jpeg";

const MessageList = ({ messages, activeUser }) => {
  const filteredMessages = activeUser
    ? messages.filter((message) => message.user === activeUser)
    : messages;

  const userInformation = {
    "User A": {
      name: "Amilia",
      avatar: avt1,
    },
    "User B": {
      name: "Harry",
      avatar: avt2,
    },
    "User C": {
      name: "Amayra",
      avatar: avt3,
    },
    "User D": {
      name: "Jonhy",
      avatar: avt4,
    },
    "User E": {
      name: "Oliva",
      avatar: avt5,
    },
    "User F": {
      name: "John Deo",
      avatar: avt6,
    },
  };

  return (
    <div className="message-list-container">
      {filteredMessages.map((message, index) => (
        <Message
          key={index}
          text={message.text}
          user={userInformation[message.user]}
          isCurrentUser={message.user === activeUser}
          avatar={userInformation[message.user].avatar}
        />
      ))}
    </div>
  );
};

export default MessageList;
