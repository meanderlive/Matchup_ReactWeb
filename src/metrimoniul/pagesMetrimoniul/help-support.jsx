import React from "react";
import { Fragment } from "react";
import FooterFour from "../component/layout/footerFour";
import HeaderFour from "../component/layout/HeaderFour";

const HelpAndSuport = () => {
  return (
    <Fragment>
      <HeaderFour />
      <section className="terms-section padding-bottom padding-top">
        <div className="container">
          <div className="terms-content">
            <div className="terms-header">
              <h3>Help & Support </h3>
              <p>
                <span className="theme-color fw-bold">Last Updated:</span>{" "}
                December 1, 2022
              </p>
            </div>
            <div className="help-support-intro">
              <p>
                Welcome to our Help & Support page. Building meaningful
                connections is our priority, and we're here to support you every
                step of the way. Explore the resources below for assistance and
                guidance.
              </p>
            </div>
            <div className="help-support-profile">
              <h5>Creating a Great Profile</h5>
              <p>
                Make the best impression with tips on crafting an attractive
                dating profile:
              </p>
              {/* Add profile creation tips here */}
            </div>
            <div className="help-support-messaging">
              <h5>Effective Messaging</h5>
              <p>
                Learn how to initiate engaging conversations and foster
                connections through messaging:
              </p>
              {/* Add messaging tips here */}
            </div>
            <div className="help-support-safety">
              <h5>Online Safety Tips</h5>
              <p>
                Protect yourself and others with our online safety guidelines:
              </p>
              {/* Add safety tips here */}
            </div>
            <div className="help-support-contact">
              <h5>Contact Our Support Team</h5>
              <p>
                If you encounter any issues or have questions not covered here,
                our support team is ready to assist you. Reach out, and we'll
                get back to you promptly!
              </p>
              <button>
                <a href="mailto:support@example.com">Contact Us</a>
              </button>
              <p>
                For general inquiries, you can also reach us via email at:{" "}
                <a href="mailto:info@example.com">info@example.com</a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <FooterFour />
    </Fragment>
  );
};

export default HelpAndSuport;
