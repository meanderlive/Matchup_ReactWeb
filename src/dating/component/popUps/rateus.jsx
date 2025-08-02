import React from "react";
import { Modal, Button } from "react-bootstrap";

const Rateus = ({ showModal, hideModal }) => {
  const message = "Are you sure want to block ABC";
  return (
    <Modal show={showModal} onHide={hideModal} centered>
      <span onClick={hideModal}>
        <i
          class="fa fa-times fs-3"
          aria-hidden="true"
          style={{
            cursor: "pointer",
            float: "right",
            padding: "15px 25px 0 0",
          }}
        ></i>
      </span>

      <Modal.Body>
        <div className="travel-suit-case text-center">
        <div className="travel-modal-title mt-3">
          <h3 className=" text-center">Rate-Us</h3>
        </div>
        <div className="travel-modal-para mt-3 px-3">
          <p className="text-center text-muted">
          What you feel about this our service
          </p>
        </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
          >
            <g clip-path="url(#clip0_2128_9371)">
              <path
                d="M17.3572 0L22.8572 12.375L33.8572 13.75L25.6072 20.625L28.3572 33L17.3572 26.125L6.35718 33L9.10718 20.625L0.857178 13.75L11.8572 12.375L17.3572 0Z"
                fill="#F39C12"
              />
              <path
                d="M17.3572 0L11.8572 12.375L2.27509 13.4749L9.10719 19.25L8.84937 20.3499L9.10719 20.625L6.70094 31.3499L17.3572 24.75L28.0134 31.3499L25.6072 20.625L25.8657 20.3499L25.6072 19.25L32.4396 13.4749L22.8572 12.375L17.3572 0Z"
                fill="#F1C40F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2128_9371">
                <rect
                  width="33"
                  height="33"
                  fill="white"
                  transform="translate(0.857178)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
          >
            <g clip-path="url(#clip0_2128_9371)">
              <path
                d="M17.3572 0L22.8572 12.375L33.8572 13.75L25.6072 20.625L28.3572 33L17.3572 26.125L6.35718 33L9.10718 20.625L0.857178 13.75L11.8572 12.375L17.3572 0Z"
                fill="#F39C12"
              />
              <path
                d="M17.3572 0L11.8572 12.375L2.27509 13.4749L9.10719 19.25L8.84937 20.3499L9.10719 20.625L6.70094 31.3499L17.3572 24.75L28.0134 31.3499L25.6072 20.625L25.8657 20.3499L25.6072 19.25L32.4396 13.4749L22.8572 12.375L17.3572 0Z"
                fill="#F1C40F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2128_9371">
                <rect
                  width="33"
                  height="33"
                  fill="white"
                  transform="translate(0.857178)"
                />
              </clipPath>
            </defs>
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
          >
            <g clip-path="url(#clip0_2128_9371)">
              <path
                d="M17.3572 0L22.8572 12.375L33.8572 13.75L25.6072 20.625L28.3572 33L17.3572 26.125L6.35718 33L9.10718 20.625L0.857178 13.75L11.8572 12.375L17.3572 0Z"
                fill="#F39C12"
              />
              <path
                d="M17.3572 0L11.8572 12.375L2.27509 13.4749L9.10719 19.25L8.84937 20.3499L9.10719 20.625L6.70094 31.3499L17.3572 24.75L28.0134 31.3499L25.6072 20.625L25.8657 20.3499L25.6072 19.25L32.4396 13.4749L22.8572 12.375L17.3572 0Z"
                fill="#F1C40F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2128_9371">
                <rect
                  width="33"
                  height="33"
                  fill="white"
                  transform="translate(0.857178)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
          >
            <g clip-path="url(#clip0_2128_9371)">
              <path
                d="M17.3572 0L22.8572 12.375L33.8572 13.75L25.6072 20.625L28.3572 33L17.3572 26.125L6.35718 33L9.10718 20.625L0.857178 13.75L11.8572 12.375L17.3572 0Z"
                fill="#F39C12"
              />
              <path
                d="M17.3572 0L11.8572 12.375L2.27509 13.4749L9.10719 19.25L8.84937 20.3499L9.10719 20.625L6.70094 31.3499L17.3572 24.75L28.0134 31.3499L25.6072 20.625L25.8657 20.3499L25.6072 19.25L32.4396 13.4749L22.8572 12.375L17.3572 0Z"
                fill="#F1C40F"
              />
            </g>
            <defs>
              <clipPath id="clip0_2128_9371">
                <rect
                  width="33"
                  height="33"
                  fill="white"
                  transform="translate(0.857178)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="33"
            viewBox="0 0 34 33"
            fill="none"
          >
            <g clip-path="url(#clip0_2128_9387)">
              <path
                d="M16.7143 0L22.2143 12.375L33.2143 13.75L24.9643 20.625L27.7143 33L16.7143 26.125L5.71429 33L8.46429 20.625L0.214294 13.75L11.2143 12.375L16.7143 0Z"
                fill="#CECECE"
              />
              <path
                d="M16.7143 0L11.2143 12.375L1.63217 13.4749L8.46427 19.25L8.20646 20.3499L8.46427 20.625L6.05802 31.3499L16.7143 24.75L27.3705 31.3499L24.9643 20.625L25.2228 20.3499L24.9643 19.25L31.7966 13.4749L22.2143 12.375L16.7143 0Z"
                fill="#CFCFCF"
              />
            </g>
            <defs>
              <clipPath id="clip0_2128_9387">
                <rect
                  width="33"
                  height="33"
                  fill="white"
                  transform="translate(0.214294)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
      <div>
        <input type="text" style={{backgroundColor:'#F1F1F1', height:'150px',margin:'20px 0px'}} />
      </div>
      
        <div className="travel-modal-btn">
          <div className="col d-flex" style={{justifyContent:'space-between'}}>
          <button className="default-btn d-block " style={{width:'45%'}}>
              <span>{"cancel"} </span>
            </button>
            <button type="submit" className="default-btn d-block "style={{width:'45%'}}>
              <span>{"submit"} </span>
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
                <Button variant="default" onClick={hideModal}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={hideModal}>
                    Block
                </Button>
            </Modal.Footer> */}
    </Modal>
  );
};

export default Rateus;
