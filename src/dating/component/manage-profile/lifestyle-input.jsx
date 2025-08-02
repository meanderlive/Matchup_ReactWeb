import React, { useState, useEffect } from "react";

const ManageProfileLifeStyle = ({ userData, updateUserData, editMode }) => {
    const [interest, setInterest] = useState(editMode ? userData.interest : "");
    const [vocations, setVocations] = useState(editMode ? userData.vocations : "");
    const [relationType, setRelationType] = useState(editMode ? userData.relationType : "");
    const [smoking, setSmoking] = useState(editMode ? userData.smoking : "");
    const [language, setLanguage] = useState(editMode ? userData.language : "");

    useEffect(() => {
        if (editMode) {
            setInterest(userData.interest || "");
            setVocations(userData.vocations || "");
            setRelationType(userData.relationType || "");
            setSmoking(userData.smoking || "");
            setLanguage(userData.language || "");
        } else {
            setInterest("");
            setVocations("");
            setRelationType("");
            setSmoking("");
            setLanguage("");
        }
    }, [editMode, userData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserData = {
            ...userData,
            interest: interest,
            vocations: vocations,
            relationType: relationType,
            smoking: smoking,
            language: language
        };

        updateUserData(newUserData);
        
        setInterest("");
        setVocations("");
        setRelationType("");
        setSmoking("");
        setLanguage("");
    };

    return (
        <section className="log-reg log-reg-manage-profile">
            <div className="container">
                <div className="row manage-profile-input-bg">
                    <div className="col-lg-12 ps-lg-5">
                        <div className="log-reg-inner input-height-basic">
                            <div className="main-content">
                                <form onSubmit={handleSubmit}>
                                    <h4 className="content-title manage-profile-input-top-title">
                                        Lifestyle
                                    </h4>
                                    <div className="form-group">
                                        <label>Interests*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Dogs, Cats"
                                            value={interest}
                                            onChange={(e) => setInterest(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Vocations*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your vocations"
                                            value={vocations}
                                            onChange={(e) => setVocations(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Relation Type*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your relation type"
                                            value={relationType}
                                            onChange={(e) => setRelationType(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Smoking*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your smoking habit"
                                            value={smoking}
                                            onChange={(e) => setSmoking(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Language*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your language"
                                            value={language}
                                            onChange={(e) => setLanguage(e.target.value)}
                                        />
                                    </div>
                                    <button type="submit" className="default-btn reverse">
                                        <span>Update profile</span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageProfileLifeStyle;
