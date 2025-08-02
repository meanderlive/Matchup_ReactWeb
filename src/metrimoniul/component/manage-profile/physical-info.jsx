import React, { useState, useEffect } from "react";

const ManageProfilePhysicalInfo = ({ userData, updateUserData, editMode }) => {
    const [height, setHeight] = useState(editMode ? userData.height : "");
    const [weight, setWeight] = useState(editMode ? userData.weight : "");
    const [hairColor, setHairColor] = useState(editMode ? userData.hairColor : "");
    const [eyeColor, setEyeColor] = useState(editMode ? userData.eyeColor : "");
    const [bodyType, setBodyType] = useState(editMode ? userData.bodyType : "");
    const [ethnicity, setEthnicity] = useState(editMode ? userData.ethnicity : "");

    useEffect(() => {
        if (editMode) {
            setHeight(userData.height || "");
            setWeight(userData.weight || "");
            setHairColor(userData.hairColor || "");
            setEyeColor(userData.eyeColor || "");
            setBodyType(userData.bodyType || "");
            setEthnicity(userData.ethnicity || "");
        } else {
            setHeight("");
            setWeight("");
            setHairColor("");
            setEyeColor("");
            setBodyType("");
            setEthnicity("");
        }
    }, [editMode, userData]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUserData = {
            ...userData,
            height: height,
            weight: weight,
            hairColor: hairColor,
            eyeColor: eyeColor,
            bodyType: bodyType,
            ethnicity: ethnicity,
        };

        updateUserData(newUserData);

        setHeight("");
        setWeight("");
        setHairColor("");
        setEyeColor("");
        setBodyType("");
        setEthnicity("");
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
                                        Physical Information
                                    </h4>
                                    <div className="form-group">
                                        <label>Height*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your height"
                                            value={height}
                                            onChange={(e) => setHeight(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Weight*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your weight"
                                            value={weight}
                                            onChange={(e) => setWeight(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Hair Color*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your hair color"
                                            value={hairColor}
                                            onChange={(e) => setHairColor(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Eye Color*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your eye color"
                                            value={eyeColor}
                                            onChange={(e) => setEyeColor(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Body Type*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your body type"
                                            value={bodyType}
                                            onChange={(e) => setBodyType(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Ethnicity*</label>
                                        <input
                                            type="text"
                                            className="my-form-control"
                                            placeholder="Your ethnicity"
                                            value={ethnicity}
                                            onChange={(e) => setEthnicity(e.target.value)}
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

export default ManageProfilePhysicalInfo;
