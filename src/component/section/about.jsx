import { Component } from "react";

const title = "Our Innovative Features";
const subtitle =
  "Discover love effortlessly with LoveLink's innovative features, crafted to spark meaningful connections.";

let AboutContentList = [
  {
    imgUrl: "/assets/images/about/02.jpg",
    imgAlt: "Dating Thumb",
    title: "Matchmaking Tech",
    desc: "Discover your ideal match with advanced algorithms.",
  },
  {
    imgUrl: "/assets/images/about/04.jpg",
    imgAlt: "Dating Thumb",
    title: "Chat Anywhere",
    desc: "Engage seamlessly in lively conversations.",
  },
  {
    imgUrl: "/assets/images/about/03.jpg",
    imgAlt: "Dating Thumb",
    title: "Verified Trust",
    desc: "Trustworthy connections through verified profiles.",
  },
  {
    imgUrl: "/assets/images/about/01.jpg",
    imgAlt: "Dating Thumb",
    title: "Fun Quizzes",
    desc: "Dive deeper into compatibility with fun quizzes.",
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
