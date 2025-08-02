import React, { useState } from "react";

const EventHeader = ({ title, curPage }) => {
  const [NotificationSchedule, setNotificationSchedule] = useState(false);
  const [calenderSchedule, setCalenderSchedule] = useState(false);
  const [showClock, setShowClock] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);
  const [CancelSchedule, setCancelSchedule] = useState(false);

  const clockTime = () => {
    setCalenderSchedule(false);
    setTimeout(() => {
      setShowClock(true);
    }, 500);
  };

  const calenderDate = () => {
    setCalenderSchedule(false);
    setTimeout(() => {
      setShowCalendar(true);
    }, 500);
  };
  const calenderScheduleDAte = () => {
    setNotificationSchedule(false);
    setTimeout(() => {
      setCalenderSchedule(true);
    }, 500);
  };

  return (
    <div className="pageheader bg_img event-banner" style={{ backgroundImage: "url(/assets/images/bg-img/pageheader.jpg)" }}>
      <div className="container">
        <div className="pageheader__content text-center">
          <h2>{title}</h2>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb justify-content-center mb-0">
              {/* <li className="breadcrumb-item"><Link to="#">{""}</Link></li> */}
              <li className="breadcrumb-item active" aria-current="page">{curPage}</li>
            </ol>
          </nav>
          <h2>Events</h2>
          <p>Discover Love Together: Our Exclusive Dating Event Schedule!{" "}  </p>
        </div>
        {/* <div className="default-btn reverse col-lg-2 col-md-4 col-sm-4  text-center " style={{marginLeft:"42%"}}>
                <button onClick={setNotificationSchedule}>Schedule Date</button>

                <EventNotificationScheduleModal
                  showModal={NotificationSchedule}
                  hideModal={() => setNotificationSchedule(false)}
                  calenderScheduleDAte={calenderScheduleDAte}
                />
                <EventCalenderScheduleModal
                  showModal={calenderSchedule}
                  hideModal={() => setCalenderSchedule(false)}
                  calenderDate={calenderDate}
                  clockTime={clockTime}
                />
              </div> */}
      </div>
      
    </div>
  );
};

export default EventHeader;


