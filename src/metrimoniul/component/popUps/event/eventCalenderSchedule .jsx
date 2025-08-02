import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import toast from "react-hot-toast";
import Calendar from "react-calendar";
import Timer from '../chat/Timer'
import VenuePicker from '../chat/Venue'



const EventCalenderSchedule = ({showModal,hideModal,NotifyScheduleData}) => {
  const [showClock, setShowClock] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedTime,setSelectedTime] =useState(new Date())
  const [NotificationSchedule, setNotificationSchedule] = useState(false);
  const [selectedVenue, setSelectedVenue] = useState("");

  const handleClockClick = () => {
    setShowClock(!showClock);
    setShowCalendar(!showCalendar)
    console.log("checktime", setShowClock);
  };

  const handleVenueChange = (venue) => {
    setSelectedVenue(venue);
  };
  
  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
    console.log(setSelectedDate);
  };

 
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
   
  };

  const handleTimeChange = (time)=>{
    setSelectedTime(time);
    setShowClock(false)
    
  }
  const handleSubmit =  (e) => {
    e.preventDefault();
    try {
      const scheduledData = {
        date: selectedDate.toLocaleDateString(),
        time: selectedTime.toLocaleTimeString(),
        venue: selectedVenue,
      };
      NotifyScheduleData(scheduledData);
      toast.success("schedule date successfully updated");
      //  setButtonClass("default-btn reverse");
      hideModal(hideModal)
      console.log("checking  ato")
    } catch (error) {
      console.error("Error updating Contact profile:", error);
      toast.error("Failed to update Contact info");
    }
  };
  
  const [value, setValue] = useState('10:00');

  const onClick = (time) => {
    setValue(time);
 };



  
  return (
    <Modal show={showModal} onHide={hideModal} centered>
      {!showCalendar ? (
        <>
          <div
            className="main-calander"
            style={{ position: "relative", padding: "20px" }}
          >
            <span
              onClick={hideModal}
              style={{ position: "absolute", right: "25px", top: "10px", cursor: "pointer", color: "#213366" }}
            >
              <i className="fa fa-times fs-3" aria-hidden="true"></i>
            </span>

            <div className="Data-1 cstm-modal">
              <h5 className="fs-4 text-muted fw-700">
                Schedule Your Virtual Date for Meaningful Connections!
              </h5>
              <div className="settime">
              
               <Timer/>
                <span className="clock-icon" onClick={onClick} value={value}   >
                <i class="fa-solid fa-clock fa-xl" style={{color:"#B197FC"}}></i>
                </span>
              </div>
              <div className="setdate">
                <input
                  className="date"
                  type=""
                  dateFormat="DD/MM/YYYY"
                  placeholder="Choose Date"
                  value={selectedDate.toLocaleDateString()}
                  onClick={handleCalendarClick}
                />
                <span className="calander-icon" onClick={handleCalendarClick}>
                <i class="fa-regular fa-calendar-days fa-xl" style={{color:"#B197FC"}}></i>
                </span>
              </div>
                <div>
                <VenuePicker onVenueChange={handleVenueChange} />
                </div>
            </div>
          </div>
     
          <div className="sched-button" onClick={(e) => {
              e.preventDefault();
              NotifyScheduleData();
              handleSubmit(e);
            }}>
            <button  className="date-btn">
              <p className="date-content">Schedule Date</p>
            </button>
          </div>
      
        </>
          ) : showClock ? (
            <div className="clockArea">
            
            </div>
            
      ) : (
        <div className="calenderArea">
          <Calendar
            dateFormat="DD/MM/YYYY"
            onChange={handleDateChange}
            value={selectedDate}
          
          />
        </div>
      )}
      
    </Modal>
  );
};

export default EventCalenderSchedule;
