import React, { Fragment, useEffect, useState } from "react";
import FooterThree from "../component/layout/footerthree";
import PageHeader from "../component/layout/pageheader";
import AboutSection from "../component/section/about";
import AboutSectionSix from "../component/section/aboutsix";
import StorySection from "../component/section/story";
import WorkSectionTwo from "../component/section/worktwo";
import AppSectionTwo from "../component/section/appsectiontwo";
import HeaderFour from "../../component/layout/HeaderFour";
import NotificationPage from "../component/popUps/notification";
import FooterFour from "../../component/layout/footerFour";

const AboutPage = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  // useEffect(() => {
  //   const timeoutId = setTimeout(() => {
  //     setShowNotifications(true);
  //   }, 2000);

  //   return () => clearTimeout(timeoutId);
  // }, []);

  return (
    <Fragment>
      <HeaderFour />
      {/* <PageHeader
        title={"About Our Matchup"} curPage={"About Us"}
      /> */}
      <AboutSectionSix />
      <StorySection />
      <AboutSection />
      <WorkSectionTwo />
      <AppSectionTwo />
      {/* {showNotifications && <NotificationPage />} */}
      {/* <FooterThree /> */}
      <FooterFour />
    </Fragment>
  );
};

export default AboutPage;
