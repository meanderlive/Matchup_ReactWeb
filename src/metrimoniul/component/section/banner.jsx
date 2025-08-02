import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const title = "Find your true love";
const desc = "Serious dating with your perfect match is just a click away.";

const labelchangeone = "I am a";
const labelchangetwo = "Looking for";
const labelchangethree = "Age";
const labelchangefour = "Cities";
const btnText = "Find Your Partner";

const imgLink = "../assets/images/banner/01.png";
const imgAlt = "Dating Thumb";

const BannerOne = () => {
  const navigate = useNavigate();
  const isAuthenction = useSelector((state)=>state.userCreate.isAuth)
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

 

  const usaCities = [
    "New York",
    "Los Angeles",
    "Chicago",
    "Houston",
    "Phoenix",
    "Philadelphia",
    "San Antonio",
    "San Diego",
    "Dallas",
    "San Jose",
    "Austin",
    "Jacksonville",
    "San Francisco",
    "Indianapolis",
    "Columbus",
    "Fort Worth",
    "Charlotte",
    "Seattle",
    "Denver",
    "El Paso",
    "Detroit",
    "Washington",
    "Boston",
    "Memphis",
    "Nashville",
    "Portland",
    "Oklahoma City",
    "Las Vegas",
    "Baltimore",
    "Louisville",
    "Milwaukee",
    "Albuquerque",
    "Tucson",
    "Fresno",
    "Sacramento",
    "Mesa",
    "Kansas City",
    "Atlanta",
    "Long Beach",
    "Colorado Springs",
    "Raleigh",
    "Miami",
    "Oakland",
    "Minneapolis",
    "Tulsa",
    "Cleveland",
    "Wichita",
  ];

  const [selectedCountry, setSelectedCountry] = useState("India");
  const [selectedDistance, setSelectedDistance] = useState(10);
  const [selectAge, setSelectAge] = useState({
    minAge: "20",
    maxAge: "25",
  });

  const startAge = 18;
  const endAge = 40;

  const generateAgeOptions = () => {
    const ageOptions = [];
    for (let age = startAge; age <= endAge; age++) {
      ageOptions.push(
        <option key={age} value={age}>
          {age}
        </option>
      );
    }
    return ageOptions;
  };

  const startAge1 = 19;
  const endAge1 = 40;
  const generateAgeOptionsNew = () => {
    const ageOptions1 = [];
    for (let age = startAge1; age <= endAge1; age++) {
      ageOptions1.push(
        <option key={age} value={age}>                                                                                                                                                  
          {age}
        </option>
      );
    }
    return ageOptions1;
  };

  const handleFilterPartner = async (e) => {
    e.preventDefault(); // Fix the typo here
    if(!isAuthenction){
      toast.error("Login pls")
      setLoginModalOpen(true)
      return
    }
    try {
      navigate(`/dating/members?minAge=${selectAge.minAge}&maxAge=${selectAge.maxAge}`);
    } catch (error) {
      console.error("Error filtering partners:", error);
    }
  };

  const handleChangeData = (e) => {
    setSelectAge({ ...selectAge, [e.target.name]: e.target.value });
  };

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleDistanceChange = (e) => {
    setSelectedDistance(e.target.value);
  };
  return (
    <div
      className="banner padding-top padding-bottom bg_img"
      style={{ backgroundImage: "url(/assets/images/banner/bg.jpg)" }}
    >
      
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div
              className="banner__content wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay=".5s"
            >
              <div className="banner__title">
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
              <div className="banner__form">
                <form action="#">
                  <div className="banner__list">
                    <label>{labelchangeone}</label>
                    <div className="row">
                      <div className="col-6">
                        <label className="banner__inputlist" htmlFor="male">
                          <input
                            type="radio"
                            id="male"
                            name="me"
                            className="male"
                            defaultChecked
                          />
                          <span>Male</span>
                          <span className="banner__inputlist--icon">
                            <i className="fa-solid fa-mars"></i>
                          </span>
                        </label>
                      </div>
                      <div className="col-6">
                        <label className="banner__inputlist" htmlFor="female">
                          <input
                            type="radio"
                            id="female"
                            name="me"
                            className="female"
                          />
                          <span>Female</span>
                          <span className="banner__inputlist--icon">
                            <i className="fa-solid fa-venus"></i>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="banner__list">
                    <label>{labelchangetwo}</label>
                    <div className="row">
                      <div className="col-6">
                        <label className="banner__inputlist" htmlFor="male2">
                          <input
                            type="radio"
                            id="male2"
                            name="me2"
                            className="male"
                          />
                          <span>Male</span>
                          <span className="banner__inputlist--icon">
                            <i className="fa-solid fa-mars"></i>
                          </span>
                        </label>
                      </div>
                      <div className="col-6">
                        <label className="banner__inputlist" htmlFor="female2">
                          <input
                            type="radio"
                            id="female2"
                            name="me2"
                            className="female"
                            defaultChecked
                          />
                          <span>Female</span>
                          <span className="banner__inputlist--icon">
                            <i className="fa-solid fa-venus"></i>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="banner__list">
                    <label>{labelchangethree}</label>
                    <div className="row">
                      <div className="col-6">
                        <div className="banner__inputlist">
                          <select
                          name="minAge"
                            value={selectAge.minAge}
                            onChange={handleChangeData}
                          >
                            {generateAgeOptions()}
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="banner__inputlist">
                          <select
                          name="maxAge"
                            value={selectAge.maxAge}
                            onChange={handleChangeData}
                          >
                            {generateAgeOptionsNew()}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="banner__list">
                    <label>{`Distance (${selectedDistance} km)`}</label>
                    <div className="row">
                      <div className="col-12">
                          <Form.Range
                            className="custom-range" 
                            value={selectedDistance}
                            onChange={handleDistanceChange}
                            min={1}
                            max={100}
                          />
                        </div>
                    </div>
                  </div>

                  <div className="banner__list">
                    <label>{labelchangefour}</label>
                    <div className="row">
                      <div className="col-12">
                        <div className="banner__inputlist">
                          <select
                            id="country"
                            name="country"
                            value={selectedCountry}
                            onChange={handleCountryChange}
                          >
                            {usaCities.map((country, index) => (
                              <option key={index} value={country}>
                                {country}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    // type="submit"
                    className="default-btn reverse d-block"
                    onClick={handleFilterPartner}
                  >
                    <span>{btnText}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <div
              className="banner__thumb banner__thumb--thumb1 wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="1s"
            >
              <img src={imgLink} alt={imgAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
