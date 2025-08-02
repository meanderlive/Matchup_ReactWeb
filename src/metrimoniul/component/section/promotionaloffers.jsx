import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const promotions = [
  {
    title: 'Premium Membership Offer',
    description: 'Get a 6-month premium membership at 30% off and access exclusive features!',
    discount: '30% off',
    image: 'https://via.placeholder.com/300x200?text=Premium+Membership'
  },
  {
    title: 'Profile Boost Deal',
    description: 'Boost your profile visibility by 3x and connect with more matches instantly!',
    discount: 'Boost Now',
    image: 'https://via.placeholder.com/300x200?text=Profile+Boost'
  },
  {
    title: 'Exclusive Matchmaking Discount',
    description: 'Sign up for personalized matchmaking services with a 20% discount!',
    discount: '20% off',
    image: 'https://via.placeholder.com/300x200?text=Matchmaking+Discount'
  }

];

const PromotionalOffersScreen = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Current Promotions & Offers</h1>
      <div className="row">
        {promotions.map((promo, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card">
             
              <img src={promo.image} className="card-img-top" alt={promo.title} />
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
