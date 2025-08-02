import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/member/home2/project-pic-male/1.png";
import CancelScheduleModal from "../component/popUps/cancelSchedule";

const ViewSchedule = ({ showModal, hideModal, calenderScheduleDate }) => {
  const [CancelSchedule, setCancelSchedule] = useState(false);
  
  //   const user1 = {
  //     avatar:
  //       "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp",
  //     name: "Danny McChain",
  //     age: 23,
  //     address: "New York",
  //     content: "Lorem ipsum dolor sit.",
  //     timestamp: "Yesterday",
  //   };

  //   const user2 = {
  //     avatar:
  //       "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
  //     name: "Ben Smith",
  //     age: 25,
  //     address: "New York",
  //     content: "Lorem ipsum dolor sit.",
  //     timestamp: "Yesterday",
  //   };

  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <div className="main" style={{ position: "relative" }}>
        <span
          onClick={hideModal}
          style={{
            position: "absolute",
            right: "25px",
            top: "8px",
            color: "#213366",
            cursor: "pointer",
          }}
        >
          <i className="fa fa-times fs-3 " aria-hidden="true"></i>
        </span>
        <div className="svg-top ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="330"
            height="405"
            viewBox="0 0 330 405"
            fill="none"
          >
            <path
              d="M192.069 338.654C43.1066 317.937 22.2553 364.484 0.00750924 404.24L7.50122e-09 20.0255C-0.000299446 8.96583 8.96523 0 20.0248 0H309.519C320.577 0 329.544 8.96583 329.544 20.0245L329.543 243.055C325.491 286.302 295.076 352.979 192.069 338.654Z"
              fill="#D6B6F9"
            />
          </svg>

          <div className="upperData sched-detail">
            <h3 style={{ zIndex: "99999" }}>Your Schedule Detail</h3>
            <p className="onn">on</p>
            {/* <p>You and Desirae have both liked each other</p> */}
            <p className="fs-4 fw-600 sched-infoo-date"><i class="fa-solid fa-calendar-days"></i> 19 Dec </p>
            <div className="coll row align-items-center sched-main-wrap">
              <div className="col-md-4 col-12 sched-imgg">
                <div className="girl" >
                  <img
                    className="imgg11"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-md-8 col-12 sched-wrap">

                
                <p className="fs-4 text-muted fw-600 sched-infoo">Harper Mitchell</p>
                <p className="fs-4 text-muted fw-600 sched-infoo">  Fun and Interactive</p>

                <p className="fs-4 text-muted fw-600 sched-infoo">
                  <i class="fa-solid fa-calendar-days"></i> 19 Dec{" "}
                </p>
                <p className="fs-4 text-muted fw-600 sched-infoo">
                  Harper Mitchell
                </p>
                <p className="fs-4 text-muted fw-600 sched-infoo">
                  {" "}
                  Fun and Interactive
                </p>

                <p className="fs-4 text-muted fw-600 location sched-infoo">
                  <span className="m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                    >
                      <path
                        d="M3.91737 0.696289C1.75734 0.696289 0 2.45151 0 4.61014C0 7.49576 3.61369 10.929 3.76886 11.0742C3.81171 11.1122 3.86501 11.1333 3.91737 11.1333C3.97067 11.1333 4.02588 11.1122 4.06682 11.0742C4.222 10.929 7.83569 7.50476 7.83569 4.61014C7.83569 2.45151 6.07834 0.696289 3.91737 0.696289ZM3.91737 6.37335C2.94444 6.37335 2.15242 5.58237 2.15242 4.61014C2.15242 3.63696 2.94444 2.84698 3.91737 2.84698C4.89124 2.84698 5.68233 3.63696 5.68233 4.61014C5.68233 5.58237 4.89124 6.37335 3.91737 6.37335Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  At Cafe
                </p>
              </div>
              
            </div>

            <div className="coll row align-items-center sched-main-wrap">
              
              <div className="col-md-8 col-12 sched-wrap">
                {/* <p className="fs-4 text-muted fw-600 sched-infoo"><i class="fa-solid fa-calendar-days"></i> 19 Dec </p> */}
                <p className="fs-4 text-muted fw-600 sched-infoo">Harper Mitchell</p>
                <p className="fs-4 text-muted fw-600 sched-infoo">  Fun and Interactive</p>
                <p className="fs-4 text-muted fw-600 location sched-infoo">
                  <span className="m-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="8"
                      height="12"
                      viewBox="0 0 8 12"
                      fill="none"
                    >
                      <path
                        d="M3.91737 0.696289C1.75734 0.696289 0 2.45151 0 4.61014C0 7.49576 3.61369 10.929 3.76886 11.0742C3.81171 11.1122 3.86501 11.1333 3.91737 11.1333C3.97067 11.1333 4.02588 11.1122 4.06682 11.0742C4.222 10.929 7.83569 7.50476 7.83569 4.61014C7.83569 2.45151 6.07834 0.696289 3.91737 0.696289ZM3.91737 6.37335C2.94444 6.37335 2.15242 5.58237 2.15242 4.61014C2.15242 3.63696 2.94444 2.84698 3.91737 2.84698C4.89124 2.84698 5.68233 3.63696 5.68233 4.61014C5.68233 5.58237 4.89124 6.37335 3.91737 6.37335Z"
                        fill="white"
                      />
                    </svg>
                  </span>
                  At Cafe
                </p>
              </div>

              <div className="col-md-4 col-12 sched-imgg">
                <div className="girl">
                  <img
                    className="imgg11"
                    src="data:image/jpeg;base64,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"
                    alt=""
                  />
                </div>
              </div>
              
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="text-center sched-bottom">
            <Link>
              <button
                onClick={() => {
                  calenderScheduleDate();
                }}
                className="schedule-update"
              >
                <p className="celender schedulename">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="11"
                    viewBox="0 0 19 19"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_2149_148)">
                      <path
                        d="M15.0417 1.58333H14.25V0.791667C14.25 0.581704 14.1666 0.38034 14.0181 0.231874C13.8697 0.0834075 13.6683 0 13.4583 0C13.2484 0 13.047 0.0834075 12.8985 0.231874C12.7501 0.38034 12.6667 0.581704 12.6667 0.791667V1.58333H6.33333V0.791667C6.33333 0.581704 6.24993 0.38034 6.10146 0.231874C5.95299 0.0834075 5.75163 0 5.54167 0C5.3317 0 5.13034 0.0834075 4.98187 0.231874C4.83341 0.38034 4.75 0.581704 4.75 0.791667V1.58333H3.95833C2.9089 1.58459 1.90282 2.00203 1.16076 2.74409C0.418698 3.48615 0.00125705 4.49224 0 5.54167L0 15.0417C0.00125705 16.0911 0.418698 17.0972 1.16076 17.8392C1.90282 18.5813 2.9089 18.9987 3.95833 19H15.0417C16.0911 18.9987 17.0972 18.5813 17.8392 17.8392C18.5813 17.0972 18.9987 16.0911 19 15.0417V5.54167C18.9987 4.49224 18.5813 3.48615 17.8392 2.74409C17.0972 2.00203 16.0911 1.58459 15.0417 1.58333ZM1.58333 5.54167C1.58333 4.91178 1.83356 4.30769 2.27895 3.86229C2.72435 3.41689 3.32844 3.16667 3.95833 3.16667H15.0417C15.6716 3.16667 16.2756 3.41689 16.721 3.86229C17.1664 4.30769 17.4167 4.91178 17.4167 5.54167V6.33333H1.58333V5.54167ZM15.0417 17.4167H3.95833C3.32844 17.4167 2.72435 17.1664 2.27895 16.721C1.83356 16.2756 1.58333 15.6716 1.58333 15.0417V7.91667H17.4167V15.0417C17.4167 15.6716 17.1664 16.2756 16.721 16.721C16.2756 17.1664 15.6716 17.4167 15.0417 17.4167Z"
                        fill="#E654A0"
                      />
                      <path
                        d="M9.5 13.0625C10.1558 13.0625 10.6875 12.5308 10.6875 11.875C10.6875 11.2192 10.1558 10.6875 9.5 10.6875C8.84416 10.6875 8.3125 11.2192 8.3125 11.875C8.3125 12.5308 8.84416 13.0625 9.5 13.0625Z"
                        fill="#E654A0"
                      />
                      <path
                        d="M5.54199 13.0625C6.19783 13.0625 6.72949 12.5308 6.72949 11.875C6.72949 11.2192 6.19783 10.6875 5.54199 10.6875C4.88615 10.6875 4.35449 11.2192 4.35449 11.875C4.35449 12.5308 4.88615 13.0625 5.54199 13.0625Z"
                        fill="#E654A0"
                      />
                      <path
                        d="M13.458 13.0625C14.1138 13.0625 14.6455 12.5308 14.6455 11.875C14.6455 11.2192 14.1138 10.6875 13.458 10.6875C12.8022 10.6875 12.2705 11.2192 12.2705 11.875C12.2705 12.5308 12.8022 13.0625 13.458 13.0625Z"
                        fill="#E654A0"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_2149_148">
                        <rect width="19" height="19" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  Update Schedule
                </p>
              </button>
            </Link>
            <Link
                          className="dropdown-item py-2"
                          onClick={() => setCancelSchedule(true)}
                        >
            <button className="YES-msg-btn text-center">
              <CancelScheduleModal
                showModal={CancelSchedule}
                hideModal={() => setCancelSchedule(true)}
              />
                <p className="content">Cancel Schedule</p>
              </button>
              </Link>            
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewSchedule;
