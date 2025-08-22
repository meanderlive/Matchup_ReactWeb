import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Promo1 from "../../assets/images/allmedia/08.jpg";
import Promo2 from "../../assets/images/allmedia/09.jpg";
import Promo3 from "../../assets/images/allmedia/10.jpg";

const promotions = [
  {
    title: "Premium Membership Offer",
    description:
      "Get a 6-month premium membership at 30% off and access exclusive features!",
    discount: "30% off",
    image: Promo1,
  },
  {
    title: "Profile Boost Deal",
    description:
      "Boost your profile visibility by 3x and connect with more matches instantly!",
    discount: "Boost Now",
    image: Promo2,
  },
  {
    title: "Exclusive Matchmaking Discount",
    description:
      "Sign up for personalized matchmaking services with a 20% discount!",
    discount: "20% off",
    image: Promo3,
  },
];

const PromotionalOffersScreen = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Current Promotions & Offers</h1>
      <div className="row">
        {promotions.map((promo, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
              <img
                src={promo.image}
                className="card-img-top"
                alt={promo.title}
              />
              <div className="card-body">
                <h5 className="card-title">{promo.title}</h5>
                <p className="card-text">{promo.description}</p>
                <span className="badge default-btn">{promo.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromotionalOffersScreen;
