import { Component } from "react";
import img1 from "../../assets/images/instragram/01.jpg";
import img2 from "../../assets/images/instragram/02.jpg";
import img3 from "../../assets/images/instragram/03.jpg";
import img4 from "../../assets/images/instragram/04.jpg";
import img5 from "../../assets/images/instragram/05.jpg";
import img6 from "../../assets/images/instragram/06.jpg";
import img7 from "../../assets/images/instragram/07.jpg";
import img8 from "../../assets/images/instragram/08.jpg";
import img9 from "../../assets/images/instragram/09.jpg";

const title = "Instagram";

let InstagramList = [
  {
    imgUrl: img1,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img2,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img3,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img4,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img5,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img6,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img7,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img8,
    imgAlt: "Instragrm thumb",
  },
  {
    imgUrl: img9,
    imgAlt: "Instragrm thumb",
  },
];

class Instagram extends Component {
  render() {
    return (
      <div className="widget widget-instagram">
        <div className="widget-header">
          <h5>{title}</h5>
        </div>
        <ul className="lab-ul widget-wrapper d-flex flex-wrap justify-content-center">
          {InstagramList.map((val, i) => (
            <li key={i}>
              <a href={`${val.imgUrl}`} target="_blank">
                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Instagram;
