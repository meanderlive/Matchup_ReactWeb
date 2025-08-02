import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import AboutSection from "../component/section/about";
import AppSection from "../component/section/appsection";
import BannerOne from "../component/section/banner";
import MemberSection from "../component/section/member";
import WorkSection from "../component/section/work";
import WorkSectionTwo from "../component/section/worktwo";
import HeaderFour from "../component/layout/HeaderFour";
import FooterFour from "../component/layout/footerFour";
import HomeMembershipPage from "../dating/component/layout/home-membership";
import Testimonial from "../dating/pagesDating/testmonial";
import { Toaster } from "react-hot-toast";
import {
  getUserProfileAsync,
  uploadProfilePictureAsync,
} from "../dating/store/slice/profileSlice";
const HomePage = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const userData = JSON.parse(localStorage.getItem("userData"));
      if (userData && userData.data) {
        const userId = userData.data._id;
        setIsUserLoggedIn(!userId);
        // Dispatch getUserProfileAsync after checking user data
        try {
          await dispatch(getUserProfileAsync());
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      } else {
        setIsUserLoggedIn(false);
      }
    };
  
    getUserData();
  }, [dispatch]);
  

  return (
    <Fragment>
      <HeaderFour />
      <BannerOne />
      {isUserLoggedIn ? null : <HomeMembershipPage />}  
      <MemberSection />

      <AboutSection />
      <WorkSection />
      <WorkSectionTwo />
      <Testimonial/>
      <AppSection />
      <FooterFour />
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "",
          style: {},
        }}
        />
    </Fragment>
  );
};

export default HomePage;










