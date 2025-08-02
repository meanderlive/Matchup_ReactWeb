import { Component } from "react";
import { Link } from "react-router-dom";

const newstitle = "Newsletter Sign up";
const jointitle = "Join Community";
const infotitle = "Our Information";
const accountTitle = "My Account";
const helpTitle = "Help Center";
const communityTitle = "Community";

let SocialList = [
  {
    iconName: "fa-brands fa-twitter",
    visitLink: "https://twitter.com/meandersoftware?",
  },
  {
    iconName: "fa-brands fa-twitch",
    visitLink: "#",
  },
  {
    iconName: "fa-brands fa-instagram",
    visitLink: "https://www.instagram.com/meander.software/",
  },
  {
    iconName: "fa-brands fa-dribbble",
    visitLink: "#",
  },
  {
    iconName: "fa-brands fa-facebook-messenger",
    visitLink: "https://www.facebook.com/meandersoftware?mibextid=ZbWKwL",
  },
];

let InfoList = [
  {
    pageName: "About Us",
    pageLink: "/about",
  },
  {
    pageName: "Contact Us",
    pageLink: "/contact",
  },
  {
    pageName: "Business License",
    pageLink: "https://meander.software/",
  },
];

let InfoListTwo = [
  {
    pageName: "Manage Account",
    pageLink: "https://meander.software/",
  },
  {
    pageName: "Privacy policy",
    pageLink: "/policy",
  },
  // {
  //   pageName: "Safety and Security",
  //   pageLink: "https://meander.software/",
  // },
  {
    pageName: "Membership Level",
    pageLink: "https://meander.software/",
  },
];

let InfoListThree = [
  {
    pageName: "Help center",
    pageLink: "https://meander.software/",
  },

  {
    pageName: "FAQ",
    pageLink: "/faq",
  },
  {
    pageName: "Terms & Condition",
    pageLink: "/termsconditions",
  },
  // {
  //   pageName: "Quick Start Guide",
  //   pageLink: "https://meander.software/",
  // },
];

// let InfoListFour = [
//   {
//     pageName: "Privacy policy",
//     pageLink: "/policy",
//   },
//   {
//     pageName: "End User Agreements",
//     pageLink: "https://meander.software/",
//   },
//   {
//     pageName: "Terms & Condition",
//     pageLink: "/termsconditions",
//   },
// ];

class FooterFour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsEmail: "",
    };
  }
  getKey = () => {
    const datingId = localStorage.getItem("userData");
    const dattingObj = JSON.parse(datingId);
    const metrimoniulId = localStorage.getItem("metrimoniulId");
    if (dattingObj?.data?.data?.mode === "65943637acc570d6b14edf38") {
      return "metrimoniul";
    } else if (dattingObj?.data?.mode === "658538cde21518a3d04bf3ae") {
      return "dating";
    } else {
      return "dating";
    }
  };
  render() {
    const key = this.getKey();
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
                          <h4>{infotitle}</h4>
                        </div>
                        <div className="footer__content--desc">
                          <ul>
                            {/* {InfoList.map((val, i) => (
                              <li key={i}>
                                <Link to={val.pageLink}>
                                  <i className="fa-solid fa-angle-right"></i>{" "}
                                  {val.pageName}
                                </Link>
                              </li>
                            ))} */}

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
                  <div className="footer__item">
                    <div className="footer__inner">
                      <div className="footer__content">
                        <div className="footer__content--title">
                          <h4>{accountTitle}</h4>
                        </div>
                        <div className="footer__content--desc">
                          <ul>
                            {/* {InfoListTwo.map((val, i) => (
                              <li key={i}>
                                <Link to={val.pageLink}>
                                  <i className="fa-solid fa-angle-right"></i>{" "}
                                  {val.pageName}
                                </Link>
                              </li>
                            ))} */}
                            {InfoListTwo.map((val, i) => (
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
                          <h4>{communityTitle}</h4>
                        </div>
                        <div className="footer__content--desc">
                          <ul>
                            {/* {InfoListThree.map((val, i) => (
                              <li key={i}>
                                <Link to={val.pageLink}>
                                  <i className="fa-solid fa-angle-right"></i>{" "}
                                  {val.pageName}
                                </Link>
                              </li>
                            ))} */}

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
                          value={this.state.newsEmail}
                          onChange={(e) => {
                            this.setState({ newsEmail: e.target.value });
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
                      {/* <ul>
                        {SocialList.map((val, i) => (
                          <li key={i}>
                            <Link to={`/${key}${val.pageLink}`}>
                              <i className={`${val.iconName}`}></i>
                            </Link>
                          </li>
                        ))}
                      </ul> */}

                      <ul>
                        {SocialList.map((val, i) => (
                          <li key={i}>
                            {val.visitLink ? (
                              <Link to={`${val.visitLink}`}>
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
                <hr className="footer-hr" />
                <div className="footer__content text-center text-light custom-clss mt-3 mb-2">
                  <p className="custom-clsss-ftr">
                    All Rights Reserved &copy;{" "}
                    <Link to="https://meander.software/">
                      {" "}
                      Meander Software{" "}
                    </Link>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default FooterFour;
