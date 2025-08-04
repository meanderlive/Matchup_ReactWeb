import React, { useCallback, useEffect } from "react";
import HeaderFour from "../../component/layout/HeaderFour";
import FooterFour from "../../component/layout/footerFour";
import { useDispatch, useSelector } from "react-redux";
import { getAllPrivacyPolicy } from "../store/slice/commonSlice";

const PrivacyPolicy = () => {
  const datingId = localStorage.getItem("userData");
  const userData = JSON.parse(datingId);
  const modeaaaa = "659436bcacc570d6b14edf41";

  const modeId = userData !== null ? userData?.data?.data?.mode : modeaaaa;
  const dispatch = useDispatch();
  const getPrivacyPolicy = useSelector(
    (state) => state.termAndConditionSlice?.PrivacyPolicy?.data
  );

  const getTandCondition = useCallback(() => {
    dispatch(getAllPrivacyPolicy(modeId));
  }, [dispatch, modeId]);

  useEffect(() => {
    getTandCondition();
  }, [getTandCondition]);

  return (
    <>
      <HeaderFour />
      <section className="terms-section padding-bottom padding-top">
        <div className="container">
          <div className="terms-content">
            <div className="terms-header">
              <h4>Privacy And Policy </h4>
              <p>
                <span className="theme-color fw-bold">Last Updated:</span>{" "}
                December 1, 2023
              </p>
            </div>
            <div className="terms-text">
              <p className="mb-4">
                Welcome to Matchup, a dating app connecting individuals looking
                for meaningful relationships. Before using our services, please
                carefully read and agree to the following Privacy And Policy.
              </p>
              <ol>
                {getPrivacyPolicy ? (
                  getPrivacyPolicy.map((term, index) => (
                    <li key={index}>
                      <p
                        dangerouslySetInnerHTML={{ __html: term?.description }}
                      ></p>
                    </li>
                  ))
                ) : (
                  <div className="loader"></div>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>
      <FooterFour />
    </>
  );
};

export default PrivacyPolicy;
