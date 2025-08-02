import { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/story/01.jpg";
import authimg1 from "../../assets/images/story/author/01.jpg";
import img2 from "../../assets/images/story/02.jpg";
import authimg2 from "../../assets/images/story/author/02.jpg";
import img3 from "../../assets/images/story/03.jpg";
import authimg3 from "../../assets/images/story/author/03.jpg";

const title = "marier Success Stories";
const desc =
  "Listen and learn from our community members and find out tips and tricks to meet your love. Join us and be part of a bigger family.";

let StorySectionContentList = [
  {
    imgUrl: img1,
    imgAlt: "Dating Thumb",
    title:
      "Marier brought us together through our shared love for hiking! The platform's smart matching connected us instantly. Now, from conquering trails to conquering life together, Marier truly fosters genuine connections.",
    activity: "Entertainment",
    authorImg: authimg1,
    authorImgAlt: "Dating Thumb",
    authorName: "Jessica & Alex",
    postDate: "May 15, 2023",
  },
  {
    imgUrl: img2,
    imgAlt: "Dating Thumb",
    title:
      "Thanks to Marier's compatibility algorithm, we found each other. From our first coffee to exploring art and travel, Marier sparked a connection that's now painting our life's canvas with beautiful shared moments.",
    activity: "Attraction",
    authorImg: authimg2,
    authorImgAlt: "Dating Thumb",
    authorName: "Emily & Marcus's ",
    postDate: "May 19, 2023",
  },
  {
    imgUrl: img3,
    imgAlt: "Dating Thumb",
    title:
      "Marier initiated our story with a simple 'hello'. As we bonded over volunteering, our relationship grew stronger. Thanks to Marier, we found not just love but also a shared purpose in making a difference.   ",
    activity: "Love Stories",
    authorImg: authimg3,
    authorImgAlt: "Dating Thumb",
    authorName: "Sophie & Ryan's",
    postDate: "May 20, 2023",
  },
];

class StorySection extends Component {
  render() {
    return (
      <div
        className="story bg_img padding-top padding-bottom"
        style={{ backgroundImage: "url(/assets/images/bg-img/02.jpg)" }}
      >
        <div className="container">
          <div
            className="section__header style-2 text-center wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <h2>{title}</h2>
            <p>{desc}</p>
          </div>
          <div
            className="section__wrapper wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="row g-4 justify-content-center row-cols-lg-3 row-cols-sm-2 row-cols-1">
              {StorySectionContentList.map((val, i) => (
                <div className="col" key={i}>
                  <div className="story__item">
                    <div className="story__inner">
                      <div className="story__thumb">
                        <Link to="/dating/blog/User/blogDetails">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </Link>
                        <span className="member__activity member__activity--ofline">
                          {val.activity}
                        </span>
                      </div>
                      <div className="story__content">
                        <Link to="/dating/blog/User/blogDetails">
                          <h4>{val.title}</h4>
                        </Link>
                        <div className="story__content--author">
                          <div className="story__content--thumb">
                            <img
                              src={`${val.authorImg}`}
                              alt={`${val.authorImgAlt}`}
                            />
                          </div>
                          <div className="story__content--content">
                            <h6>{val.authorName}</h6>
                            <p>{val.postDate}</p>
                          </div>
                        </div>
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

export default StorySection;
