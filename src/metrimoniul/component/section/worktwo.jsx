import { Component } from "react";
import { Link } from "react-router-dom";

import img1 from "../../assets/images/work/09.png";
import img2 from "../../assets/images/work/10.png";

let WorkSectionTwoContentList = [
  {
    imgUrl: img1,
    imgAlt: "Dating Thumb",
    title: "Trust and Safety",
    desc: "Unlock exclusive features tailored to your needs by selecting from our range of membership levels.",
    btnText: "See More Details",
    btnLink: "/dating/policy",
  },
  {
    imgUrl: img2,
    imgAlt: "Dating Thumb",
    title: "Straightforward Membership",
    desc: "Dive into the benefits of our membership levels and select the one that suits you best.",
    btnText: "Membership Details",
    btnLink: "/dating/membership",
  },
];

class WorkSectionTwo extends Component {
  render() {
    return (
      <div
        className="work work--style2 padding-top padding-bottom bg_img"
        style={{ backgroundImage: "url(/assets/images/bg-img/01.jpg)" }}
      >
        <div className="container">
          <div className="section__wrapper">
            <div className="row g-4 justify-content-center">
              {WorkSectionTwoContentList.map((val, i) => (
                <div
                  className="col-xl-6 col-lg-8 col-12 wow fadeInLeft"
                  data-wow-duration="1.5s"
                  key={i}
                >
                  <div className="work__item">
                    <div className="work__inner">
                      <div className="work__thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="work__content">
                        <h3>{val.title}</h3>
                        <p>{val.desc} </p>
                        <Link to={val.btnLink} className="default-btn">
                          <span>{val.btnText}</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkSectionTwo;
