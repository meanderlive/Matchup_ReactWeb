import { Component } from "react";
import img1 from "../../assets/images/about/01.jpg";
import img2 from "../../assets/images/about/02.jpg";
import img3 from "../../assets/images/about/03.jpg";
import img4 from "../../assets/images/about/04.jpg";

const title = "Maximize Your Experience with Our App";
const subtitle =
  "Empowering connections, safeguarding security, and curating personalized experiences to maximize your journey of meaningful connections and enriched interactions.";

let AboutContentList = [
  {
    imgUrl: img1,
    imgAlt: "Dating Thumb",
    title: "Effortless Connections",
    desc: "Subtitle: Seamlessly connect with like-minded individuals in just a tap.",
  },
  {
    imgUrl: img2,
    imgAlt: "Dating Thumb",
    title: "Enhanced Security",
    desc: "Subtitle: Your safety is our priority - enjoy a secure and protected online environment.",
  },
  {
    imgUrl: img3,
    imgAlt: "Dating Thumb",
    title: "Personalized Matches",
    desc: "Subtitle: Tailored recommendations that resonate with your preferences and interests.",
  },
  {
    imgUrl: img4,
    imgAlt: "Dating Thumb",
    title: "Streamlined Experience",
    desc: "Subtitle: Navigate smoothly through our app for a hassle-free and enjoyable journey.",
  },
];

class AboutSection extends Component {
  render() {
    return (
      <div className="about padding-top padding-bottom">
        <div className="container">
          <div
            className="section__header style-2 text-center wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <div className="section__wrapper">
            <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
              {AboutContentList.map((val, i) => (
                <div
                  className="col wow fadeInUp"
                  data-wow-duration="1.5s"
                  key={i}
                >
                  <div className="about__item text-center">
                    <div className="about__inner">
                      <div className="about__thumb">
                        <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                      </div>
                      <div className="about__content">
                        <h4>{val.title}</h4>
                        <p>{val.desc}</p>
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

export default AboutSection;
