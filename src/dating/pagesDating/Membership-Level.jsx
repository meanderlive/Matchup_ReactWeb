import { Component, Fragment } from "react";
import FooterFour from "../../component/layout/footerFour";
import HeaderFour from "../../component/layout/HeaderFour";
// import HeaderTwo from "../component/layout/headertwo";
import PageHeader from "../component/layout/pageheader";
import MembershipPage from "./membership";

class Membershippage extends Component {
  render() {
    return (
      <Fragment>
        <HeaderFour />

        <section className="terms-section padding-bottom padding-top">
          <div className="container">
            <div className="terms-content">
              <div className="terms-header">
                <h4>Safety &amp; Security</h4>
                <p>
                  <span className="theme-color fw-bold">Last Updated:</span>{" "}
                  December 1, 2023
                </p>
              </div>
              <div className="terms-text">
                <p className="mb-4">
                  At Matchup, we prioritize the safety and security of our
                  users, creating an environment where everyone can explore
                  connections with confidence. Our commitment to your well-being
                  is reflected in the following safety measures:
                </p>
                <ol>
                  <li>
                    <h5> Profile Verification</h5>
                    <p>
                      To ensure the authenticity of our users, we encourage
                      everyone to complete profile verification. Verified
                      profiles indicate that a user has taken extra steps to
                      confirm their identity, promoting a trustworthy community.
                    </p>
                  </li>
                  <li>
                    <h5> Privacy Controls</h5>
                    <p>
                      We understand the importance of privacy. With Matchup, you
                      have control over your personal information. Adjust your
                      privacy settings to share only what you're comfortable
                      with, and our advanced privacy features ensure that your
                      data remains secure.
                    </p>
                  </li>
                  <li>
                    <h5> Safe Messaging</h5>
                    <p>
                      Our messaging platform is designed with your safety in
                      mind. Report any suspicious behavior, and our dedicated
                      support team will promptly investigate. We also provide
                      in-app tools to block and report users who violate our
                      community guidelines.
                    </p>
                  </li>
                  <li>
                    <h5>Location Protection</h5>
                    <p>
                      Your location is sensitive information. Our app allows you
                      to share your location selectively, ensuring that you are
                      in control of who can see where you are.
                    </p>
                  </li>
                  <li>
                    <h5> 24/7 Support Team</h5>
                    <p>
                      To ensure the authenticity of our users, we encourage
                      everyone to complete profile verification. Verified
                      profiles indicate that a user has taken extra steps to
                      confirm their identity, promoting a trustworthy community.
                    </p>
                  </li>
                  <li>
                    <h5>Educational Resources</h5>
                    <p>
                      Stay informed about online dating safety with our
                      educational resources. We provide tips on recognizing and
                      avoiding scams, understanding consent, and practicing safe
                      online communication.
                    </p>
                  </li>
                  <li>
                    <h5>Community Guidelines</h5>
                    <p>
                      Our community guidelines set clear expectations for
                      behavior within our platform. By adhering to these
                      guidelines, you contribute to the creation of a respectful
                      and secure dating space for everyone. At Matchup, we
                      believe that building meaningful connections should be an
                      enriching and secure experience. Together, we can create a
                      community that values safety, respect, and genuine
                      connections.
                    </p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <FooterFour />
      </Fragment>
    );
  }
}

export default Membershippage;
