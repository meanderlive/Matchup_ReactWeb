import { Component } from "react";
import img1 from "../../assets/images/app/01.jpg";
import img2 from "../../assets/images/app/02.jpg";

const subtitle = "Effortless Connections for All";
const title = "Get Your Matchup App Now!";
const desc =
  "You've discovered us, and love is already in the air. Over 5,000,000 individuals worldwide have embraced this same journey, experiencing the magic of our platform. Joining us today has never been simpler!";

let AppList = [
  {
    imgUrl: img1,
    imgAlt: "Dating Thumb",
    siteLink: "#",
  },
  {
    imgUrl: img2,
    imgAlt: "Dating Thumb",
    siteLink: "#",
  },
];

class AppSectionTwo extends Component {
  render() {
    return (
      <div className="app app--style2 padding-top padding-bottom">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-xxl-6 col-12">
              <div className="app__item wow fadeInUp" data-wow-duration="1.5s">
                <div className="app__inner">
                  <div className="app__content text-center">
                    <h4>{subtitle}</h4>
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <ul className="justify-content-center">
                      {AppList.map((val, i) => (
                        <li key={i}>
                          <a href={`${val.siteLink}`}>
                            <img src={`${val.imgUrl}`} alt={`${val.imgUrl}`} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppSectionTwo;
