import { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/images/member/home2/01.jpg";
import img2 from "../../assets/images/member/home2/02.jpg";
import img3 from "../../assets/images/member/home2/03.jpg";
import img4 from "../../assets/images/member/home2/04.jpg";
import img5 from "../../assets/images/member/home2/05.jpg";
import img6 from "../../assets/images/member/home2/06.jpg";
import img7 from "../../assets/images/member/home2/07.jpg";
import img8 from "../../assets/images/member/home2/08.jpg";
import img9 from "../../assets/images/member/home2/09.jpg";
import img10 from "../../assets/images/member/home2/10.jpg";

const title = "Group";

let ActiveGroupListOne = [
  {
    imgUrl: img1,
    imgAlt: "Dating Thumb",
    title: "Somrat Islam aaa",
    activety: "2 years ago",
  },
  {
    imgUrl: img2,
    imgAlt: "Dating Thumb",
    title: "Rasmika Rasmi",
    activety: "2 years ago",
  },
  {
    imgUrl: img3,
    imgAlt: "Dating Thumb",
    title: "Sajahan Sagor",
    activety: "2 years ago",
  },
  {
    imgUrl: img4,
    imgAlt: "Dating Thumb",
    title: "Sabrina Kabir",
    activety: "2 years ago",
  },
  {
    imgUrl: img5,
    imgAlt: "Dating Thumb",
    title: "Rassel Hossin",
    activety: "2 years ago",
  },
];

let ActiveGroupListTwo = [
  {
    imgUrl: img6,
    imgAlt: "Dating Thumb",
    title: "Angel Mili",
    activety: "2 years ago",
  },
  {
    imgUrl: img7,
    imgAlt: "Dating Thumb",
    title: "Marina Holzman",
    activety: "2 years ago",
  },
  {
    imgUrl: img8,
    imgAlt: "Dating Thumb",
    title: "Umme Nishat",
    activety: "2 years ago",
  },
  {
    imgUrl: img9,
    imgAlt: "Dating Thumb",
    title: "Juliane Bieber",
    activety: "2 years ago",
  },
  {
    imgUrl: img10,
    imgAlt: "Dating Thumb",
    title: "Zinat Zaara",
    activety: "2 years ago",
  },
];

class ActiveGroup extends Component {
  render() {
    return (
      <div className="active-group bg-white pt-4">
        <div className="modal-header ">
          <h6>{title}</h6>
          <ul className="nav nav-tabs" id="myTab2" role="tablist">
            <li className="nav-item" role="presentation">
              <button
                className="nav-link active"
                id="aNewest-tab"
                data-bs-toggle="tab"
                data-bs-target="#aNewest"
                type="button"
                role="tab"
                aria-controls="aNewest"
                aria-selected="true"
              >
                Newest{" "}
              </button>
            </li>
            <li className="nav-item" role="presentation">
              <button
                className="nav-link"
                id="aPopular-tab"
                data-bs-toggle="tab"
                data-bs-target="#aPopular"
                type="button"
                role="tab"
                aria-controls="aPopular"
                aria-selected="false"
              >
                Popular
              </button>
            </li>
          </ul>
        </div>
        <div className="modal-body group__bottom--body">
          <div className="tab-content" id="myTabContent2">
            <div
              className="tab-pane fade show active"
              id="aNewest"
              role="tabpanel"
              aria-labelledby="aNewest-tab"
            >
              <ul>
                {ActiveGroupListOne.map((val, i) => (
                  <li key={i}>
                    <div className="top">
                      <div className="left member--style2">
                        <div className="member__thumb">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                      </div>
                      <div className="right">
                        <Link to="/group-single">
                          <h6>{val.title}</h6>
                        </Link>
                        <span>{val.activety}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="tab-pane fade"
              id="aPopular"
              role="tabpanel"
              aria-labelledby="aPopular-tab"
            >
              <ul>
                {ActiveGroupListTwo.map((val, i) => (
                  <li key={i}>
                    <div className="top">
                      <div className="left member--style2">
                        <div className="member__thumb">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                      </div>
                      <div className="right">
                        <Link to="/group-single">
                          <h6>{val.title}</h6>
                        </Link>
                        <span>{val.activety}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ActiveGroup;
