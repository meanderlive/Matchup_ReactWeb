import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const newstitle = "Newsletter Sign up";
// const jointitle = "Join Community";
const accountTitle = "My Account";
const communityTitle = "Community";
const infotitle = "Our Information";
// const helpTitle = "Help Center";

const SocialList = [
  {
    iconName: "fa-brands fa-twitter",
    visitLink: "https://twitter.com/",
  },
  // {
  //   iconName: "fa-brands fa-twitch",
  //   visitLink: "#",
  // },
  {
    iconName: "fa-brands fa-instagram",
    visitLink: "https://www.instagram.com/",
  },
  // {
  //   iconName: "fa-brands fa-dribbble",
  //   visitLink: "#",
  // },
  {
    iconName: "fa-brands fa-facebook-messenger",
    visitLink: "https://www.facebook.com/",
  },
];

const InfoList = [
  {
    pageName: "About Us",
    pageLink: "/about",
  },
  {
    pageName: "Contact Us",
    pageLink: "/contact",
  },
  {
    pageName: "Privacy policy",
    pageLink: "/policy",
  },
];

const InfoListTwo = [
  {
    pageName: "Manage Account",
    pageLink: "/profile",
  },
  {
    pageName: "Membership Level",
    pageLink: "/membership",
  },
  {
    pageName: "Safety & Security",
    pageLink: "/safety-security",
  },
];

const InfoListThree = [
  {
    pageName: "Terms & Condition",
    pageLink: "/termsconditions",
  },
  {
    pageName: "FAQ",
    pageLink: "/faq",
  },
  {
    pageName: "Quick Start Guide",
    pageLink: "/quick-start-guide",
  },
];

const FooterFour = () => {
  const [newsEmail, setNewsEmail] = useState("");
  const key = getKey();
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userData");
    setIsLoggedIn(userLoggedIn);

    const intervalId = setInterval(() => {
      const newYear = new Date().getFullYear();
      if (newYear !== currentYear) {
        setCurrentYear(newYear);
      }
    }, 60000);

    return () => clearInterval(intervalId);
  }, [currentYear]);

  function getKey() {
    const datingId = localStorage.getItem("userData");
    const dattingObj = JSON.parse(datingId);
    const metrimoniulId = localStorage.getItem("metrimoniulId");
    if (metrimoniulId) {
      return "metrimoniul";
    } else if (dattingObj?.data?.mode === "658538cde21518a3d04bf3ae") {
      return "dating";
    } else {
      return "dating";
    }
  }

  return (
    <footer className="footer overflow-hidden">
      <div
        className="footer__top bg_img"
        style={{ backgroundImage: "url(/assets/images/footer/bg-3.jpg)" }}
      >
        <div
          className="footer__newsletter wow fadeInUp"
          data-wow-duration="1.5s"
        >
          <div className="container">
            <div className="row g-4 justify-content-center"></div>
          </div>
        </div>
        <div
          className="footer__toparea   wow fadeInUp"
          style={{ paddingTop: 50 }}
          data-wow-duration="1.5s"
        >
          <div className="container">
            <div className="row g-5 g-lg-0">
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__item">
                  <div className="footer__inner">
                    <div className="footer__content">
                      <div className="footer__content--title">
                        <h4>{accountTitle}</h4>
                      </div>
                      {/* <div className="footer__content--desc">
                        <ul>
                          {InfoListTwo.map((val, i) => (
                            <li key={i}>
                              {val.pageName === "Manage Account" ? (
                                isLoggedIn ? (
                                  <Link to={val.pageLink}>
                                    <i className="fa-solid fa-angle-right"></i>{" "}
                                    {val.pageName}
                                  </Link>
                                ) : (
                                  <Link to="/login">
                                    <i className="fa-solid fa-angle-right"></i>{" "}
                                    {val.pageName}
                                  </Link>
                                )
                              ) : (
                                <Link
                                  to={
                                    val.pageLink === "https://meander.software/"
                                      ? val.pageLink
                                      : `/${
                                          val.pageLink !== getKey()
                                            ? getKey()
                                            : ""
                                        }${val.pageLink}`
                                  }
                                >
                                  <i className="fa-solid fa-angle-right"></i>{" "}
                                  {val.pageName}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div> */}

                      <div className="footer__content--desc">
                        <ul>
                          {InfoListTwo.map((val, i) => (
                            <li key={i}>
                              {val.pageName === "Manage Account" ? (
                                isLoggedIn ? (
                                  <Link
                                    to={
                                      getKey() === "dating"
                                        ? "/dating/profile" // Update with the correct URL
                                        : "/profile"
                                    }
                                  >
                                    <i className="fa-solid fa-angle-right"></i>{" "}
                                    {val.pageName}
                                  </Link>
                                ) : (
                                  <Link to="/login">
                                    <i className="fa-solid fa-angle-right"></i>{" "}
                                    {val.pageName}
                                  </Link>
                                )
                              ) : (
                                <Link
                                  to={
                                    val.pageLink === "https://meander.software/"
                                      ? val.pageLink
                                      : `/${
                                          val.pageLink !== getKey()
                                            ? getKey()
                                            : ""
                                        }${val.pageLink}`
                                  }
                                >
                                  <i className="fa-solid fa-angle-right"></i>{" "}
                                  {val.pageName}
                                </Link>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__item">
                  <div className="footer__inner">
                    <div className="footer__content">
                      <div className="footer__content--title">
                        <h4>{communityTitle}</h4>
                      </div>
                      <div className="footer__content--desc">
                        <ul>
                          {InfoListThree.map((val, i) => (
                            <li key={i}>
                              <Link
                                to={
                                  val.pageLink === "https://meander.software/"
                                    ? val.pageLink
                                    : `/${key}${val.pageLink}`
                                }
                              >
                                <i className="fa-solid fa-angle-right"></i>{" "}
                                {val.pageName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__item">
                  <div className="footer__inner">
                    <div className="footer__content">
                      <div className="footer__content--title">
                        <h4>{infotitle}</h4>
                      </div>
                      <div className="footer__content--desc">
                        <ul>
                          {InfoList.map((val, i) => (
                            <li key={i}>
                              <Link
                                to={
                                  val.pageLink === "https://meander.software/"
                                    ? val.pageLink
                                    : `/${key}${val.pageLink}`
                                }
                              >
                                <i className="fa-solid fa-angle-right"></i>{" "}
                                {val.pageName}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-sm-6 col-12">
                <div className="footer__newsletter--area pb-4">
                  <div className="footer__newsletter--title pb-md-2 pb-2">
                    <h4>{newstitle}</h4>
                  </div>
                  <div className="footer__newsletter--form">
                    <form action="#">
                      <input
                        type="email"
                        name="email"
                        id="item01"
                        value={newsEmail}
                        onChange={(e) => {
                          setNewsEmail(e.target.value);
                        }}
                        placeholder="Your email address *"
                      />
                      <button type="submit" className="default-btn">
                        <span>Subscribe</span>
                      </button>
                    </form>
                  </div>
                </div>

                <div className="footer__newsletter--area justify-content-xxl-end">
                  <div className="footer__newsletter--social">
                    <ul>
                      {SocialList.map((val, i) => (
                        <li key={i}>
                          {val.visitLink ? (
                            <Link
                              to={`${val.visitLink}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={`${val.iconName}`}></i>
                            </Link>
                          ) : (
                            <i className={`${val.iconName}`}></i>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-hr" />
        <div className="footer__content text-center text-light custom-clss mt-3 mb-2">
          <p className="custom-clsss-ftr" style={{ paddingBottom: "10px" }}>
            All Rights Reserved &copy; {currentYear}{" "}
            <Link to="https://meander.software/">Meander Software </Link>{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
