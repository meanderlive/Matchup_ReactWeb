import { Component } from "react";

const title = "How Does it Work";

let WorkSectionContentListOne = [
  {
    imgUrl: "/assets/images/work/05.png",
    imgAlt: "Dating Thumb",
    title: "Partner Search",
    desc: "Our intuitive search functionality simplifies finding that special someone, ensuring a seamless experience as you navigate through numerous profiles to uncover the perfect match.",
  },
];
let WorkSectionContentListTwo = [
  {
    imgUrl: "/assets/images/work/06.png",
    imgAlt: "Dating Thumb",
    title: "100% Matches",
    desc: "Experience the satisfaction of discovering individuals who align perfectly with your criteria. That meets your preferences, fostering a higher likelihood of compatibility and connection.",
  },
];
let WorkSectionContentListThree = [
  {
    imgUrl: "/assets/images/work/07.png",
    imgAlt: "Dating Thumb",
    title: "Find Your Partner",
    desc: "Our platform's user-centric design simplifies the search process, making it easier to find and connect with those who resonate with you on various levels.",
  },
];
let WorkSectionContentListFour = [
  {
    imgUrl: "/assets/images/work/08.png",
    imgAlt: "Dating Thumb",
    title: "Profile Viewing",
    desc: "Our interface prioritizes user experience, ensuring smooth navigation and access to comprehensive profiles for an informed matchmaking journey.",
  },
];

class WorkSection extends Component {
  render() {
    return (
      <div
        className="work padding-top padding-bottom bg_img"
        style={{ backgroundImage: "url(//assets/images/bg-img/01.jpg)" }}
      >
        <div className="container">
          <div
            className="section__header text-center wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <h2>{title}​</h2>
          </div>
          <div
            className="section__wrapper wow fadeInUp"
            data-wow-duration="1.5s"
          >
            <div className="d-xl-flex align-items-start work__area">
              <div
                className="nav flex-xl-column nav-pills me-xl-4 work__tablist"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  className="nav-link"
                  id="work__tab1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#work__tab1"
                  type="button"
                  role="tab"
                  aria-controls="work__tab1"
                  aria-selected="true"
                >
                  <img
                    src="/assets/images/work/01.png"
                    alt="dating thumb"
                    className="me-3"
                  />
                  <span>Search Your Partner</span>
                </button>
                <button
                  className="nav-link active"
                  id="work__tab2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#work__tab2"
                  type="button"
                  role="tab"
                  aria-controls="work__tab2"
                  aria-selected="false"
                >
                  <img
                    src="/assets/images/work/02.png"
                    alt="dating thumb"
                    className="me-3"
                  />
                  <span>100% Match People</span>
                </button>
                <button
                  className="nav-link"
                  id="work__tab3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#work__tab3"
                  type="button"
                  role="tab"
                  aria-controls="work__tab3"
                  aria-selected="false"
                >
                  <img
                    src="/assets/images/work/03.png"
                    alt="dating thumb"
                    className="me-3"
                  />
                  <span>Find Out Partner</span>
                </button>
                <button
                  className="nav-link"
                  id="work__tab4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#work__tab4"
                  type="button"
                  role="tab"
                  aria-controls="work__tab4"
                  aria-selected="false"
                >
                  <img
                    src="/assets/images/work/04.png"
                    alt="dating thumb"
                    className="me-3"
                  />
                  <span>Live The Story</span>
                </button>
              </div>
              <div
                className="tab-content work__tabcontent"
                id="v-pills-tabContent"
              >
                <div
                  className="tab-pane fade"
                  id="work__tab1"
                  role="tabpanel"
                  aria-labelledby="work__tab1-tab"
                >
                  {WorkSectionContentListOne.map((val, i) => (
                    <div className="work__item" key={i}>
                      <div className="work__inner">
                        <div className="work__thumb">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="work__content">
                          <h3>{val.title}</h3>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="tab-pane fade show active"
                  id="work__tab2"
                  role="tabpanel"
                  aria-labelledby="work__tab2-tab"
                >
                  {WorkSectionContentListTwo.map((val, i) => (
                    <div className="work__item" key={i}>
                      <div className="work__inner">
                        <div className="work__thumb">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="work__content">
                          <h3>{val.title}</h3>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="work__tab3"
                  role="tabpanel"
                  aria-labelledby="work__tab3-tab"
                >
                  {WorkSectionContentListThree.map((val, i) => (
                    <div className="work__item" key={i}>
                      <div className="work__inner">
                        <div className="work__thumb">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="work__content">
                          <h3>{val.title}</h3>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div
                  className="tab-pane fade"
                  id="work__tab4"
                  role="tabpanel"
                  aria-labelledby="work__tab4-tab"
                >
                  {WorkSectionContentListFour.map((val, i) => (
                    <div className="work__item" key={i}>
                      <div className="work__inner">
                        <div className="work__thumb">
                          <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} />
                        </div>
                        <div className="work__content">
                          <h3>{val.title}</h3>
                          <p>{val.desc}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WorkSection;
