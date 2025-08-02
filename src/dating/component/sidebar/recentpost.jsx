import { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/blog/p-post/01.jpg";
import img2 from "../../assets/images/blog/p-post/02.jpg";
import img3 from "../../assets/images/blog/p-post/03.jpg";
import img4 from "../../assets/images/blog/p-post/03.jpg";

const title = "Recent Post";

let RecentPostList = [
  {
    imgUrl: img1,
    imgAlt: "recent post thumb",
    title: "Poor People’s Campaign Our Resources",
    pubDate: "2 April 2023",
  },
  {
    imgUrl: img2,
    imgAlt: "recent post thumb",
    title: "Boosting Social For NGO And Charities",
    pubDate: "25 May 2023",
  },
  {
    imgUrl: img3,
    imgAlt: "recent post thumb",
    title: "Poor People’s Campaign Our Resources",
    pubDate: "10 May 2023",
  },
  {
    imgUrl: img4,
    imgAlt: "recent post thumb",
    title: "Boosting Social For NGO And Charities",
    pubDate: "15 June 2023",
  },
];

class RecentPost extends Component {
  render() {
    return (
      <div className="widget widget-post">
        <div className="widget-header">
          <h5>{title}</h5>
        </div>
        <ul className="lab-ul widget-wrapper">
          {RecentPostList.map((val, i) => (
            <li className="d-flex flex-wrap justify-content-between" key={i}>
              <div className="post-thumb">
                <Link to="/dating/blog-single">
                  <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                </Link>
              </div>
              <div className="post-content ps-4">
                <Link to="/dating/blog-single">
                  <h6>{val.title}</h6>
                </Link>
                <p>{val.pubDate}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default RecentPost;
