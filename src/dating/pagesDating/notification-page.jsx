import React, { useState } from "react";
import { Badge, Container, Row } from "react-bootstrap";
import HeaderFour from "../../component/layout/HeaderFour";
import boy from "../assets/images/member/male/01.jpg";
import connectionRequestImage from "../assets/images/member/male/02.jpg";
import defaultImage from "../assets/images/member/male/03.jpg";
import SelectProduct from "../component/select/selectproduct";

const NotificationItem = ({ notification, markAsRead }) => {
  const renderNotificationImage = () => {
    switch (notification.type) {
      case "profile-view":
        return (
          <img
            src={boy}
            className="profile-picture-notification"
            alt={`${notification.viewer}'s profile`}
          />
        );
      case "connection-request":
        return (
          <img
            className="profile-picture-notification"
            src={connectionRequestImage}
            alt="Connection Request"
          />
        );
      default:
        return (
          <img
            className="profile-picture-notification"
            src={defaultImage}
            alt="Default"
          />
        );
    }
  };

  return (
    <div
      className={`notification-item-page ${!notification.isRead ? "unread" : ""}`}
      onClick={() => markAsRead(notification.id)}
    >
      {renderNotificationImage()}
      <div className="notification-content-page">
        <div className="notification-details">
          <p
            className={`notification-title ${!notification.isRead ? "unread" : ""}`}
            style={{
              color: "#213366",
              fontWeight: notification.isRead ? "400" : "bold",
            }}
          >
            {notification.message}
          </p>
          {notification.type === "connection-request" && (
            <p className="notification-action">
              🤝 {notification.sender} sent you a connection request
            </p>
          )}
        </div>
      </div>
      <div className="notification-meta">
        <p className="notification-timestamp">{notification.timestamp}</p>
      </div>
    </div>
  );
};

const NotificationFullPage = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      message: "You have a new connection request!",
      type: "connection-request",
      sender: "John Doe",
      timestamp: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      message: "Jane Smith viewed your profile.",
      type: "profile-view",
      viewer: "Jane Smith",
      timestamp: "1 day ago",
      isRead: false,
    },
    {
      id: 3,
      message: "You received a message from Alex.",
      type: "message",
      sender: "Alex",
      timestamp: "3 days ago",
      isRead: false,
    },
    {
      id: 4,
      message: "Your profile photo has been liked by Emma.",
      type: "like",
      sender: "Emma",
      timestamp: "4 days ago",
      isRead: false,
    },
    {
      id: 5,
      message: "New job recommendation: Software Engineer at XYZ Company.",
      type: "job-recommendation",
      timestamp: "1 week ago",
      isRead: true,
    },
    {
      id: 6,
      message: "You have a new follower: Bob.",
      type: "follower",
      sender: "Bob",
      timestamp: "2 weeks ago",
      isRead: true,
    },
    {
      id: 7,
      message: "Congratulations! You reached 100 connections.",
      type: "achievement",
      timestamp: "3 weeks ago",
      isRead: true,
    },
    {
      id: 8,
      message: "Your post was shared by Alice.",
      type: "share",
      sender: "Alice",
      timestamp: "1 month ago",
      isRead: true,
    },
    {
      id: 9,
      message: "You have an upcoming event: Networking Meetup.",
      type: "event",
      timestamp: "1 month ago",
      isRead: true,
    },
    {
      id: 10,
      message: "Your connection request to Mark was accepted.",
      type: "connection-accepted",
      sender: "Mark",
      timestamp: "1 month ago",
      isRead: true,
    },
    // Additional 20 notifications
    {
      id: 11,
      message: "You received a new message from Sarah.",
      type: "message",
      sender: "Sarah",
      timestamp: "2 months ago",
      isRead: true,
    },
    {
      id: 12,
      message: "Congratulations! Your post got featured.",
      type: "achievement",
      timestamp: "3 months ago",
      isRead: true,
    },
    {
      id: 13,
      message: "You've been invited to speak at a conference.",
      type: "invitation",
      timestamp: "4 months ago",
      isRead: true,
    },
    {
      id: 14,
      message: "Your job application has been approved.",
      type: "job-approval",
      timestamp: "5 months ago",
      isRead: true,
    },
    {
      id: 15,
      message: "You have a new follower: Alice.",
      type: "follower",
      sender: "Alice",
      timestamp: "6 months ago",
      isRead: true,
    },
    {
      id: 16,
      message: "Someone mentioned you in a comment.",
      type: "mention",
      sender: "Chris",
      timestamp: "7 months ago",
      isRead: true,
    },
    {
      id: 17,
      message: "Your post reached 1,000 likes!",
      type: "achievement",
      timestamp: "8 months ago",
      isRead: true,
    },
    {
      id: 18,
      message: "You have a new connection request from Michael.",
      type: "connection-request",
      sender: "Michael",
      timestamp: "9 months ago",
      isRead: true,
    },
    {
      id: 19,
      message: "Your profile was visited by Tom.",
      type: "profile-view",
      viewer: "Tom",
      timestamp: "10 months ago",
      isRead: true,
    },
    {
      id: 20,
      message: "You've been endorsed for a new skill: ReactJS.",
      type: "skill-endorsement",
      timestamp: "11 months ago",
      isRead: true,
    },
    // ... (10 more notifications)
  ]);
  

  const markAsRead = (notificationId) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === notificationId
          ? { ...notification, isRead: true }
          : notification
      )
    );
  };

  const unreadCount = notifications.filter((notification) => !notification.isRead).length;

  return (
    <>
      <HeaderFour />
      <Container>
        <Row className="align-items-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <h2 className="notification-title-page">
              Notifications <Badge bg="danger">{unreadCount}</Badge>
            </h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div
              className="member__info--right member__info--right-notification "
             
            >
             
            </div>
          </div>
        </Row>
        <div className="notification-modal-page">
          {notifications.map((notification) => (
            <NotificationItem
              key={notification.id}
              notification={notification}
              markAsRead={markAsRead}
            />
          ))}
        </div>
      </Container>
    </>
  );
};

export default NotificationFullPage;
