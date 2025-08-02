import { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import FooterFour from "../component/layout/footerFour";
import HeaderFour from "../component/layout/HeaderFour";

const title = "Membership Levels";
const subtitle =
  "Our metrimony platform is like a breath of fresh air. Clean and trendy design with ready to use features we are sure you will love.";

let MembershipList = [
  {
    daycount: "Silver",
    perMonth: "$15.00 Now And Then $30.00 Per Month.",
    price: "$20.00",
    btnText: "Select Plan",
    faciList: [
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Directory",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Profile",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "Send Private Messages",
      },
      {
        iconName: "fa-solid fa-circle-xmark",
        text: "Add Media To Your Profile",
      },
    ],
  },
  {
    daycount: "Gold",
    perMonth: "$15.00 Now And Then $30.00 Per Month.",
    price: "$30.00",
    btnText: "Select Plan",
    faciList: [
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Directory",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "View Members Profile",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "Send Private Messages",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "Add Media To Your Profile",
      },
    ],
  },
];

let coinsPlan = [
  {
    daycount: "Choose you best coin plan",
    perMonth: "Elevate connections with our premier Best Coin Plan!",
    price: "Free",
    btnText: "Select Plan",
    faciList: [
      {
        iconName: "fa-solid fa-circle-check",
        text: "5 coins $8.99",
        offer: "save 45%",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "30 coins $37.99",
        offer: "best value",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "15 coins $22.99",
        offer: "save 48%",
      },
      {
        iconName: "fa-solid fa-circle-check",
        text: "2 coins $2.99",
        offer: "small plan",
      },
    ],
  },
];

class MembershipPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCoinPlan: null,
    };
  }

  handleSelectPlan = (index) => {
    this.setState({ selectedCoinPlan: index });
  };

  render() {
    const { selectedCoinPlan } = this.state;
    return (
      <Fragment>
        <HeaderFour />

        <div className="membership padding-top padding-bottom">
  <div className="container" style={{maxWidth:'1358px'}}>
    <div className="section__header style-2 text-center">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    <div className="section__wrapper">
              <div className="row g-4 justify-content-center row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
                {coinsPlan.map((val, i) => (
                  <div
                    className={`col ${
                      selectedCoinPlan === i ? "selected-coin-plan" : ""
                    }`}
                    key={i}
                    //    style={{ width: '35%' }}
                    onClick={() => this.handleSelectPlan(i)}
                  >
                    <div className="membership__item">
                      <div className="membership__inner">
                        <div className="membership__head">
                          <h4>{val.daycount}</h4>
                          <p>{val.perMonth}</p>
                        </div>
                        <div className="membership__body">
                          <ul>
                            {val.faciList.map((val, i) => (
                              <li key={i} className="pointer" style={{paddingTop:'21px',paddingBottom:'21px'}}>
                                <i className={val.iconName} ></i>
                                <span className="px-2">{val.text}</span>
                                <span className="px-2">{val.offer}</span>
                                <img
                                  src="https://png.pngtree.com/png-clipart/20220823/original/pngtree-flying-gold-coin-png-png-image_8447452.png"
                                  alt=""
                                  style={{ width: "90px", height: "45px" }}
                                />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="membership__footer">
                          <Link to="/login" className="default-btn reverse">
                            <span>{val.btnText}</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {MembershipList.map((val, i) => (
                  <div className="col" key={i}>
                    <div className="membership__item">
                      <div className="membership__inner">
                        <div className="membership__head">
                          <h4>{val.daycount}</h4>
                          <p>{val.perMonth}</p>
                        </div>
                        <div className="membership__body">
                          <h4>{val.price}</h4>
                          <ul>
                            {val.faciList.map((val, i) => (
                              <li key={i}>
                                <i className={val.iconName}></i>{" "}
                                <span>{val.text}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="membership__footer">
                          <Link to="/login" className="default-btn reverse">
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

<div className="purchase_history_wrap">
  
</div>

</div>

        <FooterFour />
      </Fragment>
    );
  }
}

export default MembershipPage;
