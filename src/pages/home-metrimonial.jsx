import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import BannerOne from "../metrimoniul/component/section/banner";
import HomeMembershipPage from "../dating/component/layout/home-membership";
// import { Toaster } from "react-hot-toast";
import HeaderFour from "../metrimoniul/component/layout/HeaderFour";
import FooterFour from "../../src/metrimoniul/component/layout/footerFour";
import MemberSection from "../metrimoniul/component/section/member";
import AboutSection from "../metrimoniul/component/section/about";
import WorkSection from "../metrimoniul/component/section/work";
import Testimonial from "../metrimoniul/component/section/home-testimonial";
import AppSection from "../metrimoniul/component/section/appsection";
import PromotionalOffersScreen from "../metrimoniul/component/section/promotionaloffers";

const HomePageMetri = () => { 
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData && userData.data) {
      const userId = userData.data._id;
      setIsUserLoggedIn(!userId);
    } else {
      setIsUserLoggedIn(false);
    }
  }, []);

  return (
    <Fragment>
      <HeaderFour />
      <BannerOne />
      <PromotionalOffersScreen />
      {isUserLoggedIn ? null : <HomeMembershipPage />}  
      <MemberSection />
      <AboutSection />
      <WorkSection />
      <Testimonial />
      <AppSection />
      <FooterFour />
    </Fragment>
  );
};

export default HomePageMetri;










