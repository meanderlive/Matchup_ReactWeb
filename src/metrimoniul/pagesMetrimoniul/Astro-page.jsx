import React from "react";
import HeaderFour from "../component/layout/HeaderFour";
import FooterFour from "../component/layout/footerFour";
import UserA from "../assets/images/userA.png";
import UserB from "../assets/images/userB.png";
import AstroA from "../assets/images/astroA.svg";
import AstroB from "../assets/images/astroB.svg";
import AstroC from "../assets/images/astroC.svg";
import AstroD from "../assets/images/astroD.svg";
import AstroE from "../assets/images/astroE.svg";
import AstroF from "../assets/images/astroF.svg";
import AstroG from "../assets/images/astroG.svg";
import AstroH from "../assets/images/astroH.svg";

const AstroPage = () => {
  const boxesData = [
    { imgSrc: AstroA, text: "Work", spanText: "0/1", borderColor: "#e654a0" },
    {
      imgSrc: AstroB,
      text: "Influence",
      spanText: "1/2",
      borderColor: "#ffb21d",
    },
    {
      imgSrc: AstroC,
      text: "Destiny",
      spanText: "2/3",
      borderColor: "#AF6AF3",
    },
    {
      imgSrc: AstroD,
      text: "Mentality",
      spanText: "3/4",
      borderColor: "#02bc49",
    },
    {
      imgSrc: AstroE,
      text: "Compatibility",
      spanText: "4/5",
      borderColor: "#5c6dff",
    },
    {
      imgSrc: AstroF,
      text: "Temperament",
      spanText: "5/6",
      borderColor: "#ffb21d",
    },
    { imgSrc: AstroG, text: "Love", spanText: "6/7", borderColor: "#e654a0" },
    { imgSrc: AstroH, text: "Health", spanText: "7/8", borderColor: "#2cb3ff" },
  ];
  return (
    <div className="bg-white">
      <HeaderFour />
      <div className="container">
        <div className="astrology_page_main_wrap">
          <div className="horoscope_score_wrap row align-items-center">
            <div className="col-md-6">
              <div className="its_a_match d-flex align-items-center justify-content-center">
                <img src={UserA} alt="" />
                <img src={UserB} alt="" />
                <div className="pink_circle">
                  <p>
                    It's a <br /> match
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="horoscope_score_info">
                <h1>Horoscope Score</h1>
                <p>Compatibility Score between Jessica and Smith</p>
                <div className="overall_score">
                  <h3>
                    27 / <span>36</span>
                  </h3>
                </div>
                <div className="prediction_edit">
                  <h4>Prediction are based on your details</h4>
                  <a className="default-btn reverse cursor">
                    <span>
                      Edit <i class="fas fa-edit"></i>
                    </span>
                  </a>
                </div>
                <div className="time_place_rashi d-flex align-items-center justify-content-between">
                  <div className="box_wrap">
                    <p>Time of Birth</p>
                    <span>08:00 AM</span>
                  </div>
                  <div className="box_wrap">
                    <p>Place Of Birth</p>
                    <span>USA</span>
                  </div>
                  <div className="box_wrap">
                    <p>Rashi</p>
                    <span>Capricon (Maker)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="Astro_Compatibility_wrap">
            <h2 className="mb-5">Astro Compatibility</h2>
            <div className="Astro_Compatibility_container d-flex ">
              {boxesData.map((box, index) => (
                <div
                  className="Astro_Compatibility_box text-center"
                  key={index}
                >
                  <div
                    className="Astro_Compatibility_box_inner_img"
                    style={{ border: `3px solid ${box.borderColor}` }}
                  >
                    <img src={box.imgSrc} alt="" />
                  </div>
                  <p>{box.text}</p>
                  <span>{box.spanText}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="john_bith_chart row">
            <div className="john_profile_preview text-center">
              <img src={UserA} alt="" />
              <p>John's Birth Chart</p>
            </div>
            <div className="col-md-6">
              <div className="date_time_place">
                <div className="date_time_place_inner">
                  <label htmlFor="">
                    Date of Birth <i class="fas fa-crown"></i>
                  </label>
                  <p>**/**/****</p>
                </div>
                <div className="date_time_place_inner">
                  <label htmlFor="">
                    Time of Birth <i class="fas fa-crown"></i>
                  </label>
                  <p>** ** AM</p>
                </div>
                <div className="date_time_place_inner">
                  <label htmlFor="">Place of Birth</label>
                  <p>California, USA</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="date_time_place">
                <div className="date_time_place_inner">
                  <label htmlFor="">
                    Nakshatra <i class="fas fa-crown"></i>
                  </label>
                  <p>Ashwini</p>
                </div>
                <div className="date_time_place_inner">
                  <label htmlFor="">
                    Manglik <i class="fas fa-crown"></i>
                  </label>
                  <p>Don't know</p>
                </div>
                <div className="date_time_place_inner">
                  <label htmlFor="">Rashi</label>
                  <p>Aries (Mesh)</p>
                </div>
              </div>
            </div>
            <div className="visible_to_premium">
              <h6>
                <i class="fas fa-crown"></i> These are visible only to Premium
                users.
              </h6>
            </div>
            <div className="connect_button text-center default_btn reverse">
              <a className="default-btn reverse cursor">
                <span>
                  <i class="fas fa-check"></i> Connect
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FooterFour />
    </div>
  );
};

export default AstroPage;
