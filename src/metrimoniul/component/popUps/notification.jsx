



import React, { useState, useEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const NotificationPage = () => {
  const [notifications, setNotifications] = useState([]);

  const notificationsData = [
    {
       "id": 1,
       "type": "match",
       "message": "Congratulations! You have a new match. Click to view their profile.",
       "timestamp": "2023-11-15T10:30:00Z"
     },
     {
       "id": 2,
       "type": "message",
       "message": "You've received a new message from John. Click to read.",
       "timestamp": "2023-11-14T18:45:00Z"
     },
     {
       "id": 3,
       "type": "interest",
       "message": "Someone has expressed interest in your profile. Check it out.",
       "timestamp": "2023-11-13T12:15:00Z"
     },
     {
       "id": 4,
       "type": "reminder",
       "message": "Don't forget to update your profile picture for better visibility!",
       "timestamp": "2023-11-12T09:00:00Z"
     },
     {
       "id": 5,
       "type": "match",
       "message": "Great news! Another match found for you. Click to see who it is.",
       "timestamp": "2023-11-11T15:30:00Z"
     },
     {
       "id": 6,
       "type": "message",
       "message": "You've got a new message from Emily. Check it out now!",
       "timestamp": "2023-11-10T21:20:00Z"
     },
     {
       "id": 7,
       "type": "interest",
       "message": "Someone is interested in getting to know you better. Respond to their interest.",
       "timestamp": "2023-11-09T08:45:00Z"
     },
     {
       "id": 8,
       "type": "reminder",
       "message": "Complete your profile by adding more details. Profiles with more information get more attention!",
       "timestamp": "2023-11-08T14:10:00Z"
     },
     {
       "id": 9,
       "type": "match",
       "message": "Exciting news! You and Alex are a perfect match. Click to connect.",
       "timestamp": "2023-11-07T11:55:00Z"
     },
     {
       "id": 10,
       "type": "message",
       "message": "A new message is waiting for you. Open now to read.",
       "timestamp": "2023-11-06T17:30:00Z"
     }
 ];

 useEffect(() => {
    setNotifications(notificationsData);
  }, []);

  useEffect(() => {
    const notificationLoop = setInterval(() => {
      notifications.forEach((notification, index) => {
        setTimeout(() => {
          toast(notification.message, { duration: 5000 });
        }, index * 10000);
      });
    }, (notifications.length + 1) * 1000);

    return () => clearInterval(notificationLoop);
  }, [notifications]);

  return (
    <div>
      {/* <Toaster position="bottom-right" /> */}
      <style>{`
        @media (max-width: 768px) {
          .Toastify__toast-container {
            top: 0;
            bottom: auto;
          }
        }
      `}</style>
    </div>

  );
};

export default NotificationPage;












// import React, { useState, useEffect } from 'react';
// import { Toaster, toast } from 'react-hot-toast';

// const NotificationPage = () => {
//   const [notifications, setNotifications] = useState([]);

//   const notificationsData = [
//          {
//             "id": 1,
//             "type": "match",
//             "message": "Congratulations! You have a new match. Click to view their profile.",
//             "timestamp": "2023-11-15T10:30:00Z"
//           },
//           {
//             "id": 2,
//             "type": "message",
//             "message": "You've received a new message from John. Click to read.",
//             "timestamp": "2023-11-14T18:45:00Z"
//           },
//           {
//             "id": 3,
//             "type": "interest",
//             "message": "Someone has expressed interest in your profile. Check it out.",
//             "timestamp": "2023-11-13T12:15:00Z"
//           },
//           {
//             "id": 4,
//             "type": "reminder",
//             "message": "Don't forget to update your profile picture for better visibility!",
//             "timestamp": "2023-11-12T09:00:00Z"
//           },
//           {
//             "id": 5,
//             "type": "match",
//             "message": "Great news! Another match found for you. Click to see who it is.",
//             "timestamp": "2023-11-11T15:30:00Z"
//           },
//           {
//             "id": 6,
//             "type": "message",
//             "message": "You've got a new message from Emily. Check it out now!",
//             "timestamp": "2023-11-10T21:20:00Z"
//           },
//           {
//             "id": 7,
//             "type": "interest",
//             "message": "Someone is interested in getting to know you better. Respond to their interest.",
//             "timestamp": "2023-11-09T08:45:00Z"
//           },
//           {
//             "id": 8,
//             "type": "reminder",
//             "message": "Complete your profile by adding more details. Profiles with more information get more attention!",
//             "timestamp": "2023-11-08T14:10:00Z"
//           },
//           {
//             "id": 9,
//             "type": "match",
//             "message": "Exciting news! You and Alex are a perfect match. Click to connect.",
//             "timestamp": "2023-11-07T11:55:00Z"
//           },
//           {
//             "id": 10,
//             "type": "message",
//             "message": "A new message is waiting for you. Open now to read.",
//             "timestamp": "2023-11-06T17:30:00Z"
//           }
//       ];

//   useEffect(() => {
//     setNotifications(notificationsData);
//   }, []);

//   useEffect(() => {
//     const notificationLoop = setInterval(() => {
//       notifications.forEach((notification, index) => {
//         setTimeout(() => {
//           if (notification.type === 'message') {
//             // Custom toast for messages
//             // toast.custom((t) => (
//             //   <div
//             //     className={`${
//             //       t.visible ? 'animate-enter' : 'animate-leave'
//             //     } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
//             //   >
//             //     <div className="flex-1 w-0 p-4">
//             //       <div className="flex items-start">
//             //         <div className="flex-shrink-0 pt-0.5">
//             //           <img
//             //             className="h-10 w-10 rounded-full"
//             //             src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
//             //             alt=""
//             //           />
//             //         </div>
//             //         <div className="ml-3 flex-1">
//             //           <p className="text-sm font-medium text-gray-900">
//             //             Emilia Gates
//             //           </p>
//             //           <p className="mt-1 text-sm text-gray-500">
//             //             Sure! 8:30pm works great!
//             //           </p>
//             //         </div>
//             //       </div>
//             //     </div>
                
//             //   </div>
//             // ))
//             if (notification.type === 'message'){
//               toast(notification.message,
//                  <img
//                         className="h-10 w-10 rounded-full"
//                         src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
//                         alt=""
//                       />
//                 { duration: 5000 }); 
//             }
//           } else {
//             // Default toast for other types
//             toast(notification.message, { duration: 5000 });
//           }
//         }, index * 1000);
//       });
//     }, (notifications.length + 1) * 1000);

//     return () => clearInterval(notificationLoop);
//   }, [notifications]);

//   return (
//     <div>
//       <Toaster position="top-right" />
//     </div>
//   );
// };

// export default NotificationPage;
