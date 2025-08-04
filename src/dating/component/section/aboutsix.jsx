import { Component } from "react";
import { Link } from "react-router-dom";

const title = "Welcome aboard!";
const subtitle = "Matchup: Where Emotions Unite, Connections Flouris.";
const desc =
  "Discover Matchup, your friendly dating tailored for creating vibrant dating communities. Embrace a space designed to kindle emotions, foster connections, and craft the happiest of stories. Welcome to a platform where your unique journey of love and friendship begins!.";
const btnText = "Get A Membership";
const imgUrl = "../../assets/images/about/01.png";
const imgAlt = "Dating Thumb";

class AboutSectionSix extends Component {
  render() {
    return (
      <div className="about about--style5 padding-top padding-bottom">
        <div className="container">
          <div className="row justify-content-center g-4 align-items-center">
            <div className="col-lg-6 col-12">
              <div className="about__thumb">
                <img src={`${imgUrl}`} alt={`${imgAlt}`} />
              </div>
            </div>
            <div className="col-lg-6 col-12">
              <div className="about__content">
                <h2>{title}</h2>
                <h5>{subtitle}</h5>
                <p>{desc}</p>
                <Link to="/dating/membership" className="default-btn reverse">
                  <span>{btnText}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSectionSix;
